import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Calculator from "@/pages/calculator";
import PlanificarePage from "@/pages/guides/planificare";
import TipuriPensiiPage from "@/pages/guides/tipuri-pensii";
import LegislatiePage from "@/pages/guides/legislatie";
import BlogPage from "@/pages/blog";
import DespreNoi from "@/pages/despre-noi";
import Metodologie from "@/pages/metodologie";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/planificare" component={PlanificarePage} />
          <Route path="/tipuri-pensii" component={TipuriPensiiPage} />
          <Route path="/legislatie" component={LegislatiePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/despre-noi" component={DespreNoi} />
          <Route path="/metodologie" component={Metodologie} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
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
