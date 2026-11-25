# Brand SSOT: CalculatorPensie.com (calculatorpensie.com)
Last verified: 2026-11-26

## Product mechanics
- Independent Romanian pension calculation platform running 100% locally in browser with static Vite SSR pre-rendering across all 37 indexable HTML routes.
- Core simulators: Public Retirement (`/`, brut & net), Early Retirement (`/calculator-pensie-anticipata/`), Retirement Age Annex 5 (`/calculator-varsta-pensionare/`), Contributory & Stability Points (`/calculator-puncte-pensie/`), Pillar II Mandatory Private (`/calculator-pensie-pilon-2/`), Pillar III Voluntary Private (`/calculator-pensie-pilon-3/`), Downloadable Excel CSV (`/program-excel-calcul-pensie/`).
- Embeddable attribution widget (`EmbedCalculatorBox`) and printable/downloadable resources (`/ghid-calcul-pensie-2026.pdf`, `/template-calcul-pensie.csv`, `/tools.json`, `/llms.txt`).

## Official 2026 Parameters (source: client/src/lib/pension-calculations.ts)
- VPR (Valoarea Punctului de Referință): `81 Lei` (OUG nr. 156/2024 & Legea nr. 141/2025).
- Budgetary Average Gross Salary (`AVERAGE_GROSS_SALARY_2026`): `9.192 Lei` (Legea nr. 44/2026).
- Minimum Guaranteed Social Pension (`MINIMUM_PENSION_2026`): `1.281 Lei/month`.
- Minimum Gross Wage (`MINIMUM_WAGE_2026`): `4.050 Lei` (retroactive seniority buyback cost: 25% = `1.012,50 Lei/month` up to 6 years).
- Pension Taxation 2026 (`estimateNetPension2026`): 0% under `3.000 Lei`; above `3.000 Lei`, `10% CASS` on excess + `10%` income tax on taxable remainder above `3.000 Lei`.
- Stability Points (`calculateStabilityPoints`, Art. 85 Legea 360/2023): `+0.50/yr` for years 26-30, `+0.75/yr` for years 31-35, `+1.00/yr` above 35 contributory years.
- Pillar II Mandatory Rate: `4.75%` of gross salary (from 25% CAS).
- Pillar III Tax Deductibility: `400 EUR/year` (~166 Lei/month) employee + separate `400 EUR/year` employer.

## Boundaries (what we do NOT do)
- Not affiliated with CNPP (Casa Națională de Pensii Publice) or ASF.
- Does not store user salaries or personal data on backend servers for calculations.
- Estimates do not replace official CNPP pension decisions based on complete lifetime monthly D112 records.
