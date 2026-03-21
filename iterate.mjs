import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!API_KEY) { console.error('Set GOOGLE_GENERATIVE_AI_API_KEY'); process.exit(1); }

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-3.1-pro-preview' }, { timeout: 120000 });

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
    .jpeg({ quality: 70 })
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

  // Also take full page
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

    results.push({
      section: i,
      similarity: similarity.toFixed(4),
      diffPixels: numDiffPixels,
      totalPixels: totalPx,
      diffPath,
      refPath,
      clonePath,
    });

    console.log(`  Section ${String(i).padStart(2, '0')}: similarity=${(similarity * 100).toFixed(1)}% (${numDiffPixels} diff pixels)`);
  }

  const avgSimilarity = 1 - (totalDiff / totalPixels);
  return { results, avgSimilarity, pairsCount };
}

async function askGeminiForFixes(diffResults, currentJsx, currentCss, iteration) {
  // Pick the worst 3 sections to send as diffs (fewer = smaller payload)
  const sorted = [...diffResults.results].sort((a, b) => parseFloat(a.similarity) - parseFloat(b.similarity));
  const worstSections = sorted.slice(0, 3);

  const parts = [];

  parts.push({
    text: `You are an expert frontend developer iterating on a pixel-perfect website clone. This is iteration ${iteration}.

CURRENT VISUAL SIMILARITY: ${(diffResults.avgSimilarity * 100).toFixed(1)}% average across ${diffResults.pairsCount} viewport sections.

I'm showing you the WORST-performing sections as diff images. In these diff images:
- RED pixels = areas where the clone DIFFERS from the reference
- The more red, the bigger the visual discrepancy

For each diff, I also show the reference screenshot (what it SHOULD look like) and the clone screenshot (what it currently looks like).

Your job: analyze the diffs and output UPDATED App.jsx and App.css to fix the visual discrepancies.

RULES:
- Focus on HIGH-LEVERAGE fixes first (layout, spacing, colors, fonts, backgrounds)
- Do NOT break things that already work well
- Do NOT embed screenshots as images
- Do NOT use dangerouslySetInnerHTML
- Output COMPLETE files (not partial patches)

SECTION SCORES:
${diffResults.results.map(r => `  Section ${r.section}: ${(parseFloat(r.similarity) * 100).toFixed(1)}%`).join('\n')}

CURRENT App.jsx (${currentJsx.split('\n').length} lines):
\`\`\`jsx
${currentJsx}
\`\`\`

CURRENT App.css (${currentCss.split('\n').length} lines):
\`\`\`css
${currentCss}
\`\`\`

Here are the worst sections with their reference, clone, and diff images:`
  });

  for (const section of worstSections) {
    parts.push({ text: `\n--- Section ${section.section} (similarity: ${(parseFloat(section.similarity) * 100).toFixed(1)}%) ---` });
    parts.push({ text: `Reference screenshot:` });
    parts.push(await readImageCompressed(section.refPath));
    parts.push({ text: `Clone screenshot:` });
    parts.push(await readImageCompressed(section.clonePath));
    parts.push({ text: `Diff overlay (red = differences):` });
    parts.push(await readImageCompressed(section.diffPath));
  }

  parts.push({
    text: `\nNow output the COMPLETE updated files. Fix the most impactful visual issues first.

===APP.JSX===
(complete updated App.jsx)
===END APP.JSX===

===APP.CSS===
(complete updated App.css)
===END APP.CSS===`
  });

  console.log(`  Sending ${worstSections.length} diff sections to Gemini (payload assembled)...`);
  const result = await model.generateContent({ contents: [{ role: 'user', parts }] });
  return result.response.text();
}

function parseResponse(response) {
  let jsx = null, css = null;

  const jsxMatch = response.match(/===APP\.JSX===([\s\S]*?)===END APP\.JSX===/);
  const cssMatch = response.match(/===APP\.CSS===([\s\S]*?)===END APP\.CSS===/);

  if (jsxMatch) {
    jsx = jsxMatch[1].trim().replace(/^```(?:jsx|javascript|js)?\n?/, '').replace(/\n?```$/, '');
  } else {
    const blocks = response.match(/```(?:jsx|javascript|js)\n([\s\S]*?)```/g);
    if (blocks && blocks.length >= 1) {
      jsx = blocks[0].replace(/```(?:jsx|javascript|js)\n/, '').replace(/```$/, '');
    }
  }

  if (cssMatch) {
    css = cssMatch[1].trim().replace(/^```css?\n?/, '').replace(/\n?```$/, '');
  } else {
    const blocks = response.match(/```css\n([\s\S]*?)```/g);
    if (blocks && blocks.length >= 1) {
      css = blocks[0].replace(/```css\n/, '').replace(/```$/, '');
    }
  }

  // Clean trailing // from Gemini output
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

    // 1. Screenshot the clone
    console.log('Screenshotting clone...');
    const cloneScreenshots = await screenshotClone(page);
    console.log(`  Captured ${cloneScreenshots.length} sections`);

    // 2. Compute diffs
    console.log('Computing diffs...');
    const diffResults = await computeDiffs(cloneScreenshots);
    console.log(`  Average similarity: ${(diffResults.avgSimilarity * 100).toFixed(1)}%`);

    // Track best
    if (diffResults.avgSimilarity > bestSimilarity) {
      bestSimilarity = diffResults.avgSimilarity;
      bestJsx = fs.readFileSync('./clone/src/App.jsx', 'utf-8');
      bestCss = fs.readFileSync('./clone/src/App.css', 'utf-8');
      console.log(`  New best! ${(bestSimilarity * 100).toFixed(1)}%`);
    }

    // Check if good enough
    if (diffResults.avgSimilarity > 0.95) {
      console.log('\n95%+ similarity reached. Stopping.');
      break;
    }

    // 3. Ask Gemini for fixes
    console.log('Asking Gemini for improvements...');
    const currentJsx = fs.readFileSync('./clone/src/App.jsx', 'utf-8');
    const currentCss = fs.readFileSync('./clone/src/App.css', 'utf-8');

    let response;
    try {
      response = await askGeminiForFixes(diffResults, currentJsx, currentCss, i);
    } catch (err) {
      console.error(`  Gemini API error: ${err.message}`);
      console.log('  Retrying in 10s...');
      await new Promise(r => setTimeout(r, 10000));
      try {
        response = await askGeminiForFixes(diffResults, currentJsx, currentCss, i);
      } catch (err2) {
        console.error(`  Retry failed: ${err2.message}. Skipping iteration.`);
        continue;
      }
    }

    // Save raw response
    fs.writeFileSync(`${DIFF_DIR}/response-iter-${i}.txt`, response);

    // 4. Parse and apply
    const { jsx, css } = parseResponse(response);

    if (jsx) {
      fs.writeFileSync('./clone/src/App.jsx', jsx);
      console.log(`  Updated App.jsx (${jsx.split('\n').length} lines)`);
    } else {
      console.log('  WARNING: Could not parse App.jsx from response');
    }

    if (css) {
      fs.writeFileSync('./clone/src/App.css', css);
      console.log(`  Updated App.css (${css.split('\n').length} lines)`);
    } else {
      console.log('  WARNING: Could not parse App.css from response');
    }

    // Wait for Vite HMR to pick up changes
    await page.waitForTimeout(3000);

    console.log(`  Iteration ${i} complete.`);
  }

  // Final measurement
  console.log('\n--- Final Measurement ---');
  const finalScreenshots = await screenshotClone(page);
  const finalDiffs = await computeDiffs(finalScreenshots);
  console.log(`\nFinal average similarity: ${(finalDiffs.avgSimilarity * 100).toFixed(1)}%`);
  console.log(`Best similarity achieved: ${(bestSimilarity * 100).toFixed(1)}%`);

  // If final is worse than best, restore best
  if (finalDiffs.avgSimilarity < bestSimilarity - 0.01) {
    console.log('Final is worse than best — restoring best version.');
    fs.writeFileSync('./clone/src/App.jsx', bestJsx);
    fs.writeFileSync('./clone/src/App.css', bestCss);
  }

  await browser.close();
  console.log('\nDone! Diffs saved to ./diffs/');
}

main().catch(console.error);
