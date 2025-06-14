import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      // Generate page title based on route
      const pageTitle = getPageTitle(location);
      trackPageView(location, pageTitle);
      prevLocationRef.current = location;
    }
  }, [location]);
};

// Helper function to generate page titles
const getPageTitle = (path: string): string => {
  const titleMap: Record<string, string> = {
    '/': 'Calculator Pensie Romania - Calcul Pensie Online',
    '/calculator': 'Calculator Pensie - Calcul Online Rapid',
    '/planificare': 'Planificare Pensie - Ghid Complet',
    '/tipuri-pensii': 'Tipuri de Pensii în România - Ghid',
    '/legislatie': 'Legislația Pensiilor în România',
    '/blog': 'Blog Pensii - Articole și Sfaturi',
    '/despre-noi': 'Despre Noi - Calculator Pensie',
    '/metodologie': 'Metodologie Calcul Pensie',
    '/contact': 'Contact - Calculator Pensie',
    '/privacy': 'Politica de Confidențialitate',
    '/faq': 'Întrebări Frecvente - Calculator Pensie'
  };
  
  return titleMap[path] || `Calculator Pensie - ${path}`;
};