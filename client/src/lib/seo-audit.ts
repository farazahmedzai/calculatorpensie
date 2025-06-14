interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'technical' | 'content' | 'performance' | 'accessibility';
  message: string;
  page?: string;
  element?: string;
  recommendation: string;
  priority: 'high' | 'medium' | 'low';
}

interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  summary: {
    errors: number;
    warnings: number;
    passed: number;
  };
  recommendations: string[];
}

export class SEOAuditor {
  private currentUrl: string;
  private issues: SEOIssue[] = [];

  constructor() {
    this.currentUrl = window.location.href;
  }

  // Run complete SEO audit
  async runFullAudit(): Promise<SEOAuditResult> {
    this.issues = [];
    
    // Technical SEO checks
    this.auditMetaTags();
    this.auditHeadingStructure();
    this.auditImages();
    this.auditLinks();
    this.auditCanonicalTags();
    this.auditStructuredData();
    
    // Performance checks
    await this.auditPerformance();
    
    // Accessibility checks
    this.auditAccessibility();
    
    // Content quality checks
    this.auditContent();

    return this.generateReport();
  }

  // Audit meta tags
  private auditMetaTags() {
    const title = document.querySelector('title');
    const description = document.querySelector('meta[name="description"]');
    const viewport = document.querySelector('meta[name="viewport"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');

    if (!title || !title.textContent) {
      this.addIssue('error', 'technical', 'Missing title tag', 'Add a descriptive title tag', 'high');
    } else if (title.textContent.length < 30) {
      this.addIssue('warning', 'technical', 'Title too short', 'Expand title to 30-60 characters', 'medium');
    } else if (title.textContent.length > 60) {
      this.addIssue('warning', 'technical', 'Title too long', 'Shorten title to under 60 characters', 'medium');
    }

    if (!description) {
      this.addIssue('error', 'technical', 'Missing meta description', 'Add meta description (140-160 characters)', 'high');
    } else {
      const content = description.getAttribute('content') || '';
      if (content.length < 140) {
        this.addIssue('warning', 'technical', 'Meta description too short', 'Expand to 140-160 characters', 'medium');
      } else if (content.length > 160) {
        this.addIssue('warning', 'technical', 'Meta description too long', 'Shorten to under 160 characters', 'medium');
      }
    }

    if (!viewport) {
      this.addIssue('error', 'technical', 'Missing viewport meta tag', 'Add viewport meta tag for mobile optimization', 'high');
    }

    if (!ogImage) {
      this.addIssue('warning', 'technical', 'Missing Open Graph image', 'Add og:image for social sharing', 'medium');
    }

    if (!ogTitle) {
      this.addIssue('warning', 'technical', 'Missing Open Graph title', 'Add og:title for social sharing', 'medium');
    }
  }

  // Audit heading structure
  private auditHeadingStructure() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Elements = document.querySelectorAll('h1');

    if (h1Elements.length === 0) {
      this.addIssue('error', 'content', 'Missing H1 tag', 'Add exactly one H1 tag per page', 'high');
    } else if (h1Elements.length > 1) {
      this.addIssue('error', 'content', 'Multiple H1 tags', 'Use only one H1 tag per page', 'high');
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.substring(1));
      
      if (index > 0 && level > previousLevel + 1) {
        this.addIssue('warning', 'content', 'Heading hierarchy skip', 
          `Fix heading order: ${heading.tagName} follows H${previousLevel}`, 'medium');
      }
      
      if (!heading.textContent?.trim()) {
        this.addIssue('warning', 'content', 'Empty heading tag', 'Remove empty heading or add content', 'medium');
      }
      
      previousLevel = level;
    });
  }

  // Audit images
  private auditImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach((img, index) => {
      if (!img.alt) {
        this.addIssue('error', 'accessibility', 'Missing alt text', 
          `Add descriptive alt text to image ${index + 1}`, 'high', img.src);
      } else if (img.alt.trim() === '') {
        this.addIssue('warning', 'accessibility', 'Empty alt text', 
          `Add meaningful alt text to image ${index + 1}`, 'medium', img.src);
      }

      if (!img.width || !img.height) {
        this.addIssue('warning', 'performance', 'Missing image dimensions', 
          'Add width and height attributes to prevent layout shift', 'medium', img.src);
      }

      // Check for modern image formats
      if (img.src.includes('.jpg') || img.src.includes('.png')) {
        this.addIssue('info', 'performance', 'Consider modern image formats', 
          'Use WebP or AVIF for better compression', 'low', img.src);
      }
    });
  }

  // Audit links
  private auditLinks() {
    const links = document.querySelectorAll('a');
    const internalLinks: string[] = [];
    const externalLinks: string[] = [];

    links.forEach((link, index) => {
      const href = link.getAttribute('href');
      
      if (!href) {
        this.addIssue('warning', 'technical', 'Link without href', 
          `Add href attribute to link ${index + 1}`, 'medium');
        return;
      }

      // Check for generic anchor text
      const text = link.textContent?.trim().toLowerCase();
      const genericTexts = ['click here', 'read more', 'more', 'here', 'link'];
      if (text && genericTexts.includes(text)) {
        this.addIssue('warning', 'content', 'Generic anchor text', 
          'Use descriptive anchor text instead of "' + text + '"', 'medium');
      }

      // Categorize links
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        externalLinks.push(href);
        
        // Check external links for proper attributes
        if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('noopener')) {
          this.addIssue('warning', 'technical', 'External link security', 
            'Add rel="noopener noreferrer" to external links', 'medium');
        }
      } else {
        internalLinks.push(href);
      }
    });

    // Check for sufficient internal linking
    if (internalLinks.length < 3) {
      this.addIssue('warning', 'content', 'Insufficient internal linking', 
        'Add more contextual internal links to improve navigation', 'medium');
    }
  }

  // Audit canonical tags
  private auditCanonicalTags() {
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    
    if (canonicals.length === 0) {
      this.addIssue('warning', 'technical', 'Missing canonical tag', 
        'Add canonical URL to prevent duplicate content issues', 'medium');
    } else if (canonicals.length > 1) {
      this.addIssue('error', 'technical', 'Multiple canonical tags', 
        'Use only one canonical tag per page', 'high');
    }
  }

  // Audit structured data
  private auditStructuredData() {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (jsonLdScripts.length === 0) {
      this.addIssue('warning', 'technical', 'Missing structured data', 
        'Add relevant schema.org markup for better search results', 'medium');
    } else {
      // Validate JSON-LD syntax
      jsonLdScripts.forEach((script, index) => {
        try {
          JSON.parse(script.textContent || '');
        } catch (e) {
          this.addIssue('error', 'technical', 'Invalid structured data', 
            `Fix JSON-LD syntax error in script ${index + 1}`, 'high');
        }
      });
    }
  }

  // Audit performance metrics
  private async auditPerformance() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        
        if (loadTime > 3000) {
          this.addIssue('warning', 'performance', 'Slow page load', 
            'Optimize page load time (currently ' + Math.round(loadTime) + 'ms)', 'high');
        }
        
        if (domContentLoaded > 1500) {
          this.addIssue('warning', 'performance', 'Slow DOM ready', 
            'Optimize DOM content loaded time', 'medium');
        }
      }
    }

    // Check for render-blocking resources
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    if (stylesheets.length > 3) {
      this.addIssue('info', 'performance', 'Multiple stylesheets', 
        'Consider combining CSS files to reduce requests', 'low');
    }
  }

  // Audit accessibility
  private auditAccessibility() {
    // Check for skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    const hasSkipToContent = Array.from(skipLinks).some(link => 
      link.textContent?.toLowerCase().includes('skip') || 
      link.textContent?.toLowerCase().includes('content')
    );
    
    if (!hasSkipToContent) {
      this.addIssue('warning', 'accessibility', 'Missing skip links', 
        'Add skip navigation links for keyboard users', 'medium');
    }

    // Check form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      
      if (!label && !ariaLabel) {
        this.addIssue('error', 'accessibility', 'Missing form label', 
          `Add label or aria-label to form field ${index + 1}`, 'high');
      }
    });

    // Check color contrast (basic check)
    const colorElements = document.querySelectorAll('[style*="color"]');
    if (colorElements.length > 0) {
      this.addIssue('info', 'accessibility', 'Check color contrast', 
        'Ensure text meets WCAG contrast requirements', 'low');
    }
  }

  // Audit content quality
  private auditContent() {
    const textContent = document.body.textContent || '';
    const wordCount = textContent.split(/\s+/).length;
    
    if (wordCount < 300) {
      this.addIssue('warning', 'content', 'Thin content', 
        'Add more substantial content (currently ' + wordCount + ' words)', 'medium');
    }

    // Check for keyword stuffing (basic check)
    const title = document.title.toLowerCase();
    const titleWords = title.split(/\s+/);
    const wordFreq: Record<string, number> = {};
    
    titleWords.forEach(word => {
      if (word.length > 3) {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      }
    });

    Object.entries(wordFreq).forEach(([word, freq]) => {
      if (freq > 2) {
        this.addIssue('warning', 'content', 'Keyword repetition in title', 
          `Reduce repetition of "${word}" in title`, 'medium');
      }
    });
  }

  // Add issue to the list
  private addIssue(type: 'error' | 'warning' | 'info', category: string, message: string, 
                   recommendation: string, priority: 'high' | 'medium' | 'low', element?: string) {
    this.issues.push({
      type,
      category: category as any,
      message,
      recommendation,
      priority,
      page: this.currentUrl,
      element
    });
  }

  // Generate final report
  private generateReport(): SEOAuditResult {
    const errors = this.issues.filter(issue => issue.type === 'error').length;
    const warnings = this.issues.filter(issue => issue.type === 'warning').length;
    const infos = this.issues.filter(issue => issue.type === 'info').length;
    
    // Calculate score (100 - penalties)
    const errorPenalty = errors * 10;
    const warningPenalty = warnings * 5;
    const infoPenalty = infos * 1;
    
    const score = Math.max(0, 100 - errorPenalty - warningPenalty - infoPenalty);
    
    const recommendations = this.generateRecommendations();

    return {
      score,
      issues: this.issues,
      summary: {
        errors,
        warnings,
        passed: Math.max(0, 20 - errors - warnings - infos)
      },
      recommendations
    };
  }

  // Generate actionable recommendations
  private generateRecommendations(): string[] {
    const recs: string[] = [];
    
    const highPriorityIssues = this.issues.filter(issue => issue.priority === 'high');
    if (highPriorityIssues.length > 0) {
      recs.push(`Fix ${highPriorityIssues.length} high-priority issues first`);
    }

    const technicalIssues = this.issues.filter(issue => issue.category === 'technical');
    if (technicalIssues.length > 0) {
      recs.push('Address technical SEO issues for better crawling');
    }

    const contentIssues = this.issues.filter(issue => issue.category === 'content');
    if (contentIssues.length > 0) {
      recs.push('Improve content quality and structure');
    }

    const performanceIssues = this.issues.filter(issue => issue.category === 'performance');
    if (performanceIssues.length > 0) {
      recs.push('Optimize page performance for better user experience');
    }

    if (recs.length === 0) {
      recs.push('Great job! Your page follows SEO best practices');
    }

    return recs;
  }
}

export const seoAuditor = new SEOAuditor();