# Copy Changes — Fin → ARGIDE

All changes required in `clone/src/App.jsx` (and noted exceptions) to replace Fin/Fin AI branding with ARGIDE/ARGIDE AI, and to rewrite product descriptions to reflect ARGIDE's actual product.

**ARGIDE in one sentence:** Argide lets users control your app through chat. Connect ARGIDE's AI agent to your product, and users can type what they want instead of clicking through menus. ARGIDE connects to your APIs and data sources, navigates your UI with browser-use agents, and executes real actions when users need help.

---

## Change Key

- `SWAP` — Simple name replacement (Fin → ARGIDE / Fin AI → ARGIDE AI)
- `REWRITE` — Full copy rewrite to reflect ARGIDE's product
- `KEEP` — Left unchanged for now (no direct ARGIDE equivalent yet)

---

## Hero Section

**File:** `clone/src/App.jsx` · Line 199

| Type | Field | Current | New |
|------|-------|---------|-----|
| SWAP | Chat placeholder | `Can Fin integrate with my help d...` | `Can ARGIDE control my app through chat?` |

---

## Section 01 — Capabilities

**File:** `clone/src/App.jsx` · Lines 267–298

### Heading (Line 267)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin resolves the most complex queries on every channel` | `ARGIDE lets users control your app through chat` |

### Body Paragraph (Line 272)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin handles even the most complex queries through a continuous improvement loop called the Fin Flywheel. Train Fin on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, then analyze and improve with AI-powered Insights—so every query is resolved accurately and consistently.` | `ARGIDE connects to your product so users can type what they want instead of clicking through menus. Connect ARGIDE to your APIs and data sources, navigate your UI with browser-use agents, and execute real actions—so users get things done faster, every time.` |

### Feature Cards (Lines 283, 288, 293, 298)

| Card | Type | Current Title | New Title | Current Copy | New Copy |
|------|------|---------------|-----------|--------------|----------|
| 1. Train | REWRITE | `Train` | `Connect` | `Train Fin to resolve even the most complex queries with your Procedures, knowledge and policies.` | `Connect ARGIDE to your APIs, data sources, and product UI with a simple integration.` |
| 2. Test | REWRITE | `Test` | `Chat` | `Run fully simulated customer conversations from start to finish to see exactly how Fin will behave before going live.` | `Users type what they want in natural language instead of navigating menus or learning your interface.` |
| 3. Deploy | REWRITE | `Deploy` | `Act` | `Set Fin live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out.` | `ARGIDE executes real actions across your product—browsing your UI, calling your APIs, and completing tasks on behalf of users.` |
| 4. Analyze | REWRITE | `Analyze` | `Automate` | `Use AI-powered Insights to analyze and improve Fin's performance and deliver better customer experiences.` | `ARGIDE handles complex multi-step workflows autonomously, giving users superpowers inside your product.` |

---

## Section 02 — Performance

**File:** `clone/src/App.jsx` · Lines 308–464

> These sections compare Fin to competitors on customer service resolution rates and include third-party testimonials. They are left as **KEEP** for now pending ARGIDE-specific metrics and quotes. Only name swaps applied below.

### Name Swaps

| Line | Type | Current | New |
|------|------|---------|-----|
| 308 | SWAP | `Fin outperforms every competitor.` | `ARGIDE outperforms every competitor.` |
| 311 | SWAP | `FIG 2.A - FIN'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH` | `FIG 2.A - ARGIDE'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH` |
| 371 | SWAP | `FIG 2.B - FIN WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE` | `FIG 2.B - ARGIDE WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE` |
| 422 | SWAP | Chart bar label: `FIN` | `ARGIDE` |
| 424 | SWAP | `Resolution rate based on independent testing conducted by Fin customers.` | `Resolution rate based on independent testing conducted by ARGIDE customers.` |
| 439 | SWAP | `"Fin is in a completely different league...` | `"ARGIDE is in a completely different league...` |
| 451 | SWAP | `buy – and specifically, buy Fin."` | `buy – and specifically, buy ARGIDE."` |
| 464 | SWAP | `Build vs. buy: Why Anthropic chose Fin` | `Build vs. buy: Why Anthropic chose ARGIDE` |

---

## Section 03 — Integrations

**File:** `clone/src/App.jsx` · Lines 492–534

> This section is about helpdesk integrations (Zendesk, Salesforce, etc.) which are Fin-specific. Left as **KEEP** for now. Name swaps applied below.

### Name Swaps

| Line | Type | Current | New |
|------|------|---------|-----|
| 492 | SWAP | `Fin works with any helpdesk` | `ARGIDE works with any helpdesk` |
| 493 | SWAP | `Set up Fin with your existing helpdesk...` | `Set up ARGIDE with your existing helpdesk...` |
| 511 | SWAP | `Fin for Zendesk` | `ARGIDE for Zendesk` |
| 512 | SWAP | `Fin for Salesforce` | `ARGIDE for Salesforce` |

---

## Section 04 — Superior Technology (AI Engine)

**File:** `clone/src/App.jsx` · Lines 565–623

### Heading (Line 565)

| Type | Current | New |
|------|---------|-----|
| SWAP | `Powered by the Fin AI Engine™` | `Powered by the ARGIDE AI Engine™` |

### Body Paragraph (Line 568)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `The Fin AI Engine™ is a patented AI architecture specifically engineered for complex customer service queries. Every layer is optimized for accuracy, speed, and reliability—so Fin can resolve more conversations, more effectively than competing AI Agents.` | `The ARGIDE AI Engine™ is an AI architecture specifically engineered for complex product interactions. Every layer is optimized for accuracy, speed, and reliability—so ARGIDE can execute more actions, more effectively than any competing AI agent.` |

### Engine Step Descriptions

| Line | Type | Current | New |
|------|------|---------|-----|
| 581 | SWAP | `our proprietary fin-cx-reranker model` | `our proprietary argide-cx-reranker model` |
| 582 | SWAP | `POWERED BY FIN-CX` | `POWERED BY ARGIDE-CX` |
| 586 | SWAP | `the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.` | `the ARGIDE AI Engine™ checks whether the LLM output meets response accuracy and safety standards.` |
| 614 | SWAP | `our proprietary fin-cx-retrieval model` | `our proprietary argide-cx-retrieval model` |
| 615 | SWAP | `POWERED BY FIN-CX` | `POWERED BY ARGIDE-CX` |
| 623 | SWAP | `the Fin AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.` | `the ARGIDE AI Engine™ uses integrated tools that optimize answer generation, efficiency, precision, and coverage.` |

---

## Section 05 — AI Team

**File:** `clone/src/App.jsx` · Line 651

| Line | Type | Current | New |
|------|------|---------|-----|
| 651 | SWAP | `continuously optimize Fin's performance through cutting-edge research...` | `continuously optimize ARGIDE's performance through cutting-edge research...` |

---

## Pricing / CTA

**File:** `clone/src/App.jsx` · Lines 714–739

| Line | Type | Current | New |
|------|------|---------|-----|
| 714 | SWAP | `✓ FIN MILLION DOLLAR GUARANTEE ⓘ` | `✓ ARGIDE MILLION DOLLAR GUARANTEE ⓘ` |
| 722 | REWRITE | `Fin with your current helpdesk` | `ARGIDE with your product` |
| 723 | REWRITE | `Fin AI Agent works seamlessly with any helpdesk, including Zendesk, Salesforce, HubSpot, and more.` | `ARGIDE AI Agent connects to your existing APIs, data sources, and product UI—no helpdesk required.` |
| 738 | REWRITE | `Fin with Intercom's Helpdesk` | `ARGIDE with your platform` |
| 739 | REWRITE | `Combine Fin AI Agent with Intercom's Helpdesk to get the full Intercom Customer Service Suite.` | `Combine ARGIDE AI Agent with your existing platform for a fully integrated AI-powered experience.` |

---

## Footer Navigation

**File:** `clone/src/App.jsx` · Lines 797–852

| Line | Type | Current | New |
|------|------|---------|-----|
| 797 | SWAP | `Fin Overview` | `ARGIDE Overview` |
| 807 | SWAP | `Fin for Zendesk` | `ARGIDE for Zendesk` |
| 808 | SWAP | `Fin for Salesforce` | `ARGIDE for Salesforce` |
| 838 | SWAP | `Fin 3` | `ARGIDE 3` |
| 852 | SWAP | `FIN IN ACTION` | `ARGIDE IN ACTION` |

---

## Out of Scope (Code Identifiers — Not Copy)

These are JavaScript variable names and CSS class names, not user-visible copy. They do not need to change unless a code refactor is separately requested.

| File | Identifier | Note |
|------|-----------|------|
| `clone/src/IntegrationLogos.jsx` line 43 | `export const LogoFin` | JS component name |
| `clone/src/IntegrationLogos.jsx` line 44 | `.fin-cls` | SVG-internal CSS class |
| `clone/src/App.css` line 1471 | `.int-fin-cell` | CSS class name |
| `clone/src/App.css` line 1480 | `.int-fin-cell .int-fin-logo` | CSS class name |
| `clone/src/App.jsx` line 3 | `import { LogoFin }` | JS import |
| `clone/src/App.jsx` line 534 | `<LogoFin />` | JSX component reference |

---

## Summary

| Change Type | Count |
|------------|-------|
| SWAP (name only) | 27 |
| REWRITE (new ARGIDE copy drafted) | 8 |
| KEEP (no ARGIDE equivalent yet) | ~4 sections |
| Out of scope (code identifiers) | 6 |
