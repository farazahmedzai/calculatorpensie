import { lazy } from 'react';

// Lazy load heavy components to reduce initial bundle size by ~100KB
export const LazyCalculatorPage = lazy(() => import('../pages/calculator'));
export const LazyBlogPage = lazy(() => import('../pages/blog'));
export const LazyBlogArticle = lazy(() => import('../pages/blog-article'));
export const LazyContactPage = lazy(() => import('../pages/contact'));
export const LazyFAQSection = lazy(() => import('./FAQSection'));

// Lazy load calculator components (heavy with recharts)
export const LazyMainCalculator = lazy(() => import('./calculators/main-calculator'));
export const LazyEarlyRetirementCalculator = lazy(() => import('./calculators/early-retirement-calculator'));
export const LazyPillar3Calculator = lazy(() => import('./calculators/pillar3-calculator'));

// Lazy load guide pages
export const LazyPlanificare = lazy(() => import('../pages/guides/planificare'));
export const LazyTipuriPensii = lazy(() => import('../pages/guides/tipuri-pensii'));
export const LazyLegislatie = lazy(() => import('../pages/guides/legislatie'));

// Loading component for suspense fallbacks
export const ComponentLoader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2 text-gray-600">Se încarcă...</span>
  </div>
);

// Preload critical components when browser is idle
export const preloadCriticalComponents = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload most used components
      import('./calculators/main-calculator');
      import('./FAQSection');
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      import('./calculators/main-calculator');
      import('./FAQSection');
    }, 1000);
  }
};