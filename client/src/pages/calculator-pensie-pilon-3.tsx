import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { PiggyBank, CheckCircle } from "lucide-react";

export default function CalculatorPilon3Page() {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(150);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [annualYield, setAnnualYield] = useState<number>(5.0);
  
  const [result, setResult] = useState<{
    totalContributed: number;
    interestEarned: number;
    finalBalance: number;
    yearsToRetirement: number;
    taxDeductible: boolean;
  } | null>(null);

  const handleCalculate = () => {
    const yearsToRetirement = 60 - currentAge; // Pillar 3 can be accessed at 60
    if (yearsToRetirement <= 0) {
      alert("Vârsta actuală trebuie să fie sub 60 de ani pentru a beneficia de pensia facultativă Pilon III.");
      return;
    }

    const months = yearsToRetirement * 12;
    const r = (annualYield / 100) / 12; // monthly rate

    // Future Value of Annuity formula: FV = P * (((1 + r)^n - 1) / r)
    let finalBalance = 0;
    if (r > 0) {
      finalBalance = monthlyContribution * ((Math.pow(1 + r, months) - 1) / r);
    } else {
      finalBalance = monthlyContribution * months;
    }

    const totalContributed = monthlyContribution * months;
    const interestEarned = finalBalance - totalContributed;
    
    // 400 EUR is roughly 2000 RON per year -> approx 166 RON / month for max tax deduction
    const taxDeductible = monthlyContribution <= 166;

    setResult({
      totalContributed: Math.round(totalContributed),
      interestEarned: Math.round(interestEarned),
      finalBalance: Math.round(finalBalance),
      yearsToRetirement,
      taxDeductible
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Pensie Pilon 3 (Facultativă) 2026"
        description="Calculează suma pe care o poți strânge în Pilonul III de pensii facultative. Vezi avantajele deductibilității fiscale și profitul estimat la pensionare."
        canonical="https://calculatorpensie.com/calculator-pensie-pilon-3"
        keywords="calculator pensie pilon 3, pensie facultativa pilon 3, calculator pensie facultativa, pilonul 3 pensie privata"
      />
      
      <WebPageSchema 
        name="Calculator Pensie Pilon 3"
        description="Simulator pentru pensia facultativă Pilon III. Proiectează acumulările și află beneficiile deductibilității fiscale."
        url="https://calculatorpensie.com/calculator-pensie-pilon-3"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator Pensie Pilon 3" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Facultativă (Pilon III)</h1>
          <p className="text-xl text-gray-700">
            Află câți bani poți strânge suplimentar pentru bătrânețe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Setări Simulare</CardTitle>
              <CardDescription>Introdu datele dorite</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-green-700 bg-green-50 p-3 rounded-md mb-2 border border-green-200">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold">Actualizat Iunie 2026</span>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contribution">Contribuție Lunară (RON)</Label>
                <Input 
                  id="contribution"
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                />
                <p className="text-xs text-gray-500">Limita de deductibilitate fiscală este de ~166 RON/lună (400 EUR/an).</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Vârsta Actuală (ani)</Label>
                <Input 
                  id="age"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yield">Randament Anual Estimat (%)</Label>
                <Input 
                  id="yield"
                  type="number"
                  step="0.1"
                  value={annualYield}
                  onChange={(e) => setAnnualYield(Number(e.target.value))}
                />
              </div>

              <Button 
                onClick={handleCalculate} 
                className="w-full bg-brand-green hover:bg-green-700"
              >
                Calculează Fondul
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {result ? (
              <Card className="bg-brand-green bg-opacity-5 border-brand-green border-opacity-10">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-green flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    Proiecție Acumulare Pilon III (la 60 ani)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b pb-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Deductibilitate fiscală:</span>
                      <strong className={`text-lg ${result.taxDeductible ? 'text-green-600' : 'text-orange-500'}`}>
                        {result.taxDeductible ? "Optimizat (în limita a 400 EUR)" : "Peste limita de 400 EUR"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Ani de capitalizare:</span>
                      <strong className="text-lg text-slate-800">{result.yearsToRetirement} ani</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-b pb-4 text-sm">
                    <div>
                      <span className="text-xs text-gray-500">Total depuneri:</span>
                      <p className="font-semibold text-slate-800">{result.totalContributed.toLocaleString()} RON</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Dobândă compusă acumulată (Profit):</span>
                      <p className="font-semibold text-brand-green">+{result.interestEarned.toLocaleString()} RON</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">Sold cont estimat la 60 de ani:</span>
                    <strong className="text-3xl text-brand-green block mt-1">
                      {result.finalBalance.toLocaleString("ro-RO")} RON
                    </strong>
                    <span className="text-xs text-gray-500 block mt-1">*Banii pot fi retrași integral sau eșalonat după vârsta de 60 de ani (sau sub formă de pensie viageră când va exista legea specifică).</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8 text-center text-gray-500 border-dashed">
                <div>
                  <PiggyBank className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Completează datele din stânga pentru a simula fondul tău din Pilonul III de pensii facultative.</p>
                </div>
              </Card>
            )}

            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h3 className="font-bold text-slate-800">Ce este pensia facultativă Pilon III?</h3>
              <p>
                Pilonul III este un sistem de <strong>economisire suplimentară, voluntară</strong> pentru pensie. Alegi cât vrei să contribui (de obicei până la 15% din venitul salarial brut lunar) și la care fond de pensii.
              </p>
              <h4 className="font-semibold text-slate-700">Avantaje principale:</h4>
              <ul>
                <li><strong>Deductibilitate fiscală:</strong> Contribuțiile sunt deductibile fiscal în limita a 400 EUR pe an (echivalentul a aproximativ 166 RON/lună). Atât tu, cât și angajatorul tău puteți beneficia de această facilitate dacă el alege să contribuie pentru tine.</li>
                <li><strong>Flexibilitate:</strong> Poți opri, micșora sau mări contribuția oricând dorești, fără penalități.</li>
                <li><strong>Accesibilitate:</strong> Banii strânși pot fi retrași începând cu vârsta de 60 de ani, mai devreme decât vârsta standard de pensionare (65 ani). Banii se pot obține sub formă de plată unică sau plăți eșalonate (până la 5 ani).</li>
                <li><strong>Moștenire:</strong> În cazul unui eveniment nefericit înainte de vârsta de 60 de ani, fondul acumulat se transmite moștenitorilor legali, fiind exceptat de la taxele succesorale standard.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
