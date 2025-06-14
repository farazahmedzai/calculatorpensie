import { useEffect } from 'react';
import { performanceOptimizer } from '@/lib/performance-optimizer';
import { initGA, trackPageView, trackScrollDepth, trackTimeOnPage, trackError } from '@/lib/analytics';

interface PerformanceTrackerProps {
  page: string;
  title: string;
}

export default function PerformanceTracker({ page, title }: PerformanceTrackerProps) {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track page view
    trackPageView(page, title);
    
    // Initialize performance optimizer
    performanceOptimizer.init();
    
    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        
        // Track at 25%, 50%, 75%, and 100% intervals
        if ([25, 50, 75, 100].includes(scrollPercentage)) {
          trackScrollDepth(scrollPercentage, page);
        }
      }
    };
    
    // Track time on page
    const startTime = Date.now();
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent, page);
    };
    
    // Track JavaScript errors
    const handleError = (event: ErrorEvent) => {
      trackError(event.message, 'JavaScript Error');
    };
    
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(String(event.reason), 'Promise Rejection');
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', trackTimeSpent);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeSpent);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [page, title]);

  return null;
}