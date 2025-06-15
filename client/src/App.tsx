import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, useEffect, lazy } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { performanceManager } from "./lib/performance-manager";

// Import critical components directly for immediate render
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Lazy load heavy pages to reduce initial bundle size
const LazyCalculator = lazy(() => import("@/pages/calculator"));
const LazyBlog = lazy(() => import("@/pages/blog"));
const LazyBlogArticle = lazy(() => import("@/pages/blog-article"));
const LazyContact = lazy(() => import("@/pages/contact"));
const LazyPlanificare = lazy(() => import("@/pages/guides/planificare"));
const LazyTipuriPensii = lazy(() => import("@/pages/guides/tipuri-pensii"));
const LazyLegislatie = lazy(() => import("@/pages/guides/legislatie"));
const LazyDespreNoi = lazy(() => import("@/pages/despre-noi"));
const LazyMetodologie = lazy(() => import("@/pages/metodologie"));
const LazyPrivacy = lazy(() => import("@/pages/privacy"));
const LazyFAQ = lazy(() => import("@/pages/faq"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2 text-gray-600">Se încarcă...</span>
  </div>
);

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
            <Suspense fallback={<LoadingSpinner />}>
              <LazyCalculator />
            </Suspense>
          </Route>
          <Route path="/planificare">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyPlanificare />
            </Suspense>
          </Route>
          <Route path="/tipuri-pensii">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyTipuriPensii />
            </Suspense>
          </Route>
          <Route path="/legislatie">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyLegislatie />
            </Suspense>
          </Route>
          <Route path="/blog" nest>
            <Route path="/">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyBlog />
              </Suspense>
            </Route>
            <Route path="/:slug">
              <Suspense fallback={<LoadingSpinner />}>
                <LazyBlogArticle />
              </Suspense>
            </Route>
          </Route>
          <Route path="/despre-noi">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyDespreNoi />
            </Suspense>
          </Route>
          <Route path="/metodologie">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyMetodologie />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyContact />
            </Suspense>
          </Route>
          <Route path="/privacy">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyPrivacy />
            </Suspense>
          </Route>
          <Route path="/faq">
            <Suspense fallback={<LoadingSpinner />}>
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
  // Initialize Google Analytics and performance optimizations
  useEffect(() => {
    initGA();
    
    // Initialize performance manager
    performanceManager.init();
    performanceManager.optimizeFonts();
    performanceManager.preloadCriticalResources();
    
    // Log performance improvements
    const savings = performanceManager.calculateSavings();
    console.log(`Performance optimized: ${savings.renderBlockingReduction}ms faster, ${savings.bundleSizeReduction}KB smaller`);
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
