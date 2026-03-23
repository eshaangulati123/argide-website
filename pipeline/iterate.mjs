import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!API_KEY) { console.error('Set GOOGLE_GENERATIVE_AI_API_KEY'); process.exit(1); }

const MODEL = 'gemini-3.1-pro-preview';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const VIEWPORT = { width: 1280, height: 720 };
const REF_DIR = './reference/screenshots';
const DIFF_DIR = './diffs';
const CLONE_URL = 'http://localhost:5173';
const MAX_ITERATIONS = 10;

fs.mkdirSync(DIFF_DIR, { recursive: true });
fs.mkdirSync(`${DIFF_DIR}/clone`, { recursive: true });

async function readImageCompressed(filePath) {
  const buf = await sharp(filePath)
    .resize(640, 360, { fit: 'fill' })
    .jpeg({ quality: 60 })
    .toBuffer();
  return { inlineData: { data: buf.toString('base64'), mimeType: 'image/jpeg' } };
}

async function normalizeToRawPNG(filePath) {
  const buf = await sharp(filePath).resize(VIEWPORT.width, VIEWPORT.height, { fit: 'fill' }).png().toBuffer();
  return PNG.sync.read(buf);
}

async function screenshotClone(page) {
  const screenshots = [];
  await page.goto(CLONE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  let idx = 0;

  for (let scrollY = 0; scrollY < totalHeight; scrollY += VIEWPORT.height) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(300);
    const outPath = `${DIFF_DIR}/clone/section-${String(idx).padStart(2, '0')}.png`;
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height } });
    screenshots.push(outPath);
    idx++;
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DIFF_DIR}/clone/full-page.png`, fullPage: true });

  return screenshots;
}

async function computeDiffs(cloneScreenshots) {
  const refFiles = fs.readdirSync(REF_DIR).filter(f => f.startsWith('section-')).sort();
  const results = [];
  let totalPixels = 0;
  let totalDiff = 0;

  const pairsCount = Math.min(cloneScreenshots.length, refFiles.length);

  for (let i = 0; i < pairsCount; i++) {
    const refPath = path.join(REF_DIR, refFiles[i]);
    const clonePath = cloneScreenshots[i];

    const refImg = await normalizeToRawPNG(refPath);
    const cloneImg = await normalizeToRawPNG(clonePath);

    const { width, height } = refImg;
    const diffPng = new PNG({ width, height });

    const numDiffPixels = pixelmatch(refImg.data, cloneImg.data, diffPng.data, width, height, {
      threshold: 0.1,
      alpha: 0.3,
      diffColor: [255, 0, 0],
      diffColorAlt: [0, 255, 0],
    });

    const diffPath = `${DIFF_DIR}/diff-section-${String(i).padStart(2, '0')}.png`;
    fs.writeFileSync(diffPath, PNG.sync.write(diffPng));

    const totalPx = width * height;
    const similarity = 1 - (numDiffPixels / totalPx);
    totalPixels += totalPx;
    totalDiff += numDiffPixels;

    results.push({ section: i, similarity: similarity.toFixed(4), diffPixels: numDiffPixels, totalPixels: totalPx, diffPath, refPath, clonePath });
    console.log(`  Section ${String(i).padStart(2, '0')}: similarity=${(similarity * 100).toFixed(1)}%`);
  }

  const avgSimilarity = 1 - (totalDiff / totalPixels);
  return { results, avgSimilarity, pairsCount };
}

async function callGemini(parts) {
  const body = {
    contents: [{ role: 'user', parts }],
    generationConfig: { maxOutputTokens: 65536 },
  };

  const jsonBody = JSON.stringify(body);
  console.log(`  Calling Gemini API (payload: ${Math.round(jsonBody.length/1024)}KB)...`);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 600000); // 10 min timeout
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonBody,
    signal: controller.signal,
  });
  clearTimeout(timeoutId);

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API ${res.status}: ${err.substring(0, 500)}`);
  }

  const json = await res.json();
  if (!json.candidates || !json.candidates[0]?.content?.parts) {
    throw new Error(`Unexpected response: ${JSON.stringify(json).substring(0, 500)}`);
  }
  return json.candidates[0].content.parts.map(p => p.text || '').join('');
}

async function askGeminiForFixes(diffResults, currentJsx, currentCss, iteration) {
  const sorted = [...diffResults.results].sort((a, b) => parseFloat(a.similarity) - parseFloat(b.similarity));
  const worstSections = sorted.slice(0, 2);

  const parts = [];

  parts.push({
    text: `You are iterating on a pixel-perfect clone of fin.ai. Iteration ${iteration}, current avg similarity: ${(diffResults.avgSimilarity * 100).toFixed(1)}%.

SECTION SCORES:
${diffResults.results.map(r => `  Section ${r.section}: ${(parseFloat(r.similarity) * 100).toFixed(1)}%`).join('\n')}

I'm showing the 3 worst sections: reference (target), clone (current), diff (red=wrong).
Fix the biggest visual issues. Focus on layout, colors, spacing, backgrounds, typography.

RULES:
- Output COMPLETE updated App.jsx and App.css files
- Do NOT embed screenshots or use dangerouslySetInnerHTML
- Do NOT break sections that already score well
- Clean trailing // comments

CURRENT App.jsx:
\`\`\`jsx
${currentJsx}
\`\`\`

CURRENT App.css:
\`\`\`css
${currentCss}
\`\`\`

Worst sections:`
  });

  for (const section of worstSections) {
    parts.push({ text: `\nSection ${section.section} (${(parseFloat(section.similarity) * 100).toFixed(1)}%) — Reference:` });
    parts.push(await readImageCompressed(section.refPath));
    parts.push({ text: `Clone:` });
    parts.push(await readImageCompressed(section.clonePath));
    parts.push({ text: `Diff (red=different):` });
    parts.push(await readImageCompressed(section.diffPath));
  }

  parts.push({
    text: `Output the COMPLETE files:

===APP.JSX===
(full file)
===END APP.JSX===

===APP.CSS===
(full file)
===END APP.CSS===`
  });

  return callGemini(parts);
}

function parseResponse(response) {
  let jsx = null, css = null;

  const jsxMatch = response.match(/===APP\.JSX===([\s\S]*?)===END APP\.JSX===/);
  const cssMatch = response.match(/===APP\.CSS===([\s\S]*?)===END APP\.CSS===/);

  if (jsxMatch) {
    jsx = jsxMatch[1].trim().replace(/^```(?:jsx|javascript|js)?\n?/, '').replace(/\n?```$/, '');
  } else {
    const blocks = response.match(/```(?:jsx|javascript|js)\n([\s\S]*?)```/g);
    if (blocks) jsx = blocks[0].replace(/```(?:jsx|javascript|js)\n/, '').replace(/```$/, '');
  }

  if (cssMatch) {
    css = cssMatch[1].trim().replace(/^```css?\n?/, '').replace(/\n?```$/, '');
  } else {
    const blocks = response.match(/```css\n([\s\S]*?)```/g);
    if (blocks) css = blocks[0].replace(/```css\n/, '').replace(/```$/, '');
  }

  if (jsx) jsx = jsx.replace(/\n\/\/\s*$/, '');
  if (css) css = css.replace(/\n\/\/\s*$/, '');

  return { jsx, css };
}

async function main() {
  console.log('=== Fin.ai Clone Iteration Loop ===\n');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT });

  let bestSimilarity = 0;
  let bestJsx = fs.readFileSync('./clone/src/App.jsx', 'utf-8');
  let bestCss = fs.readFileSync('./clone/src/App.css', 'utf-8');

  for (let i = 1; i <= MAX_ITERATIONS; i++) {
    console.log(`\n--- Iteration ${i}/${MAX_ITERATIONS} ---`);

    console.log('Screenshotting clone...');
    const cloneScreenshots = await screenshotClone(page);
    console.log(`  Captured ${cloneScreenshots.length} sections`);

    console.log('Computing diffs...');
    const diffResults = await computeDiffs(cloneScreenshots);
    console.log(`  Average similarity: ${(diffResults.avgSimilarity * 100).toFixed(1)}%`);

    if (diffResults.avgSimilarity > bestSimilarity) {
      bestSimilarity = diffResults.avgSimilarity;
      bestJsx = fs.readFileSync('./clone/src/App.jsx', 'utf-8');
      bestCss = fs.readFileSync('./clone/src/App.css', 'utf-8');
      console.log(`  New best! ${(bestSimilarity * 100).toFixed(1)}%`);
    }

    if (diffResults.avgSimilarity > 0.95) {
      console.log('\n95%+ similarity reached. Stopping.');
      break;
    }

    console.log('Asking Gemini for improvements...');
    const currentJsx = fs.readFileSync('./clone/src/App.jsx', 'utf-8');
    const currentCss = fs.readFileSync('./clone/src/App.css', 'utf-8');

    let response;
    try {
      response = await askGeminiForFixes(diffResults, currentJsx, currentCss, i);
    } catch (err) {
      console.error(`  Gemini error: ${err.message}`);
      console.log('  Waiting 15s and retrying...');
      await new Promise(r => setTimeout(r, 15000));
      try {
        response = await askGeminiForFixes(diffResults, currentJsx, currentCss, i);
      } catch (err2) {
        console.error(`  Retry failed: ${err2.message}. Skipping.`);
        continue;
      }
    }

    fs.writeFileSync(`${DIFF_DIR}/response-iter-${i}.txt`, response);

    const { jsx, css } = parseResponse(response);

    if (jsx) {
      fs.writeFileSync('./clone/src/App.jsx', jsx);
      console.log(`  Updated App.jsx (${jsx.split('\n').length} lines)`);
    } else {
      console.log('  WARNING: Could not parse App.jsx');
    }

    if (css) {
      fs.writeFileSync('./clone/src/App.css', css);
      console.log(`  Updated App.css (${css.split('\n').length} lines)`);
    } else {
      console.log('  WARNING: Could not parse App.css');
    }

    // Wait for Vite HMR
    await page.waitForTimeout(3000);
    console.log(`  Iteration ${i} complete.`);
  }

  // Final measurement
  console.log('\n--- Final Measurement ---');
  const finalScreenshots = await screenshotClone(page);
  const finalDiffs = await computeDiffs(finalScreenshots);
  console.log(`\nFinal avg similarity: ${(finalDiffs.avgSimilarity * 100).toFixed(1)}%`);
  console.log(`Best achieved: ${(bestSimilarity * 100).toFixed(1)}%`);

  if (finalDiffs.avgSimilarity < bestSimilarity - 0.01) {
    console.log('Restoring best version.');
    fs.writeFileSync('./clone/src/App.jsx', bestJsx);
    fs.writeFileSync('./clone/src/App.css', bestCss);
  }

  await browser.close();
  console.log('\nDone! Diffs in ./diffs/');
}

main().catch(console.error);
