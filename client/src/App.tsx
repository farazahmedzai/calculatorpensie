import { Switch, Route, Redirect, Router as WouterRouter } from "wouter";
import { Suspense, useEffect, lazy, type ComponentType } from "react";
import { useAnalytics } from "./hooks/use-analytics";
import { normalizePath } from "./data/routes-meta";

// Eagerly load layout + primary calculator for 0ms homepage LCP & clean hydration
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export type RouteKey =
  | "home"
  | "anticipata"
  | "varsta"
  | "puncte"
  | "pilon2"
  | "pilon3"
  | "excel"
  | "planificare"
  | "tipuri"
  | "legislatie"
  | "blog"
  | "blogArticle"
  | "despreNoi"
  | "metodologie"
  | "contact"
  | "privacy"
  | "terms"
  | "faq";

export const PAGE_LOADERS: Record<Exclude<RouteKey, "home">, () => Promise<{ default: ComponentType<any> }>> = {
  anticipata: () => import("@/pages/calculator-anticipata"),
  varsta: () => import("@/pages/calculator-varsta-pensionare"),
  puncte: () => import("@/pages/calculator-puncte-pensie"),
  pilon2: () => import("@/pages/calculator-pilon-2"),
  pilon3: () => import("@/pages/calculator-pensie-pilon-3"),
  excel: () => import("@/pages/program-excel-calcul-pensie"),
  planificare: () => import("@/pages/guides/planificare"),
  tipuri: () => import("@/pages/guides/tipuri-pensii"),
  legislatie: () => import("@/pages/guides/legislatie"),
  blog: () => import("@/pages/blog"),
  blogArticle: () => import("@/pages/blog-article"),
  despreNoi: () => import("@/pages/despre-noi"),
  metodologie: () => import("@/pages/metodologie"),
  contact: () => import("@/pages/contact"),
  privacy: () => import("@/pages/privacy"),
  terms: () => import("@/pages/terms"),
  faq: () => import("@/pages/faq"),
};

// Cache resolved before hydrateRoot so SSR pages hydrate synchronously without Suspense flash
const PRELOADED_PAGES: Partial<Record<RouteKey, ComponentType<any>>> = {
  home: Home,
};

function resolveRouteKey(pathname: string): RouteKey | null {
  const norm = normalizePath(pathname);
  const map: Record<string, RouteKey> = {
    "/": "home",
    "/calculator-pensie-anticipata/": "anticipata",
    "/calculator-varsta-pensionare/": "varsta",
    "/calculator-puncte-pensie/": "puncte",
    "/calculator-pensie-pilon-2/": "pilon2",
    "/calculator-pensie-pilon-3/": "pilon3",
    "/program-excel-calcul-pensie/": "excel",
    "/planificare/": "planificare",
    "/tipuri-pensii/": "tipuri",
    "/legislatie/": "legislatie",
    "/blog/": "blog",
    "/despre-noi/": "despreNoi",
    "/metodologie/": "metodologie",
    "/contact/": "contact",
    "/privacy/": "privacy",
    "/terms/": "terms",
    "/faq/": "faq",
  };
  if (map[norm]) return map[norm];
  if (norm.startsWith("/blog/") && norm.length > "/blog/".length) return "blogArticle";
  return null;
}

export async function preloadRouteChunk(pathname: string): Promise<void> {
  const key = resolveRouteKey(pathname);
  if (!key || key === "home" || PRELOADED_PAGES[key]) return;
  const mod = await PAGE_LOADERS[key]();
  PRELOADED_PAGES[key] = mod.default;
}

const LazyPages: Record<Exclude<RouteKey, "home">, ComponentType<any>> = {
  anticipata: lazy(PAGE_LOADERS.anticipata),
  varsta: lazy(PAGE_LOADERS.varsta),
  puncte: lazy(PAGE_LOADERS.puncte),
  pilon2: lazy(PAGE_LOADERS.pilon2),
  pilon3: lazy(PAGE_LOADERS.pilon3),
  excel: lazy(PAGE_LOADERS.excel),
  planificare: lazy(PAGE_LOADERS.planificare),
  tipuri: lazy(PAGE_LOADERS.tipuri),
  legislatie: lazy(PAGE_LOADERS.legislatie),
  blog: lazy(PAGE_LOADERS.blog),
  blogArticle: lazy(PAGE_LOADERS.blogArticle),
  despreNoi: lazy(PAGE_LOADERS.despreNoi),
  metodologie: lazy(PAGE_LOADERS.metodologie),
  contact: lazy(PAGE_LOADERS.contact),
  privacy: lazy(PAGE_LOADERS.privacy),
  terms: lazy(PAGE_LOADERS.terms),
  faq: lazy(PAGE_LOADERS.faq),
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    <span className="ml-2 text-gray-600">Se încarcă...</span>
  </div>
);

interface AppProps {
  ssrPath?: string;
  pageOverrides?: Partial<Record<RouteKey, ComponentType<any>>>;
}

function renderPage(key: Exclude<RouteKey, "home">, overrides?: Partial<Record<RouteKey, ComponentType<any>>>) {
  const SyncComp = overrides?.[key] || PRELOADED_PAGES[key];
  if (SyncComp) {
    return <SyncComp />;
  }
  const LazyComp = LazyPages[key];
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComp />
    </Suspense>
  );
}

function RouterContent({ pageOverrides }: { pageOverrides?: Partial<Record<RouteKey, ComponentType<any>>> }) {
  useAnalytics();

  const HomeComp = pageOverrides?.home || Home;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/">{() => <HomeComp />}</Route>
          <Route path="/calculator-pensie-anticipata">{() => renderPage("anticipata", pageOverrides)}</Route>
          <Route path="/calculator-varsta-pensionare">{() => renderPage("varsta", pageOverrides)}</Route>
          <Route path="/calculator-puncte-pensie">{() => renderPage("puncte", pageOverrides)}</Route>
          <Route path="/calculator-pensie-pilon-2">{() => renderPage("pilon2", pageOverrides)}</Route>
          <Route path="/calculator-pensie-pilon-3">{() => renderPage("pilon3", pageOverrides)}</Route>
          <Route path="/program-excel-calcul-pensie">{() => renderPage("excel", pageOverrides)}</Route>
          <Route path="/planificare">{() => renderPage("planificare", pageOverrides)}</Route>
          <Route path="/tipuri-pensii">{() => renderPage("tipuri", pageOverrides)}</Route>
          <Route path="/legislatie">{() => renderPage("legislatie", pageOverrides)}</Route>
          <Route path="/blog">{() => renderPage("blog", pageOverrides)}</Route>
          <Route path="/blog/:slug">{() => renderPage("blogArticle", pageOverrides)}</Route>
          <Route path="/despre-noi">{() => renderPage("despreNoi", pageOverrides)}</Route>
          <Route path="/metodologie">{() => renderPage("metodologie", pageOverrides)}</Route>
          <Route path="/contact">{() => renderPage("contact", pageOverrides)}</Route>
          <Route path="/privacy">{() => renderPage("privacy", pageOverrides)}</Route>
          <Route path="/terms">{() => renderPage("terms", pageOverrides)}</Route>
          <Route path="/faq">{() => renderPage("faq", pageOverrides)}</Route>
          <Route path="/calculator">
            <Redirect to="/" />
          </Route>
          <Route path="/termeni">
            <Redirect to="/terms/" />
          </Route>
          <Route path="/termeni-si-conditii">
            <Redirect to="/terms/" />
          </Route>
          <Route path="/politica-confidentialitate">
            <Redirect to="/privacy/" />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export function App({ ssrPath, pageOverrides }: AppProps = {}) {
  useEffect(() => {
    window.scrollTo?.(0, 0);
  }, []);

  const content = <RouterContent pageOverrides={pageOverrides} />;

  if (ssrPath) {
    return <WouterRouter ssrPath={ssrPath}>{content}</WouterRouter>;
  }
  return content;
}

export default App;
