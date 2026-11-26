---
title: "Implementing Romania's Law 360/2023 Pension & 2026 CASS Net Tax Engine in TypeScript"
published: false
tags: typescript, fintech, opensource, webdev
canonical_url: https://calculatorpensie.com/metodologie/
---

Computing net vs. gross state pensions in Romania for 2026 requires combining three distinct statutory rules: the frozen Reference Point Value (`VPR = 81 Lei` under OUG 156/2024 & Law 141/2025), non-linear stability bonuses beyond 25 contributory years (Art. 85 of Law 360/2023), and the 3,000 Lei CASS + income tax thresholds.

In production on [CalculatorPensie.com](https://calculatorpensie.com/), the calculation engine runs 100% client-side with zero personal salary storage on any backend server.

## 1. Core 2026 Constants

- `OFFICIAL_VPR_2026 = 81` Lei
- `AVERAGE_GROSS_SALARY_2026 = 9192` Lei (Law 44/2026)
- `MINIMUM_PENSION_2026 = 1281` Lei/month
- Tax-exempt gross threshold: `3,000` Lei (`10%` CASS on excess + `10%` income tax on remainder above `3,000` Lei)

## 2. TypeScript Formula Implementation

```ts
export function calculateStabilityPoints(contributoryYears: number): number {
  if (contributoryYears <= 25) return 0;
  let points = 0;
  const band1 = Math.min(contributoryYears, 30) - 25;
  if (band1 > 0) points += band1 * 0.5;
  const band2 = Math.min(contributoryYears, 35) - 30;
  if (band2 > 0) points += band2 * 0.75;
  const band3 = contributoryYears - 35;
  if (band3 > 0) points += band3 * 1.0;
  return Number(points.toFixed(4));
}

export function estimateNetPension2026(grossPension: number): number {
  if (grossPension <= 3000) return Math.round(grossPension);
  const cass = Math.round((grossPension - 3000) * 0.1);
  const taxableAfterCass = Math.max(0, grossPension - cass - 3000);
  const incomeTax = Math.round(taxableAfterCass * 0.1);
  return Math.round(grossPension - cass - incomeTax);
}
```

## 3. Verified 2026 Gross-to-Net Reference Examples

- **3,000 Lei gross:** `3,000 Lei` net (`0 Lei` tax / CASS)
- **3,500 Lei gross:** `3,405 Lei` net (`-50` CASS, `-45` tax)
- **5,000 Lei gross:** `4,620 Lei` net (`-200` CASS, `-180` tax)
- **7,000 Lei gross:** `6,240 Lei` net (`-400` CASS, `-360` tax)
- **10,000 Lei gross:** `8,670 Lei` net (`-700` CASS, `-630` tax)

Interactive simulators for standard pensions, early retirement penalties (`0.15%-0.40%/month`), Annex 5 cohorts, Pillar II (`4.75%`), Pillar III (`400 EUR/yr`), and Excel CSV export are live at [CalculatorPensie.com](https://calculatorpensie.com/program-excel-calcul-pensie/).
