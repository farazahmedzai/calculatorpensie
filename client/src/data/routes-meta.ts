import { HOMEPAGE_FAQ_DATA } from "./faq-data";

export interface BreadcrumbDef {
  name: string;
  url?: string;
}

export type PageSchemaKind =
  | "calculator"
  | "collection"
  | "faq"
  | "article"
  | "webpage";

export interface RouteMetaDef {
  path: string;
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogType: "website" | "article";
  schemaKind: PageSchemaKind;
  schemaName: string;
  breadcrumbs: BreadcrumbDef[];
  appCategory?: string;
  datePublished?: string;
  dateModified?: string;
}

export const SITE_ORIGIN = "https://calculatorpensie.com";
export const SITE_NAME = "CalculatorPensie.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
export const DEFAULT_LOGO_IMAGE = `${SITE_ORIGIN}/logo.png`;

export function normalizeCanonicalUrl(url: string): string {
  try {
    const u = new URL(url.startsWith("http") ? url : `${SITE_ORIGIN}${url.startsWith("/") ? url : `/${url}`}`);
    if (!u.pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(u.pathname)) {
      u.pathname = `${u.pathname}/`;
    }
    return `${SITE_ORIGIN}${u.pathname}`;
  } catch {
    return `${SITE_ORIGIN}/`;
  }
}

export function normalizePath(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0] || "/";
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export const ROUTES_META: Record<string, RouteMetaDef> = {
  "/": {
    path: "/",
    title: "Calculator Pensie România 2026 - Calculează Pensia Online | Legea 360/2023",
    description:
      "Calculator pensie #1 în România actualizat pentru 2026 (VPR 81 lei). Simulează pensia de stat, vârsta de pensionare și punctele de stabilitate conform Legii 360/2023. Gratuit!",
    canonical: "https://calculatorpensie.com/",
    keywords:
      "calculator pensie, calcul pensie, simulare pensie, cnpp calculator pensie, legea 360/2023, vpr 2026, puncte de stabilitate, calculator pensie romania",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Pensie România 2026 (Legea 360/2023)",
    breadcrumbs: [{ name: "Acasă", url: "https://calculatorpensie.com/" }],
  },
  "/calculator-pensie-anticipata/": {
    path: "/calculator-pensie-anticipata/",
    title: "Calculator Pensie Anticipată 2026 | Penalizări și Vârstă Legea 360/2023",
    description:
      "Calculează penalizarea lunară (0,15%–0,40%) pentru pensionarea anticipată în 2026. Verifică stagiul complet necesar și comparația cu pensia standard.",
    canonical: "https://calculatorpensie.com/calculator-pensie-anticipata/",
    keywords:
      "calculator pensie anticipata, pensie anticipata cu penalizare, varsta pensionare anticipata, penalizare pensie 2026, legea 360/2023",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Pensie Anticipată 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Calculator Pensie Anticipată", url: "https://calculatorpensie.com/calculator-pensie-anticipata/" },
    ],
  },
  "/calculator-varsta-pensionare/": {
    path: "/calculator-varsta-pensionare/",
    title: "Calculator Vârstă Pensionare 2026 | Când Iei Pensia (Anexa 5)",
    description:
      "Află exact anul și luna în care te poți pensiona în România (bărbați și femei) conform eșalonării oficiale din Anexa 5 a Legii nr. 360/2023.",
    canonical: "https://calculatorpensie.com/calculator-varsta-pensionare/",
    keywords:
      "calculator varsta pensionare, cand ies la pensie, varsta pensionare femei 2026, anexa 5 legea 360, stagiu cotizare",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Vârstă de Pensionare România 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Calculator Vârstă Pensionare", url: "https://calculatorpensie.com/calculator-varsta-pensionare/" },
    ],
  },
  "/calculator-puncte-pensie/": {
    path: "/calculator-puncte-pensie/",
    title: "Calculator Puncte Pensie 2026 | Puncte de Stabilitate (VPR 81 Lei)",
    description:
      "Calculează punctele de contributivitate, punctele de stabilitate (+0,5 / +0,75 / +1 punct/an) și pensia brută estimată la VPR de 81 lei în 2026.",
    canonical: "https://calculatorpensie.com/calculator-puncte-pensie/",
    keywords:
      "calculator puncte pensie, puncte de stabilitate, calcul puncte pensie 2026, vpr 81 lei, punctaj pensie",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Puncte de Pensie și Stabilitate 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Calculator Puncte Pensie", url: "https://calculatorpensie.com/calculator-puncte-pensie/" },
    ],
  },
  "/calculator-pensie-pilon-2/": {
    path: "/calculator-pensie-pilon-2/",
    title: "Calculator Pensie Pilon 2 (2026) | Estimare Fond Privat Obligatoriu",
    description:
      "Simulează suma acumulată în Pilonul II de pensii private obligatorii (contribuție 4,75% din brut) până la vârsta standard de pensionare.",
    canonical: "https://calculatorpensie.com/calculator-pensie-pilon-2/",
    keywords:
      "calculator pensie pilon 2, pilonul ii pensii private, 4.75 contributie pilon 2, randament pilon 2",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Pensie Privată Pilon II",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Calculator Pensie Pilon 2", url: "https://calculatorpensie.com/calculator-pensie-pilon-2/" },
    ],
  },
  "/calculator-pensie-pilon-3/": {
    path: "/calculator-pensie-pilon-3/",
    title: "Calculator Pensie Pilon 3 (2026) | Pensie Facultativă & Deductibilitate",
    description:
      "Estimează acumularea la Pilonul III de pensii facultative și verifică economiile fiscale din plafonul deductibil de 400 EUR/an.",
    canonical: "https://calculatorpensie.com/calculator-pensie-pilon-3/",
    keywords:
      "calculator pensie pilon 3, pensie facultativa pilon 3, deductibilitate 400 euro pensie, simulator pilon 3",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Calculator Pensie Facultativă Pilon III",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Calculator Pensie Pilon 3", url: "https://calculatorpensie.com/calculator-pensie-pilon-3/" },
    ],
  },
  "/program-excel-calcul-pensie/": {
    path: "/program-excel-calcul-pensie/",
    title: "Program Excel Calcul Pensie 2026 | Download Gratuit Simulator CSV",
    description:
      "Descarcă gratuit șablonul tabelar Excel (.csv) pentru calculul pensiei de stat în 2026 cu VPR 81 lei, punctaj lunar și Pilon II.",
    canonical: "https://calculatorpensie.com/program-excel-calcul-pensie/",
    keywords:
      "program excel calcul pensie, tabel excel calcul pensie, simulator pensie excel gratis, descarca tabel pensii",
    ogType: "website",
    schemaKind: "calculator",
    schemaName: "Program Excel Calcul Pensie 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Program Excel Calcul Pensie", url: "https://calculatorpensie.com/program-excel-calcul-pensie/" },
    ],
  },
  "/planificare/": {
    path: "/planificare/",
    title: "Planificare Pensie România 2026 | Ghid Strategii Pilon I, II și III",
    description:
      "Ghid practic pentru planificarea financiară a pensionării în România: combinarea Pilonului I, II și III, deductibilitate fiscală și prevenirea greșelilor comune.",
    canonical: "https://calculatorpensie.com/planificare/",
    keywords:
      "planificare pensie, strategie pensionare, pilon 2 vs pilon 3, pensie suplimentara",
    ogType: "article",
    schemaKind: "article",
    schemaName: "Ghid de Planificare a Pensiei în România 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Planificare Pensie", url: "https://calculatorpensie.com/planificare/" },
    ],
    datePublished: "2026-01-15",
    dateModified: "2026-11-25",
  },
  "/tipuri-pensii/": {
    path: "/tipuri-pensii/",
    title: "Tipuri de Pensii în România 2026 | Limită Vârstă, Anticipată, Invaliditate",
    description:
      "Toate categoriile de pensii din sistemul public CNPP în 2026: limită de vârstă, anticipată, de invaliditate și de urmaș — condiții și comparație.",
    canonical: "https://calculatorpensie.com/tipuri-pensii/",
    keywords:
      "tipuri de pensii romania, pensie limita de varsta, pensie anticipata, pensie invaliditate, pensie urmas",
    ogType: "article",
    schemaKind: "article",
    schemaName: "Tipuri de Pensii în România (Legea 360/2023)",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Tipuri de Pensii", url: "https://calculatorpensie.com/tipuri-pensii/" },
    ],
    datePublished: "2026-01-15",
    dateModified: "2026-11-25",
  },
  "/legislatie/": {
    path: "/legislatie/",
    title: "Legislație Pensii România 2026 | Legea 360/2023 & VPR 81 Lei",
    description:
      "Sinteză actualizată a legislației pensiilor din România în 2026: Legea nr. 360/2023, VPR 81 lei (Legea 141/2025), stagii de cotizare, Anexa 5 și CASS peste 3.000 lei.",
    canonical: "https://calculatorpensie.com/legislatie/",
    keywords:
      "legislatie pensii 2026, legea 360/2023, legea 141/2025, vpr 81 lei, stagiu cotizare pensie",
    ogType: "article",
    schemaKind: "article",
    schemaName: "Legislația Pensiilor în România 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Legislație Pensii", url: "https://calculatorpensie.com/legislatie/" },
    ],
    datePublished: "2026-01-15",
    dateModified: "2026-11-25",
  },
  "/metodologie/": {
    path: "/metodologie/",
    title: "Metodologie Calcul Pensie CNPP 2026 | Formule Oficiale Legea 360/2023",
    description:
      "Explicația matematică completă a calculului pensiei în România în 2026: punctajul de contributivitate, punctele de stabilitate și VPR de 81 lei.",
    canonical: "https://calculatorpensie.com/metodologie/",
    keywords:
      "metodologie calcul pensie, formula pensie legea 360/2023, punctaj lunar pensie, vpr 81 lei",
    ogType: "article",
    schemaKind: "article",
    schemaName: "Metodologia de Calcul a Pensiei (Legea 360/2023)",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Metodologie", url: "https://calculatorpensie.com/metodologie/" },
    ],
    datePublished: "2026-01-15",
    dateModified: "2026-11-25",
  },
  "/faq/": {
    path: "/faq/",
    title: "Întrebări Frecvente Pensii 2026 (FAQ) | VPR 81 Lei & Pensionare",
    description:
      "Răspunsuri clare la întrebările esențiale despre pensia de stat în 2026: VPR 81 lei, vârsta de pensionare, pensia anticipată, CASS peste 3.000 lei și Pilonul III.",
    canonical: "https://calculatorpensie.com/faq/",
    keywords:
      "intrebari frecvente pensii, faq pensii 2026, vpr 81 lei, cass pensii 3000 lei, varsta pensionare",
    ogType: "website",
    schemaKind: "faq",
    schemaName: "Întrebări Frecvente despre Pensii în România 2026",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Întrebări Frecvente", url: "https://calculatorpensie.com/faq/" },
    ],
  },
  "/blog/": {
    path: "/blog/",
    title: "Blog Pensii România 2026 | Ghiduri Complete & Analize CNPP",
    description:
      "Articole și ghiduri practice despre calculul pensiei de stat, VPR 81 lei, pensia anticipată, vechimea CNPP și strategiile de economisire Pilon II și III.",
    canonical: "https://calculatorpensie.com/blog/",
    keywords:
      "blog pensii romania, ghiduri pensii 2026, articole legea pensiilor, verificare vechime cnpp",
    ogType: "website",
    schemaKind: "collection",
    schemaName: "Blog Pensii România — Ghiduri și Analize",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Blog", url: "https://calculatorpensie.com/blog/" },
    ],
  },
  "/despre-noi/": {
    path: "/despre-noi/",
    title: "Despre Noi - CalculatorPensie.com | Metodologie & Politică Editorială",
    description:
      "Află cine suntem, cum verificăm formulele oficiale CNPP și angajamentul nostru pentru calcule transparente și gratuite în România.",
    canonical: "https://calculatorpensie.com/despre-noi/",
    keywords: "despre calculatorpensie, politica editoriala, simulator pensii romania",
    ogType: "website",
    schemaKind: "webpage",
    schemaName: "Despre CalculatorPensie.com",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Despre Noi", url: "https://calculatorpensie.com/despre-noi/" },
    ],
  },
  "/contact/": {
    path: "/contact/",
    title: "Contact - CalculatorPensie.com | Întrebări Tehnice & Sugestii",
    description:
      "Contactează echipa CalculatorPensie.com la contact@calculatorpensie.com pentru sugestii, sesizări de erori sau întrebări despre simulatoare.",
    canonical: "https://calculatorpensie.com/contact/",
    keywords: "contact calculatorpensie, suport simulator pensii",
    ogType: "website",
    schemaKind: "webpage",
    schemaName: "Contact CalculatorPensie.com",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Contact", url: "https://calculatorpensie.com/contact/" },
    ],
  },
  "/privacy/": {
    path: "/privacy/",
    title: "Politică de Confidențialitate - CalculatorPensie.com | GDPR",
    description:
      "Politica de confidențialitate CalculatorPensie.com: calculele se efectuează local în browser, fără stocarea salariilor sau datelor personale pe servere.",
    canonical: "https://calculatorpensie.com/privacy/",
    keywords: "politica confidentialitate, gdpr calculatorpensie, protectia datelor",
    ogType: "website",
    schemaKind: "webpage",
    schemaName: "Politică de Confidențialitate",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Politică de Confidențialitate", url: "https://calculatorpensie.com/privacy/" },
    ],
  },
  "/terms/": {
    path: "/terms/",
    title: "Termeni și Condiții - CalculatorPensie.com | Disclaimer Legal",
    description:
      "Termenii de utilizare ai CalculatorPensie.com: instrument educativ independent, neafiliat CNPP, cu scop informativ.",
    canonical: "https://calculatorpensie.com/terms/",
    keywords: "termeni si conditii, disclaimer calculator pensie",
    ogType: "website",
    schemaKind: "webpage",
    schemaName: "Termeni și Condiții",
    breadcrumbs: [
      { name: "Acasă", url: "https://calculatorpensie.com/" },
      { name: "Termeni și Condiții", url: "https://calculatorpensie.com/terms/" },
    ],
  },
};

export interface JsonLdOptions {
  meta: RouteMetaDef;
  faqQuestions?: Array<{ question: string; answer: string }>;
  articleAuthor?: string;
  articleCategory?: string;
  articleImage?: string;
}

export function buildJsonLdGraph({
  meta,
  faqQuestions,
  articleAuthor,
  articleCategory,
  articleImage,
}: JsonLdOptions): Record<string, unknown> {
  const orgId = `${SITE_ORIGIN}/#organization`;
  const siteId = `${SITE_ORIGIN}/#website`;
  const pageId = `${meta.canonical}#webpage`;

  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      description:
        "Platformă independentă din România pentru calculul estimativ al pensiei conform Legii nr. 360/2023.",
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_LOGO_IMAGE,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@calculatorpensie.com",
        availableLanguage: "Romanian",
      },
      areaServed: "RO",
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
      inLanguage: "ro-RO",
      publisher: { "@id": orgId },
    },
    {
      "@type": meta.schemaKind === "collection" ? "CollectionPage" : "WebPage",
      "@id": pageId,
      url: meta.canonical,
      name: meta.schemaName || meta.title,
      description: meta.description,
      inLanguage: "ro-RO",
      isPartOf: { "@id": siteId },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: meta.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          ...(b.url ? { item: normalizeCanonicalUrl(b.url) } : {}),
        })),
      },
    },
  ];

  if (meta.schemaKind === "calculator") {
    graph.push({
      "@type": "WebApplication",
      "@id": `${meta.canonical}#webapp`,
      name: meta.schemaName,
      description: meta.description,
      url: meta.canonical,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      inLanguage: "ro-RO",
      isAccessibleForFree: true,
      publisher: { "@id": orgId },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "RON",
      },
    });
  }

  if (meta.schemaKind === "article") {
    graph.push({
      "@type": "Article",
      "@id": `${meta.canonical}#article`,
      headline: meta.schemaName,
      description: meta.description,
      url: meta.canonical,
      mainEntityOfPage: { "@id": pageId },
      inLanguage: "ro-RO",
      author: {
        "@type": "Organization",
        name: articleAuthor || SITE_NAME,
      },
      publisher: { "@id": orgId },
      datePublished: meta.datePublished || "2026-01-15",
      dateModified: meta.dateModified || meta.datePublished || "2026-11-25",
      articleSection: articleCategory || "Legislație & Planificare Pensii",
      image: {
        "@type": "ImageObject",
        url: articleImage || DEFAULT_OG_IMAGE,
      },
    });
  }

  const effectiveFaqs =
    faqQuestions && faqQuestions.length > 0
      ? faqQuestions
      : meta.path === "/" || meta.schemaKind === "faq"
        ? HOMEPAGE_FAQ_DATA.map((f) => ({ question: f.question, answer: f.answer }))
        : undefined;

  if (effectiveFaqs && effectiveFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      mainEntity: effectiveFaqs.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
