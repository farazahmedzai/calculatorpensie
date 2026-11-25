// Schema.org structured data is emitted once per page as a unified @graph
// inside #page-schema via build-time SSR + MetaTags client synchronization.
// These component exports remain typed no-ops so page components keep clean imports
// without emitting 4-8 duplicate/conflicting <script type="application/ld+json"> tags.

export function WebApplicationSchema(_props: {
  name: string;
  description: string;
  url: string;
}) {
  return null;
}

export function FAQPageSchema(_props: {
  questions: Array<{ question: string; answer: string }>;
}) {
  return null;
}

export function OrganizationSchema(_props: {
  name: string;
  url: string;
  description: string;
}) {
  return null;
}

export function ArticleSchema(_props: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  category: string;
}) {
  return null;
}

export function HowToSchema(_props: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}) {
  return null;
}

export function LocalBusinessSchema(_props: {
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
  geo?: { latitude: number; longitude: number };
}) {
  return null;
}

export function WebPageSchema(_props: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url?: string }>;
}) {
  return null;
}

export function WebSiteSchema(_props: { name: string; url: string }) {
  return null;
}
