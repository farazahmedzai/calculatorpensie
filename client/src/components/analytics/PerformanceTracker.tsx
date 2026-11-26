import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

interface PerformanceTrackerProps {
  page: string;
  title: string;
}

export default function PerformanceTracker({ page }: PerformanceTrackerProps) {
  useEffect(() => {
    const firedMilestones = new Set<number>();
    let rafId = 0;

    const measureScroll = () => {
      rafId = 0;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) return;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      for (const milestone of [25, 50, 75, 100]) {
        if (scrollPercentage >= milestone && !firedMilestones.has(milestone)) {
          firedMilestones.add(milestone);
          trackScrollDepth(milestone, page);
        }
      }
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(measureScroll);
      }
    };

    const startTime = Date.now();
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent, page);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", trackTimeSpent);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", trackTimeSpent);
    };
  }, [page]);

  return null;
}
