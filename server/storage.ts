import { 
  users, 
  articles,
  pensionCalculations,
  newsletterSubscriptions,
  type User, 
  type InsertUser,
  type Article,
  type InsertArticle,
  type PensionCalculation,
  type InsertPensionCalculation,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Article methods
  getArticles(filters?: { category?: string; published?: boolean }): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getRecentArticles(limit: number): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, updates: Partial<InsertArticle>): Promise<Article>;

  // Pension calculation methods
  createPensionCalculation(calculation: InsertPensionCalculation): Promise<PensionCalculation>;
  getRecentCalculations(limit: number): Promise<PensionCalculation[]>;
  getCalculationsByType(type: string): Promise<PensionCalculation[]>;

  // Newsletter methods
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  updateNewsletterSubscription(id: number, updates: Partial<InsertNewsletterSubscription>): Promise<NewsletterSubscription>;
  getActiveNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;

  // System stats
  getSystemStats(): Promise<{
    totalCalculations: number;
    totalSubscriptions: number;
    totalArticles: number;
    recentCalculationsCount: number;
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  private pensionCalculations: Map<number, PensionCalculation>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentUserId: number;
  private currentArticleId: number;
  private currentCalculationId: number;
  private currentSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.pensionCalculations = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentArticleId = 1;
    this.currentCalculationId = 1;
    this.currentSubscriptionId = 1;

    // Initialize with some sample articles for SEO structure
    this.initializeArticles();
  }

  private initializeArticles() {
    const sampleArticles: InsertArticle[] = [
      {
        title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
        slug: "top-5-greseli-planificare-pensie",
        excerpt: "Descoperă cele mai comune greșeli pe care le fac românii când își planifică pensia și cum să le eviți pentru un viitor financiar sigur.",
        content: `# Top 5 Greșeli de Evitat în Planificarea Pensiei

Planificarea pensiei este unul dintre cele mai importante aspecte ale vieții financiare, dar multe persoane fac greșeli costisitoare care le pot afecta dramatic viitorul. Iată cele mai comune greșeli și cum să le eviți:

## 1. Amânarea Începerii Planificării

Cea mai mare greșeală este să crezi că ai suficient timp. Puterea dobânzii compuse funcționează cel mai bine pe termen lung.

## 2. Dependența Exclusivă de Sistemul Public

Sistemul public de pensii oferă doar o protecție de bază. Este esențial să diversifici sursele de venit pentru pensie.

## 3. Subestimarea Inflației

Mulți nu iau în considerare că puterea de cumpărare scade în timp din cauza inflației.

## 4. Lipsa unui Plan Clar

Fără obiective clare și o strategie bine definită, este imposibil să atingi țintele financiare.

## 5. Neglijarea Riscurilor

Nu iei în considerare riscurile precum invaliditatea sau decesul prematur care pot afecta planurile.`,
        category: "planificare",
        publishDate: "2025-01-15T10:00:00.000Z",
        readTime: 5,
        published: true,
      },
      {
        title: "Vârsta Standard de Pensionare în România: Tabelul Complet 2025",
        slug: "varsta-pensionare-romania",
        excerpt: "Ghid actualizat cu toate modificările legislative privind vârsta de pensionare pentru bărbați și femei în România.",
        content: `# Vârsta Standard de Pensionare în România: Tabelul Complet 2025

Vârsta de pensionare în România a suferit modificări importante în ultimii ani. Iată situația actualizată:

## Bărbați
- **Vârsta actuală**: 65 de ani
- **Din**: 2015 (stabil din această dată)
- **Stagiul minim**: 15 ani de cotizare
- **Stagiul complet**: 35 de ani

## Femei
- **Vârsta actuală**: 63 de ani (în 2025)
- **Evoluție**: Creștere graduală din 2015
- **Stagiul minim**: 15 ani de cotizare  
- **Stagiul complet**: 30 de ani

## Modificări Legislative Recente

Legea 263/2010 a stabilit calendarul de creștere graduală a vârstei de pensionare pentru femei.`,
        category: "legislatie",
        publishDate: "2024-12-12T10:00:00.000Z",
        readTime: 8,
        published: true,
      },
      {
        title: "Pilonul II vs. Pilonul III: Ghid de Decizie Complet",
        slug: "pilonul-ii-vs-pilonul-iii",
        excerpt: "Analiză detaliată a avantajelor și dezavantajelor fiecărui pilon de pensii private și cum să alegi cel mai potrivit pentru tine.",
        content: `# Pilonul II vs. Pilonul III: Ghid de Decizie Complet

Sistemul românesc de pensii include două piloni de pensii private. Înțelegerea diferențelor este crucială pentru optimizarea strategiei tale.

## Pilonul II - Pensii Private Obligatorii

### Caracteristici:
- **Obligatoriu** pentru cei născuți după 1 ianuarie 1977
- **Contribuția**: 3,75% din salariul brut
- **Administrare**: Fonduri de pensii private
- **Accesibilitate**: La vârsta de pensionare

### Avantaje:
- Contribuție automată
- Randamente istorice bune
- Diversificarea riscului

## Pilonul III - Pensii Private Facultative

### Caracteristici:
- **Voluntar** pentru toți contribuabilii
- **Contribuția**: La alegere (recomandat până la 400 EUR/an)
- **Avantaj fiscal**: Deductibilitate până la 400 EUR anual
- **Flexibilitate**: Poți retrage banii în anumite condiții

### Avantaje:
- Beneficiu fiscal imediat
- Control complet asupra contribuțiilor
- Flexibilitate în investiții`,
        category: "planificare",
        publishDate: "2024-12-10T10:00:00.000Z",
        readTime: 12,
        published: true,
      },
      // Additional planificare articles
      {
        title: "Strategii de Economisire pentru Pensie: Ghid Complet 2025",
        slug: "strategii-economisire-pensie",
        excerpt: "Descoperă metodele cele mai eficiente de economisire pentru pensie și calculează cât trebuie să economisești lunar pentru un trai decent.",
        content: `# Strategii de Economisire pentru Pensie: Ghid Complet 2025

Economisirea pentru pensie necesită o abordare strategică și disciplinată. Iată cele mai eficiente metode:

## Regula 10-15%

Experții recomandă economisirea a 10-15% din venitul brut pentru pensie, începând din prima lună de muncă.

## Diversificarea Investițiilor

- **40%** în acțiuni pentru creștere pe termen lung
- **30%** în obligațiuni pentru stabilitate
- **20%** în fonduri mixte
- **10%** în investiții alternative

## Planificarea Progresivă

Crește contribuțiile anual cu rata inflației plus 1-2% pentru a compensa creșterea veniturilor.`,
        category: "planificare",
        publishDate: "2024-11-28T10:00:00.000Z",
        readTime: 7,
        published: true,
      },
      {
        title: "Cum să Calculezi Pensia de Stat în România: Formula Completă",
        slug: "formula-calcul-pensie-stat",
        excerpt: "Înțelege formula exactă folosită pentru calculul pensiei de stat și descoperă cum să îți maximizezi valoarea viitoare.",
        content: `# Cum să Calculezi Pensia de Stat în România: Formula Completă

Formula de calcul a pensiei de stat din România este complexă, dar înțelegerea ei te ajută să planifici mai bine.

## Formula de Bază

**Pensia = Puncte de pensie × Valoarea punctului de pensie**

## Calculul Punctelor de Pensie

Punctele de pensie se calculează anual pe baza:
- Venitului asigurat (salariul din care s-au plătit contribuții)
- Salariul mediu brut pe economie
- Stagiul de cotizare

## Valoarea Punctului de Pensie 2025

Valoarea actuală: **2.031 Lei**

## Bonificații și Penalizări

- Copii: +0,5 puncte pentru fiecare copil
- Studii superioare: până la 2 ani
- Pensionare anticipată: -0,75% pentru fiecare lună`,
        category: "planificare",
        publishDate: "2024-11-20T10:00:00.000Z",
        readTime: 6,
        published: true,
      },
      {
        title: "Investiții pentru Pensie: Ghid pentru Începători",
        slug: "investitii-pensie-incepatori",
        excerpt: "Primii pași în investițiile pentru pensie: de la alegerea instrumentelor financiare până la strategiile pe termen lung.",
        content: `# Investiții pentru Pensie: Ghid pentru Începători

Investițiile reprezintă cea mai eficientă modalitate de a-ți asigura o pensie decentă în viitor.

## Principiile de Bază

### Diversificarea
Nu pune toate ouăle într-un singur coș. Împarte investițiile între:
- Acțiuni (40-60% la vârsta tânără)
- Obligațiuni (20-40%)
- Fonduri de investiții (10-20%)

### Orizontul de Timp
Cu cât ai mai mult timp până la pensie, cu atât poți accepta riscuri mai mari pentru randamente superioare.

## Instrumente Recomandate

- **ETF-uri**: Cost redus, diversificare automată
- **Fonduri de pensii private**: Gestionare profesională
- **Depozite bancare**: Securitate, dar randament mic`,
        category: "planificare",
        publishDate: "2024-11-05T10:00:00.000Z",
        readTime: 9,
        published: true,
      },
      // tipuri-pensii articles
      {
        title: "Pensia de Invaliditate: Condiții și Calcul 2025",
        slug: "pensia-invaliditate-conditii",
        excerpt: "Ghid complet despre pensia de invaliditate: cine are dreptul, cum se calculează și care sunt documentele necesare.",
        content: `# Pensia de Invaliditate: Condiții și Calcul 2025

Pensia de invaliditate oferă protecție financiară persoanelor care nu mai pot munci din cauza problemelor de sănătate.

## Tipuri de Invaliditate

### Gradul I (Invaliditate Ușoară)
- Capacitate de muncă redusă cu 50-69%
- Poate lucra cu adaptări

### Gradul II (Invaliditate Medie)
- Capacitate de muncă redusă cu 70-79%
- Muncă posibilă în condiții speciale

### Gradul III (Invaliditate Gravă)
- Capacitate de muncă redusă cu peste 80%
- Necesită îngrijire permanentă

## Condiții de Acordare

- Minimum 1 an de cotizare pentru invaliditatea din accident
- Minimum 5 ani pentru invaliditatea din boală comună
- Expertiza medicală favorabilă`,
        category: "tipuri-pensii",
        publishDate: "2024-11-15T10:00:00.000Z",
        readTime: 8,
        published: true,
      },
      {
        title: "Pensia de Urmaș: Drepturile Familiei",
        slug: "pensia-urmas-drepturi",
        excerpt: "Informații esențiale despre pensia de urmaș: cine are dreptul, cum se calculează și care este procedura de solicitare.",
        content: `# Pensia de Urmaș: Drepturile Familiei

Pensia de urmaș asigură protecția financiară a familiei în cazul decesului unei persoane asigurate.

## Beneficiarii Pensiei de Urmaș

### Soțul/Soția Supraviețuitor
- Dacă are peste 50 de ani sau este invalid
- Dacă are în îngrijire copii sub 16 ani

### Copiii
- Sub 16 ani (26 ani dacă sunt studenți)
- Fără limită de vârstă dacă sunt invalizi

### Părinții
- Dacă erau în întreținerea decedatului
- Dacă nu au alte surse de venit

## Calculul Pensiei

Pensia de urmaș reprezintă 50% din pensia pe care o primea sau ar fi primit-o decedatul.`,
        category: "tipuri-pensii",
        publishDate: "2024-11-08T10:00:00.000Z",
        readTime: 6,
        published: true,
      },
      {
        title: "Pensia Anticipată: Condiții și Penalizări 2025",
        slug: "pensia-anticipata-conditii",
        excerpt: "Tot ce trebuie să știi despre pensia anticipată: când poți ieși la pensie mai devreme și care sunt penalizările aplicabile.",
        content: `# Pensia Anticipată: Condiții și Penalizări 2025

Pensia anticipată permite ieșirea la pensie cu până la 5 ani mai devreme, dar cu anumite condiții și penalizări.

## Condiții de Acordare

### Pentru Bărbați
- Minimum 60 de ani
- Minimum 35 de ani stagiu de cotizare

### Pentru Femei  
- Minimum 58 de ani (în 2025)
- Minimum 30 de ani stagiu de cotizare

## Penalizări

Pentru fiecare lună de anticipare se aplică o reducere de **0,75%** din cuantumul pensiei.

### Exemplu de Calcul
- Anticipare cu 2 ani (24 luni)
- Penalizare: 24 × 0,75% = 18%
- Pensie finală: 82% din pensia completă`,
        category: "tipuri-pensii",
        publishDate: "2024-11-01T10:00:00.000Z",
        readTime: 5,
        published: true,
      },
      {
        title: "Pensia pentru Limită de Vârstă: Ghid Complet",
        slug: "pensia-limita-varsta",
        excerpt: "Informații detaliate despre pensia standard pentru limită de vârstă: condiții, calcul și procedura de solicitare.",
        content: `# Pensia pentru Limită de Vârstă: Ghid Complet

Pensia pentru limită de vârstă este pensia standard acordată la atingerea vârstei de pensionare.

## Vârsta Standard de Pensionare

### Bărbați: 65 de ani
### Femei: 63 de ani (în 2025)

## Stagiul Minim de Cotizare

- **15 ani** pentru pensia minimă
- **35 ani** (bărbați) / **30 ani** (femei) pentru pensia completă

## Avantaje

- Nu se aplică penalizări
- Acces la toate beneficiile suplimentare
- Posibilitatea cumulării cu alte venituri

## Procedura de Solicitare

Dosarul se depune cu 30 de zile înainte de împlinirea vârstei de pensionare.`,
        category: "tipuri-pensii",
        publishDate: "2024-10-25T10:00:00.000Z",
        readTime: 4,
        published: true,
      },
      // legislatie articles
      {
        title: "Modificări Legislative 2025: Ce Se Schimbă la Pensii",
        slug: "modificari-legislative-pensii-2025",
        excerpt: "Analiza completă a modificărilor legislative din 2025 care afectează sistemul de pensii din România.",
        content: `# Modificări Legislative 2025: Ce Se Schimbă la Pensii

Anul 2025 aduce modificări importante în sistemul de pensii din România.

## Creșterea Punctului de Pensie

Valoarea punctului de pensie a crescut la **2.031 Lei**, reprezentând o creștere de 13,8% față de 2024.

## Modificări la Vârsta de Pensionare

Pentru femei, vârsta de pensionare continuă să crească gradual, ajungând la 63 de ani în 2025.

## Noi Beneficii

- Indexarea automată anuală
- Bonificații suplimentare pentru stagii lungi de cotizare
- Facilități pentru părinți cu copii multiple

## Impact Financiar

Aceste modificări vor avea un impact pozitiv asupra veniturilor pensionarilor actuali și viitori.`,
        category: "legislatie",
        publishDate: "2024-10-18T10:00:00.000Z",
        readTime: 7,
        published: true,
      },
      {
        title: "Contribuțiile la Pensii: Ghid Legal Actualizat",
        slug: "contributii-pensii-ghid-legal",
        excerpt: "Tot ce trebuie să știi despre contribuțiile la sistemul de pensii: cote, baza de calcul și obligații legale.",
        content: `# Contribuțiile la Pensii: Ghid Legal Actualizat

Sistemul de contribuții la pensii din România este reglementat prin multiple acte normative.

## Cota de Contribuție

### Pilonul I (Sistemul Public)
- **25%** din venitul brut asigurat
- Plătită integral de angajator

### Pilonul II (Pensii Private Obligatorii)
- **3,75%** din venitul brut
- Pentru cei născuți după 1 ianuarie 1977

## Baza de Calcul

Contribuțiile se calculează la:
- **Venitul minim**: 3.300 Lei (2025)
- **Venitul maxim**: 5 salarii medii brute

## Obligații Legale

Angajatorii au obligația depunerii declarațiilor și plății contribuțiilor până în data de 25 a lunii următoare.`,
        category: "legislatie",
        publishDate: "2024-10-10T10:00:00.000Z",
        readTime: 6,
        published: true,
      },
      {
        title: "Drepturile Pensionarilor: Ce Trebuie să Știi în 2025",
        slug: "drepturile-pensionarilor-2025",
        excerpt: "Ghid complet al drepturilor pensionarilor din România: beneficii sociale, facilități și protecție juridică.",
        content: `# Drepturile Pensionarilor: Ce Trebuie să Știi în 2025

Pensionarii din România beneficiază de multiple drepturi și facilități garantate prin lege.

## Drepturi Financiare

### Pensia Minimă Garantată
- **1.281 Lei** pentru cei cu stagiu complet de cotizare
- Indexare anuală automată

### Ajutorul Social
- Tichete sociale pentru categorii vulnerabile
- Reduceri la medicamente și servicii medicale

## Facilități de Transport

- Transport gratuit în mijloacele de transport în comun
- Reduceri la transportul feroviar

## Protecție Juridică

- Asistență juridică gratuită
- Protecție împotriva executării silite a pensiei
- Dreptul la recalcularea pensiei

## Servicii Sociale

- Îngrijire la domiciliu pentru pensionarii cu dizabilități
- Centre de zi pentru seniori`,
        category: "legislatie",
        publishDate: "2024-10-03T10:00:00.000Z",
        readTime: 8,
        published: true,
      },
      {
        title: "Legea Pensiilor: Ghid prin Labirintul Legislativ",
        slug: "legea-pensiilor-ghid-legislativ",
        excerpt: "Explicații clare ale principalelor acte normative care reglementează sistemul de pensii din România.",
        content: `# Legea Pensiilor: Ghid prin Labirintul Legislativ

Sistemul de pensii din România este reglementat prin multiple acte normative. Iată ghidul prin principalele legi:

## Legea nr. 263/2010

Legea sistemului unitar de pensii publice - actul normativ principal care reglementează:
- Condițiile de acordare a pensiilor
- Formula de calcul
- Procedurile administrative

## Legea nr. 411/2004

Legea fondurilor de pensii administrate privat (Pilonul II):
- Obligativitatea participării
- Drepturile și obligațiile participanților
- Reglementarea administratorilor

## Ordonanța nr. 6/2002

Pilonul III - pensii facultative:
- Avantajele fiscale
- Condițiile de participare
- Modalitățile de retragere

## Modificări Recente

Actualizările legislative din 2024-2025 au adus clarificări importante în toate domeniile.`,
        category: "legislatie",
        publishDate: "2024-09-28T10:00:00.000Z",
        readTime: 10,
        published: true,
      }
    ];

    sampleArticles.forEach(article => {
      const id = this.currentArticleId++;
      this.articles.set(id, { ...article, id, published: article.published ?? true });
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Article methods
  async getArticles(filters?: { category?: string; published?: boolean }): Promise<Article[]> {
    let articles = Array.from(this.articles.values());
    
    if (filters?.category) {
      articles = articles.filter(article => article.category === filters.category);
    }
    
    if (filters?.published !== undefined) {
      articles = articles.filter(article => article.published === filters.published);
    }
    
    // Sort by publish date, newest first
    return articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(article => article.slug === slug);
  }

  async getRecentArticles(limit: number): Promise<Article[]> {
    const publishedArticles = Array.from(this.articles.values())
      .filter(article => article.published)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    return publishedArticles.slice(0, limit);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { ...insertArticle, id, published: insertArticle.published ?? false };
    this.articles.set(id, article);
    return article;
  }

  async updateArticle(id: number, updates: Partial<InsertArticle>): Promise<Article> {
    const existingArticle = this.articles.get(id);
    if (!existingArticle) {
      throw new Error('Article not found');
    }
    
    const updatedArticle = { ...existingArticle, ...updates };
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }

  // Pension calculation methods
  async createPensionCalculation(insertCalculation: InsertPensionCalculation): Promise<PensionCalculation> {
    const id = this.currentCalculationId++;
    const calculation: PensionCalculation = { 
      ...insertCalculation, 
      id,
      createdAt: new Date().toISOString()
    };
    this.pensionCalculations.set(id, calculation);
    return calculation;
  }

  async getRecentCalculations(limit: number): Promise<PensionCalculation[]> {
    const calculations = Array.from(this.pensionCalculations.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return calculations.slice(0, limit);
  }

  async getCalculationsByType(type: string): Promise<PensionCalculation[]> {
    return Array.from(this.pensionCalculations.values())
      .filter(calc => calc.calculationType === type)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Newsletter methods
  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.currentSubscriptionId++;
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id,
      subscribedAt: new Date().toISOString(),
      active: true
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === email);
  }

  async updateNewsletterSubscription(id: number, updates: Partial<InsertNewsletterSubscription>): Promise<NewsletterSubscription> {
    const existingSubscription = this.newsletterSubscriptions.get(id);
    if (!existingSubscription) {
      throw new Error('Newsletter subscription not found');
    }
    
    const updatedSubscription = { ...existingSubscription, ...updates };
    this.newsletterSubscriptions.set(id, updatedSubscription);
    return updatedSubscription;
  }

  async getActiveNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values())
      .filter(sub => sub.active);
  }

  // System stats
  async getSystemStats(): Promise<{
    totalCalculations: number;
    totalSubscriptions: number;
    totalArticles: number;
    recentCalculationsCount: number;
  }> {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const recentCalculations = Array.from(this.pensionCalculations.values())
      .filter(calc => new Date(calc.createdAt) >= oneWeekAgo);
    
    return {
      totalCalculations: this.pensionCalculations.size,
      totalSubscriptions: Array.from(this.newsletterSubscriptions.values()).filter(sub => sub.active).length,
      totalArticles: Array.from(this.articles.values()).filter(article => article.published).length,
      recentCalculationsCount: recentCalculations.length,
    };
  }
}

export const storage = new MemStorage();
