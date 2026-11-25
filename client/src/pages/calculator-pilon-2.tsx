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

const PAGE_META = ROUTES_META["/calculator-pensie-pilon-2/"];

export default function CalculatorPilon2Page() {
  const [netSalary, setNetSalary] = useState<number>(5400);
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [annualYield, setAnnualYield] = useState<number>(5.5);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [result, setResult] = useState<{
    monthlyContribution: number;
    totalContributed: number;
    interestEarned: number;
    finalBalance: number;
    yearsToRetirement: number;
  } | null>(null);

  const handleCalculate = () => {
    setErrorMsg(null);
    const estimatedGross = netSalary / 0.585;
    const monthlyContribution = estimatedGross * 0.0475;
    const yearsToRetirement = 65 - currentAge;
    if (yearsToRetirement <= 0) {
      setErrorMsg("Vârsta actuală trebuie să fie sub 65 de ani.");
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

    setResult({
      monthlyContribution: Math.round(monthlyContribution),
      totalContributed: Math.round(totalContributed),
      interestEarned: Math.round(interestEarned),
      finalBalance: Math.round(finalBalance),
      yearsToRetirement,
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
          <h1 className="text-3xl font-bold mb-4">Calculator Pensie Pilon II (2026)</h1>
          <p className="text-xl text-gray-700">
            Estimează soldul contului tău privat obligatoriu (cotă 4,75% din salariul brut) până la pensionare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Setări Simulare</CardTitle>
              <CardDescription>Introdu venitul și orizontul</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-xs text-green-800 bg-green-50 p-2.5 rounded border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-green-700" />
                <span className="font-semibold">Cotă oficială Pilon II: 4,75% (2026)</span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salariul Net Lunar (RON)</Label>
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
                    Proiecție Acumulare Pilon II
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b border-green-200 pb-4">
                    <div>
                      <span className="text-xs text-gray-600 block">Contribuție lunară estimată:</span>
                      <strong className="text-lg text-slate-900">
                        {result.monthlyContribution.toLocaleString("ro-RO")} RON/lună
                      </strong>
                      <span className="text-xs text-gray-500 block">(4,75% din brut)</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 block">Ani de capitalizare:</span>
                      <strong className="text-lg text-slate-900">{result.yearsToRetirement} ani</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-b border-green-200 pb-4 text-sm">
                    <div>
                      <span className="text-xs text-gray-600">Total viramente din CAS:</span>
                      <p className="font-semibold text-slate-900">
                        {result.totalContributed.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Câștig investițional (dobândă compusă):</span>
                      <p className="font-semibold text-green-700">
                        +{result.interestEarned.toLocaleString("ro-RO")} RON
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">
                      Sold estimat la 65 de ani:
                    </span>
                    <strong className="text-3xl text-green-800 block mt-1">
                      {result.finalBalance.toLocaleString("ro-RO")} RON
                    </strong>
                    <span className="text-xs text-gray-600 block mt-1">
                      Sumă aflată în proprietatea privată a participantului, complet moștenibilă.
                    </span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center p-8 text-center text-gray-600 border-dashed">
                <div>
                  <PiggyBank className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Completează datele din stânga pentru a simula acumularea în Pilonul II.</p>
                </div>
              </Card>
            )}

            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h2>Cum funcționează Pilonul II de pensii private obligatorii?</h2>
              <p>
                Pilonul II redirecționează automat <strong>4,75% din venitul tău salarial brut</strong> (din cota totală de 25% CAS) într-un cont individual administrat privat. Participarea nu îți reduce salariul net și transformă o parte din contribuții într-un activ personal investit pe piețele financiare.
              </p>
              <ul>
                <li><strong>Proprietate privată garantată:</strong> banii îți aparțin exclusiv ție și sunt moștenibili legal în caz de deces înaintea pensionării.</li>
                <li><strong>Protecție prin lege:</strong> fondurile sunt supravegheate de ASF (Autoritatea de Supraveghere Financiară) și investite preponderent în titluri de stat și acțiuni listate.</li>
                <li><strong>Complementar Pilonului I:</strong> se încasează separat față de pensia de stat calculată prin CNPP.</li>
              </ul>

              <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link href="/calculator-pensie-pilon-3/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Calculator Pensie Facultativă Pilon III
                </Link>
                <Link href="/blog/pilonul-2-modificari-legislative/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Pilonul II: Reguli și Moștenire 2026
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
