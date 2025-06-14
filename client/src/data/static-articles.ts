// Static articles data for Netlify deployment
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  slug: string;
  published: boolean;
  content?: string;
}

export const staticArticles: Article[] = [
  {
    id: 1,
    title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
    excerpt: "Descoperă cele mai comune greșeli pe care românii le fac când își planifică pensia și cum să le eviți pentru un viitor financiar sigur.",
    category: "planificare",
    publishDate: "2024-12-15",
    readTime: 8,
    slug: "top-5-greseli-planificare-pensie",
    published: true,
    content: `Planificarea pensiei este una dintre cele mai importante decizii financiare pe care le poți lua. Din păcate, mulți români fac greșeli costisitoare care le afectează veniturile din perioada de pensie...`
  },
  {
    id: 2,
    title: "Ghid Complet: Cum să Calculezi Pensia de Stat în 2025",
    excerpt: "Înțelege formula oficială de calcul a pensiei de stat, punctajul anual și cum să îți maximizezi drepturile de pensie conform legislației actuale.",
    category: "legislatie",
    publishDate: "2024-12-10",
    readTime: 12,
    slug: "ghid-calcul-pensie-stat-2025",
    published: true,
    content: `Formula de calcul a pensiei de stat în România se bazează pe sistemul de puncte. În 2025, valoarea punctului de pensie este de 2.031 lei...`
  },
  {
    id: 3,
    title: "Pilonul III: Avantaje Fiscale și Strategii de Investiție",
    excerpt: "Explorează beneficiile pensiei facultative (Pilonul III) și descoperă cum să îți optimizezi contribuțiile pentru reduceri fiscale maxime.",
    category: "tipuri-pensii",
    publishDate: "2024-12-05",
    readTime: 10,
    slug: "pilonul-3-avantaje-fiscale-strategii",
    published: true,
    content: `Pilonul III de pensii oferă românilor posibilitatea de a-și suplimenta pensia de stat prin contribuții voluntare...`
  },
  {
    id: 4,
    title: "Pensia Anticipată: Când Poți Ieși Mai Devreme la Pensie",
    excerpt: "Află în ce condiții poți opta pentru pensia anticipată, care sunt penalizările și cum să îți calculezi cuantumul pensiei reduse.",
    category: "legislatie",
    publishDate: "2024-11-28",
    readTime: 7,
    slug: "pensie-anticipata-conditii-penalizari",
    published: true,
    content: `Pensia anticipată permite ieșirea din sistemul de muncă cu câțiva ani înainte de vârsta standard de pensionare...`
  },
  {
    id: 5,
    title: "Condiții Speciale de Muncă: Impact asupra Pensiei",
    excerpt: "Înțelege cum condițiile deosebite și speciale de muncă influențează calculul pensiei și vârsta de pensionare în România.",
    category: "legislatie",
    publishDate: "2024-11-20",
    readTime: 9,
    slug: "conditii-speciale-munca-impact-pensie",
    published: true,
    content: `Condițiile speciale și deosebite de muncă oferă avantaje semnificative în calculul pensiei și vârsta de pensionare...`
  },
  {
    id: 6,
    title: "Stagiul de Cotizare: Cum să Îți Cumperi Ani de Muncă",
    excerpt: "Descoperă metodele legale prin care poți completa stagiul de cotizare necesar pentru pensia completă prin cumpărarea de ani de muncă.",
    category: "planificare",
    publishDate: "2024-11-15",
    readTime: 11,
    slug: "stagiul-cotizare-cumparare-ani-munca",
    published: true,
    content: `Cumpărarea de stagiu de cotizare este o opțiune legală pentru cei care nu au suficienți ani de muncă...`
  },
  {
    id: 7,
    title: "Pensia de Urmaș: Drepturi și Proceduri de Solicitare",
    excerpt: "Ghid complet despre pensia de urmaș în România: cine are dreptul, cum se calculează și care sunt pașii pentru obținerea acesteia.",
    category: "tipuri-pensii",
    publishDate: "2024-11-08",
    readTime: 8,
    slug: "pensia-urmas-drepturi-proceduri",
    published: true,
    content: `Pensia de urmaș oferă protecție financiară familiei în cazul decesului celui care lucra și cotiza...`
  },
  {
    id: 8,
    title: "Reforma Sistemului de Pensii: Ce Se Schimbă în 2025",
    excerpt: "Analizează cele mai recente modificări legislative în sistemul de pensii român și cum vor afecta aceasta drepturile tale viitoare.",
    category: "legislatie",
    publishDate: "2024-11-01",
    readTime: 13,
    slug: "reforma-sistem-pensii-2025",
    published: true,
    content: `Sistemul de pensii din România trece prin modificări importante în 2025, cu impact direct asupra beneficiarilor...`
  },
  {
    id: 9,
    title: "Calculul Pensiei pentru Freelanceri și PFA",
    excerpt: "Înțelege specificul calculului pensiei pentru persoanele fizice autorizate și freelanceri: contribuții, stagiu și drepturi speciale.",
    category: "planificare",
    publishDate: "2024-10-25",
    readTime: 10,
    slug: "calculul-pensiei-freelanceri-pfa",
    published: true,
    content: `Freelancerii și PFA-urile au reguli specifice pentru calculul pensiei, diferite de angajații cu contract de muncă...`
  },
  {
    id: 10,
    title: "Transferul Drepturilor de Pensie între Țări UE",
    excerpt: "Ghid pentru românii care au lucrat în străinătate: cum să îți transferi drepturile de pensie și să beneficiezi de totalitate.",
    category: "tipuri-pensii",
    publishDate: "2024-10-18",
    readTime: 15,
    slug: "transfer-drepturi-pensie-ue",
    published: true,
    content: `Românii care au lucrat în alte țări UE pot beneficia de totalitatea drepturilor de pensie prin transferul între sisteme...`
  },
  {
    id: 11,
    title: "Optimizarea Fiscală a Contribuțiilor la Pensie",
    excerpt: "Strategii avansate pentru optimizarea fiscală a contribuțiilor la toate piloanele de pensie și maximizarea beneficiilor fiscale.",
    category: "planificare",
    publishDate: "2024-10-10",
    readTime: 12,
    slug: "optimizare-fiscala-contributii-pensie",
    published: true,
    content: `Optimizarea fiscală a contribuțiilor la pensie poate aduce economii semnificative și beneficii pe termen lung...`
  },
  {
    id: 12,
    title: "Simulare Pensie: Instrumente și Metode de Calcul",
    excerpt: "Prezentare detaliată a instrumentelor disponibile pentru simularea pensiei și metodele cele mai precise de estimare a veniturilor viitoare.",
    category: "tipuri-pensii",
    publishDate: "2024-10-03",
    readTime: 9,
    slug: "simulare-pensie-instrumente-metode",
    published: true,
    content: `Simularea pensiei este esențială pentru planificarea financiară. Există mai multe instrumente și metode disponibile...`
  }
];

// Helper functions
export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'all') return staticArticles.filter(a => a.published);
  return staticArticles.filter(a => a.published && a.category === category);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return staticArticles
    .filter(a => a.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return staticArticles.find(a => a.slug === slug && a.published);
};

export const searchArticles = (searchTerm: string): Article[] => {
  const term = searchTerm.toLowerCase();
  return staticArticles.filter(a => 
    a.published && (
      a.title.toLowerCase().includes(term) ||
      a.excerpt.toLowerCase().includes(term) ||
      a.content?.toLowerCase().includes(term)
    )
  );
};