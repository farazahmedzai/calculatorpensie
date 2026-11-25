import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "../lib/analytics";
import { normalizePath, ROUTES_META } from "@/data/routes-meta";

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);

  useEffect(() => {
    if (location !== prevLocationRef.current) {
      const normalized = normalizePath(location);
      const pageTitle = ROUTES_META[normalized]?.title || document.title;
      trackPageView(normalized, pageTitle);
      prevLocationRef.current = location;
    }
  }, [location]);
};
