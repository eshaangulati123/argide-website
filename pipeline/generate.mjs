import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!API_KEY) { console.error('Set GOOGLE_GENERATIVE_AI_API_KEY'); process.exit(1); }

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-3.1-pro-preview' });

const REF = './reference';
const OUT = './clone/src';

function readImage(filePath) {
  const data = fs.readFileSync(filePath);
  const ext = path.extname(filePath).slice(1);
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' ? 'image/jpeg' : 'image/webp';
  return { inlineData: { data: data.toString('base64'), mimeType: mime } };
}

async function generate() {
  console.log('Loading reference data...');

  // Load all section screenshots
  const screenshotDir = `${REF}/screenshots`;
  const sectionFiles = fs.readdirSync(screenshotDir)
    .filter(f => f.startsWith('section-'))
    .sort();

  const sectionImages = sectionFiles.map(f => readImage(path.join(screenshotDir, f)));
  const fullPageImage = readImage(path.join(screenshotDir, 'full-page.png'));

  // Load computed styles
  const computedStyles = fs.readFileSync(`${REF}/computed-styles.json`, 'utf-8');

  // Load DOM (truncated to key sections for context window)
  let dom = fs.readFileSync(`${REF}/dom.html`, 'utf-8');
  // Extract just the body content and trim to manageable size
  const bodyMatch = dom.match(/<body[^>]*>([\s\S]*)<\/body>/);
  const bodyContent = bodyMatch ? bodyMatch[1].substring(0, 80000) : dom.substring(0, 80000);

  // Load inline SVGs for icons
  const svgs = fs.readFileSync(`${REF}/inline-svgs.json`, 'utf-8');
  const svgData = JSON.parse(svgs);
  // Get first 30 SVGs (logos, icons)
  const keySvgs = svgData.slice(0, 30).map(s => s.html).join('\n');

  console.log(`Sending ${sectionImages.length} section screenshots + full page to Gemini...`);
  console.log('This may take a minute...');

  const prompt = `You are an expert frontend developer. Your task is to create a PIXEL-PERFECT clone of a website landing page based on the screenshots I'm providing.

I'm providing:
1. A full-page screenshot showing the entire layout
2. ${sectionImages.length} individual viewport-height screenshots scrolling through the page
3. Computed CSS styles from key elements
4. Partial DOM structure for reference
5. Key SVG icons used on the page

CRITICAL RULES:
- Generate a SINGLE complete React component (App.jsx) and a SINGLE CSS file (App.css)
- Match the visual appearance EXACTLY - fonts, colors, spacing, layout, typography
- Use the actual text content visible in the screenshots
- DO NOT use placeholder text or lorem ipsum
- DO NOT embed screenshots as images
- DO NOT use dangerouslySetInnerHTML
- Use semantic HTML elements
- Make it responsive (the screenshots are at 1280x720)
- Use CSS Grid and Flexbox for layout

KEY DESIGN OBSERVATIONS FROM THE SCREENSHOTS:
- Dark navy background (#0f1117 or similar) for the main page
- Cream/off-white (#f5f0e8 or similar) background for content section cards
- Large serif font for main headings (appears to be a custom serif like "Tiempos" or similar editorial serif)
- Sans-serif font for body text and navigation (appears to be system/Inter)
- Orange accent color (#ff5c00) for labels and highlights
- Sticky left sidebar navigation with numbered sections (01 CAPABILITIES through 06 PRICING)
- Top announcement bar with event info
- Sticky navigation with: Intercom-style snowflake logo, Product dropdown, AI Technology dropdown, Customers, Resources dropdown, Pricing, user icon, Contact sales, View demo, Start free trial button, Intercom button
- Hero section with very large serif text "The #1 AI Agent for all your customer service" with a warm amber/orange glow behind it
- Badge row: "#1 IN BAKE-OFFS", "#1 IN BENCHMARKS", "#1 FOR COMPLEX QUERIES", "#1 ON G2"
- Product demo mockups showing UI components
- Customer logo wall with: Mercury, Miro, Monday.com, Riot Games, Rocket Money, Shutterstock, Snowflake, Synthesia, Toast, Vanta, WHOOP, Xero
- Content sections in cream cards with corner brackets decorating the card
- Each section has an orange square + uppercase label (e.g., "■ CAPABILITIES", "■ UNRIVALED PERFORMANCE")
- Section cards have a horizontal line under the label
- Capabilities section: large serif heading + body text + "Explore all capabilities" button, then 4-column grid (1. Train, 2. Test, 3. Deploy, 4. Analyze)
- Performance section: line chart showing resolution rate over time, bar chart comparing competitors, testimonial with photo
- Integrations section: grid of helpdesk logos (Zoho Desk, Intercom, Gorgias, Zendesk, Fin, Salesforce, Sprinklr, Front)
- Technology section: 3-column layout with text descriptions on left and right, 3D engine illustration in center
- Trust badges row: ISO certifications and compliance badges
- AI Team section: 2 rows of 5 team member photos with names and titles
- Pricing section: 2 columns, $0.99 per outcome pricing
- "Get started with the #1 AI Agent today" CTA with solar flare background
- Customer Agent vision section
- Footer with 5 columns: Product, AI Technology, Solutions, Resources, Fin in Action + Company

For fonts: Use a serif font like "Playfair Display" or "DM Serif Display" from Google Fonts for headings, and "Inter" for body text. The heading font has very elegant, high-contrast serifs.

COMPUTED STYLES FROM THE ORIGINAL:
${computedStyles}

KEY SVG ICONS (inline SVGs from the page):
${keySvgs.substring(0, 10000)}

PARTIAL DOM STRUCTURE (for text content and class names reference):
${bodyContent.substring(0, 40000)}

Generate the complete App.jsx and App.css files. Output them in this exact format:

===APP.JSX===
(full App.jsx content here)
===END APP.JSX===

===APP.CSS===
(full App.css content here)
===END APP.CSS===

Make the clone as visually identical to the screenshots as possible. Pay extremely close attention to:
- Typography sizes, weights, and font families
- Exact spacing and padding
- Color values
- Layout proportions
- The decorative corner brackets on section cards
- The sticky left sidebar navigation
- The announcement bar at the top`;

  const result = await model.generateContent([
    prompt,
    { text: "Here is the full page screenshot:" },
    fullPageImage,
    { text: "Here are the individual section screenshots, from top to bottom:" },
    ...sectionImages,
  ]);

  const response = result.response.text();

  // Save raw response
  fs.writeFileSync(`${REF}/gemini-response.txt`, response);
  console.log('Raw response saved to reference/gemini-response.txt');

  // Parse out App.jsx and App.css
  const jsxMatch = response.match(/===APP\.JSX===([\s\S]*?)===END APP\.JSX===/);
  const cssMatch = response.match(/===APP\.CSS===([\s\S]*?)===END APP\.CSS===/);

  if (jsxMatch) {
    let jsx = jsxMatch[1].trim();
    // Remove markdown code fences if present
    jsx = jsx.replace(/^```(?:jsx|javascript|js)?\n?/, '').replace(/\n?```$/, '');
    fs.writeFileSync(`${OUT}/App.jsx`, jsx);
    console.log('App.jsx written');
  } else {
    console.log('WARNING: Could not parse App.jsx from response');
    // Try to find code blocks
    const codeBlocks = response.match(/```(?:jsx|javascript|js)\n([\s\S]*?)```/g);
    if (codeBlocks && codeBlocks.length >= 1) {
      const jsx = codeBlocks[0].replace(/```(?:jsx|javascript|js)\n/, '').replace(/```$/, '');
      fs.writeFileSync(`${OUT}/App.jsx`, jsx);
      console.log('App.jsx extracted from code block');
    }
  }

  if (cssMatch) {
    let css = cssMatch[1].trim();
    css = css.replace(/^```css?\n?/, '').replace(/\n?```$/, '');
    fs.writeFileSync(`${OUT}/App.css`, css);
    console.log('App.css written');
  } else {
    const codeBlocks = response.match(/```css\n([\s\S]*?)```/g);
    if (codeBlocks && codeBlocks.length >= 1) {
      const css = codeBlocks[0].replace(/```css\n/, '').replace(/```$/, '');
      fs.writeFileSync(`${OUT}/App.css`, css);
      console.log('App.css extracted from code block');
    }
  }

  console.log('\nGeneration complete!');
}

generate().catch(console.error);
