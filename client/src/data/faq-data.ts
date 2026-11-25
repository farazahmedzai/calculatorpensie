export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

// Single source of truth for both visible homepage FAQ UI and FAQPage JSON-LD schema.
export const HOMEPAGE_FAQ_DATA: FAQEntry[] = [
  {
    id: "retirement-age",
    question: "La ce vârstă mă pot pensiona în România?",
    answer:
      "Conform Legii nr. 360/2023 (Anexa nr. 5), vârsta standard de pensionare este de 65 de ani pentru bărbați (cu stagiu complet de 35 de ani), iar pentru femei crește gradual de la 62 de ani și 6-7 luni în 2026 spre 63 de ani în 2030 și 65 de ani în 2035. Stagiul minim de cotizare contributiv este de 15 ani.",
  },
  {
    id: "pension-point-value",
    question: "Care este valoarea punctului de referință (VPR) în 2026?",
    answer:
      "În anul 2026, Valoarea Punctului de Referință (VPR) este de 81 lei, fiind menținută la nivelul din septembrie 2024 și 2025 prin OUG nr. 156/2024 și Legea nr. 141/2025 (indexarea prognozată spre 91 lei a fost suspendată prin actele normativ-bugetare).",
  },
  {
    id: "pension-calculation-formula",
    question: "Cum se calculează exact pensia de stat?",
    answer:
      "Conform Legii nr. 360/2023, pensia brută lunară se calculează cu formula: Număr Total de Puncte × Valoarea Punctului de Referință (VPR = 81 lei în 2026). Numărul total de puncte însumează punctele de contributivitate, punctele de stabilitate și punctele necontributive/asimilate.",
  },
  {
    id: "stability-points",
    question: "Ce sunt punctele de stabilitate și cum se acordă?",
    answer:
      "Punctele de stabilitate sunt bonificații acordate pentru stagiul contributiv ce depășește 25 de ani: +0,50 puncte/an pentru anii 26-30, +0,75 puncte/an pentru anii 31-35 și +1,00 punct/an pentru fiecare an peste 35 de ani.",
  },
  {
    id: "early-retirement",
    question: "Cum se calculează pensia anticipată?",
    answer:
      "Pensia anticipată se poate solicita cu cel mult 5 ani înainte de vârsta standard dacă s-a realizat stagiul complet de cotizare contributiv. Sub Legea 360/2023, penalizarea este între 0,15% și 0,40% pe lună de anticipare, iar la depășirea stagiului complet cu minimum 5 ani (sau conform tranșelor legale de 5-8 ani peste stagiu) reducerea scade semnificativ ori dispare la împlinirea vârstei standard.",
  },
  {
    id: "minimum-pension",
    question: "Care este pensia minimă garantată în România în 2026?",
    answer:
      "Indemnizația socială pentru pensionari (pensia minimă garantată) este de 1.281 lei pe lună în 2026. Dacă pensia calculată pe baza punctajului este sub acest prag, statul completează diferența de la buget pentru beneficiarii cu domiciliul în România.",
  },
  {
    id: "pension-taxes-2026",
    question: "Ce taxe (impozit și CASS) se rețin din pensie în 2026?",
    answer:
      "Pensiile de până la 3.000 lei nu sunt supuse impozitului pe venit și nici contribuției la sănătate (CASS). Pentru pensiile ce depășesc 3.000 lei, conform Legii nr. 141/2025 se reține CASS de 10% exclusiv pentru partea care depășește 3.000 lei, precum și impozit de 10% pe venitul impozabil rămas peste plafonul neimpozabil de 3.000 lei.",
  },
  {
    id: "check-contribution-stage",
    question: "Unde pot vedea stagiul meu de cotizare oficial?",
    answer:
      "Îți poți verifica stagiul exact de cotizare și punctajul lunar creând un cont online pe portalul Casei Naționale de Pensii Publice (cnpp.ro -> Datele mele -> Stagii de cotizare) sau solicitând un extras la casa teritorială de pensii cu actul de identitate.",
  },
  {
    id: "work-conditions-pension",
    question: "Cum influențează condițiile de muncă pensia?",
    answer:
      "Munca în condiții deosebite sau speciale acordă reduceri ale vârstei standard de pensionare și punctaj suplimentar pentru perioadele lucrate în aceste grupe, conform anexelor și condițiilor din Legea nr. 360/2023.",
  },
  {
    id: "pillar3-benefits",
    question: "Ce beneficii are Pilonul III (pensia facultativă)?",
    answer:
      "Pilonul III oferă deductibilitate fiscală de până la 400 EUR anual (aproximativ 166 lei/lună) atât pentru contribuția angajatului, cât și separat pentru cea a angajatorului, sumele acumulate fiind proprietate privată și moștenibile.",
  },
];
