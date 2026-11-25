import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

interface PerformanceTrackerProps {
  page: string;
  title: string;
}

export default function PerformanceTracker({ page }: PerformanceTrackerProps) {
  useEffect(() => {
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        if ([25, 50, 75, 100].includes(scrollPercentage)) {
          trackScrollDepth(scrollPercentage, page);
        }
      }
    };

    const startTime = Date.now();
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent, page);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", trackTimeSpent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", trackTimeSpent);
    };
  }, [page]);

  return null;
}
