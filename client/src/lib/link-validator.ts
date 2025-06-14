interface LinkValidationResult {
  url: string;
  isValid: boolean;
  redirectsTo?: string;
  error?: string;
  anchorText?: string;
  location: string;
}

interface InternalRoute {
  path: string;
  title: string;
  isActive: boolean;
}

// Define all valid internal routes
export const INTERNAL_ROUTES: InternalRoute[] = [
  { path: '/', title: 'Acasă', isActive: true },
  { path: '/calculator', title: 'Calculator Pensie', isActive: true },
  { path: '/planificare', title: 'Planificare Pensie', isActive: true },
  { path: '/tipuri-pensii', title: 'Tipuri de Pensii', isActive: true },
  { path: '/legislatie', title: 'Legislația Pensiilor', isActive: true },
  { path: '/blog', title: 'Blog Pensii', isActive: true },
  { path: '/faq', title: 'Întrebări Frecvente', isActive: true },
  { path: '/despre-noi', title: 'Despre Noi', isActive: true },
  { path: '/contact', title: 'Contact', isActive: true },
  { path: '/metodologie', title: 'Metodologie', isActive: true },
  { path: '/privacy', title: 'Politica de Confidențialitate', isActive: true }
];

// Validate internal links
export function validateInternalLink(path: string): boolean {
  return INTERNAL_ROUTES.some(route => route.path === path && route.isActive);
}

// Get suggested internal links for content
export function getSuggestedInternalLinks(content: string, currentPath: string): Array<{
  keyword: string;
  suggestedLink: string;
  anchorText: string;
}> {
  const suggestions: Array<{ keyword: string; suggestedLink: string; anchorText: string }> = [];
  
  const linkSuggestions = [
    {
      keywords: ['calculator pensie', 'calculul pensiei', 'calculeaza pensia'],
      link: '/calculator',
      anchorText: 'calculator de pensie'
    },
    {
      keywords: ['planificare pensie', 'planifica pensia'],
      link: '/planificare',
      anchorText: 'planificarea pensiei'
    },
    {
      keywords: ['tipuri pensii', 'pilonul I', 'pilonul II', 'pilonul III'],
      link: '/tipuri-pensii',
      anchorText: 'tipurile de pensii din România'
    },
    {
      keywords: ['legislatie pensii', 'legea pensiilor'],
      link: '/legislatie',
      anchorText: 'legislația pensiilor'
    },
    {
      keywords: ['intrebari frecvente', 'FAQ', 'intrebari pensii'],
      link: '/faq',
      anchorText: 'întrebări frecvente despre pensii'
    }
  ];

  linkSuggestions.forEach(suggestion => {
    if (suggestion.link !== currentPath) {
      suggestion.keywords.forEach(keyword => {
        if (content.toLowerCase().includes(keyword.toLowerCase())) {
          suggestions.push({
            keyword,
            suggestedLink: suggestion.link,
            anchorText: suggestion.anchorText
          });
        }
      });
    }
  });

  return suggestions;
}

// Optimize anchor text for better SEO
export function optimizeAnchorText(originalText: string, targetUrl: string): string {
  const route = INTERNAL_ROUTES.find(r => r.path === targetUrl);
  
  // Avoid generic anchor text
  const genericPhrases = ['click aici', 'citeste mai mult', 'vezi aici', 'apasa aici'];
  if (genericPhrases.some(phrase => originalText.toLowerCase().includes(phrase))) {
    return route?.title || originalText;
  }

  // Use specific, descriptive anchor text
  const anchorOptimizations: Record<string, string> = {
    '/calculator': 'calculatorul de pensie online',
    '/planificare': 'ghidul de planificare a pensiei',
    '/tipuri-pensii': 'tipurile de pensii din România',
    '/legislatie': 'legislația actuală privind pensiile',
    '/faq': 'întrebările frecvente despre pensii'
  };

  return anchorOptimizations[targetUrl] || originalText;
}

// Check for duplicate content issues
export function checkDuplicateContent(pages: Array<{ path: string; title: string; description: string; content?: string }>): Array<{
  page1: string;
  page2: string;
  similarity: number;
  issue: string;
}> {
  const duplicateIssues: Array<{ page1: string; page2: string; similarity: number; issue: string }> = [];

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const page1 = pages[i];
      const page2 = pages[j];

      // Check title similarity
      if (page1.title === page2.title) {
        duplicateIssues.push({
          page1: page1.path,
          page2: page2.path,
          similarity: 100,
          issue: 'Duplicate title tags'
        });
      }

      // Check description similarity
      if (page1.description === page2.description) {
        duplicateIssues.push({
          page1: page1.path,
          page2: page2.path,
          similarity: 100,
          issue: 'Duplicate meta descriptions'
        });
      }
    }
  }

  return duplicateIssues;
}

// Generate sitemap data
export function generateSitemapData(): Array<{
  url: string;
  lastModified: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}> {
  const baseUrl = 'https://calculatorpensie.com';
  const now = new Date().toISOString();

  return INTERNAL_ROUTES.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.path === '/' ? 'daily' as const : 
                    route.path === '/blog' ? 'weekly' as const : 'monthly' as const,
    priority: route.path === '/' ? 1.0 : 
             route.path === '/calculator' ? 0.9 : 
             route.path.includes('blog') ? 0.8 : 0.7
  }));
}

// SEO-friendly URL generation
export function generateSEOFriendlyURL(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}