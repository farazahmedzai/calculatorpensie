import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticArticles } from '../client/src/data/static-articles.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticRoutes = [
  'calculator',
  'calculator-pensie-anticipata',
  'calculator-varsta-pensionare',
  'calculator-puncte-pensie',
  'calculator-pensie-pilon-2',
  'program-excel-calcul-pensie',
  'planificare',
  'tipuri-pensii',
  'legislatie',
  'blog',
  'despre-noi',
  'metodologie',
  'contact',
  'privacy',
  'terms',
  'faq'
];

function main() {
  const rootPath = path.resolve(__dirname, '..');
  const distPublicPath = path.join(rootPath, 'dist', 'public');
  let errors = 0;

  console.log('Running automated verification of generated static HTML files...');

  // Helper function to verify tags
  const verifyFile = (filePath: string, route: string, expectedTitle: string, expectedDesc: string) => {
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: Static file missing for route /${route} at ${filePath}`);
      errors++;
      return;
    }

    const html = fs.readFileSync(filePath, 'utf-8');

    // Title validation
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch) {
      console.error(`❌ Error: No title tag found in /${route}`);
      errors++;
    } else if (titleMatch[1] !== expectedTitle) {
      console.error(`❌ Error: Title mismatch in /${route}.\n   Expected: "${expectedTitle}"\n   Got:      "${titleMatch[1]}"`);
      errors++;
    }

    // Description validation
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (!descMatch) {
      console.error(`❌ Error: No description meta tag found in /${route}`);
      errors++;
    } else if (descMatch[1] !== expectedDesc) {
      console.error(`❌ Error: Description mismatch in /${route}.\n   Expected: "${expectedDesc}"\n   Got:      "${descMatch[1]}"`);
      errors++;
    }

    // Canonical validation
    const expectedCanonical = `https://calculatorpensie.com/${route}`;
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (!canonicalMatch) {
      console.error(`❌ Error: No canonical link found in /${route}`);
      errors++;
    } else if (canonicalMatch[1] !== expectedCanonical) {
      console.error(`❌ Error: Canonical mismatch in /${route}.\n   Expected: "${expectedCanonical}"\n   Got:      "${canonicalMatch[1]}"`);
      errors++;
    }

    // Open Graph title and desc validation
    const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
    if (!ogTitleMatch || ogTitleMatch[1] !== expectedTitle) {
      console.error(`❌ Error: OG Title mismatch in /${route}`);
      errors++;
    }

    const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
    if (!ogDescMatch || ogDescMatch[1] !== expectedDesc) {
      console.error(`❌ Error: OG Description mismatch in /${route}`);
      errors++;
    }

    const ogUrlMatch = html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i);
    if (!ogUrlMatch || ogUrlMatch[1] !== expectedCanonical) {
      console.error(`❌ Error: OG URL mismatch in /${route}`);
      errors++;
    }

    console.log(`✅ Verified route: /${route}`);
  };

  // 1. Verify static routes
  const staticRoutesMeta: Record<string, { title: string; desc: string }> = {
    'calculator': {
      title: 'Calculator Pensie de Stat 2025 | Estimare Online',
      desc: 'Utilizează calculatoarele noastre avansate pentru a afla pensia de stat, pensia anticipată și contribuțiile Pilonul III. Calcule precise bazate pe legislația română actualizată.'
    },
    'calculator-pensie-anticipata': {
      title: 'Calculator Pensie Anticipată 2025 | Penalizări și Vârstă',
      desc: 'Calculează penalizarea aplicată pentru pensionarea anticipată în România. Află vârsta minimă, stagiul necesar și procentul de reducere conform Legii 360/2023.'
    },
    'calculator-varsta-pensionare': {
      title: 'Calculator Vârstă Pensionare 2025 | Data Exactă Limită de Vârstă',
      desc: 'Calculează vârsta legală de pensionare în România pentru femei și bărbați. Află data exactă la care te poți pensiona și stagiul de cotizare necesar.'
    },
    'calculator-puncte-pensie': {
      title: 'Calculator Puncte Pensie 2025 | Puncte de Stabilitate Noua Lege',
      desc: 'Calculează numărul total de puncte de pensie acumulate. Află câte puncte de stabilitate primești pentru stagiul peste 25 de ani conform Legii 360/2023.'
    },
    'calculator-pensie-pilon-2': {
      title: 'Calculator Pensie Pilon 2 2025 | Capitalizare și Profit',
      desc: 'Calculează suma strânsă în contul tău de pensie privată obligatorie Pilonul II. Proiectează-ți acumulările pe baza contribuției lunare de 4.75% din salariu.'
    },
    'program-excel-calcul-pensie': {
      title: 'Program Excel Calcul Pensie | Descărcare Simulator 2025',
      desc: 'Descarcă gratuit simulatorul Excel (.csv) pentru calculul pensiei din România în 2025. Introduceți salariul pentru a estima punctele lunare și pensia CNPP.'
    },
    'planificare': {
      title: 'Planificare Pensie România | Ghid Practic 2025',
      desc: 'Ghid complet pentru planificarea pensiei în România. Strategii pentru economisire voluntară, pensie privată facultativă și optimizare fiscală.'
    },
    'tipuri-pensii': {
      title: 'Tipuri de Pensii în România | Ghid Complet 2025',
      desc: 'Descoperă toate tipurile de pensii din sistemul public din România: limită de vârstă, anticipată, de invaliditate și de urmaș. Condiții oficiale și documente.'
    },
    'legislatie': {
      title: 'Legea Pensiilor 2025 | Ghid Legislativ Oficial CNPP',
      desc: 'Ghid complet despre legislația pensiilor din România în 2025. Condiții de pensionare, recalculare, stagiul de cotizare și valoarea punctului de referință (VPR).'
    },
    'blog': {
      title: 'Blog Pensii România 2025 - Ghiduri Complete și Noutăți | CalculatorPensie.com',
      desc: 'Citește cele mai recente articole despre pensii în România. Ghiduri de planificare, analize legislative și sfaturi de la experți pentru a-ți optimiza pensia.'
    },
    'despre-noi': {
      title: 'Despre Noi - CalculatorPensie.com | Misiunea și Echipa Noastră',
      desc: 'Află mai multe despre CalculatorPensie.com, misiunea noastră de a oferi calculatoare de pensie precise și resurse educaționale pentru românii care își planifică viitorul financiar.'
    },
    'metodologie': {
      title: 'Metodologie Calcul Pensie - Formulele Oficiale CNPP | CalculatorPensie.com',
      desc: 'Descoperă metodologia completă de calcul a pensiei folosită de CalculatorPensie.com. Formulele oficiale CNPP, sursele legislative și transparența calculelor.'
    },
    'contact': {
      title: 'Contact - CalculatorPensie.com | Întrebări și Suport',
      desc: 'Contactează echipa CalculatorPensie.com pentru întrebări despre calculatoarele de pensie, sugestii de îmbunătățire sau suport tehnic. Răspundem în 24 ore.'
    },
    'privacy': {
      title: 'Politică de Confidențialitate - CalculatorPensie.com | Protecția Datelor',
      desc: 'Politica de confidențialitate a CalculatorPensie.com. Află cum protejăm datele tale personale și ce informații colectăm când folosești calculatoarele de pensie.'
    },
    'terms': {
      title: 'Termeni și Condiții - CalculatorPensie.com | Reguli de Utilizare',
      desc: 'Termenii și condițiile de utilizare a platformei CalculatorPensie.com. Citește regulile de folosire a calculatoarelor noastre de pensie și disclaimerele legale.'
    },
    'faq': {
      title: 'Întrebări Frecvente - Calculator Pensie România | FAQ Pensii 2025',
      desc: 'Răspunsuri la întrebările frecvente despre pensii în România. Află la ce vârstă te poți pensiona, cum se calculează pensia și care sunt avantajele Pilonului III.'
    }
  };

  for (const route of staticRoutes) {
    const filePath = path.join(distPublicPath, route, 'index.html');
    const meta = staticRoutesMeta[route];
    verifyFile(filePath, route, meta.title, meta.desc);
  }

  // 2. Verify dynamic blog articles
  for (const article of staticArticles) {
    if (!article.published) continue;
    const route = `blog/${article.slug}`;
    const filePath = path.join(distPublicPath, route, 'index.html');
    const expectedTitle = `${article.title} | CalculatorPensie.com`;
    verifyFile(filePath, route, expectedTitle, article.excerpt);
  }

  if (errors > 0) {
    console.error(`\n❌ Verification completed with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log('\n✨ Verification successful! All pre-rendered files contain the correct metadata.');
  }
}

main();
