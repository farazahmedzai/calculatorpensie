import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainCalculator from "@/components/calculators/main-calculator";
import EarlyRetirementCalculator from "@/components/calculators/early-retirement-calculator";
import Pillar3Calculator from "@/components/calculators/pillar3-calculator";
import { Calculator, FastForward, PiggyBank } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebApplicationSchema, WebPageSchema, HowToSchema } from "@/components/seo/StructuredData";

export default function CalculatorPage() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'main';
    setActiveTab(type);
  }, [location]);

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Pensie de Stat 2025 | Estimare Online"
        description="Utilizează calculatoarele noastre avansate pentru a afla pensia de stat, pensia anticipată și contribuțiile Pilonul III. Calcule precise bazate pe legislația română actualizată."
        canonical="https://calculatorpensie.com/calculator"
        keywords="calculator pensie romania, calcul pensie de stat, pensie anticipata, pilon III, calculator pilon 3"
      />
      
      <WebApplicationSchema 
        name="Calculatoare Pensie România"
        description="Suite completă de calculatoare pentru toate tipurile de pensii din România"
        url="https://calculatorpensie.com/calculator"
      />
      
      <WebPageSchema 
        name="Calculatoare Pensie România - Calcul Rapid și Precis"
        description="Calculatoare online pentru pensia de stat, pensia anticipată și Pilonul III"
        url="https://calculatorpensie.com/calculator"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator Pensie" }
        ]}
      />
      
      <HowToSchema 
        name="Cum să calculezi pensia ta în România"
        description="Ghid pas cu pas pentru calcularea pensiei folosind calculatoarele online"
        steps={[
          { name: "Selectează tipul de calculator", text: "Alege între calculatorul principal, pensia anticipată sau Pilonul III" },
          { name: "Introdu datele personale", text: "Completează vârsta, sexul, salariul și stagiul de cotizare" },
          { name: "Selectează condițiile de muncă", text: "Specifică dacă ai lucrat în condiții normale, deosebite sau speciale" },
          { name: "Calculează rezultatul", text: "Apasă butonul de calcul pentru a vedea pensia estimată și data pensionării" }
        ]}
        totalTime="PT5M"
        estimatedCost={{ currency: "RON", value: "0" }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculatoare Pensie România</h1>
          <p className="text-xl text-gray-700">
            Instrumentele complete pentru planificarea pensiei tale
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="main" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator Principal
            </TabsTrigger>
            <TabsTrigger value="early" className="flex items-center gap-2">
              <FastForward className="h-4 w-4" />
              Pensie Anticipată
            </TabsTrigger>
            <TabsTrigger value="pillar3" className="flex items-center gap-2">
              <PiggyBank className="h-4 w-4" />
              Pilon III
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-brand-blue" />
                  Calculator Pensie Principal
                </CardTitle>
                <CardDescription>
                  Calculează pensia ta viitoare pe baza veniturilor actuale și a stagiului de cotizare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MainCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="early">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FastForward className="h-5 w-5 text-brand-blue" />
                  Calculator Pensie Anticipată
                </CardTitle>
                <CardDescription>
                  Calculează penalizarea pentru pensionarea anticipată și compară opțiunile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EarlyRetirementCalculator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pillar3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-brand-green" />
                  Calculator Contribuții Pilon III
                </CardTitle>
                <CardDescription>
                  Optimizează contribuțiile la pilonul III pentru economii fiscale maxime
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Pillar3Calculator />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* SEO Content */}
        <div className="mt-12 prose prose-lg max-w-none">
          <h2>Ghid Oficial: Cum funcționează formula de calcul a pensiei în România?</h2>
          <p>
            Calculul pensiei publice în România (Pilonul I) este reglementat de <strong>Noua Lege a Pensiilor nr. 360/2023</strong> (intrată în vigoare la 1 septembrie 2024). Sistemul unitar se bazează pe principiul contributivității, unde cuantumul pensiei se determină prin înmulțirea numărului total de puncte realizat de asigurat cu valoarea punctului de referință.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
            <h4 className="font-bold text-slate-800 mt-0">Formula Oficială de Calcul CNPP:</h4>
            <p className="font-mono text-lg text-blue-700 font-bold mb-2">
              Pensia Brută = Număr Total de Puncte × VPR
            </p>
            <p className="text-sm text-gray-600 mb-0">
              Unde <strong>VPR</strong> (Valoarea Punctului de Referință) este stabilită la <strong>91 Lei</strong> pentru anul 2025 (crescută de la valoarea inițială de 81 Lei).
            </p>
          </div>

          <h3>Cum se determină Numărul Total de Puncte?</h3>
          <p>
            Numărul total de puncte obținut de un viitor pensionar este format din suma a trei categorii de puncte:
          </p>
          <ol>
            <li>
              <strong>Puncte de Contributivitate:</strong> Se calculează prin raportarea salariului tău brut lunar la salariul mediu brut utilizat la fundamentarea bugetului asigurărilor sociale din acea lună. De exemplu, dacă câștigi exact salariul mediu brut pe economie în acea lună, vei acumula exact 1.0 puncte de pensie. Toate punctele lunare se adună și se împart la 12 pentru a rezulta punctajul anual.
            </li>
            <li>
              <strong>Puncte de Stabilitate (Bonificația pentru fidelitate):</strong> Noua lege recompensează persoanele care lucrează un număr mai mare de ani (stagii lungi de cotizare) prin acordarea unui bonus direct de puncte pentru fiecare an lucrat peste pragul de 25 de ani:
              <ul>
                <li><strong>+0.50 puncte/an</strong> pentru stagiul de cotizare între 26 și 30 de ani;</li>
                <li><strong>+0.75 puncte/an</strong> pentru stagiul de cotizare între 31 și 35 de ani;</li>
                <li><strong>+1.00 punct/an</strong> pentru fiecare an lucrat ce depășește 35 de ani.</li>
              </ul>
            </li>
            <li>
              <strong>Puncte Necontributive (Asimilate):</strong> Se acordă pentru perioadele în care nu s-au plătit contribuții directe, dar care sunt recunoscute de lege (stagiul militar, facultatea la zi absolvită cu diplomă, concediul de creștere a copilului, șomajul tehnic). Fiecare an asimilat se bonifică cu <strong>0.25 puncte pe an</strong>.
            </li>
          </ol>

          <h3>Grupele de Muncă: Condiții Deosebite și Speciale</h3>
          <p>
            Dacă ai lucrat în medii cu noxe, risc fizic sau condiții grele de muncă (Grupa I și II, redenumite în condiții speciale și deosebite), beneficiezi de:
          </p>
          <ul>
            <li><strong>Reducerea vârstei standard de pensionare</strong> cu până la 10-13 ani, în funcție de numărul total de ani petrecuți în aceste grupe.</li>
            <li><strong>Creșterea punctajului lunar</strong> realizat cu un indice suplimentar: <strong>+25%</strong> pentru perioadele în care ai lucrat în condiții deosebite și <strong>+50%</strong> pentru cele în condiții speciale.</li>
          </ul>

          <h3>Ce documente sunt necesare pentru depunerea dosarului?</h3>
          <p>
            Pentru a te pensiona oficial la limita de vârstă, dosarul tău de pensie trebuie depus la Casa Teritorială de Pensii corespunzătoare domiciliului tău și trebuie să conțină o serie de acte obligatorii (original și copie). Poți citi lista completă detaliată în articolul nostru de blog: <Link href="/blog/acte-necesare-dosar-pensionare" className="text-blue-600 hover:underline font-semibold">Acte necesare pentru dosarul de pensionare în 2025</Link>.
          </p>
          <p>
            De asemenea, îți recomandăm să verifici din timp stagiul tău de cotizare înregistrat oficial în format digital pe portalul online al Casei Naționale de Pensii Publice. Consultă ghidul nostru pas cu pas: <Link href="/blog/vizualizare-vechime-munca-cnpp" className="text-blue-600 hover:underline font-semibold">Cum îți verifici online vechimea în muncă în CNPP</Link>.
          </p>

          <h3>De ce să folosești calculatoarele noastre de pensie?</h3>
          <p>
            Calculatoarele noastre de pensie sunt dezvoltate și optimizate cu atenție conform legislației românești în vigoare și îți oferă estimări rapide, precise și complet gratuite pentru planificarea viitorului tău financiar, fără a fi nevoie de cunoștințe matematice complicate sau conturi guvernamentale.
          </p>
        </div>

        {/* RevBid Advertisement */}
        <div className="mt-12 flex justify-center">
          <div data-placement-id="revbid-square" id='revbid-square-4741' style={{minWidth: '300px', minHeight: '250px', textAlign: 'center'}}></div>
        </div>
      </div>
    </div>
  );
}
