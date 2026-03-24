# Copy Changes — Fin → Argide

All changes required in `src/App.jsx` (and noted exceptions) to replace Fin/Fin AI branding with Argide/Argide AI, and to rewrite product descriptions to reflect Argide's actual product.

**Argide in one sentence:** Argide lets users control your app through chat. Connect Argide's AI agent to your product, and users can type what they want instead of clicking through menus. Argide connects to your APIs and data sources, navigates your UI with browser-use agents, and executes real actions when users need help.

---

## Change Key

- `SWAP` — Simple name replacement (Fin → Argide / Fin AI → Argide AI)
- `REWRITE` — Full copy rewrite to reflect Argide's product
- `KEEP` — Left unchanged for now (no direct Argide equivalent yet)

---

## Hero Section

**File:** `src/App.jsx`

### Title (Line 164)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `The #1 AI Agent for<br />all your customer service` | `The AI Agent that lets users<br />control your app` | #let this be as is 
 
### Badges (Lines 166–169)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `#1 IN BAKE-OFFS` | `0 TURNAROUND TIME` |
| REWRITE | `#1 IN BENCHMARKS` | `BROWSER-USE AGENTS` |#let this be as is 
| REWRITE | `#1 FOR COMPLEX QUERIES` | `API + UI EXECUTION` | #let this be as is 
| REWRITE | `#1 ON G2` | `WORKS WITH ANY APP` | #let this be as is 


---

## Section 01 — Capabilities

**File:** `src/App.jsx` · Lines 267–298

### Heading (Line 267)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin resolves the most complex queries on every channel` | `Argide resolves the most complex queries through chat` |

### Body Paragraph (Line 272)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin handles even the most complex queries through a continuous improvement loop called the Fin Flywheel. Train Fin on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, then analyze and improve with AI-powered Insights—so every query is resolved accurately and consistently.` |  `Argide replaces your entire support team with an AI agent that actually resolves issues — not just answers questions. Connect Argide to your product and it handles even the most complex queries by navigating your UI, calling your APIs, and executing real actions on behalf of users — so every query is resolved accurately and instantly, with zero turnaround time.` | #LGTM 

### Feature Cards (Lines 283, 288, 293, 298)

| Card | Type | Current Title | New Title | Current Copy | New Copy |
|------|------|---------------|-----------|--------------|----------|
| 1. Train | REWRITE | `Train` | `Train` | `Train Fin to resolve even the most complex queries with your Procedures, knowledge and policies.` | `Train Argide to resolve even the most complex queries with your Procedures, knowledge and policies.`  | #LGTM
| 2. Test | REWRITE | `Test` | `deploy` | `Run fully simulated customer conversations from start to finish to see exactly how Fin will behave before going live.` | `Users type what they want in natural language instead of navigating menus or learning your interface.` | 
| 3. Deploy | REWRITE | `Deploy` | `Act` | `Set Fin live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out.` | `Argide executes real actions across your product—browsing your UI, calling your APIs, and completing tasks on behalf of users.` |
| 4. Analyze | REWRITE | `Analyze` | `replace` | `Use AI-powered Insights to analyze and improve Fin's performance and deliver better customer experiences.` | `Argide handles complex multi-step workflows autonomously, giving users superpowers inside your product.` | #LGTM 

---

## Section 02 — Performance

**File:** `src/App.jsx` · Lines 285–465

> Reframed from "resolution rate" (customer service metric) to "turnaround time" and "action completion" (Argide's core value prop: 0 TAT because the agent navigates and acts for users).

### Section Heading (Line 288–289)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin outperforms every competitor. Every time.` | `Zero turnaround time. Every time.` |

### Line Chart (Line 292)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `FIG 2.A - FIN'S AVERAGE RESOLUTION RATE INCREASES 1% EVERY MONTH` | `FIG 2.A - ARGIDE REDUCES TURNAROUND TIME TO NEAR-ZERO` |

### Bar Chart (Lines 352, 403, 405)

| Line | Type | Current | New |
|------|------|---------|-----|
| 352 | REWRITE | `FIG 2.B - FIN WINS EVERY HEAD-TO-HEAD TEST ON RESOLUTION RATE` | `FIG 2.B - ARGIDE VS. MANUAL TASK COMPLETION TIME` |
| 403 | SWAP | Chart bar label: `FIN` | `ARGIDE` |
| 405 | REWRITE | `Resolution rate based on independent testing conducted by Fin customers.` | `Average task completion time based on testing with Argide customers.` |

### Testimonial (Lines 420–422)

| Line | Type | Current | New |
|------|------|---------|-----|
| 420 | REWRITE | `"Fin is in a completely different league. It's now involved in 99% of conversations and successfully resolves up to 65% end-to-end – even the more complex ones."` | `"Argide is in a completely different league. Users complete tasks in seconds instead of minutes—it navigates our app and executes actions instantly, even the complex multi-step ones."` |
| 422 | REWRITE | `Angelo Livanos, Vice President of Global Support at Lightspeed` | `[Placeholder — Argide customer quote needed]` |

### Video Section (Lines 431–445)

| Line | Type | Current | New |
|------|------|---------|-----|
| 431 | REWRITE | `ANTHROP\C` | `ARGIDE` |
| 432 | REWRITE | `"If you're debating whether to build your own AI solution or buy one, my advice would be to buy – and specifically, buy Fin."` | `"We tried building in-app AI ourselves. Argide gave us browser-use agents and API execution out of the box—zero turnaround time for our users."` |
| 445 | REWRITE | `Build vs. buy: Why Anthropic chose Fin` | `Build vs. buy: Why teams choose Argide` |

---

## Section 03 — Integrations

**File:** `src/App.jsx` · Lines 467–538

> Reframed from helpdesk integrations to product/platform integrations. Argide connects to any app via APIs, browser-use agents, and data sources—not helpdesks.

### Section Label (Line 469)

| Type | Current | New |
|------|---------|-----|
| KEEP | `SEAMLESS INTEGRATION` | `SEAMLESS INTEGRATION` |

### Heading (Line 473)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Fin works with any helpdesk` | `Argide works with any product` |

### Body Paragraph (Line 474)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Set up Fin with your existing helpdesk or as part of the Intercom Customer Service Suite—with support for additional platforms and custom channels.` | `Connect Argide to your product in under an hour. It plugs into your APIs, navigates your UI with browser-use agents, and connects to your data sources—no custom build required.` |

### Key Features List (Lines 484–487)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Set up in under an hour.` | `Set up in under an hour.` |
| REWRITE | `Integrates into your current support channels—tickets, email, live chat, and more.` | `Connects to your APIs, databases, and third-party services.` |
| REWRITE | `Follows your existing assignment rules, automations, and reporting.` | `Navigates your UI with browser-use agents to execute real actions.` |
| REWRITE | `Escalates to agents in your preferred inbox.` | `Falls back to human support when needed.` |

### Link Tabs (Lines 491–493)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Intercom Suite` / `Fin for Zendesk` / `Fin for Salesforce` | `API Connections` / `Browser-Use Agents` / `Data Sources` |

---

## Section 04 — Superior Technology (AI Engine)

**File:** `src/App.jsx` · Lines 540–651

> Reframed from customer service query resolution to Argide's actual architecture: understanding user intent, retrieving context from APIs/data, planning actions, executing via browser-use agents, and validating results.

### Heading (Line 546)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Powered by the Fin AI Engine™` | `Powered by the Argide AI Engine™` |

### Body Paragraph (Line 549)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `The Fin AI Engine™ is a patented AI architecture specifically engineered for complex customer service queries. Every layer is optimized for accuracy, speed, and reliability—so Fin can resolve more conversations, more effectively than competing AI Agents.` | `The Argide AI Engine™ is an AI architecture engineered for in-app action execution. Every layer is optimized for understanding user intent, navigating your product, and completing tasks—so users get zero turnaround time on every request.` |

### Figure Label (Line 554)

| Type | Current | New |
|------|---------|-----|
| SWAP | `FIG 4.A - FIN AI ENGINE™` | `FIG 4.A - ARGIDE AI ENGINE™` |

### Engine Steps (engineSteps array, Lines 48–55 + diagram items)

| Step | Current Label | New Label | Current Desc | New Desc |
|------|--------------|-----------|--------------|----------|
| 4.A.1 | `REFINE THE QUERY` | `UNDERSTAND USER INTENT` | `In order to optimize the accuracy of an answer...` | `Argide parses the user's natural language request and maps it to available actions, pages, and data within your product.` |
| 4.A.2 | `RETRIEVE RELEVANT CONTENT` | `RETRIEVE CONTEXT` | `The retrieval process, powered by our proprietary fin-cx-retrieval model...` | `The retrieval process, powered by our proprietary argide-cx-retrieval model, pulls relevant context from your APIs, data sources, and product state.` |
| 4.A.3 | `RERANK FOR PRECISION` | `PLAN THE ACTION` | `The reranking process, powered by our proprietary fin-cx-reranker model...` | `The planning process, powered by our proprietary argide-cx-planner model, determines the optimal sequence of actions—API calls, page navigations, and UI interactions.` |
| 4.A.4 | `GENERATE A RESPONSE` | `EXECUTE THE ACTION` | `Using a bespoke generative process, it creates answers...` | `Using browser-use agents and API connectors, Argide navigates your product UI and executes the planned actions on behalf of the user.` |
| 4.A.5 | `VALIDATE ACCURACY` | `VALIDATE RESULTS` | `In the final step, the Fin AI Engine™ checks whether the LLM output meets response accuracy and safety standards.` | `In the final step, the Argide AI Engine™ verifies that the executed actions produced the correct outcome and meets safety standards.` |
| 4.A.6 | `ENGINE OPTIMIZATION` | `ENGINE OPTIMIZATION` | `To calibrate performance, the Fin AI Engine™ uses integrated tools...` | `To calibrate performance, the Argide AI Engine™ uses integrated tools that optimize action execution, efficiency, precision, and coverage.` |

### Powered-by Labels

| Type | Current | New |
|------|---------|-----|
| SWAP | `POWERED BY FIN-CX` (×2) | `POWERED BY ARGIDE-CX` (×2) |

---

## Pricing Section

**File:** `src/App.jsx` · Lines 655–701

### Pricing Heading (Line 657)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Get the #1 AI Agent for all your customer service` | `Get the AI Agent that lets users control your app` |

### Pricing Card — Free (Lines 667–668)

| Line | Type | Current | New |
|------|------|---------|-----|
| 667 | KEEP | `Free` | `Free` |
| 668 | REWRITE | `Fin AI Agent works seamlessly with any helpdesk, including Zendesk, Salesforce, HubSpot, and more.` | `Argide AI Agent connects to your APIs and product UI. Users chat, Argide acts—zero turnaround time.` |

### Pricing Card — Enterprise (Lines 686–687)

| Line | Type | Current | New |
|------|------|---------|-----|
| 686 | KEEP | `Enterprise` | `Enterprise` |
| 687 | REWRITE | `Combine Fin AI Agent with Intercom's Helpdesk to get the full Intercom Customer Service Suite.` | `Argide AI Agent with dedicated infrastructure, custom integrations, and browser-use agents tuned to your product.` |

---

## Bottom CTA

**File:** `src/App.jsx` · Lines 706–718

### CTA Title (Lines 710–711)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Get started with the #1 AI Agent today` | `Give your users zero turnaround time` |

---

## Customer Agent Section

**File:** `src/App.jsx` · Lines 720–728

### Heading (Lines 723–724)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Our vision—one Agent for the entire customer experience` | `Our vision—one Agent for your entire product` |

### Body (Line 726)

| Type | Current | New |
|------|---------|-----|
| REWRITE | `Imagine a single Customer Agent across the whole customer journey. A future that opens the door to a previously-unimaginable level of customer experience.` | `Imagine a single AI agent that understands every corner of your product. A future where users never need to learn your UI—they just say what they want and Argide does it.` |

---

## Footer Navigation

**File:** `src/App.jsx` · Lines 732–817

| Line | Type | Current | New |
|------|------|---------|-----|
| 738 | SWAP | `Fin Overview` | `Argide Overview` |
| 747 | REWRITE | `Intercom Suite ↗` | `Documentation ↗` |
| 748 | REWRITE | `Fin for Zendesk` | `API Connections` |
| 749 | REWRITE | `Fin for Salesforce` | `Browser-Use Agents` |
| 779 | SWAP | `Fin 3` | `Argide 3` |
| 793 | SWAP | `FIN IN ACTION` | `ARGIDE IN ACTION` |
| 809 | REWRITE | `An Intercom Product` | `Argide` |

---

## Out of Scope (Code Identifiers — Not Copy)

These are JavaScript variable names and CSS class names, not user-visible copy. They do not need to change unless a code refactor is separately requested.

| File | Identifier | Note |
|------|-----------|------|
| `src/IntegrationLogos.jsx` line 43 | `export const LogoFin` | JS component name |
| `src/IntegrationLogos.jsx` line 44 | `.fin-cls` | SVG-internal CSS class |
| `src/App.css` line 1471 | `.int-fin-cell` | CSS class name |
| `src/App.css` line 1480 | `.int-fin-cell .int-fin-logo` | CSS class name |
| `src/App.jsx` line 3 | `import { LogoFin }` | JS import |
| `src/App.jsx` line 534 | `<LogoFin />` | JSX component reference |

---

## Summary

| Change Type | Count |
|------------|-------|
| SWAP (name only) | ~12 |
| REWRITE (new Argide copy drafted) | ~40 |
| KEEP (unchanged) | ~3 items |
| Out of scope (code identifiers) | 6 |
