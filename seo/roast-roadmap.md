# SEO Roast Roadmap: calculatorpensie.com (2026-11-26)

Verdict: Technical SSR and 2026 statutory accuracy are live, so the real blocker shifted to 180-419 word thin articles, truncated 61-74 char page titles, unlinked orphan sub-calculators in header/upper-body copy, and zero built-in backlink loops.

| # | Tier | Issue | Revenue & traffic impact | Fix | Owner | Status |
|---|---|---|---|---|---|---|
| 1 | FATAL/INDEX | 20 blog articles were 181-419 word thin stubs skipping `<h2>` (`<h1>` straight to `<h3>`) with 15/20 lacking upper-40% money links | Slow blog indexation, weak topical authority feeding `/calculator-*` money tools | Expand all 20 articles to 500-750 words, proper question `<h2>`s, upper-40% calculator links + inline callouts | agent | shipped |
| 2 | REVENUE | 14/17 page `<title>`s and all 20 blog `<title>`s exceeded 60 chars (up to 91 chars); homepage net-from-gross query (`pos 7.7`) stuck at 1.25% CTR | Google truncates value props & `VPR 81 Lei` before user sees them, suppressing CTR on Page 1-2 queries | Rewrite all 17 titles to 42-57 chars; cap blog title suffix <=58 chars; add Brut->Net 2026 table on `/` | agent | shipped |
| 3 | REVENUE | 6 specialized calculators missing from `<header>` nav; `/program-excel-calcul-pensie/` (`pos 6.2`, 364 imps) had only 1 contextual body link | Calculators stayed 2-3 clicks deep with uneven link equity from editorial posts | Add compact sub-header nav strip for all 6 calculators + diverse in-body links across all 20 posts (`>=5` inbound each) | agent | shipped |
| 4 | REVENUE | Unused bloated PNGs & hallucinated English AI infographics sitting unreferenced in `client/public/images/` | Dead image bytes in assets; missing visual proof charts inside calculators and guides | Remove 11 dead/hallucinated image files; ship 4 deterministic 1536x864 Romanian SVG charts wired with `width`/`height` | agent | shipped |
| 5 | COMPOUNDING | Zero built-in product backlink loop on calculators/Excel download page | Missed passive editorial links from HR/finance sites citing Romanian formulas | Ship `EmbedCalculatorBox` copy-HTML attribution widget on `/` & `/program-excel-calcul-pensie/` | agent | shipped |
| 6 | COMPOUNDING | Page-2 `calculator pensie` (`1,951 imps`, `pos 12.1`) and low DR vs `lapensie.com` / `cnpp.ro` / `digi24.ro` | Top head term sits just outside Page 1 Top 10 where >70% of clicks go | Execute 30-day Blitz SEO sprint + Romanian HR/finance editorial outreach (`seo/outreach-batch-2026-11-26.md`) + Reddit Q&A (`seo/reddit-serp-queue.md`) | owner | next |

## Fluff (deferred)
- Historical `disavow.txt` manual upload in GSC Disavow Tool (93 spam domains already prepared; upload once manually if desired).
