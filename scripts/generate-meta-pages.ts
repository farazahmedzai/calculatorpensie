import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticArticles } from '../client/src/data/static-articles.ts';

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
}

const staticRoutes: Record<string, PageMeta> = {
  '/': {
    title: 'Calculator Pensie 2026: Află Pensia de Stat (Legea 360)',
    description: 'Calculează online pensia de stat în 2026. Află exact punctajul și valoarea pensiei pe baza noii Legi 360/2023.',
    canonical: 'https://calculatorpensie.com/',
    keywords: 'calculator pensie romania, calcul pensie de stat, pensie anticipata, pilon III, calculator pilon 3'
  },
  '/calculator-pensie-anticipata': {
    title: 'Calculator Pensie Anticipată 2026 | Află Penalizarea (Legea 360)',
    description: 'Calculează penalizarea aplicată pentru pensionarea anticipată în România. Află vârsta minimă, stagiul necesar și procentul de reducere conform Legii 360/2023.',
    canonical: 'https://calculatorpensie.com/calculator-pensie-anticipata/',
    keywords: 'calculator pensie anticipata, pensie anticipata cu penalizare, varsta pensionare anticipata, legea pensiilor 360/2023'
  },
  '/calculator-varsta-pensionare': {
    title: 'Calculator Vârstă Pensionare 2026 | Data Exactă Limită de Vârstă',
    description: 'Calculează vârsta legală de pensionare în România pentru femei și bărbați. Află data exactă la care te poți pensiona și stagiul de cotizare necesar.',
    canonical: 'https://calculatorpensie.com/calculator-varsta-pensionare/',
    keywords: 'calculator varsta pensionare, cand ies la pensie, varsta pensionare femei romania, stagiu cotizare obligatoriu'
  },
  '/calculator-puncte-pensie': {
    title: 'Calculator Puncte Pensie 2026 | Puncte de Stabilitate Noua Lege',
    description: 'Calculează numărul total de puncte de pensie acumulate. Află câte puncte de stabilitate primești pentru stagiul peste 25 de ani conform Legii 360/2023.',
    canonical: 'https://calculatorpensie.com/calculator-puncte-pensie/',
    keywords: 'calculator puncte pensie, puncte de stabilitate, calcul puncte pensie 2026, calcul puncte stabilitate noua lege'
  },
  '/calculator-pensie-pilon-2': {
    title: 'Calculator Pensie Pilon 2 2026 | Capitalizare și Profit',
    description: 'Calculează suma strânsă în contul tău de pensie privată obligatorie Pilonul II. Proiectează-ți acumulările pe baza contribuției lunare de 4.75% din salariu.',
    canonical: 'https://calculatorpensie.com/calculator-pensie-pilon-2/',
    keywords: 'calculator pensie pilon 2, pilonul ii pensii private, randament pilon 2, fond de pensii privat'
  },
  '/program-excel-calcul-pensie': {
    title: 'Program Excel Calcul Pensie 2026 (Download Gratuit)',
    description: 'Descarcă simulatorul Excel gratuit pentru pensia de stat 2026. Introdu salariul și calculează automat punctajul lunar.',
    canonical: 'https://calculatorpensie.com/program-excel-calcul-pensie/',
    keywords: 'program excel calcul pensie, tabel excel calcul pensie de stat, simulator pensie excel gratis, descarca calculator pensie xls'
  },
  '/planificare': {
    title: 'Planificare Pensie România | Ghid Practic 2026',
    description: 'Ghid complet pentru planificarea pensiei în România. Strategii pentru economisire voluntară, pensie privată facultativă și optimizare fiscală.',
    canonical: 'https://calculatorpensie.com/planificare/',
    keywords: 'planificare pensie, pensie privata, pilon 3, deducere fiscala, pensie voluntara'
  },
  '/tipuri-pensii': {
    title: 'Tipuri de Pensii în România | Ghid Complet 2026',
    description: 'Descoperă toate tipurile de pensii din sistemul public din România: limită de vârstă, anticipată, de invaliditate și de urmaș. Condiții oficiale și documente.',
    canonical: 'https://calculatorpensie.com/tipuri-pensii/',
    keywords: 'tipuri pensii, pensie limita de varsta, pensie anticipata, pensie invaliditate, pensie urmas'
  },
  '/legislatie': {
    title: 'Legea Pensiilor 2026 | Ghid Legislativ Oficial CNPP',
    description: 'Ghid complet despre legislația pensiilor din România în 2026. Condiții de pensionare, recalculare, stagiul de cotizare și valoarea punctului de referință (VPR).',
    canonical: 'https://calculatorpensie.com/legislatie/',
    keywords: 'legea pensiilor 2026, legislatie pensii romania, vpr 2026, cnpp legea'
  },
  '/blog': {
    title: 'Blog Pensii România 2026 - Ghiduri Complete și Noutăți | CalculatorPensie.com',
    description: 'Citește cele mai recente articole despre pensii în România. Ghiduri de planificare, analize legislative și sfaturi de la experți pentru a-ți optimiza pensia.',
    canonical: 'https://calculatorpensie.com/blog/',
    keywords: 'blog pensii romania, ghid pensie, noutati pensii, planificare pensie, legislatie pensii'
  },
  '/despre-noi': {
    title: 'Despre CalculatorPensie: Experți în Legislația Pensiilor',
    description: 'Află mai multe despre CalculatorPensie.com, misiunea noastră de a oferi calculatoare de pensie precise și resurse educaționale pentru românii care își planifică viitorul financiar.',
    canonical: 'https://calculatorpensie.com/despre-noi/',
    keywords: 'despre calculatorpensie, misiune pensii romania, echipa calculatoare pensie'
  },
  '/metodologie': {
    title: 'Metodologie Calcul Pensie - Formulele Oficiale CNPP | CalculatorPensie.com',
    description: 'Descoperă metodologia completă de calcul a pensiei folosită de CalculatorPensie.com. Formulele oficiale CNPP, sursele legislative și transparența calculelor.',
    canonical: 'https://calculatorpensie.com/metodologie/',
    keywords: 'metodologie calcul pensie, formula pensie romania, cnpp, legea pensiilor, puncte de stabilitate, vpr 2026'
  },
  '/contact': {
    title: 'Contact - CalculatorPensie.com | Întrebări și Suport',
    description: 'Contactează echipa CalculatorPensie.com pentru întrebări despre calculatoarele de pensie, sugestii de îmbunătățire sau suport tehnic. Răspundem în 24 ore.',
    canonical: 'https://calculatorpensie.com/contact/',
    keywords: 'contact calculatorpensie, suport pensii romania, intrebari calculator pensie'
  },
  '/privacy': {
    title: 'Politică de Confidențialitate - CalculatorPensie.com | Protecția Datelor',
    description: 'Politica de confidențialitate a CalculatorPensie.com. Află cum protejăm datele tale personale și ce informații colectăm când folosești calculatoarele de pensie.',
    canonical: 'https://calculatorpensie.com/privacy/',
    keywords: 'politica confidentialitate, protectia datelor, gdpr, calculatorpensie'
  },
  '/terms': {
    title: 'Termeni și Condiții - CalculatorPensie.com | Reguli de Utilizare',
    description: 'Termenii și condițiile de utilizare a platformei CalculatorPensie.com. Citește regulile de folosire a calculatoarelor noastre de pensie și disclaimerele legale.',
    canonical: 'https://calculatorpensie.com/terms/',
    keywords: 'termeni si conditii, reguli utilizare, disclaimer legal, calculatorpensie'
  },
  '/faq': {
    title: 'Întrebări Frecvente - Calculator Pensie România | FAQ Pensii 2026',
    description: 'Răspunsuri la întrebările frecvente despre pensii în România. Află la ce vârstă te poți pensiona, cum se calculează pensia și care sunt avantajele Pilonului III.',
    canonical: 'https://calculatorpensie.com/faq/',
    keywords: 'intrebari frecvente pensii, FAQ pensii romania, varsta pensionare, legea 360/2023, vpr 2026, puncte de stabilitate'
  }
};

function replaceMeta(html: string, meta: PageMeta, bodyContent?: string): string {
  let result = html;

  result = result.replace(/<title>[^<]*<\/title>/i, `<title>${meta.title}</title>`);
  
  result = result.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  result = result.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  result = result.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );

  result = result.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );

  result = result.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );

  // Add keywords tag and twitter card
  const additionalTags = `
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="twitter:card" content="summary_large_image" />
  `;
  if (/<meta\s+name=["']keywords["']/i.test(result)) {
    result = result.replace(/<meta\s+name=["']keywords["']\s+content=["'][^"']*["']\s*\/?>/i, additionalTags);
  } else {
    result = result.replace(/<\/head>/i, `${additionalTags}\n</head>`);
  }

  // Inject visually hidden SEO content so Googlebot parses actual text before JS hydration
  const srOnlyStyle = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;';
  let injectedBody = `\n    <h1 style="${srOnlyStyle}">${meta.title}</h1>`;
  if (bodyContent) {
    injectedBody += `\n    <article style="${srOnlyStyle}">\n      <p>${bodyContent}</p>\n    </article>`;
  }
  
  result = result.replace(/<body>/i, `<body>${injectedBody}`);

  return result;
}

function main() {
  const rootPath = path.resolve(__dirname, '..');
  const distPublicPath = path.join(rootPath, 'dist', 'public');
  const templatePath = path.join(distPublicPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`Base template not found at ${templatePath}. Did you run the build step first?`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log('Generating pre-rendered static pages with route-specific metadata...');

  // 1. Generate static pages from staticRoutes mapping
  for (const [route, meta] of Object.entries(staticRoutes)) {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    const targetDir = path.join(distPublicPath, cleanRoute);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const preRenderedHtml = replaceMeta(baseHtml, meta, meta.description);
    fs.writeFileSync(path.join(targetDir, 'index.html'), preRenderedHtml, 'utf-8');
    console.log(`- Pre-rendered static route: /${cleanRoute}`);
  }

  // 2. Generate static pages for dynamic blog articles
  console.log(`Found ${staticArticles.length} blog articles to pre-render.`);
  for (const article of staticArticles) {
    if (!article.published) continue;

    const route = `blog/${article.slug}`;
    const targetDir = path.join(distPublicPath, route);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const meta: PageMeta = {
      title: `${article.title} | CalculatorPensie.com`,
      description: article.excerpt,
      canonical: `https://calculatorpensie.com/blog/${article.slug}/`,
      keywords: `${article.category}, pensii romania, ${article.title.toLowerCase()}`
    };

    const articleBodyText = article.excerpt + " " + (article.content.length > 1000 ? article.content.slice(0, 1000) + '...' : article.content);
    const preRenderedHtml = replaceMeta(baseHtml, meta, articleBodyText);
    fs.writeFileSync(path.join(targetDir, 'index.html'), preRenderedHtml, 'utf-8');
    console.log(`- Pre-rendered dynamic blog route: /${route}`);
  }

  console.log('All static meta pre-rendering completed successfully!');
}

main();
