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

const PATH_LABELS: Record<string, string> = {
  "calculator-pensie-anticipata": "Calculator Pensie Anticipată",
  "calculator-varsta-pensionare": "Calculator Vârstă Pensionare",
  "calculator-puncte-pensie": "Calculator Puncte Pensie",
  "calculator-pensie-pilon-2": "Calculator Pensie Pilon 2",
  "calculator-pensie-pilon-3": "Calculator Pensie Pilon 3",
  "program-excel-calcul-pensie": "Program Excel Calcul Pensie",
  planificare: "Planificare Pensie",
  "tipuri-pensii": "Tipuri de Pensii",
  legislatie: "Legislația Pensiilor",
  blog: "Blog Pensii",
  faq: "Întrebări Frecvente",
  "despre-noi": "Despre Noi",
  contact: "Contact",
  metodologie: "Metodologie Calcul",
  privacy: "Politică Confidențialitate",
  terms: "Termeni și Condiții",
};

export default function BreadcrumbNavigation({ items, className = "" }: BreadcrumbNavigationProps) {
  const [location] = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Acasă", href: "/" }];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = PATH_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        label,
        href: index === pathSegments.length - 1 ? undefined : `${currentPath}/`,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  return (
    <nav
      className={`flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-y-1 space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="h-4 w-4 mr-1 flex-shrink-0" />}
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
              <ChevronRight className="h-4 w-4 mx-2 text-slate-400 flex-shrink-0" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
