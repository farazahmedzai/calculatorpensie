import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNavigation({ items, className = "" }: BreadcrumbNavigationProps) {
  const [location] = useLocation();

  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Acasă", href: "/" }];

    const pathMapping: Record<string, string> = {
      'calculator': 'Calculator Pensie',
      'planificare': 'Planificare Pensie',
      'tipuri-pensii': 'Tipuri de Pensii',
      'legislatie': 'Legislația Pensiilor',
      'blog': 'Blog Pensii',
      'faq': 'Întrebări Frecvente',
      'despre-noi': 'Despre Noi',
      'contact': 'Contact',
      'metodologie': 'Metodologie',
      'privacy': 'Politica de Confidențialitate'
    };

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathMapping[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://calculatorpensie.com${item.href}` })
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav className={`flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.href ? (
                <Link href={item.href}>
                  <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span className="text-slate-900 dark:text-slate-100 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
              {index < breadcrumbItems.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}