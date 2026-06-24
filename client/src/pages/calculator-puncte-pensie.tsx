import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { Calculator, Award, Info, HelpCircle } from "lucide-react";

export default function CalculatorPunctePage() {
  const [netSalary, setNetSalary] = useState<number>(5000);
  const [workYears, setWorkYears] = useState<number>(30);
  const [assimilatedYears, setAssimilatedYears] = useState<number>(0);
  
  const [result, setResult] = useState<{
    contributoryPoints: number;
    stabilityPoints: number;
    assimilatedPoints: number;
    totalPoints: number;
    estimatedPension: number;
  } | null>(null);

  const handleCalculate = () => {
    // Official average gross salary (Salariul Mediu Brut pe Economie) for 2025/2026 is approx 8,417 RON
    const averageGrossEconomy = 8417;
    
    // Approximate Gross Salary from Net (approx 55% of Gross is Net in Romania)
    const estimatedGross = netSalary / 0.55;
    
    // 1. Contributory points (Puncte de contributivitate)
    // Points per year = (estimatedGross / averageGrossEconomy)
    const pointsPerYear = estimatedGross / averageGrossEconomy;
    const contributoryPoints = pointsPerYear * workYears;

    // 2. Stability points (Puncte de stabilitate) for years worked > 25
    let stabilityPoints = 0;
    if (workYears > 25) {
      const extraYears = workYears - 25;
      
      if (extraYears <= 5) {
        stabilityPoints = extraYears * 0.5;
      } else if (extraYears <= 10) {
        stabilityPoints = (5 * 0.5) + ((extraYears - 5) * 0.75);
      } else {
        stabilityPoints = (5 * 0.5) + (5 * 0.75) + ((extraYears - 10) * 1.0);
      }
    }

    // 3. Assimilated points (Puncte asimilate) = 0.25 per year
    const assimilatedPoints = assimilatedYears * 0.25;

    // 4. Total points
    const totalPoints = contributoryPoints + stabilityPoints + assimilatedPoints;

    // 5. Estimated pension = Total points * VPR (91 RON in 2025)
    const vpr = 91;
    const estimatedPension = totalPoints * vpr;

    setResult({
      contributoryPoints: parseFloat(contributoryPoints.toFixed(4)),
      stabilityPoints: parseFloat(stabilityPoints.toFixed(4)),
      assimilatedPoints: parseFloat(assimilatedPoints.toFixed(4)),
      totalPoints: parseFloat(totalPoints.toFixed(4)),
      estimatedPension: Math.round(estimatedPension)
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Puncte Pensie 2025 | Puncte de Stabilitate Noua Lege"
        description="Calculează numărul total de puncte de pensie acumulate. Află câte puncte de stabilitate primești pentru stagiul peste 25 de ani conform Legii 360/2023."
        canonical="https://calculatorpensie.com/calculator-puncte-pensie"
        keywords="calculator puncte pensie, puncte de stabilitate, calcul puncte pensie 2025, calcul puncte stabilitate noua lege"
      />
      
      <WebPageSchema 
        name="Calculator Puncte de Pensie"
        description="Instrument online de calcul pentru punctele de contributivitate, stabilitate și asimilate conform noului algoritm CNPP"
        url="https://calculatorpensie.com/calculator-puncte-pensie"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator", url: "https://calculatorpensie.com/calculator" },
          { name: "Puncte Pensie" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Puncte de Pensie</h1>
          <p className="text-xl text-gray-700">
            Află punctele tale de contributivitate și bonificațiile de stabilitate în noua formulă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Date de Calcul</CardTitle>
              <CardDescription>Introdu salariul și stagiul de cotizare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="salary">Salariul Net Lunar Actual (RON)</Label>
                <Input 
                  id="salary"
                  type="number"
                  value={netSalary}
                  onChange={(e) => setNetSalary(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="years">Ani de Muncă Contributivă</Label>
                <Input 
                  id="years"
                  type="number"
                  value={workYears}
                  onChange={(e) => setWorkYears(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assimilated">Ani Asimilați (studii la zi, armată)</Label>
                <Input 
                  id="assimilated"
                  type="number"
                  value={assimilatedYears}
                  onChange={(e) => setAssimilatedYears(Number(e.target.value))}
                />
              </div>

              <Button 
                onClick={handleCalculate} 
                className="w-full bg-brand-blue hover:bg-blue-700"
              >
                Calculează Punctele
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {result ? (
              <Card className="bg-brand-blue bg-opacity-5 border-brand-blue border-opacity-10">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Punctaj Estimativ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b pb-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Puncte Contributive:</span>
                      <strong className="text-lg text-slate-800">{result.contributoryPoints}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Puncte Stabilitate:</span>
                      <strong className="text-lg text-brand-green">{result.stabilityPoints}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Puncte Asimilate:</span>
                      <strong className="text-lg text-orange-600">{result.assimilatedPoints}</strong>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 block text-sm">Număr total de puncte:</span>
                    <strong className="text-3xl text-slate-800">{result.totalPoints}</strong>
                  </div>
                  <div className="border-t pt-4 bg-slate-50 p-4 rounded-lg">
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">Pensia Brută Estimată:</span>
                    <strong className="text-2xl text-blue-700 block mt-1">
                      {result.estimatedPension.toLocaleString("ro-RO")} RON/lună
                    </strong>
                    <span className="text-xs text-gray-500 block mt-1">*Formula: {result.totalPoints} puncte × 91 Lei VPR (Valoare Punct de Referință 2025)</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8 text-center text-gray-500 border-dashed">
                <div>
                  <Award className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Completează datele din stânga pentru a simula numărul tău de puncte de pensie.</p>
                </div>
              </Card>
            )}

            {/* Informational guide */}
            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h3 className="font-bold text-slate-800">Ce sunt Punctele de Stabilitate?</h3>
              <p>
                Punctele de stabilitate sunt puncte bonus oferite de stat conform Legii 360/2023 pentru a stimula persoanele să rămână active pe piața muncii mai mulți ani. Acestea se adaugă direct la punctele din contribuții salariale după cum urmează:
              </p>
              <ul>
                <li><strong>Pentru anii de muncă 26 - 30:</strong> primești <strong>0.5 puncte</strong> pentru fiecare an (total max 2.5 puncte).</li>
                <li><strong>Pentru anii de muncă 31 - 35:</strong> primești <strong>0.75 puncte</strong> pentru fiecare an (total max 3.75 puncte).</li>
                <li><strong>Pentru anii de muncă peste 35:</strong> primești <strong>1.0 punct</strong> pentru fiecare an.</li>
              </ul>
              <p>
                De exemplu, o persoană cu un stagiu de cotizare de 40 de ani va acumula automat un bonus de stabilitate de: 
                <br />
                <code>(5 × 0.5) + (5 × 0.75) + (5 × 1.0) = 2.5 + 3.75 + 5.0 = 11.25 puncte</code>. La valoarea actuală de 91 RON a VPR, acest bonus crește pensia lunară cu <strong>1.023 RON</strong> brut!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
