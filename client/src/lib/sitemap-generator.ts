interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface RobotsTxtConfig {
  userAgent: string;
  disallow?: string[];
  allow?: string[];
  crawlDelay?: number;
  sitemap?: string;
}

export class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrl[] = [];

  constructor(baseUrl: string = 'https://calculatorpensie.com') {
    this.baseUrl = baseUrl;
    this.initializeStaticPages();
  }

  private initializeStaticPages() {
    const staticPages = [
      { path: '/', changefreq: 'daily' as const, priority: 1.0 },
      { path: '/calculator', changefreq: 'weekly' as const, priority: 0.9 },
      { path: '/planificare', changefreq: 'monthly' as const, priority: 0.8 },
      { path: '/tipuri-pensii', changefreq: 'monthly' as const, priority: 0.8 },
      { path: '/legislatie', changefreq: 'monthly' as const, priority: 0.8 },
      { path: '/blog', changefreq: 'weekly' as const, priority: 0.7 },
      { path: '/faq', changefreq: 'monthly' as const, priority: 0.7 },
      { path: '/despre-noi', changefreq: 'yearly' as const, priority: 0.6 },
      { path: '/contact', changefreq: 'yearly' as const, priority: 0.6 },
      { path: '/metodologie', changefreq: 'yearly' as const, priority: 0.6 },
      { path: '/privacy', changefreq: 'yearly' as const, priority: 0.5 }
    ];

    const now = new Date().toISOString().split('T')[0];
    
    this.urls = staticPages.map(page => ({
      loc: `${this.baseUrl}${page.path}`,
      lastmod: now,
      changefreq: page.changefreq,
      priority: page.priority
    }));
  }

  addUrl(url: SitemapUrl) {
    this.urls.push(url);
  }

  addBlogArticles(articles: Array<{ slug: string; publishDate: string; category: string }>) {
    articles.forEach(article => {
      this.urls.push({
        loc: `${this.baseUrl}/blog/${article.slug}`,
        lastmod: article.publishDate,
        changefreq: 'monthly',
        priority: 0.6
      });
    });
  }

  generateXMLSitemap(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlEntries = this.urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

    return `${xmlHeader}\n${urlsetOpen}${urlEntries}\n${urlsetClose}`;
  }

  generateRobotsTxt(configs: RobotsTxtConfig[] = []): string {
    if (configs.length === 0) {
      configs = [{
        userAgent: '*',
        disallow: ['/admin', '/api', '/*.json'],
        sitemap: `${this.baseUrl}/sitemap.xml`
      }];
    }

    let robotsTxt = '';
    
    configs.forEach(config => {
      robotsTxt += `User-agent: ${config.userAgent}\n`;
      
      if (config.disallow) {
        config.disallow.forEach(path => {
          robotsTxt += `Disallow: ${path}\n`;
        });
      }
      
      if (config.allow) {
        config.allow.forEach(path => {
          robotsTxt += `Allow: ${path}\n`;
        });
      }
      
      if (config.crawlDelay) {
        robotsTxt += `Crawl-delay: ${config.crawlDelay}\n`;
      }
      
      robotsTxt += '\n';
    });

    // Add sitemap reference
    if (configs[0]?.sitemap) {
      robotsTxt += `Sitemap: ${configs[0].sitemap}\n`;
    }

    return robotsTxt;
  }

  getUrlCount(): number {
    return this.urls.length;
  }

  getUrls(): SitemapUrl[] {
    return [...this.urls];
  }

  validateUrls(): Array<{ url: string; issues: string[] }> {
    const issues: Array<{ url: string; issues: string[] }> = [];

    this.urls.forEach(url => {
      const urlIssues: string[] = [];

      // Check URL format
      try {
        new URL(url.loc);
      } catch {
        urlIssues.push('Invalid URL format');
      }

      // Check priority range
      if (url.priority < 0 || url.priority > 1) {
        urlIssues.push('Priority must be between 0.0 and 1.0');
      }

      // Check lastmod format
      if (!/^\d{4}-\d{2}-\d{2}/.test(url.lastmod)) {
        urlIssues.push('Invalid lastmod date format');
      }

      if (urlIssues.length > 0) {
        issues.push({ url: url.loc, issues: urlIssues });
      }
    });

    return issues;
  }
}

// SEO Analysis utilities
export class SEOAnalyzer {
  static analyzePageSpeed(metrics: {
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  }) {
    const issues: string[] = [];
    const recommendations: string[] = [];

    if (metrics.firstContentfulPaint > 1800) {
      issues.push('First Contentful Paint is slow');
      recommendations.push('Optimize images and reduce server response time');
    }

    if (metrics.largestContentfulPaint > 2500) {
      issues.push('Largest Contentful Paint is slow');
      recommendations.push('Optimize images, preload critical resources');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      issues.push('Cumulative Layout Shift is high');
      recommendations.push('Set explicit dimensions for images and videos');
    }

    if (metrics.firstInputDelay > 100) {
      issues.push('First Input Delay is high');
      recommendations.push('Reduce JavaScript execution time');
    }

    return { issues, recommendations };
  }

  static analyzeTitleTags(pages: Array<{ path: string; title: string }>) {
    const issues: Array<{ page: string; issue: string }> = [];

    pages.forEach(page => {
      if (!page.title) {
        issues.push({ page: page.path, issue: 'Missing title tag' });
      } else if (page.title.length < 30) {
        issues.push({ page: page.path, issue: 'Title too short (under 30 characters)' });
      } else if (page.title.length > 60) {
        issues.push({ page: page.path, issue: 'Title too long (over 60 characters)' });
      }
    });

    // Check for duplicate titles
    const titleCounts = pages.reduce((acc, page) => {
      acc[page.title] = (acc[page.title] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    Object.entries(titleCounts).forEach(([title, count]) => {
      if (count > 1) {
        const duplicatePages = pages.filter(p => p.title === title);
        duplicatePages.forEach(page => {
          issues.push({ page: page.path, issue: `Duplicate title: "${title}"` });
        });
      }
    });

    return issues;
  }

  static generateSEOReport(siteData: {
    pages: Array<{ path: string; title: string; description: string; h1Count: number; images: number }>;
    performance: {
      firstContentfulPaint: number;
      largestContentfulPaint: number;
      cumulativeLayoutShift: number;
      firstInputDelay: number;
    };
  }) {
    const titleIssues = this.analyzeTitleTags(siteData.pages);
    const performanceAnalysis = this.analyzePageSpeed(siteData.performance);

    const h1Issues = siteData.pages.filter(page => page.h1Count !== 1)
      .map(page => ({
        page: page.path,
        issue: page.h1Count === 0 ? 'Missing H1 tag' : 'Multiple H1 tags'
      }));

    const missingDescriptions = siteData.pages.filter(page => !page.description)
      .map(page => ({ page: page.path, issue: 'Missing meta description' }));

    return {
      summary: {
        totalPages: siteData.pages.length,
        totalIssues: titleIssues.length + h1Issues.length + missingDescriptions.length + performanceAnalysis.issues.length,
        score: Math.max(0, 100 - (titleIssues.length + h1Issues.length + missingDescriptions.length) * 5)
      },
      issues: {
        titles: titleIssues,
        headings: h1Issues,
        descriptions: missingDescriptions,
        performance: performanceAnalysis.issues
      },
      recommendations: performanceAnalysis.recommendations
    };
  }
}