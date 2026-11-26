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
            Strategii concrete pentru combinarea eficientă a Pilonului I (stat, VPR 81 Lei), Pilonului II (privat obligatoriu 4,75%) și Pilonului III (facultativ deductibil 400 EUR/an).
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
            <h2>Structura Sistemului Multi-Pilon în 2026</h2>
            <p>
              Dependența exclusivă de pensia publică de stat oferă o rată de înlocuire estimată între 35% și 45% din ultimul salariu net. O strategie echilibrată combină toate cele trei surse de finanțare, ajustate după profilul de venit (inclusiv pentru{" "}
              <Link href="/blog/calculul-pensiei-freelanceri-pfa/" className="text-brand-blue font-semibold underline">
                freelanceri și PFA cu declarație unică
              </Link>
              ).
            </p>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-sm border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border p-3">Pilon</th>
                    <th className="border p-3">Contribuție 2026</th>
                    <th className="border p-3">Facilitate / Avantaj</th>
                    <th className="border p-3">Simulator Dedicat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Pilon I (Stat)</td>
                    <td className="border p-3">20,25% din CAS (25%)</td>
                    <td className="border p-3">VPR 81 Lei + puncte stabilitate peste 25 ani</td>
                    <td className="border p-3">
                      <Link href="/" className="text-blue-700 font-semibold underline">Calculator Pensie</Link>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-3 font-semibold">Pilon II (Obligatoriu)</td>
                    <td className="border p-3">4,75% din brut</td>
                    <td className="border p-3">Activ personal moștenibil administrat privat</td>
                    <td className="border p-3">
                      <Link href="/calculator-pensie-pilon-2/" className="text-blue-700 font-semibold underline">Calculator Pilon II</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">Pilon III (Facultativ)</td>
                    <td className="border p-3">Voluntar (max. 15% brut)</td>
                    <td className="border p-3">Deducere 400 EUR/an angajat + 400 EUR/an angajator</td>
                    <td className="border p-3">
                      <Link href="/calculator-pensie-pilon-3/" className="text-blue-700 font-semibold underline">Calculator Pilon III</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>1. Pilonul I: Sistemul Public (VPR = 81 Lei)</h3>
            <p>
              Obligatoriu pentru salariați și bazat pe punctaj contributiv plus puncte de stabilitate pentru vechime &gt; 25 de ani. Pentru comparații pas cu pas între simulările CNPP și foile de calcul offline, vezi{" "}
              <Link href="/blog/simulare-pensie-instrumente-metode/" className="text-brand-blue font-semibold underline">
                ghidul instrumentelor de simulare a pensiei
              </Link>
              .
            </p>
            <h3>2. Pilonul II: Pensii Private Obligatorii (4,75%)</h3>
            <p>
              4,75% din salariul brut se acumulează automat în contul tău privat. Simulează acum{" "}
              <Link href="/calculator-pensie-pilon-2/" className="text-brand-blue hover:underline font-medium">
                fondul Pilon II estimat
              </Link>{" "}
              și verifică{" "}
              <Link href="/blog/pilonul-2-modificari-legislative/" className="text-brand-blue hover:underline font-medium">
                regulile de retragere și moștenire din 2026
              </Link>
              .
            </p>
            <h3>3. Pilonul III: Pensii Facultative (Deductibilitate 400 EUR/an)</h3>
            <p>
              Economisire suplimentară cu reducere fiscală din impozitul pe venit, accesibilă încă de la 60 de ani. Testează cu{" "}
              <Link href="/calculator-pensie-pilon-3/" className="text-brand-blue hover:underline font-medium">
                calculatorul Pilon III
              </Link>
              .
            </p>

            <h2>Checklist de Planificare pe Vârste (25-65 Ani)</h2>
            <ul>
              <li><strong>25-35 ani:</strong> verifică anual viramentele în contul Pilon II și începe o contribuție deductibilă de ~166 lei/lună în Pilon III pentru efect maxim de dobândă compusă.</li>
              <li><strong>35-50 ani:</strong> solicită extrasul de vechime din SPV / MyCNPP și asigură-te că nu ai luni lipsă din declarațiile D112.</li>
              <li><strong>50-65 ani:</strong> urmărește pragul de 25, 30 și 35 ani contributivi pentru punctele de stabilitate sau{" "}
                <Link href="/program-excel-calcul-pensie/" className="text-brand-blue font-semibold underline">
                  simulează scenarii detaliate în Excel
                </Link>
                , respectând{" "}
                <Link href="/despre-noi/" className="text-brand-blue font-semibold underline">
                  metodologia noastră transparentă
                </Link>
                .
              </li>
            </ul>
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
