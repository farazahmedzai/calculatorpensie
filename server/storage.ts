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
        publishDate: "2024-12-15T10:00:00.000Z",
        readTime: 5,
        published: true,
      },
      {
        title: "Vârsta Standard de Pensionare în România: Tabelul Complet 2024",
        slug: "varsta-pensionare-romania",
        excerpt: "Ghid actualizat cu toate modificările legislative privind vârsta de pensionare pentru bărbați și femei în România.",
        content: `# Vârsta Standard de Pensionare în România: Tabelul Complet 2024

Vârsta de pensionare în România a suferit modificări importante în ultimii ani. Iată situația actualizată:

## Bărbați
- **Vârsta actuală**: 65 de ani
- **Din**: 2015 (stabil din această dată)
- **Stagiul minim**: 15 ani de cotizare
- **Stagiul complet**: 35 de ani

## Femei
- **Vârsta actuală**: 63 de ani (în 2024)
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
