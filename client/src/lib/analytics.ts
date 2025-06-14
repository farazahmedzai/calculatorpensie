// Google Analytics 4 implementation for CalculatorPensie.com
// Events tracking for calculator usage, article engagement, and conversions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics
export const initGA = () => {
  // Only initialize in production
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Page view tracking
export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Calculator events - Primary conversion tracking
export const trackCalculatorUsage = (calculatorType: 'standard' | 'early' | 'pillar3', result: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_submission', {
      event_category: 'Calculator',
      event_label: calculatorType,
      value: Math.round(result), // Pension amount in RON
      custom_parameters: {
        calculator_type: calculatorType,
        pension_amount: result,
        timestamp: new Date().toISOString(),
      }
    });
  }
};

// Article engagement tracking
export const trackArticleView = (slug: string, category: string, readTime: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'article_view', {
      event_category: 'Content',
      event_label: slug,
      value: readTime,
      custom_parameters: {
        article_slug: slug,
        article_category: category,
        estimated_read_time: readTime,
      }
    });
  }
};

// Guide page engagement
export const trackGuideView = (guidePage: 'planificare' | 'tipuri-pensii' | 'legislatie') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'guide_view', {
      event_category: 'Guides',
      event_label: guidePage,
      custom_parameters: {
        guide_type: guidePage,
      }
    });
  }
};

// FAQ interaction tracking
export const trackFAQInteraction = (question: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'faq_interaction', {
      event_category: 'FAQ',
      event_label: question,
      custom_parameters: {
        question_text: question,
      }
    });
  }
};

// Contact form submissions
export const trackContactSubmission = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'contact_submission', {
      event_category: 'Contact',
      event_label: 'form_submit',
    });
  }
};

// Newsletter subscriptions (if implemented)
export const trackNewsletterSignup = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'newsletter_subscription', {
      event_category: 'Newsletter',
      event_label: 'signup',
    });
  }
};

// Download tracking (for future PDF guides)
export const trackDownload = (fileName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'file_download', {
      event_category: 'Downloads',
      event_label: fileName,
      custom_parameters: {
        file_name: fileName,
      }
    });
  }
};

// External link tracking
export const trackExternalClick = (url: string, linkText: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'External Links',
      event_label: url,
      custom_parameters: {
        link_url: url,
        link_text: linkText,
      }
    });
  }
};

// Search functionality (if implemented)
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      custom_parameters: {
        search_results_count: resultsCount,
      }
    });
  }
};

// Scroll depth tracking for content engagement
export const trackScrollDepth = (percentage: number, page: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${percentage}%`,
      custom_parameters: {
        scroll_depth: percentage,
        page_type: page,
      }
    });
  }
};

// Time on page tracking
export const trackTimeOnPage = (timeInSeconds: number, page: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'timing_complete', {
      name: 'page_read_time',
      value: timeInSeconds,
      event_category: 'Engagement',
      custom_parameters: {
        page_type: page,
        time_spent_seconds: timeInSeconds,
      }
    });
  }
};

// Error tracking
export const trackError = (errorMessage: string, errorType: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      custom_parameters: {
        error_type: errorType,
        timestamp: new Date().toISOString(),
      }
    });
  }
};