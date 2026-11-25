import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, ArrowRight, Calculator, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/planificare/"];

export default function PlanificarePage() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="article"
        schemaName={PAGE_META.schemaName}
        articlePublishedTime={PAGE_META.datePublished}
        articleModifiedTime={PAGE_META.dateModified}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      <section className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <MapPin className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold text-white">Planificarea Pensiei în România 2026</h1>
          </div>
          <p className="text-xl text-white/95 mb-8 font-medium bg-black/20 p-4 rounded-lg">
            Strategii concrete pentru combinarea eficientă a Pilonului I (stat), Pilonului II (privat obligatoriu) și Pilonului III (facultativ).
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-50">
                <Calculator className="mr-2 h-5 w-5" />
                Calculează Pensia
              </Button>
            </Link>
            <a href="/ghid-calcul-pensie-2026.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
                <BookOpen className="mr-2 h-5 w-5" />
                Descarcă Ghidul PDF 2026
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Pilonii Sistemului de Pensii</h2>
            <h3>1. Pilonul I — Sistemul Public (VPR = 81 Lei)</h3>
            <p>
              Obligatoriu pentru salariați și bazat pe punctaj contributiv plus puncte de stabilitate pentru vechime &gt; 25 de ani. Rata medie de înlocuire a salariului face recomandată completarea prin economisire privată.
            </p>
            <h3>2. Pilonul II — Pensii Private Obligatorii (4,75%)</h3>
            <p>
              4,75% din salariul brut se acumulează automat în contul tău privat. Simulează acum{" "}
              <Link href="/calculator-pensie-pilon-2/" className="text-brand-blue hover:underline font-medium">
                fondul Pilon II estimat
              </Link>
              .
            </p>
            <h3>3. Pilonul III — Pensii Facultative (Deductibilitate 400 EUR/an)</h3>
            <p>
              Economisire suplimentară cu reducere fiscală din impozitul pe venit. Testează cu{" "}
              <Link href="/calculator-pensie-pilon-3/" className="text-brand-blue hover:underline font-medium">
                calculatorul Pilon III
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-brand-red mr-2" />
                  <CardTitle className="text-lg">Top 5 Greșeli de Evitat</CardTitle>
                </div>
                <CardDescription>Cele mai frecvente erori în pregătirea pensiei</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/top-5-greseli-planificare-pensie/">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-brand-green mr-2" />
                  <CardTitle className="text-lg">Pilonul III &amp; Avantaje Fiscale</CardTitle>
                </div>
                <CardDescription>Cum folosești plafonul anual de 400 EUR</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/pilonul-3-avantaje-fiscale-strategii/">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-brand-blue mr-2" />
                  <CardTitle className="text-lg">Optimizare Fiscală Contribuții</CardTitle>
                </div>
                <CardDescription>Impozit, CASS și deduceri aplicabile în 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog/optimizare-fiscala-contributii-pensie/">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calculator className="h-5 w-5 text-brand-green mr-2" />
                  <CardTitle className="text-lg">Calculator Pilon III</CardTitle>
                </div>
                <CardDescription>Calculează soldul acumulat până la 60 ani</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/calculator-pensie-pilon-3/">
                  <Button className="w-full bg-brand-green hover:bg-green-700 text-white">
                    Deschide Calculator Pilon III <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
