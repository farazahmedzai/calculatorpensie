import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, useEffect, lazy } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { ComponentLoader, preloadCriticalComponents } from "./components/LazyComponents";

// Import only critical components directly (Header, Footer, Home, NotFound)
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Lazy load all non-critical pages to reduce initial bundle by ~100KB
import { 
  LazyCalculatorPage,
  LazyBlogPage,
  LazyBlogArticle,
  LazyContactPage,
  LazyPlanificare,
  LazyTipuriPensii,
  LazyLegislatie
} from "./components/LazyComponents";

// Lazy load remaining pages
const LazyDespreNoi = lazy(() => import("@/pages/despre-noi"));
const LazyMetodologie = lazy(() => import("@/pages/metodologie"));
const LazyPrivacy = lazy(() => import("@/pages/privacy"));
const LazyFAQ = lazy(() => import("@/pages/faq"));

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/calculator">
            <Suspense fallback={<ComponentLoader />}>
              <LazyCalculatorPage />
            </Suspense>
          </Route>
          <Route path="/planificare">
            <Suspense fallback={<ComponentLoader />}>
              <LazyPlanificare />
            </Suspense>
          </Route>
          <Route path="/tipuri-pensii">
            <Suspense fallback={<ComponentLoader />}>
              <LazyTipuriPensii />
            </Suspense>
          </Route>
          <Route path="/legislatie">
            <Suspense fallback={<ComponentLoader />}>
              <LazyLegislatie />
            </Suspense>
          </Route>
          <Route path="/blog" nest>
            <Route path="/">
              <Suspense fallback={<ComponentLoader />}>
                <LazyBlogPage />
              </Suspense>
            </Route>
            <Route path="/:slug">
              <Suspense fallback={<ComponentLoader />}>
                <LazyBlogArticle />
              </Suspense>
            </Route>
          </Route>
          <Route path="/despre-noi">
            <Suspense fallback={<ComponentLoader />}>
              <LazyDespreNoi />
            </Suspense>
          </Route>
          <Route path="/metodologie">
            <Suspense fallback={<ComponentLoader />}>
              <LazyMetodologie />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={<ComponentLoader />}>
              <LazyContactPage />
            </Suspense>
          </Route>
          <Route path="/privacy">
            <Suspense fallback={<ComponentLoader />}>
              <LazyPrivacy />
            </Suspense>
          </Route>
          <Route path="/faq">
            <Suspense fallback={<ComponentLoader />}>
              <LazyFAQ />
            </Suspense>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Google Analytics and preload critical components
  useEffect(() => {
    initGA();
    // Preload critical components to improve perceived performance
    preloadCriticalComponents();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
