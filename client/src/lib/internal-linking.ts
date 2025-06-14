interface InternalLink {
  url: string;
  anchor: string;
  context: string;
  priority: number;
  category: string;
}

interface PageContext {
  path: string;
  title: string;
  keywords: string[];
  category: string;
  relatedPages: string[];
}

export class InternalLinkingOptimizer {
  private linkOpportunities: Map<string, InternalLink[]> = new Map();
  
  private pageContexts: PageContext[] = [
    {
      path: '/',
      title: 'Calculator Pensie România',
      keywords: ['calculator pensie', 'pensie romania', 'calcul pensie'],
      category: 'calculator',
      relatedPages: ['/calculator', '/faq', '/metodologie']
    },
    {
      path: '/calculator',
      title: 'Calculator Pensie',
      keywords: ['calculator pensie', 'calcul pensie de stat', 'pensie anticipata'],
      category: 'calculator',
      relatedPages: ['/', '/metodologie', '/tipuri-pensii']
    },
    {
      path: '/planificare',
      title: 'Planificare Pensie',
      keywords: ['planificare pensie', 'strategii pensionare', 'economisire pensie'],
      category: 'guide',
      relatedPages: ['/tipuri-pensii', '/calculator', '/metodologie']
    },
    {
      path: '/tipuri-pensii',
      title: 'Tipuri de Pensii',
      keywords: ['tipuri pensii', 'pilon 1', 'pilon 2', 'pilon 3'],
      category: 'guide',
      relatedPages: ['/planificare', '/legislatie', '/calculator']
    },
    {
      path: '/legislatie',
      title: 'Legislația Pensiilor',
      keywords: ['legislatie pensii', 'legea pensiilor', 'cnpp'],
      category: 'guide',
      relatedPages: ['/tipuri-pensii', '/metodologie', '/faq']
    },
    {
      path: '/blog',
      title: 'Blog Pensii',
      keywords: ['blog pensii', 'articole pensii', 'noutati pensii'],
      category: 'content',
      relatedPages: ['/planificare', '/tipuri-pensii', '/legislatie']
    },
    {
      path: '/faq',
      title: 'FAQ Pensii',
      keywords: ['intrebari frecvente', 'faq pensii', 'ajutor pensii'],
      category: 'support',
      relatedPages: ['/', '/calculator', '/metodologie']
    },
    {
      path: '/metodologie',
      title: 'Metodologie Calcul',
      keywords: ['metodologie calcul', 'formula pensie', 'transparenta'],
      category: 'support',
      relatedPages: ['/calculator', '/legislatie', '/faq']
    },
    {
      path: '/despre-noi',
      title: 'Despre Noi',
      keywords: ['despre calculatorpensie', 'echipa', 'misiune'],
      category: 'company',
      relatedPages: ['/contact', '/metodologie', '/']
    },
    {
      path: '/contact',
      title: 'Contact',
      keywords: ['contact', 'suport', 'ajutor'],
      category: 'company',
      relatedPages: ['/despre-noi', '/faq', '/']
    }
  ];

  // Generate contextual internal links for a page
  generateContextualLinks(currentPath: string, content: string): InternalLink[] {
    const currentPage = this.pageContexts.find(page => page.path === currentPath);
    if (!currentPage) return [];

    const suggestions: InternalLink[] = [];
    const contentLower = content.toLowerCase();

    // Find keyword-based linking opportunities
    this.pageContexts.forEach(page => {
      if (page.path === currentPath) return; // Skip self-linking

      page.keywords.forEach(keyword => {
        if (contentLower.includes(keyword.toLowerCase())) {
          const priority = this.calculateLinkPriority(currentPage, page, keyword);
          
          suggestions.push({
            url: page.path,
            anchor: this.generateOptimalAnchor(keyword, page.title),
            context: `Link to ${page.title} when mentioning "${keyword}"`,
            priority,
            category: page.category
          });
        }
      });
    });

    // Add related page suggestions
    currentPage.relatedPages.forEach(relatedPath => {
      const relatedPage = this.pageContexts.find(p => p.path === relatedPath);
      if (relatedPage) {
        suggestions.push({
          url: relatedPage.path,
          anchor: relatedPage.title,
          context: `Related page link`,
          priority: 8, // High priority for related pages
          category: relatedPage.category
        });
      }
    });

    return suggestions.sort((a, b) => b.priority - a.priority);
  }

  // Calculate link priority based on relevance
  private calculateLinkPriority(fromPage: PageContext, toPage: PageContext, keyword: string): number {
    let priority = 5; // Base priority

    // Same category pages get higher priority
    if (fromPage.category === toPage.category) {
      priority += 2;
    }

    // Calculator-related pages get highest priority
    if (toPage.category === 'calculator') {
      priority += 3;
    }

    // Exact keyword matches get higher priority
    if (toPage.keywords.includes(keyword)) {
      priority += 2;
    }

    // Guide pages linking to each other
    if (fromPage.category === 'guide' && toPage.category === 'guide') {
      priority += 1;
    }

    return Math.min(priority, 10); // Cap at 10
  }

  // Generate SEO-optimized anchor text
  private generateOptimalAnchor(keyword: string, pageTitle: string): string {
    const variations: Record<string, string> = {
      'calculator pensie': 'calculatorul de pensie online',
      'calcul pensie': 'calculul pensiei de stat',
      'pensie romania': 'sistemul de pensii din România',
      'planificare pensie': 'planificarea pensiei',
      'tipuri pensii': 'tipurile de pensii românești',
      'legislatie pensii': 'legislația actuală privind pensiile',
      'pilon 1': 'Pilonul I de pensii',
      'pilon 2': 'Pilonul II de pensii',
      'pilon 3': 'Pilonul III de pensii',
      'faq pensii': 'întrebările frecvente despre pensii',
      'metodologie calcul': 'metodologia de calcul a pensiei'
    };

    return variations[keyword.toLowerCase()] || pageTitle;
  }

  // Get strategic footer links
  getFooterSitemap(): Array<{ title: string; links: Array<{ text: string; href: string; }> }> {
    return [
      {
        title: 'Calculatoare Pensie',
        links: [
          { text: 'Calculator Principal', href: '/calculator' },
          { text: 'Pensie Anticipată', href: '/calculator?type=early' },
          { text: 'Calculator Pilon III', href: '/calculator?type=pillar3' },
          { text: 'Metodologie Calcul', href: '/metodologie' }
        ]
      },
      {
        title: 'Ghiduri Complete',
        links: [
          { text: 'Planificare Pensie', href: '/planificare' },
          { text: 'Tipuri de Pensii', href: '/tipuri-pensii' },
          { text: 'Legislația Pensiilor', href: '/legislatie' },
          { text: 'Blog Pensii România', href: '/blog' }
        ]
      },
      {
        title: 'Suport și Informații',
        links: [
          { text: 'Întrebări Frecvente', href: '/faq' },
          { text: 'Contact și Suport', href: '/contact' },
          { text: 'Despre CalculatorPensie.com', href: '/despre-noi' },
          { text: 'Politică Confidențialitate', href: '/privacy' }
        ]
      }
    ];
  }

  // Get breadcrumb structure for a page
  getBreadcrumbs(path: string): Array<{ name: string; href?: string }> {
    const breadcrumbMap: Record<string, Array<{ name: string; href?: string }>> = {
      '/': [
        { name: 'Acasă' }
      ],
      '/calculator': [
        { name: 'Acasă', href: '/' },
        { name: 'Calculator Pensie' }
      ],
      '/planificare': [
        { name: 'Acasă', href: '/' },
        { name: 'Ghiduri', href: '/blog' },
        { name: 'Planificare Pensie' }
      ],
      '/tipuri-pensii': [
        { name: 'Acasă', href: '/' },
        { name: 'Ghiduri', href: '/blog' },
        { name: 'Tipuri de Pensii' }
      ],
      '/legislatie': [
        { name: 'Acasă', href: '/' },
        { name: 'Ghiduri', href: '/blog' },
        { name: 'Legislația Pensiilor' }
      ],
      '/blog': [
        { name: 'Acasă', href: '/' },
        { name: 'Blog Pensii' }
      ],
      '/faq': [
        { name: 'Acasă', href: '/' },
        { name: 'Întrebări Frecvente' }
      ],
      '/metodologie': [
        { name: 'Acasă', href: '/' },
        { name: 'Metodologie' }
      ],
      '/despre-noi': [
        { name: 'Acasă', href: '/' },
        { name: 'Despre Noi' }
      ],
      '/contact': [
        { name: 'Acasă', href: '/' },
        { name: 'Contact' }
      ],
      '/privacy': [
        { name: 'Acasă', href: '/' },
        { name: 'Politică Confidențialitate' }
      ]
    };

    return breadcrumbMap[path] || [{ name: 'Acasă', href: '/' }];
  }

  // Generate contextual call-to-action links
  getCTALinks(currentPage: string): Array<{ text: string; href: string; priority: 'primary' | 'secondary' }> {
    const ctaMap: Record<string, Array<{ text: string; href: string; priority: 'primary' | 'secondary' }>> = {
      '/': [
        { text: 'Calculează Pensia Acum', href: '/calculator', priority: 'primary' },
        { text: 'Vezi Ghidurile Complete', href: '/planificare', priority: 'secondary' }
      ],
      '/blog': [
        { text: 'Folosește Calculatorul', href: '/calculator', priority: 'primary' },
        { text: 'Citește FAQ-ul', href: '/faq', priority: 'secondary' }
      ],
      '/faq': [
        { text: 'Calculează Pensia Ta', href: '/calculator', priority: 'primary' },
        { text: 'Contactează-ne', href: '/contact', priority: 'secondary' }
      ],
      '/planificare': [
        { text: 'Calculează Pensia', href: '/calculator', priority: 'primary' },
        { text: 'Vezi Tipurile de Pensii', href: '/tipuri-pensii', priority: 'secondary' }
      ],
      '/tipuri-pensii': [
        { text: 'Calculează Pensia', href: '/calculator', priority: 'primary' },
        { text: 'Planifică Pensia', href: '/planificare', priority: 'secondary' }
      ],
      '/legislatie': [
        { text: 'Calculează Pensia', href: '/calculator', priority: 'primary' },
        { text: 'Vezi Metodologia', href: '/metodologie', priority: 'secondary' }
      ]
    };

    return ctaMap[currentPage] || [
      { text: 'Calculează Pensia', href: '/calculator', priority: 'primary' }
    ];
  }

  // Analyze internal linking health
  analyzeInternalLinking(pages: Array<{ path: string; links: string[] }>): {
    orphanPages: string[];
    linkDistribution: Record<string, number>;
    recommendations: string[];
  } {
    const inboundLinks: Record<string, number> = {};
    const allPages = this.pageContexts.map(p => p.path);
    
    // Count inbound links
    pages.forEach(page => {
      page.links.forEach(link => {
        inboundLinks[link] = (inboundLinks[link] || 0) + 1;
      });
    });

    // Find orphan pages (pages with no inbound links)
    const orphanPages = allPages.filter(page => 
      page !== '/' && (inboundLinks[page] || 0) === 0
    );

    const recommendations: string[] = [];

    // Generate recommendations
    if (orphanPages.length > 0) {
      recommendations.push(`Connect ${orphanPages.length} orphan pages through contextual internal links`);
    }

    // Check for pages with too few links
    Object.entries(inboundLinks).forEach(([page, count]) => {
      if (count < 2 && page !== '/') {
        recommendations.push(`Increase internal links to ${page} (currently ${count})`);
      }
    });

    return {
      orphanPages,
      linkDistribution: inboundLinks,
      recommendations
    };
  }
}

export const internalLinking = new InternalLinkingOptimizer();