interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
  ttfb: number; // Time to First Byte
}

interface CriticalResource {
  url: string;
  type: 'css' | 'js' | 'font' | 'image';
  priority: 'high' | 'medium' | 'low';
  preload?: boolean;
  prefetch?: boolean;
}

export class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    cls: 0,
    fid: 0,
    ttfb: 0
  };

  private criticalResources: CriticalResource[] = [
    // Critical CSS and fonts for above-the-fold content
    { url: '/fonts/inter-var.woff2', type: 'font', priority: 'high', preload: true },
    { url: '/css/critical.css', type: 'css', priority: 'high', preload: true },
    
    // Important JavaScript for interactivity
    { url: '/js/pension-calculator.js', type: 'js', priority: 'high', preload: true },
    
    // Hero images
    { url: '/images/hero-calculator.webp', type: 'image', priority: 'high', preload: true },
    
    // Secondary resources
    { url: '/js/analytics.js', type: 'js', priority: 'medium', prefetch: true },
    { url: '/images/testimonials.webp', type: 'image', priority: 'low', prefetch: true }
  ];

  // Initialize performance monitoring
  init() {
    this.setupResourceHints();
    this.monitorCoreWebVitals();
    this.optimizeImages();
    this.setupServiceWorker();
  }

  // Setup resource hints for critical resources
  private setupResourceHints() {
    this.criticalResources.forEach(resource => {
      const link = document.createElement('link');
      
      if (resource.preload) {
        link.rel = 'preload';
        link.href = resource.url;
        link.as = resource.type === 'font' ? 'font' : 
                  resource.type === 'css' ? 'style' :
                  resource.type === 'js' ? 'script' : 'image';
        
        if (resource.type === 'font') {
          link.crossOrigin = 'anonymous';
        }
      } else if (resource.prefetch) {
        link.rel = 'prefetch';
        link.href = resource.url;
      }
      
      document.head.appendChild(link);
    });
  }

  // Monitor Core Web Vitals
  private monitorCoreWebVitals() {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
          this.reportMetric('FCP', entry.startTime);
        }
      });
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.metrics.cls = clsValue;
      this.reportMetric('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const firstInput = list.getEntries()[0];
      this.metrics.fid = (firstInput as any).processingStart - firstInput.startTime;
      this.reportMetric('FID', this.metrics.fid);
    }).observe({ entryTypes: ['first-input'] });
  }

  // Optimize images with intersection observer
  private optimizeImages() {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Load high-quality image
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Add WebP support detection
          if (this.supportsWebP() && img.dataset.webp) {
            img.src = img.dataset.webp;
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Check WebP support
  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  // Setup service worker for caching
  private setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }

  // Report metrics to analytics
  private reportMetric(name: string, value: number) {
    // Report to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'core_web_vitals', {
        metric_name: name,
        metric_value: Math.round(value),
        metric_rating: this.getMetricRating(name, value)
      });
    }
  }

  // Get metric rating (good, needs improvement, poor)
  private getMetricRating(metric: string, value: number): string {
    const thresholds = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  // Get current performance score
  getPerformanceScore(): number {
    const scores = {
      fcp: this.getMetricRating('FCP', this.metrics.fcp) === 'good' ? 100 : 
           this.getMetricRating('FCP', this.metrics.fcp) === 'needs-improvement' ? 75 : 50,
      lcp: this.getMetricRating('LCP', this.metrics.lcp) === 'good' ? 100 : 
           this.getMetricRating('LCP', this.metrics.lcp) === 'needs-improvement' ? 75 : 50,
      cls: this.getMetricRating('CLS', this.metrics.cls) === 'good' ? 100 : 
           this.getMetricRating('CLS', this.metrics.cls) === 'needs-improvement' ? 75 : 50,
      fid: this.getMetricRating('FID', this.metrics.fid) === 'good' ? 100 : 
           this.getMetricRating('FID', this.metrics.fid) === 'needs-improvement' ? 75 : 50
    };

    return Math.round((scores.fcp + scores.lcp + scores.cls + scores.fid) / 4);
  }

  // Critical CSS injection
  injectCriticalCSS(css: string) {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }

  // Preload critical resources for specific pages
  preloadPageResources(page: string) {
    const pageResources: Record<string, CriticalResource[]> = {
      calculator: [
        { url: '/js/calculator-core.js', type: 'js', priority: 'high', preload: true },
        { url: '/css/calculator.css', type: 'css', priority: 'high', preload: true }
      ],
      blog: [
        { url: '/css/blog.css', type: 'css', priority: 'high', preload: true },
        { url: '/js/blog-search.js', type: 'js', priority: 'medium', preload: true }
      ],
      home: [
        { url: '/js/home-calculator.js', type: 'js', priority: 'high', preload: true },
        { url: '/images/hero-bg.webp', type: 'image', priority: 'high', preload: true }
      ]
    };

    const resources = pageResources[page] || [];
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      link.as = resource.type === 'js' ? 'script' : 
               resource.type === 'css' ? 'style' : 'image';
      document.head.appendChild(link);
    });
  }
}

// Initialize performance optimizer
export const performanceOptimizer = new PerformanceOptimizer();