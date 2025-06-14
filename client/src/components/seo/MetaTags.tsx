import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTag?: string[];
  noindex?: boolean;
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
}

export default function MetaTags({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/assets/og-image.png',
  keywords,
  structuredData,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTag,
  noindex = false,
  alternateLanguages
}: MetaTagsProps) {
  useEffect(() => {
    document.title = title;

    const existingMetas = document.querySelectorAll('meta[data-pension-meta]');
    existingMetas.forEach(meta => meta.remove());

    const existingStructured = document.querySelectorAll('script[type="application/ld+json"]');
    existingStructured.forEach(script => script.remove());

    const metas: Array<{ name?: string; property?: string; content: string }> = [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: articleAuthor || 'CalculatorPensie.com' },
      { name: 'language', content: 'Romanian' },
      { name: 'geo.region', content: 'RO' },
      { name: 'geo.country', content: 'Romania' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'revisit-after', content: '7 days' },
      
      { property: 'og:type', content: articlePublishedTime ? 'article' : 'website' },
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'CalculatorPensie.com' },
      { property: 'og:locale', content: 'ro_RO' },
      
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: ogImage },
      
      { name: 'theme-color', content: '#2563eb' },
      { name: 'msapplication-TileColor', content: '#2563eb' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ];

    // Add article-specific meta tags
    if (articlePublishedTime) {
      metas.push({ property: 'article:published_time', content: articlePublishedTime });
    }
    if (articleModifiedTime) {
      metas.push({ property: 'article:modified_time', content: articleModifiedTime });
    }
    if (articleAuthor) {
      metas.push({ property: 'article:author', content: articleAuthor });
    }
    if (articleSection) {
      metas.push({ property: 'article:section', content: articleSection });
    }
    if (articleTag) {
      articleTag.forEach(tag => {
        metas.push({ property: 'article:tag', content: tag });
      });
    }

    if (keywords) {
      metas.push({ name: 'keywords', content: keywords });
    }

    metas.forEach(meta => {
      const metaElement = document.createElement('meta');
      if ('name' in meta && meta.name) {
        metaElement.setAttribute('name', meta.name);
      } else if ('property' in meta && meta.property) {
        metaElement.setAttribute('property', meta.property);
      }
      metaElement.setAttribute('content', meta.content);
      metaElement.setAttribute('data-pension-meta', 'true');
      document.head.appendChild(metaElement);
    });

    // Add alternate language links
    if (alternateLanguages) {
      alternateLanguages.forEach(lang => {
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'alternate');
        linkElement.setAttribute('hreflang', lang.hreflang);
        linkElement.setAttribute('href', lang.href);
        linkElement.setAttribute('data-pension-meta', 'true');
        document.head.appendChild(linkElement);
      });
    }

    if (canonical) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) existingCanonical.remove();
      
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      document.head.appendChild(canonicalLink);
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const metasToRemove = document.querySelectorAll('meta[data-pension-meta]');
      metasToRemove.forEach(meta => meta.remove());
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, keywords, structuredData]);

  return null;
}