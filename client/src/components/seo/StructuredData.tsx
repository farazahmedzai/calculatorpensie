import { useLocation } from "wouter";

interface WebApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  description: string;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  category: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export function WebApplicationSchema({ name, description, url }: WebApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "RON"
    },
    "featureList": [
      "Calculul pensiei de stat (Pilon I)",
      "Calculul pensiei anticipate", 
      "Calculul contribuțiilor Pilon III",
      "Estimarea vârstei de pensionare"
    ],
    "browserRequirements": "Requires JavaScript",
    "inLanguage": "ro-RO",
    "isAccessibleForFree": true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema({ name, url, description }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "description": description,
    "logo": `${url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Romanian"
    },
    "areaServed": "Romania",
    "knowsAbout": [
      "Sistemul de pensii din România",
      "Calculul pensiei de stat",
      "Pensia anticipată",
      "Pilonul III"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ headline, description, author, datePublished, dateModified, url, image, category }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "CalculatorPensie.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calculatorpensie.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "inLanguage": "ro-RO",
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({ name, description, steps, totalTime, estimatedCost }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "supply": [],
    "tool": [],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    })),
    "inLanguage": "ro-RO",
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && { "estimatedCost": estimatedCost })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({ name, description, url, telephone, address, geo }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "areaServed": "Romania",
    "knowsAbout": [
      "Calculul pensiei",
      "Sistemul de pensii din România",
      "Pensia de stat",
      "Pensia privată"
    ],
    ...(telephone && { "telephone": telephone }),
    ...(address && { "address": address }),
    ...(geo && { "geo": geo })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({ name, description, url, breadcrumbs }: { 
  name: string; 
  description: string; 
  url: string; 
  breadcrumbs?: Array<{ name: string; url?: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": "ro-RO",
    "isPartOf": {
      "@type": "WebSite",
      "name": "CalculatorPensie.com",
      "url": "https://calculatorpensie.com"
    },
    ...(breadcrumbs && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          ...(crumb.url && { "item": crumb.url })
        }))
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema({ name, url }: { name: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "ro-RO"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}