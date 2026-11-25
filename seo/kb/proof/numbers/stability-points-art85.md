---
id: stability-points-art85
category: numbers
date: 2026-11-26
topics: [puncte-stabilitate, legea-360-2023, art-85]
verified: true
source: client/src/lib/pension-calculations.ts#calculateStabilityPoints
---

# Puncte de Stabilitate (Art. 85 Legea nr. 360/2023)
- Anii 26-30 contributivi: `+0,50` pct/an (max 2,50 pct = `+202,5` lei la VPR 81 lei).
- Anii 31-35 contributivi: `+0,75` pct/an (cumulat 6,25 pct = `+506,25` lei la 35 ani).
- Peste 35 ani contributivi: `+1,00` pct/an (40 ani = 11,25 pct = `+911,25` lei brut/luna).
