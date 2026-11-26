# SEO Opportunity Backlog: CalculatorPensie.com

Updated: 2026-11-26 (Sprint 2 Complete)

## Shipped in Current & Previous Sprint
- [x] Fix `<title>` truncation across all 17 static pages & 20 blog posts (`<= 60` chars across all 38 built HTML files)
- [x] Add direct-answer `<40`-word VPR (`81 Lei`) + CASS (`10%`) formula box in homepage hero + worked `Brut -> Net 2026` table
- [x] Create 4 deterministic Romanian SVG explanation charts (`1536x864`) and remove 11 dead/hallucinated image files
- [x] Expand all 20 blog articles (`500-750` words), repair `h1 -> h2 -> h3` heading hierarchy across ALL `37/37` SSR routes (`skips=none`), and add upper-40% money links (`20/20`)
- [x] Expose all 6 specialized calculators in `<header>` (`7/7` money pages `inHeader: true`), rescue orphan `/program-excel-calcul-pensie/` (`1` -> `12` inlinks), and eliminate ALL `37/37` sitewide orphan routes (`0` zero-inbound pages remaining)
- [x] Ship `EmbedCalculatorBox` HTML badge backlink loop on `/` & `/program-excel-calcul-pensie/`
- [x] Mobile INP & bundle optimization: removed unused `TooltipProvider`/`Toaster`/`QueryClientProvider` from `App.tsx`, stripped `zod`/`react-hook-form` + dead `/api/calculations` call from calculators (`calculator-anticipata` `-85.6%`, `index.js` `-48 KB`), added `startTransition`, throttled `PerformanceTracker` scroll with `requestAnimationFrame`, and deferred `gtag.js` load until interaction/idle

## Priority Queue (Remaining External & Compounding Actions)

| Priority | Action | Skill Workflow | Target / Metric | Owner | Status |
|---|---|---|---|---|---|
| P0 | Click `Validate Fix` in GSC for `robots.txt` & `Page indexing`, link GA4 (`493413775`), request reindex on `/` | seo-google / gsc | Resolve 4 canonical/indexing flags & validate mobile CrUX | browser/owner | queued |
| P1 | Execute Blitz SEO Week 2 outreach batch (`seo/outreach-batch-2026-11-26.md`) to Romanian HR/accounting portals | honest-link-outreach | Earn 3-5 clean editorial links targeting `/` & `/program-excel-calcul-pensie/` | owner | open |
| P1 | Track 25 Romanian AI prompts (`seo/ai-prompts.md`) weekly across ChatGPT / Perplexity / Google AI Overviews | ai-seo-tracker | Baseline Brand Citation Rate vs `lapensie.com` & `cnpp.ro` | owner | open |
| P2 | Participate organically on live Reddit threads in `seo/reddit-serp-queue.md` (zero URLs, math-first answers) | reddit-serp | Build unlinked brand awareness in `r/robursa` & `r/Romania` | owner | open |
| P2 | Monitor 28-day Mobile CrUX INP post-deploy (`229 ms` -> `<200 ms`) & optional toxic PBN disavow upload | seo-technical / backlinks | Shift 15 mobile URLs from Needs Improvement -> Good | monitor | open |
| P3 | Refresh Excel CSV template & publish quarterly `VPR / salariu mediu brut` changelog hub | program-excel / proof-kb | Defend `program excel calcul pensie` (#6.2 -> Top 3) | next month | open |
