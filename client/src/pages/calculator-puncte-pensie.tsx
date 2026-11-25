import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Award, CheckCircle } from "lucide-react";
import {
  AVERAGE_GROSS_SALARY_2026,
  calculateStabilityPoints,
  estimateNetPension2026,
  OFFICIAL_VPR_2026,
} from "@/lib/pension-calculations";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/calculator-puncte-pensie/"];

export default function CalculatorPunctePage() {
  const [netSalary, setNetSalary] = useState<number>(5400);
  const [workYears, setWorkYears] = useState<number>(35);
  const [assimilatedYears, setAssimilatedYears] = useState<number>(0);

  const [result, setResult] = useState<{
    contributoryPoints: number;
    stabilityPoints: number;
    assimilatedPoints: number;
    totalPoints: number;
    estimatedPension: number;
    estimatedNet: number;
  } | null>(null);

  const handleCalculate = () => {
    const estimatedGross = netSalary / 0.585;
    const pointsPerYear = estimatedGross / AVERAGE_GROSS_SALARY_2026;
    const contributoryPoints = pointsPerYear * workYears;
    const stabilityPoints = calculateStabilityPoints(workYears);
    const assimilatedPoints = assimilatedYears * 0.25;
    const totalPoints = contributoryPoints + stabilityPoints + assimilatedPoints;
    const estimatedPension = Math.round(totalPoints * OFFICIAL_VPR_2026);
    const estimatedNet = estimateNetPension2026(estimatedPension);

    setResult({
      contributoryPoints: parseFloat(contributoryPoints.toFixed(4)),
      stabilityPoints: parseFloat(stabilityPoints.toFixed(4)),
      assimilatedPoints: parseFloat(assimilatedPoints.toFixed(4)),
      totalPoints: parseFloat(totalPoints.toFixed(4)),
      estimatedPension,
      estimatedNet,
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
          <h1 className="text-3xl font-bold mb-4">Calculator Puncte de Pensie &amp; Stabilitate 2026</h1>
          <p className="text-xl text-gray-700">
            Calculează punctele de contributivitate și bonusul pentru stagiu peste 25 de ani (VPR = {OFFICIAL_VPR_2026} Lei)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Date de Calcul</CardTitle>
              <CardDescription>Introdu salariul și vechimea</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-xs text-green-800 bg-green-50 p-2.5 rounded border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-green-700" />
                <span className="font-semibold">Actualizat 2026 (VPR {OFFICIAL_VPR_2026} Lei)</span>
              </div>

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
                <Label htmlFor="assimilated">Ani Asimilați (facultate la zi, armată)</Label>
                <Input
                  id="assimilated"
                  type="number"
                  value={assimilatedYears}
                  onChange={(e) => setAssimilatedYears(Number(e.target.value))}
                />
              </div>

              <Button type="button" onClick={handleCalculate} className="w-full bg-brand-blue hover:bg-blue-700">
                Calculează Punctele
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {result ? (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Punctaj Estimat (Legea 360/2023)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-blue-200 pb-4">
                    <div>
                      <span className="text-xs text-gray-600 block">Puncte Contributive:</span>
                      <strong className="text-lg text-slate-900">{result.contributoryPoints}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 block">Puncte Stabilitate:</span>
                      <strong className="text-lg text-green-700">+{result.stabilityPoints}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600 block">Puncte Asimilate:</span>
                      <strong className="text-lg text-orange-700">{result.assimilatedPoints}</strong>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-700 block text-sm">Număr total de puncte:</span>
                    <strong className="text-3xl text-slate-900">{result.totalPoints}</strong>
                  </div>
                  <div className="border-t border-blue-200 pt-4 bg-white p-4 rounded-lg">
                    <span className="text-gray-600 block text-xs uppercase font-bold tracking-wider">
                      Pensie Brută Estimată (VPR {OFFICIAL_VPR_2026} Lei):
                    </span>
                    <strong className="text-2xl text-blue-700 block mt-1">
                      {result.estimatedPension.toLocaleString("ro-RO")} RON brut/lună
                    </strong>
                    <span className="text-sm text-gray-700 block mt-1">
                      Net estimat după CASS și impozit (&gt;3.000 lei):{" "}
                      <strong>{result.estimatedNet.toLocaleString("ro-RO")} RON/lună</strong>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex items-center justify-center p-8 text-center text-gray-600 border-dashed">
                <div>
                  <Award className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p>Apasă „Calculează Punctele” pentru a vedea defalcarea completă pe categorii de puncte.</p>
                </div>
              </Card>
            )}

            <div className="bg-white rounded-lg p-6 shadow-sm prose prose-sm max-w-none">
              <h2>Cum se acordă Punctele de Stabilitate (Art. 85 Legea 360/2023)?</h2>
              <p>
                Punctele de stabilitate recompensează stagiul de cotizare contributiv ce depășește <strong>25 de ani</strong>, crescând direct numărul total de puncte:
              </p>
              <table className="w-full text-sm border-collapse my-4">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border p-2">Interval Vechime Contributivă</th>
                    <th className="border p-2">Puncte / An</th>
                    <th className="border p-2">Maxim pe Interval</th>
                    <th className="border p-2">Plus Brut (VPR 81 Lei)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Anii 26 – 30 (5 ani)</td>
                    <td className="border p-2"><strong>+0,50 puncte</strong></td>
                    <td className="border p-2">2,50 puncte</td>
                    <td className="border p-2">+203 Lei / lună</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border p-2">Anii 31 – 35 (5 ani)</td>
                    <td className="border p-2"><strong>+0,75 puncte</strong></td>
                    <td className="border p-2">3,75 puncte (cumulat 6,25)</td>
                    <td className="border p-2">+506 Lei / lună cumulat</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Peste 35 ani</td>
                    <td className="border p-2"><strong>+1,00 punct</strong></td>
                    <td className="border p-2">Fără plafon</td>
                    <td className="border p-2">+81 Lei / lună pentru fiecare an</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>Exemplu concret (40 de ani stagiu contributiv):</strong>{" "}
                <code>(5 × 0,50) + (5 × 0,75) + (5 × 1,00) = 11,25 puncte</code> de stabilitate, care la VPR de <strong>81 Lei</strong> adaugă <strong>+911 Lei brut/lună</strong> peste pensia din contributivitate!
              </p>

              <div className="not-prose mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link href="/metodologie/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Metodologia Matematică Completă
                </Link>
                <Link href="/blog/calcul-punct-referinta-vpr/" className="p-3 border rounded bg-slate-50 hover:bg-blue-50 text-blue-700 font-semibold">
                  → Ghid VPR 2026: Cum se stabilește
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
