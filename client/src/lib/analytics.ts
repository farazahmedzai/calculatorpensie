// Google Analytics 4 helpers (single global loader resides in client/index.html)

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-4XHK61Q7LP";

export const initGA = () => {
  // index.html loads gtag.js once; avoid duplicate injection or double page_view hits
  return;
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      ...(title ? { page_title: title } : {}),
    });
  }
};

export const trackCalculatorUsage = (
  calculatorType: "standard" | "early" | "pillar2" | "pillar3" | "points" | "age",
  result: number
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "calculator_submission", {
      event_category: "Calculator",
      event_label: calculatorType,
      value: Math.round(result),
      calculator_type: calculatorType,
      pension_amount: Math.round(result),
    });
  }
};

export const trackArticleView = (slug: string, category: string, readTime: number) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "article_view", {
      event_category: "Content",
      event_label: slug,
      value: readTime,
      article_slug: slug,
      article_category: category,
    });
  }
};

export const trackNewsletterSignup = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "newsletter_subscription", {
      event_category: "Newsletter",
      event_label: "signup",
    });
  }
};

export const trackDownload = (fileName: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "file_download", {
      event_category: "Downloads",
      event_label: fileName,
    });
  }
};

export const trackScrollDepth = (percentage: number, page: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "scroll", {
      event_category: "Engagement",
      event_label: `${percentage}%`,
      scroll_depth: percentage,
      page_type: page,
    });
  }
};

export const trackTimeOnPage = (timeInSeconds: number, page: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "timing_complete", {
      name: "page_read_time",
      value: timeInSeconds,
      event_category: "Engagement",
      page_type: page,
    });
  }
};

export const trackError = (errorMessage: string, errorType: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "exception", {
      description: errorMessage,
      fatal: false,
      error_type: errorType,
    });
  }
};
