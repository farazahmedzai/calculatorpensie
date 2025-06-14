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