import { renderToString } from "react-dom/server";
import { App, type RouteKey } from "./App";
import Home from "@/pages/home";
import CalculatorAnticipataPage from "@/pages/calculator-anticipata";
import CalculatorVarstaPage from "@/pages/calculator-varsta-pensionare";
import CalculatorPunctePage from "@/pages/calculator-puncte-pensie";
import CalculatorPilon2Page from "@/pages/calculator-pilon-2";
import CalculatorPilon3Page from "@/pages/calculator-pensie-pilon-3";
import ProgramExcelPage from "@/pages/program-excel-calcul-pensie";
import PlanificarePage from "@/pages/guides/planificare";
import TipuriPensiiPage from "@/pages/guides/tipuri-pensii";
import LegislatiePage from "@/pages/guides/legislatie";
import BlogPage from "@/pages/blog";
import BlogArticle from "@/pages/blog-article";
import DespreNoi from "@/pages/despre-noi";
import Metodologie from "@/pages/metodologie";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import FAQ from "@/pages/faq";

const ALL_PAGES: Record<RouteKey, React.ComponentType<any>> = {
  home: Home,
  anticipata: CalculatorAnticipataPage,
  varsta: CalculatorVarstaPage,
  puncte: CalculatorPunctePage,
  pilon2: CalculatorPilon2Page,
  pilon3: CalculatorPilon3Page,
  excel: ProgramExcelPage,
  planificare: PlanificarePage,
  tipuri: TipuriPensiiPage,
  legislatie: LegislatiePage,
  blog: BlogPage,
  blogArticle: BlogArticle,
  despreNoi: DespreNoi,
  metodologie: Metodologie,
  contact: Contact,
  privacy: Privacy,
  terms: Terms,
  faq: FAQ,
};

export function renderRouteHtml(ssrPath: string): string {
  return renderToString(<App ssrPath={ssrPath} pageOverrides={ALL_PAGES} />);
}
