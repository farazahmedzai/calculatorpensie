# Internal Links Audit: Before vs. After (2026-11-26)

Generated from [scripts/internal-link-graph.mjs](../scripts/internal-link-graph.mjs) comparing [seo/internal-link-graph.before.json](./internal-link-graph.before.json) against [seo/internal-link-graph.json](./internal-link-graph.json).

## Sitewide Summary Metrics

| Metric | Before | After | Delta |
|---|---:|---:|---:|
| Total blog articles analyzed | 20 | 20 | 0 |
| Articles with money link in upper 40% | 5 (25%) | 20 (100%) | +15 (+75 pp) |
| Orphan money pages (<3 contextual inlinks) | 1 | 0 | -1 (Fixed) |
| Money pages in `<header>` navigation | 1 / 7 | 7 / 7 | +6 (100% coverage) |
| `RelatedLinks` repetitive sitewide tool block | 5 fixed `CORE_TOOLS` | <=3 matched `TOPICAL_TOOLS` | Deduplicated |

## Money Page Authority Distribution

| Target Money URL | Before Inlinks (Anchors) | After Inlinks (Anchors) | In Header (Before -> After) |
|---|---:|---:|---|
| `/` | 11 (4) | 27 (18) | `true` -> `true` |
| `/calculator-puncte-pensie/` | 9 (3) | 19 (14) | `false` -> `true` |
| `/calculator-varsta-pensionare/` | 6 (1) | 15 (11) | `false` -> `true` |
| `/program-excel-calcul-pensie/` | 1 (1) | 12 (12) | `false` -> `true` |
| `/calculator-pensie-pilon-2/` | 3 (1) | 11 (10) | `false` -> `true` |
| `/calculator-pensie-pilon-3/` | 5 (1) | 10 (7) | `false` -> `true` |
| `/calculator-pensie-anticipata/` | 7 (2) | 9 (6) | `false` -> `true` |

## Key Structural Changes Applied

1. **Click-Depth 1 Header Strip ([client/src/components/layout/header.tsx](../client/src/components/layout/header.tsx)):** Exposed all 6 specialized sub-calculators in a compact desktop sub-bar (`nav[aria-label="Calculatoare pensii"]`) and mobile menu so PageRank and users reach every tool in 1 click.
2. **Upper-40% Editorial Hub Links ([client/src/data/static-articles.ts](../client/src/data/static-articles.ts)):** Expanded all 20 articles to 500-750 words, fixed heading hierarchy (`<h1>` -> `<h2>`), and placed contextual calculator links plus inline `<aside>` tool callouts inside the first 40% of body prose with natural diverse anchor phrases.
3. **Rescued `/program-excel-calcul-pensie/` (`pos 6.2`, 364 3m imps):** Upgraded from 1 contextual inbound link (`1` anchor) to `12` contextual inbound links across `12` distinct anchors.
4. **Eliminated Boilerplate Sitewide Tool Spam ([client/src/components/seo/RelatedLinks.tsx](../client/src/components/seo/RelatedLinks.tsx)):** Removed the fixed 5-link `CORE_TOOLS` list repeated identically on every post in favor of up to 3 topically matched links per article.
