# SEO Execution Log: CalculatorPensie.com

## 2026-11-26 (Sprint 2) — INP/Bundle Optimization, Zero Sitewide Orphans & Heading Cleanup
- **Mobile INP & Bundle Reduction:**
  - Removed unused `QueryClientProvider`, `TooltipProvider`, and `Toaster` wrappers from `client/src/App.tsx`.
  - Replaced heavy `zod` + `react-hook-form` + dead `POST /api/calculations` mutation across `main-calculator.tsx`, `early-retirement-calculator.tsx`, and `pillar3-calculator.tsx` with native typed state + `startTransition` (`calculator-anticipata` chunk cut `104.31 KB -> 15.04 KB`; `index.js` cut `468.83 KB -> 420.81 KB`).
  - Throttled `PerformanceTracker.tsx` scroll checks via `requestAnimationFrame` + `pagehide`; deferred `gtag.js` execution in `client/index.html` until first interaction or browser idle.
- **Heading Hierarchy & Thin Core Page Enrichment:**
  - Fixed remaining heading skips on `/calculator-pensie-anticipata/`, `/faq/`, `/program-excel-calcul-pensie/`, and `/tipuri-pensii/` (`skips=none` on all `37/37` SSR routes).
  - Enriched `/planificare/`, `/tipuri-pensii/`, `/program-excel-calcul-pensie/`, `/faq/`, `/calculator-varsta-pensionare/`, `/calculator-puncte-pensie/`, `/calculator-pensie-pilon-2/`, and `/calculator-pensie-pilon-3/` with comparison tables and contextual links so `0` zero-inbound routes remain across all `37` URLs.

## 2026-11-26 (Sprint 1) — Full `seo-skills` Integration & Recovery Sprint
- Installed & validated `Illyism/seo-skills` (`30` skills + `3` MCPs).
- Shortened all 37 route `<title>`s (`<= 60` chars), added `<40`-word Brut->Net direct answer on `/`, expanded all 20 articles (`500-750` words) with upper-40% links (`20/20`), shipped 4 Romanian SVG charts, shipped `EmbedCalculatorBox`, and generated `seo/` KB deliverables.
