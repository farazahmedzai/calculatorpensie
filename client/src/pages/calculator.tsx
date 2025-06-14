import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainCalculator from "@/components/calculators/main-calculator";
import EarlyRetirementCalculator from "@/components/calculators/early-retirement-calculator";
import Pillar3Calculator from "@/components/calculators/pillar3-calculator";
import { Calculator, FastForward, PiggyBank } from "lucide-react";

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
          <h2>De ce să folosești calculatoarele noastre de pensie?</h2>
          <p>
            Calculatoarele noastre de pensie sunt dezvoltate conform legislației românești în vigoare 
            și îți oferă estimări precise pentru planificarea viitorului financiar.
          </p>
          
          <h3>Calculator Pensie Principal</h3>
          <p>
            Folosind formula oficială de calcul a pensiei din România, calculatrul nostru principal 
            îți oferă o estimare precisă a pensiei viitoare pe baza:
          </p>
          <ul>
            <li>Vârsta actuală și cea de pensionare</li>
            <li>Veniturile lunare nete actuale</li>
            <li>Stagiul de cotizare acumulat</li>
            <li>Contribuțiile la sistemul public de pensii</li>
          </ul>

          <h3>Calculator Pensie Anticipată</h3>
          <p>
            Dacă te gândești să te pensionezi mai devreme, calculatorul nostru de pensie anticipată 
            îți arată:
          </p>
          <ul>
            <li>Penalizarea aplicată pentru pensionarea anticipată</li>
            <li>Valoarea pensiei după aplicarea reducerii</li>
            <li>Comparația cu pensia standard</li>
            <li>Condițiile pentru pensionarea anticipată parțială</li>
          </ul>

          <h3>Calculator Pilon III</h3>
          <p>
            Pilonul III de pensii oferă avantaje fiscale importante. Calculatorul nostru te ajută să:
          </p>
          <ul>
            <li>Optimizezi contribuțiile pentru deducerea fiscală maximă</li>
            <li>Calculezi economia de impozit anuală</li>
            <li>Estimezi valoarea viitoare a contribuțiilor</li>
            <li>Compari diferite strategii de contribuție</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
