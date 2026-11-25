import { useEffect } from "react";
import {
  buildJsonLdGraph,
  DEFAULT_OG_IMAGE,
  normalizeCanonicalUrl,
  ROUTES_META,
  type PageSchemaKind,
} from "@/data/routes-meta";

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
  schemaKind?: PageSchemaKind;
  schemaName?: string;
  faqQuestions?: Array<{ question: string; answer: string }>;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTag?: string[];
  noindex?: boolean;
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function MetaTags({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  structuredData,
  schemaKind,
  schemaName,
  faqQuestions,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  noindex = false,
}: MetaTagsProps) {
  useEffect(() => {
    const rawCanonical = canonical || window.location.pathname;
    const normalizedCanonical = normalizeCanonicalUrl(rawCanonical);
    const routePath = new URL(normalizedCanonical).pathname;
    const matchedMeta = ROUTES_META[routePath];

    const finalTitle = matchedMeta ? matchedMeta.title : title;
    const finalDescription = matchedMeta ? matchedMeta.description : description;
    const finalImage = ogImage.startsWith("http")
      ? ogImage
      : `https://calculatorpensie.com${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

    document.title = finalTitle;
    upsertMeta("name", "description", finalDescription);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    if (keywords || matchedMeta?.keywords) {
      upsertMeta("name", "keywords", matchedMeta?.keywords || keywords || "");
    }

    upsertMeta("property", "og:type", articlePublishedTime ? "article" : matchedMeta?.ogType || "website");
    upsertMeta("property", "og:title", ogTitle || finalTitle);
    upsertMeta("property", "og:description", ogDescription || finalDescription);
    upsertMeta("property", "og:image", finalImage);
    upsertMeta("property", "og:url", normalizedCanonical);
    upsertMeta("property", "og:site_name", "CalculatorPensie.com");
    upsertMeta("property", "og:locale", "ro_RO");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", ogTitle || finalTitle);
    upsertMeta("name", "twitter:description", ogDescription || finalDescription);
    upsertMeta("name", "twitter:image", finalImage);

    // Ensure single canonical link matching exact trailing-slash standard
    const existingCanonicals = document.head.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach((el, i) => {
      if (i > 0) el.remove();
    });
    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", normalizedCanonical);

    // Update single unified @graph JSON-LD tag cleanly
    const schemaDef =
      structuredData ||
      buildJsonLdGraph({
        meta: matchedMeta || {
          path: routePath,
          title: finalTitle,
          description: finalDescription,
          canonical: normalizedCanonical,
          keywords: keywords || "",
          ogType: articlePublishedTime ? "article" : "website",
          schemaKind: schemaKind || (articlePublishedTime ? "article" : "webpage"),
          schemaName: schemaName || finalTitle.replace(/\s*\|\s*CalculatorPensie\.com$/i, ""),
          breadcrumbs: routePath.startsWith("/blog/") && routePath !== "/blog/"
            ? [
                { name: "Acasă", url: "https://calculatorpensie.com/" },
                { name: "Blog", url: "https://calculatorpensie.com/blog/" },
                { name: schemaName || finalTitle.replace(/\s*\|\s*CalculatorPensie\.com$/i, "") },
              ]
            : [{ name: "Acasă", url: "https://calculatorpensie.com/" }],
          datePublished: articlePublishedTime,
          dateModified: articleModifiedTime || articlePublishedTime || "2026-11-25",
        },
        faqQuestions,
        articleAuthor,
        articleCategory: articleSection,
        articleImage: finalImage,
      });

    let schemaEl = document.getElementById("page-schema") as HTMLScriptElement | null;
    if (!schemaEl) {
      schemaEl = document.createElement("script");
      schemaEl.id = "page-schema";
      schemaEl.type = "application/ld+json";
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(schemaDef);
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    keywords,
    structuredData,
    schemaKind,
    schemaName,
    faqQuestions,
    articleAuthor,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    noindex,
  ]);

  return null;
}
