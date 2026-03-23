import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const OUT = './reference';
const SCREENSHOTS = `${OUT}/screenshots`;
const ASSETS = `${OUT}/assets`;
const VIEWPORT = { width: 1280, height: 720 };

fs.mkdirSync(SCREENSHOTS, { recursive: true });
fs.mkdirSync(`${ASSETS}/fonts`, { recursive: true });
fs.mkdirSync(`${ASSETS}/images`, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) return resolve();
    const mod = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (e) => { fs.unlinkSync(dest); reject(e); });
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT });

  console.log('Navigating to fin.ai...');
  await page.goto('https://fin.ai/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000); // let animations settle

  // 1. Full page screenshot
  console.log('Taking full-page screenshot...');
  await page.screenshot({ path: `${SCREENSHOTS}/full-page.png`, fullPage: true });

  // 2. Section-by-section screenshots (scroll through the page)
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = VIEWPORT.height;
  let sectionIndex = 0;

  for (let scrollY = 0; scrollY < totalHeight; scrollY += viewportHeight) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `${SCREENSHOTS}/section-${String(sectionIndex).padStart(2, '0')}.png`,
      clip: { x: 0, y: 0, width: VIEWPORT.width, height: viewportHeight }
    });
    sectionIndex++;
  }
  console.log(`Captured ${sectionIndex} viewport sections`);

  // 3. Scroll back to top for DOM capture
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // 4. DOM snapshot
  console.log('Capturing DOM...');
  const dom = await page.evaluate(() => document.documentElement.outerHTML);
  fs.writeFileSync(`${OUT}/dom.html`, dom);

  // 5. Computed styles for key elements
  console.log('Capturing computed styles...');
  const styles = await page.evaluate(() => {
    const selectors = [
      'nav', 'header', 'main', 'footer', 'section',
      'h1', 'h2', 'h3', 'p', 'a', 'button',
      '[class*="hero"]', '[class*="nav"]', '[class*="footer"]',
      '[class*="card"]', '[class*="grid"]', '[class*="container"]'
    ];
    const results = {};
    for (const sel of selectors) {
      const els = document.querySelectorAll(sel);
      const first = els[0];
      if (!first) continue;
      const cs = window.getComputedStyle(first);
      results[sel] = {
        count: els.length,
        sample: {
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          padding: cs.padding,
          margin: cs.margin,
          display: cs.display,
          gap: cs.gap,
          borderRadius: cs.borderRadius,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          maxWidth: cs.maxWidth,
        }
      };
    }
    return results;
  });
  fs.writeFileSync(`${OUT}/computed-styles.json`, JSON.stringify(styles, null, 2));

  // 6. Extract font URLs
  console.log('Extracting fonts...');
  const fontUrls = await page.evaluate(() => {
    const urls = new Set();
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule instanceof CSSFontFaceRule) {
            const src = rule.style.getPropertyValue('src');
            const matches = src.match(/url\(["']?([^"')]+)["']?\)/g);
            if (matches) {
              matches.forEach(m => {
                const url = m.replace(/url\(["']?/, '').replace(/["']?\)/, '');
                if (url.startsWith('http')) urls.add(url);
              });
            }
          }
        }
      } catch (e) { /* cross-origin */ }
    }
    return [...urls];
  });

  for (const url of fontUrls) {
    const name = path.basename(new URL(url).pathname);
    try {
      await download(url, `${ASSETS}/fonts/${name}`);
      console.log(`  Font: ${name}`);
    } catch (e) { console.log(`  Font skip: ${name}`); }
  }

  // 7. Extract image/SVG URLs
  console.log('Extracting images...');
  const imageUrls = await page.evaluate(() => {
    const urls = new Set();
    document.querySelectorAll('img').forEach(img => {
      if (img.src && img.src.startsWith('http')) urls.add(img.src);
    });
    document.querySelectorAll('svg').forEach((svg, i) => {
      // Store inline SVGs as data
    });
    // CSS background images
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const matches = bg.match(/url\(["']?([^"')]+)["']?\)/g);
        if (matches) {
          matches.forEach(m => {
            const url = m.replace(/url\(["']?/, '').replace(/["']?\)/, '');
            if (url.startsWith('http')) urls.add(url);
          });
        }
      }
    });
    return [...urls];
  });

  for (const url of imageUrls) {
    const urlObj = new URL(url);
    const name = path.basename(urlObj.pathname) || 'image.png';
    const safeName = name.replace(/[^a-zA-Z0-9._-]/g, '_');
    try {
      await download(url, `${ASSETS}/images/${safeName}`);
      console.log(`  Image: ${safeName}`);
    } catch (e) { console.log(`  Image skip: ${safeName}`); }
  }

  // 8. Extract inline SVGs
  console.log('Extracting inline SVGs...');
  const svgs = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('svg').forEach((svg, i) => {
      results.push({ index: i, html: svg.outerHTML.substring(0, 5000) });
    });
    return results;
  });
  fs.writeFileSync(`${OUT}/inline-svgs.json`, JSON.stringify(svgs, null, 2));

  // 9. Extract all CSS text
  console.log('Extracting CSS...');
  const cssTexts = await page.evaluate(() => {
    const texts = [];
    for (const sheet of document.styleSheets) {
      try {
        let text = '';
        for (const rule of sheet.cssRules) {
          text += rule.cssText + '\n';
        }
        texts.push({ href: sheet.href, text: text.substring(0, 100000) });
      } catch (e) {
        if (sheet.href) texts.push({ href: sheet.href, note: 'cross-origin' });
      }
    }
    return texts;
  });
  fs.writeFileSync(`${OUT}/stylesheets.json`, JSON.stringify(cssTexts, null, 2));

  // 10. Accessibility tree
  console.log('Capturing accessibility tree...');
  const a11y = await page.accessibility.snapshot();
  fs.writeFileSync(`${OUT}/accessibility-tree.json`, JSON.stringify(a11y, null, 2));

  await browser.close();
  console.log('\nCapture complete! Reference data saved to ./reference/');
}

main().catch(console.error);
