# Intent Lock: `calculator pensie` & Calculator Suite

Last locked: 2026-11-26

## Primary SERP Ownership Map (1 Page = 1 Distinct Intent)

| Cluster Intent | Canonical Owner URL | Forbidden Competitors on Same Site | Differentiation Rule |
|---|---|---|---|
| **General Public Pension Simulator (`calculator pensie`, `calculator pensie online`, `calculator pensie neta din brut 2026`)** | `/` | Blog posts, `/metodologie/` | Only `/` owns the main Brut/Net interactive widget + Brut->Net 2026 table + direct-answer formula (`Puncte x 81 Lei`). |
| **Excel Template & CSV Offline Tool (`program excel calcul pensie`, `program calcul pensie`)** | `/program-excel-calcul-pensie/` | Blog article `/blog/simulare-pensie-instrumente-metode/` | Blog article discusses digital/CNPP comparison overview and links upper-40% TO `/program-excel-calcul-pensie/` for the downloadable CSV/Excel workbook. |
| **Early Retirement Penalty Calculator (`calculator pensie anticipata`)** | `/calculator-pensie-anticipata/` | Blog articles `pensie-anticipata-conditii-penalizari` & `pensie-anticipata-fara-penalizare` | Blog articles cover legal conditions and exemptions, then link upper-40% TO `/calculator-pensie-anticipata/` for interactive penalty simulation (`0.15%-0.40%/month`). |
| **Annex 5 Age & Stage Schedule (`calculator varsta pensionare`)** | `/calculator-varsta-pensionare/` | `/tipuri-pensii/`, blog age posts | Only `/calculator-varsta-pensionare/` owns birth-date calculator & women's 2026-2035 cohort schedule. |
| **Stability Points & VPR 81 Multiplier (`calculator puncte pensie`)** | `/calculator-puncte-pensie/` | `/metodologie/`, `/blog/calcul-punct-referinta-vpr/` | `/metodologie/` documents statutory legal proofs (`Art. 85`); `/calculator-puncte-pensie/` runs the interactive points simulator. |
| **Pillar II Mandatory Private (`calculator pensie pilon 2`)** | `/calculator-pensie-pilon-2/` | `/blog/pilonul-2-modificari-legislative/` | Article focuses on 2026 statutory rules & `4.75%` split; calculator simulates scenarios. |
| **Pillar III Voluntary Private (`calculator pensie pilon 3`)** | `/calculator-pensie-pilon-3/` | `/blog/pilonul-3-avantaje-fiscale-strategii/` | Article explains `400 EUR/yr` tax relief rules; calculator projects compounding balance. |

## Cannibalization & Trailing-Slash Lock
- All canonicals, internal links, SSR links, JSON-LD `BreadcrumbList` URLs, and `sitemap.xml` entries MUST end with `/` (except root `/`).
- Non-trailing-slash variants (`301` redirect in `netlify.toml` / `_redirects`) must NEVER be emitted in `<link rel="canonical">` or JSX links.
