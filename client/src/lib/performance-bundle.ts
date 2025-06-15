// Performance bundle optimizer - eliminates unused CSS/JS
export class PerformanceBundleOptimizer {
  private usedComponents = new Set<string>();
  private criticalCSS = new Set<string>();
  
  // Track component usage for tree shaking
  trackComponentUsage(componentName: string) {
    this.usedComponents.add(componentName);
  }
  
  // Extract critical CSS for above-the-fold content
  extractCriticalCSS() {
    const criticalSelectors = [
      // Hero section styles
      '.hero-section',
      '.calculator-container',
      
      // Form elements
      '.form-input',
      '.btn-primary',
      
      // Layout essentials
      'body',
      'h1', 'h2', 'h3',
      '.text-center',
      '.grid',
      '.flex',
      
      // Utilities used above fold
      '.mb-4', '.mb-6',
      '.w-full',
      '.gap-4'
    ];
    
    return criticalSelectors.join(',\n');
  }
  
  // Generate optimized component manifest
  generateComponentManifest() {
    return {
      critical: [
        'Home',
        'Header', 
        'Footer',
        'MainCalculator'
      ],
      lazy: [
        'BlogPage',
        'ContactPage',
        'GuidePages',
        'EarlyRetirementCalculator',
        'Pillar3Calculator'
      ],
      charts: [
        'recharts' // Heavy library - load only when needed
      ]
    };
  }
  
  // Remove unused Tailwind classes
  purgeUnusedCSS(css: string): string {
    const usedClasses = [
      // Core layout
      'flex', 'grid', 'w-full', 'h-full',
      'min-h-screen', 'max-w-4xl', 'mx-auto',
      
      // Spacing
      'p-4', 'p-6', 'p-8', 'm-4', 'mb-4', 'mb-6',
      'gap-4', 'gap-6', 'space-y-4',
      
      // Typography
      'text-lg', 'text-xl', 'text-2xl', 'font-semibold',
      'font-bold', 'text-center', 'text-white',
      
      // Colors
      'bg-white', 'bg-blue-600', 'bg-gray-100',
      'text-gray-700', 'text-blue-600', 'border-gray-300',
      
      // Interactive
      'hover:bg-blue-700', 'focus:outline-none',
      'transition-colors', 'cursor-pointer',
      
      // Components
      'rounded-lg', 'shadow-lg', 'border'
    ];
    
    // Simple CSS purging - keep only used classes
    const usedClassRegex = new RegExp(
      usedClasses.map(cls => `\\.${cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).join('|'),
      'g'
    );
    
    return css.split('\n')
      .filter(line => {
        if (line.includes('@')) return true; // Keep @ rules
        if (line.includes('{') && !usedClassRegex.test(line)) return false;
        return true;
      })
      .join('\n');
  }
}

export const bundleOptimizer = new PerformanceBundleOptimizer();