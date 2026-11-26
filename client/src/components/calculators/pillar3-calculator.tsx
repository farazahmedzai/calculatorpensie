import { useState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, PiggyBank, TrendingUp, Euro } from "lucide-react";
import { calculatePillar3Contributions } from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";

export default function Pillar3Calculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(200);
  const [expectedReturn, setExpectedReturn] = useState<number>(6);
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (retirementAge <= currentAge) {
      setErrorMsg("Vârsta de pensionare trebuie să fie mai mare decât vârsta actuală.");
      return;
    }

    try {
      const calculation = calculatePillar3Contributions({
        monthlyIncome,
        currentAge,
        retirementAge,
        monthlyContribution,
        expectedReturn,
      });

      startTransition(() => {
        setResult(calculation);
      });
      trackCalculatorUsage("pillar3", calculation.monthlyPensionFromPillar3);
    } catch (error: any) {
      setErrorMsg(error?.message || "Verifică valorile introduse.");
    }
  };

  const annualContribution = monthlyContribution * 12;
  const maxDeductibleEUR = 400;
  const maxDeductibleRON = maxDeductibleEUR * 5;

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <PiggyBank className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-green-800">Avantaje Pilonul III</h3>
        </div>
        <p className="text-green-700 text-sm">
          Contribuțiile la Pilonul III sunt deductibile fiscal până la {maxDeductibleEUR} EUR pe an.{" "}
          Economia de impozit poate fi de până la 10% din contribuția anuală.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="p3-income">Venitul lunar net (RON)</Label>
            <Input
              id="p3-income"
              type="number"
              min={1000}
              max={50000}
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="p3-age">Vârsta actuală</Label>
            <Input
              id="p3-age"
              type="number"
              min={18}
              max={65}
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="p3-retire">Vârsta de pensionare țintă</Label>
          <Input
            id="p3-retire"
            type="number"
            min={60}
            max={70}
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label>
            Contribuția lunară dorită: {monthlyContribution} RON
            {annualContribution <= maxDeductibleRON && (
              <Badge className="ml-2 bg-green-600">Deductibil fiscal</Badge>
            )}
          </Label>
          <Slider
            min={50}
            max={500}
            step={10}
            value={[monthlyContribution]}
            onValueChange={(value) => setMonthlyContribution(value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-gray-700 mt-1">
            <span>50 RON</span>
            <span>500 RON</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Randament anual așteptat: {expectedReturn}%</Label>
          <Slider
            min={2}
            max={12}
            step={0.5}
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-gray-700 mt-1">
            <span>2% (conservator)</span>
            <span>12% (agresiv)</span>
          </div>
        </div>

        {annualContribution > maxDeductibleRON && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-800">
            <Euro className="inline h-4 w-4 mr-1" />
            Contribuția anuală ({annualContribution.toLocaleString("ro-RO")} RON) depășește{" "}
            limita deductibilă de {maxDeductibleRON.toLocaleString("ro-RO")} RON.
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">
            {errorMsg}
          </div>
        )}

        <Button type="submit" className="w-full bg-brand-green hover:bg-green-700 text-lg py-4">
          <Calculator className="mr-2 h-5 w-5" />
          Calculează Beneficiile
        </Button>
      </form>

      {result && (
        <div className="space-y-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-800">Economie Fiscală Anuală</h3>
                <Badge className="bg-green-600">Beneficiu Imediat</Badge>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">
                {result.annualTaxSaving.toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON
              </p>
              <p className="text-sm text-green-600">
                Din contribuția anuală de {result.annualContribution.toLocaleString("ro-RO")} RON
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-blue-800">Capital Acumulat la Pensionare</h3>
                <Badge className="bg-blue-600">Valoare Viitoare</Badge>
              </div>
              <p className="text-3xl font-bold text-blue-700 mb-2">
                {result.totalAccumulated.toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON
              </p>
              <p className="text-sm text-blue-600">
                Din care: {result.totalContributions.toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON contribuții +{" "}
                {(result.totalAccumulated - result.totalContributions).toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON dobândă
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-purple-800">Pensie Lunară din Pilonul III</h3>
                <Badge className="bg-purple-600">Venit Suplimentar</Badge>
              </div>
              <p className="text-3xl font-bold text-purple-700 mb-2">
                {result.monthlyPensionFromPillar3.toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON/lună
              </p>
              <p className="text-sm text-purple-600">
                Calculat pentru {result.yearsToRetirement} ani de contribuții
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                <TrendingUp className="inline h-5 w-5 mr-2" />
                Analiza Investiției
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Randament efectiv</p>
                  <p className="text-xl font-bold text-gray-800">{result.effectiveReturn.toFixed(1)}%</p>
                  <p className="text-xs text-gray-500">Cu economie fiscală</p>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Cost real lunar</p>
                  <p className="text-xl font-bold text-gray-800">
                    {result.netMonthlyCost.toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON
                  </p>
                  <p className="text-xs text-gray-500">După economie fiscală</p>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Multiplicator</p>
                  <p className="text-xl font-bold text-gray-800">{result.moneyMultiplier.toFixed(1)}x</p>
                  <p className="text-xs text-gray-500">Creșterea capitalului</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Recomandare Strategică</h3>
            <p className="text-blue-700 text-sm">{result.recommendation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
