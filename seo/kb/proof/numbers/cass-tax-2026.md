---
id: cass-tax-2026
category: numbers
date: 2026-11-26
topics: [pensie-neta, cass-pensii, impozit-pensie, 2026]
verified: true
source: client/src/lib/pension-calculations.ts#estimateNetPension2026
---

# Fiscalitate Pensii 2026 (Brut -> Net)
- Pensiile <= `3.000` Lei: 0% CASS, 0% impozit.
- Pensiile > `3.000` Lei: CASS `10%` pe `(Brut - 3.000)`, apoi impozit `10%` pe `(Brut - 3.000 - CASS)`.
- Exemple exacte: `3.500` brut -> `3.405` net | `5.000` brut -> `4.620` net | `6.300` brut -> `5.673` net | `10.000` brut -> `8.670` net.
