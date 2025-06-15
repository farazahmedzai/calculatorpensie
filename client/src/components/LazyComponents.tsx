import { lazy } from 'react';

// Lazy load heavy components to reduce initial bundle size by ~100KB
export const LazyCalculator = lazy(() => import('./calculators/Calculator'));
export const LazyBlogList = lazy(() => import('../pages/blog'));
export const LazyBlogArticle = lazy(() => import('../pages/blog-article'));
export const LazyContact = lazy(() => import('../pages/contact'));
export const LazyGuides = lazy(() => import('../pages/guides/PensionGuides'));
export const LazyFAQ = lazy(() => import('./FAQSection'));

// Lazy load chart components (heavy recharts library)
export const LazyCharts = lazy(() => import('./charts/PensionCharts'));

// Lazy load analytics components
export const LazyAnalytics = lazy(() => import('./analytics/AnalyticsTracker'));

// Loading component for suspense fallbacks
export const ComponentLoader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2 text-gray-600">Se încarcă...</span>
  </div>
);

// Preload critical components when idle
export const preloadCriticalComponents = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      LazyCalculator();
      LazyFAQ();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      LazyCalculator();
      LazyFAQ();
    }, 1000);
  }
};