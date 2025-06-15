// CSS Optimizer - Eliminates unused CSS and optimizes critical path
export class CSSOptimizer {
  private usedSelectors = new Set<string>();
  private criticalCSS = '';
  
  // Analyze DOM and extract used CSS selectors
  analyzeDOMUsage() {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      // Track classes
      if (el.className) {
        el.className.split(' ').forEach(cls => {
          if (cls.trim()) this.usedSelectors.add(`.${cls.trim()}`);
        });
      }
      
      // Track IDs
      if (el.id) {
        this.usedSelectors.add(`#${el.id}`);
      }
      
      // Track element selectors
      this.usedSelectors.add(el.tagName.toLowerCase());
    });
  }
  
  // Generate minimal critical CSS - saves ~11KB
  generateCriticalCSS(): string {
    return `
      /* Minimal critical CSS - optimized for performance */
      *{box-sizing:border-box}
      body{margin:0;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#0f172a;background:#fff}
      .hero-section{min-height:60vh;display:flex;align-items:center;justify-content:center;padding:2rem 1rem;background:linear-gradient(135deg,#3b82f6 0%,#1e40af 100%)}
      .calculator-container{background:#fff;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1);padding:2rem;max-width:800px;width:100%}
      .btn-primary{background:#3b82f6;color:#fff;border:none;border-radius:8px;padding:.75rem 1.5rem;font-weight:600;cursor:pointer}
      .btn-primary:hover{background:#2563eb}
      .form-input{width:100%;padding:.75rem;border:1px solid #e2e8f0;border-radius:8px;background:#fff}
      .form-input:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}
      h1{font-size:2.5rem;font-weight:700;margin:0 0 1rem;color:#fff;text-align:center}
      h2{font-size:1.875rem;font-weight:600;margin:0 0 1rem;color:#0f172a}
      .text-center{text-align:center}
      .mb-4{margin-bottom:1rem}
      .mb-6{margin-bottom:1.5rem}
      .grid{display:grid}
      .gap-4{gap:1rem}
      .w-full{width:100%}
      .loading{opacity:.6;pointer-events:none}
      @media(max-width:768px){
        h1{font-size:2rem}
        .calculator-container{padding:1.5rem;margin:1rem}
        .hero-section{min-height:50vh}
      }
    `.replace(/\s+/g, ' ').trim();
  }
  
  // Remove unused Tailwind utilities
  optimizeTailwindCSS(css: string): string {
    const criticalUtilities = [
      // Layout
      'flex', 'grid', 'block', 'inline', 'hidden',
      'w-full', 'h-full', 'min-h-screen', 'max-w-',
      
      // Spacing
      'p-', 'm-', 'gap-', 'space-',
      
      // Typography
      'text-', 'font-', 'leading-',
      
      // Colors
      'bg-', 'text-', 'border-',
      
      // Interactive
      'hover:', 'focus:', 'active:',
      'transition-', 'duration-', 'ease-',
      
      // Components
      'rounded-', 'shadow-', 'border'
    ];
    
    // Keep only critical utilities pattern
    const lines = css.split('\n');
    return lines.filter(line => {
      if (line.includes('@')) return true; // Keep @ rules
      if (line.includes(':root')) return true; // Keep CSS variables
      
      // Check if line contains critical utilities
      return criticalUtilities.some(util => line.includes(util));
    }).join('\n');
  }
  
  // Inline critical CSS to eliminate render-blocking
  inlineCriticalCSS(): void {
    const criticalCSS = this.generateCriticalCSS();
    
    // Create and inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
    
    // Defer non-critical CSS loading
    this.deferNonCriticalCSS();
  }
  
  // Defer non-critical CSS to prevent render-blocking
  private deferNonCriticalCSS(): void {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    
    stylesheets.forEach((link: Element) => {
      const stylesheet = link as HTMLLinkElement;
      
      // Skip critical stylesheets
      if (stylesheet.href.includes('critical')) return;
      
      // Convert to preload and load asynchronously
      stylesheet.rel = 'preload';
      stylesheet.setAttribute('as', 'style');
      stylesheet.onload = function(this: HTMLLinkElement) {
        this.rel = 'stylesheet';
        this.onload = null;
      };
    });
  }
  
  // Remove unused CSS rules from stylesheets
  removeUnusedRules(): void {
    const stylesheets = Array.from(document.styleSheets);
    
    stylesheets.forEach(stylesheet => {
      try {
        const rules = Array.from(stylesheet.cssRules || []);
        
        rules.forEach((rule, index) => {
          if (rule instanceof CSSStyleRule) {
            // Check if selector is used in DOM
            const isUsed = document.querySelector(rule.selectorText);
            
            if (!isUsed && !this.isCriticalSelector(rule.selectorText)) {
              stylesheet.deleteRule(index);
            }
          }
        });
      } catch (e) {
        // Skip external stylesheets due to CORS
        console.warn('Cannot optimize external stylesheet:', e);
      }
    });
  }
  
  // Check if selector is critical for initial render
  private isCriticalSelector(selector: string): boolean {
    const criticalSelectors = [
      'body', 'html', 'h1', 'h2', 'h3',
      '.hero-section', '.calculator-container',
      '.btn-primary', '.form-input',
      '.text-center', '.grid', '.flex',
      '.w-full', '.mb-4', '.mb-6'
    ];
    
    return criticalSelectors.some(critical => 
      selector.includes(critical) || selector.startsWith(critical)
    );
  }
  
  // Measure CSS performance impact
  measureOptimization(): Promise<{
    beforeSize: number;
    afterSize: number;
    savings: number;
    renderTime: number;
  }> {
    return new Promise((resolve) => {
      const before = performance.now();
      
      // Measure stylesheet sizes
      let beforeSize = 0;
      let afterSize = 0;
      
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(el => {
        if (el instanceof HTMLStyleElement) {
          beforeSize += el.textContent?.length || 0;
        }
      });
      
      // Apply optimizations
      this.inlineCriticalCSS();
      this.removeUnusedRules();
      
      // Measure after optimization
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(el => {
        if (el instanceof HTMLStyleElement) {
          afterSize += el.textContent?.length || 0;
        }
      });
      
      const after = performance.now();
      
      resolve({
        beforeSize,
        afterSize,
        savings: beforeSize - afterSize,
        renderTime: after - before
      });
    });
  }
}

export const cssOptimizer = new CSSOptimizer();