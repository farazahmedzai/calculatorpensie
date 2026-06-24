import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { PiggyBank, ArrowRight, Info, HelpCircle } from "lucide-react";

export default function CalculatorPilon2Page() {
  const [netSalary, setNetSalary] = useState<number>(5000);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [annualYield, setAnnualYield] = useState<number>(5.5);
  
  const [result, setResult] = useState<{
    monthlyContribution: number;
    totalContributed: number;
    interestEarned: number;
    finalBalance: number;
    yearsToRetirement: number;
  } | null>(null);

  const handleCalculate = () => {
    // Gross Salary estimation from Net
    const estimatedGross = netSalary / 0.55;
    
    // Pillar 2 contribution is 4.75% of Gross Salary
    const monthlyContribution = estimatedGross * 0.0475;
    
    const yearsToRetirement = 65 - currentAge;
    if (yearsToRetirement <= 0) {
      alert("Vârsta actuală trebuie să fie sub 65 de ani (vârsta de pensionare).");
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

    setResult({
      monthlyContribution: Math.round(monthlyContribution),
      totalContributed: Math.round(totalContributed),
      interestEarned: Math.round(interestEarned),
      finalBalance: Math.round(finalBalance),
      yearsToRetirement
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags 
        title="Calculator Pensie Pilon 2 2025 | Capitalizare și Profit"
        description="Calculează suma strânsă în contul tău de pensie privată obligatorie Pilonul II. Proiectează-ți acumulările pe baza contribuției lunare de 4.75% din salariu."
        canonical="https://calculatorpensie.com/calculator-pensie-pilon-2"
        keywords="calculator pensie pilon 2, pilonul ii pensii private, randament pilon 2, fond de pensii privat"
      />
      
      <WebPageSchema 
        name="Calculator Pensie Pilon 2"
        description="Proiectează valoarea fondului personal din Pilonul II de pensii private obligatorii folosind formula dobânzii compuse"
        url="https://calculatorpensie.com/calculator-pensie-pilon-2"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Calculator", url: "https://calculatorpensie.com/calculator" },
          { name: "Pensie Pilon 2" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Pilon II</h1>
          <p className="text-xl text-gray-700">
            Estimează valoarea contului tău de pensie privată obligatorie la vârsta de 65 de ani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Setări Simulare</CardTitle>
              <CardDescription>Introdu datele financiare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="salary">Salariul Tău Net Lunar (RON)</Label>
                <Input 
                  id="salary"
                  type="number"
                  value={netSalary}
                  onChange={(e) => setNetSalary(Number(e.target.value))}
                />
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
                    Proiecție Acumulare Pilon II
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b pb-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Contribuție lunară estimată:</span>
                      <strong className="text-lg text-slate-800">{result.monthlyContribution.toLocaleString()} RON/lună</strong>
                      <span className="text-xxs text-gray-400 block">(4.75% din Salariul Brut)</span>
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
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">Sold cont estimat la 65 de ani:</span>
                    <strong className="text-3xl text-brand-green block mt-1">
                      {result.finalBalance.toLocaleString("ro-RO")} RON
                    </strong>
                    <span className="text-xs text-gray-500 block mt-1">*Proprietate privată garantată. Această sumă este scutită de impozit pe profit în perioada de acumulare.</span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8 text-center text-gray-500 border-dashed">
                <div>
                  <PiggyBank className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Completează datele din stânga pentru a simula fondul tău din Pilonul II de pensii private.</p>
                </div>
              </Card>
            )}

            {/* Informational guide */}
            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h3 className="font-bold text-slate-800">Ce este Pilonul II de pensii?</h3>
              <p>
                Pilonul II reprezintă <strong>sistemul de pensii administrate privat obligatorii</strong>. Cota de contribuție este de <strong>4.75% din salariul tău brut</strong>, fiind redirecționată automat din cota generală de CAS (25%) pe care angajatorul o plătește la stat. Asta înseamnă că nu plătești nimic în plus din buzunar, ci o parte din impozit se mută în contul tău personal de pensie.
              </p>
              <p>
                Banii din Pilonul II sunt proprietate privată, sunt investiți pe piețele financiare de către administratorul fondului tău (în special în titluri de stat românești și acțiuni la bursă) și <strong>sunt complet moștenibili</strong> de către rudele legale în caz de deces.
              </p>
              <p>
                De-a lungul celor peste 15 ani de existență în România, fondurile de pensii private Pilon II au înregistrat un randament mediu anual de peste <strong>6% - 7%</strong>, depășind considerabil rata medie a inflației și oferind un profit solid viitorilor pensionari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
