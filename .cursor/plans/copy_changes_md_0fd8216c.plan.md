---
name: Copy Changes MD
overview: Create a COPY_CHANGES.md file documenting every instance of "Fin" / "Fin AI" in the clone that needs to be replaced with "ARGIDE" / "ARGIDE AI", organized by section with file, line, old text, and new text.
todos:
  - id: create-md
    content: Create COPY_CHANGES.md at repo root with all 37+ copy change entries, organized by section with file path, line number, old text, and new text
    status: pending
isProject: false
---

# Copy Changes Documentation Plan

## Goal

Create `/Users/eshaankrishngulati/fin-ai-clone/COPY_CHANGES.md` listing every copy change needed across the clone — replacing all instances of "Fin" / "Fin AI" with "ARGIDE" / "ARGIDE AI".

## Source Files Affected

- `[clone/src/App.jsx](clone/src/App.jsx)` — all user-visible copy (37 instances)
- `[clone/src/IntegrationLogos.jsx](clone/src/IntegrationLogos.jsx)` — `fin-cls` CSS class in SVG (1 instance)

## Change Categories

### 1. Hero Section (App.jsx line 199)

- `Can Fin integrate with my help d...` → `Can ARGIDE integrate with my help d...`

### 2. Section 01 – Flywheel (lines 267, 272, 283, 288, 293, 298)

- All `Fin` → `ARGIDE`, including `Fin Flywheel` → `ARGIDE Flywheel`

### 3. Section 02 – Performance (lines 308, 311, 371, 422, 424, 439, 451, 464)

- Chart labels: `FIN'S`, `FIN WINS`, `FIN` → `ARGIDE'S`, `ARGIDE WINS`, `ARGIDE`
- Testimonial quotes and case study titles

### 4. Section 03 – Integrations (lines 492, 493, 511, 512)

- `Fin works with`, `Fin for Zendesk`, `Fin for Salesforce`

### 5. Section 04 – AI Engine (lines 565, 568, 581, 582, 586, 614, 615, 623)

- `Fin AI Engine™` → `ARGIDE AI Engine™`
- `fin-cx-reranker` → `argide-cx-reranker`
- `fin-cx-retrieval` → `argide-cx-retrieval`
- `POWERED BY FIN-CX` → `POWERED BY ARGIDE-CX`

### 6. Section 05 – AI Team (line 651)

- `Fin's performance` → `ARGIDE's performance`

### 7. Pricing/CTA (line 714)

- `FIN MILLION DOLLAR GUARANTEE` → `ARGIDE MILLION DOLLAR GUARANTEE`

### 8. Deployment Cards (lines 722, 723, 738, 739)

- `Fin AI Agent`, `Fin with your current helpdesk`, `Fin with Intercom's Helpdesk`

### 9. Footer Navigation (lines 797, 807, 808, 838, 852)

- `Fin Overview`, `Fin for Zendesk`, `Fin for Salesforce`, `Fin 3`, `FIN IN ACTION`

