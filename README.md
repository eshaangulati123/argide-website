# Argide Website

Marketing website for Argide, built with React 19 and Vite 8.

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- npm (comes with Node)

## Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── App.jsx                  App shell (layout + state)
├── main.jsx                 React entry point
├── data/
│   └── content.js           All text copy (edit here for content changes)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── SectionNav.jsx
│   ├── Capabilities.jsx
│   ├── Performance.jsx
│   ├── Integrations.jsx
│   ├── Technology.jsx
│   ├── Pricing.jsx
│   ├── BottomCTA.jsx
│   ├── CustomerAgent.jsx
│   ├── Footer.jsx
│   └── ui/                  Shared UI primitives
│       ├── Icons.jsx
│       ├── SectionLabel.jsx
│       ├── CardBrackets.jsx
│       └── IntegrationLogos.jsx
└── styles/                  Per-section CSS
    ├── global.css           Variables, reset, utilities
    ├── components.css       Shared card/section patterns
    ├── layout.css           Sidebar, scroll layout
    └── [section].css        One file per section
```

## Deployment

The site deploys to Netlify automatically via `netlify.toml` at the repo root. Pushing to main triggers a build.
