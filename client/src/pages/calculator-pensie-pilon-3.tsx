import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { PiggyBank, CheckCircle } from "lucide-react";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/calculator-pensie-pilon-3/"];

export default function CalculatorPilon3Page() {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(166);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [annualYield, setAnnualYield] = useState<number>(5.0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [result, setResult] = useState<{
    totalContributed: number;
    interestEarned: number;
    finalBalance: number;
    yearsToRetirement: number;
    taxDeductible: boolean;
    annualTaxSaving: number;
  } | null>(null);

  const handleCalculate = () => {
    setErrorMsg(null);
    const yearsToRetirement = 60 - currentAge;
    if (yearsToRetirement <= 0) {
      setErrorMsg("Vârsta actuală trebuie să fie sub 60 de ani pentru acumularea standard în Pilonul III.");
      return;
    }

    const months = yearsToRetirement * 12;
    const r = annualYield / 100 / 12;

    const finalBalance =
      r > 0
        ? monthlyContribution * ((Math.pow(1 + r, months) - 1) / r)
        : monthlyContribution * months;

    const totalContributed = monthlyContribution * months;
    const interestEarned = finalBalance - totalContributed;
    const maxDeductibleAnnual = 2000; // ~400 EUR
    const annualContribution = monthlyContribution * 12;
    const taxDeductible = annualContribution <= maxDeductibleAnnual;
    const annualTaxSaving = Math.round(Math.min(annualContribution, maxDeductibleAnnual) * 0.10);

    setResult({
      totalContributed: Math.round(totalContributed),
      interestEarned: Math.round(interestEarned),
      finalBalance: Math.round(finalBalance),
      yearsToRetirement,
      taxDeductible,
      annualTaxSaving,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light py-8">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="calculator"
        schemaName={PAGE_META.schemaName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNavigation />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Facultativă (Pilon III) 2026</h1>
          <p className="text-xl text-gray-700">
            Simulează economisirea privată facultativă cu retragere de la 60 de ani și deducere fiscală anuală de 400 EUR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Setări Simulare</CardTitle>
              <CardDescription>Introdu contribuția și vârsta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-xs text-green-800 bg-green-50 p-2.5 rounded border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-green-700" />
                <span className="font-semibold">Deductibilitate: 400 EUR/an · 2026</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contribution">Contribuție Lunară (RON)</Label>
                <Input
                  id="contribution"
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                />
                <p className="text-xs text-gray-600">
                  Plafon deductibil optim: ~166 RON/lună (echivalent 400 EUR/an).
                </p>
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

              {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}

              <Button type="button" onClick={handleCalculate} className="w-full bg-brand-green hover:bg-green-700">
                Calculează Fondul
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {result ? (
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    Proiecție Pilon III (la 60 ani)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b border-green-200 pb-4">
                    <div>
                      <span className="text-xs text-gray-600 block">Economie impozit / an:</span>
                      <strong className="text-lg text-green-700">
                        {result.annualTaxSaving.toLocaleString("ro-RO")} RON/an
                      </strong>
                      <span className="text-xs text-gray-600 block">
                        {result.taxDeductible ? "Integral deductibil (≤ 400 EUR)" : "Peste plafonul de 400 EUR/an"}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 block">Orizont capitalizare:</span>
                      <strong className="text-lg text-slate-900">{result.yearsToRetirement} ani</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-b border-green-200 pb-4 text-sm">
                    <div>
                      <span className="text-xs text-gray-600">Total depuneri:</span>
                      <p className="font-semibold text-slate-900">
                        {result.totalContributed.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Profit din investiții:</span>
                      <p className="font-semibold text-green-700">
                        +{result.interestEarned.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">
                      Sold estimat la 60 de ani:
                    </span>
                    <strong className="text-3xl text-green-800 block mt-1">
                      {result.finalBalance.toLocaleString("ro-RO")} RON
                    </strong>
                    <span className="text-xs text-gray-600 block mt-1">
                      Disponibil după împlinirea vârstei de 60 de ani (cu min. 90 contribuții lunare).
                    </span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center p-8 text-center text-gray-600 border-dashed">
                <div>
                  <PiggyBank className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Introdu datele în stânga pentru a vedea acumularea estimată la 60 de ani.</p>
                </div>
              </Card>
            )}

            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none space-y-4">
              <h2>Ce avantaje fiscale oferă Pilonul III în 2026?</h2>
              <p>
                Pilonul III oferă o deducere fiscală de până la <strong>400 EUR pe an</strong> pentru salariat și încă 400 EUR pe an pentru angajator, cu posibilitatea retragerii acumulate încă de la împlinirea vârstei de <strong>60 de ani</strong>.
              </p>
              <ul>
                <li><strong>Economie directă de impozit:</strong> la contribuția maximă deductibilă (~2.000 lei/an, adică ~166 lei/lună), impozitul pe venit de 10% se reduce anual cu circa 200 lei pentru salariat.</li>
                <li><strong>Acces rapid la 60 de ani:</strong> cu 5 ani înaintea vârstei standard de 65 de ani (în condițiile realizării a cel puțin 90 contribuții lunare).</li>
                <li><strong>Flexibilitate totală:</strong> poți modifica, crește sau suspenda contribuția oricând, în limita legală de 15% din venitul brut lunar.</li>
              </ul>

              <h2>Cât acumulezi la Pilonul III cu 166 lei vs 350 lei pe lună?</h2>
              <table className="w-full text-xs sm:text-sm border-collapse my-4">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border p-2">Contribuție Lunară</th>
                    <th className="border p-2">Orizont (până la 60 ani)</th>
                    <th className="border p-2">Total Depus</th>
                    <th className="border p-2">Sold Estimat (5%/an)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">166 lei / lună (~400 EUR/an)</td>
                    <td className="border p-2">20 ani (de la 40 ani)</td>
                    <td className="border p-2">39.840 lei</td>
                    <td className="border p-2 font-bold text-green-700">~68.200 lei</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-2 font-semibold">166 lei / lună (~400 EUR/an)</td>
                    <td className="border p-2">30 ani (de la 30 ani)</td>
                    <td className="border p-2">59.760 lei</td>
                    <td className="border p-2 font-bold text-green-700">~138.150 lei</td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">350 lei / lună (salariat + angajator)</td>
                    <td className="border p-2">25 ani (de la 35 ani)</td>
                    <td className="border p-2">105.000 lei</td>
                    <td className="border p-2 font-bold text-green-700">~208.400 lei</td>
                  </tr>
                </tbody>
              </table>

              <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <Link href="/calculator-pensie-pilon-2/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Calculator Pilon II Obligatoriu
                </Link>
                <Link href="/planificare/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Strategie Pilon I + II + III
                </Link>
                <Link href="/blog/pilonul-3-avantaje-fiscale-strategii/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Strategii Fiscale Pilon III
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
