import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { staticArticles } from "../client/src/data/static-articles";
import {
  buildJsonLdGraph,
  DEFAULT_OG_IMAGE,
  ROUTES_META,
  type RouteMetaDef,
} from "../client/src/data/routes-meta";

function escapeAttr(val: string): string {
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeText(val: string): string {
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectHeadAndBody(
  template: string,
  meta: RouteMetaDef,
  appHtml: string,
  extra: {
    articleAuthor?: string;
    articleCategory?: string;
    articleImage?: string;
  } = {}
): string {
  let html = template;

  const escapedTitle = escapeText(meta.title);
  const escapedDesc = escapeAttr(meta.description);
  const escapedTitleAttr = escapeAttr(meta.title);
  const escapedCanonical = escapeAttr(meta.canonical);
  const escapedKeywords = escapeAttr(meta.keywords);
  const ogImage = escapeAttr(extra.articleImage || DEFAULT_OG_IMAGE);
  const ogType = meta.ogType || "website";

  // Replace core meta tags
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${escapedCanonical}" />`
  );

  // Open Graph
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${escapedTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:type" content="${ogType}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${escapedCanonical}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Twitter Cards
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapedTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Keywords tag
  const kwTag = `    <meta name="keywords" content="${escapedKeywords}" />`;
  if (/<meta\s+name=["']keywords["']/i.test(html)) {
    html = html.replace(/<meta\s+name=["']keywords["'][^>]*\/?>/i, kwTag.trim());
  } else {
    html = html.replace(/<\/head>/i, `${kwTag}\n  </head>`);
  }

  // Single unified @graph JSON-LD schema
  const jsonLd = buildJsonLdGraph({
    meta,
    articleAuthor: extra.articleAuthor,
    articleCategory: extra.articleCategory,
    articleImage: extra.articleImage,
  });
  const safeJson = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  html = html.replace(
    /<script\s+id=["']page-schema["'][^>]*>[\s\S]*?<\/script>/i,
    `<script id="page-schema" type="application/ld+json">${safeJson}</script>`
  );

  // Inject SSR-rendered React HTML into #root (zero layout voids / zero noscript hacks)
  html = html.replace(
    /<div\s+id=["']root["']\s*>[\s\S]*?<\/div>/i,
    `<div id="root">${appHtml}</div>`
  );

  return html;
}

async function main() {
  const rootPath = process.cwd();
  const distPath = path.join(rootPath, "dist", "public");
  const indexHtmlPath = path.join(distPath, "index.html");
  const ssrEntryPath = path.join(rootPath, "dist", "ssr", "entry-server.js");

  if (!fs.existsSync(indexHtmlPath)) {
    console.error("dist/public/index.html not found! Run vite client build first.");
    process.exit(1);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    console.error("dist/ssr/entry-server.js not found! Run vite --ssr build first.");
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(indexHtmlPath, "utf-8");
  const ssrMod = await import(pathToFileURL(ssrEntryPath).href);
  const renderRouteHtml: (routePath: string) => string = ssrMod.renderRouteHtml;

  if (typeof renderRouteHtml !== "function") {
    throw new Error("renderRouteHtml export missing from dist/ssr/entry-server.js");
  }

  console.log("Generating true SSR HTML pages with unified metadata and @graph schema...");
  let generatedCount = 0;

  // 1. All static routes (including homepage /)
  for (const [routePath, meta] of Object.entries(ROUTES_META)) {
    const appHtml = renderRouteHtml(routePath);
    if (!appHtml || appHtml.length < 200) {
      throw new Error(`SSR produced empty/short HTML for ${routePath}`);
    }
    const finalHtml = injectHeadAndBody(templateHtml, meta, appHtml);
    if (routePath === "/") {
      fs.writeFileSync(indexHtmlPath, finalHtml, "utf-8");
    } else {
      const cleanRel = routePath.replace(/^\/|\/$/g, "");
      const dir = path.join(distPath, cleanRel);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), finalHtml, "utf-8");
    }
    generatedCount++;
  }

  // 2. All published blog articles
  for (const article of staticArticles) {
    if (!article.published) continue;
    const routePath = `/blog/${article.slug}/`;
    const canonical = `https://calculatorpensie.com${routePath}`;
    const meta: RouteMetaDef = {
      path: routePath,
      title: `${article.title} | CalculatorPensie.com`,
      description: article.excerpt,
      canonical,
      keywords: `${article.category}, pensii romania, ${article.title.toLowerCase()}`,
      ogType: "article",
      schemaKind: "article",
      schemaName: article.title,
      breadcrumbs: [
        { name: "Acasă", url: "https://calculatorpensie.com/" },
        { name: "Blog", url: "https://calculatorpensie.com/blog/" },
        { name: article.title, url: canonical },
      ],
      datePublished: article.publishDate,
      dateModified: article.modifiedDate || "2026-11-25",
    };

    const appHtml = renderRouteHtml(routePath);
    if (!appHtml || appHtml.length < 200) {
      throw new Error(`SSR produced empty/short HTML for ${routePath}`);
    }
    const finalHtml = injectHeadAndBody(templateHtml, meta, appHtml, {
      articleAuthor: article.author?.name || "CalculatorPensie.com",
      articleCategory: article.category,
      articleImage: article.image || DEFAULT_OG_IMAGE,
    });

    const dir = path.join(distPath, "blog", article.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), finalHtml, "utf-8");
    generatedCount++;
  }

  console.log(`Successfully SSR-prerendered ${generatedCount} routes into dist/public.`);
}

main().catch((err) => {
  console.error("Failed generating SSR pages:", err);
  process.exit(1);
});
