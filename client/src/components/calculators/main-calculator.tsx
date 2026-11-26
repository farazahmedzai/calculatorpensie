import { useState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Info } from "lucide-react";
import {
  calculateStandardPension,
  OFFICIAL_VPR_2026,
  type PensionResult,
} from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";

interface MainCalculatorProps {
  onCalculationComplete?: (result: number) => void;
}

export default function MainCalculator({ onCalculationComplete }: MainCalculatorProps) {
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [contributionYears, setContributionYears] = useState<number>(15);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [result, setResult] = useState<PensionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (currentAge < 18 || currentAge > 70) {
      setErrorMsg("Vârsta actuală trebuie să fie între 18 și 70 de ani.");
      return;
    }
    if (monthlyIncome < 1000 || monthlyIncome > 100000) {
      setErrorMsg("Venitul lunar introdus trebuie să fie între 1.000 și 100.000 RON.");
      return;
    }
    if (contributionYears < 0 || contributionYears > 50) {
      setErrorMsg("Stagiul de cotizare trebuie să fie între 0 și 50 de ani.");
      return;
    }

    try {
      const calculatedPension = calculateStandardPension({
        currentAge,
        monthlyIncome,
        incomeType: "net",
        contributionYears,
        retirementAge,
      });

      startTransition(() => {
        setResult(calculatedPension);
      });
      trackCalculatorUsage("standard", calculatedPension.monthlyPension);
      if (onCalculationComplete) {
        onCalculationComplete(calculatedPension.monthlyPension);
      }
    } catch (error: any) {
      setErrorMsg(error?.message || "Verifică datele introduse.");
    }
  };

  const yearsToRetirement = retirementAge - (currentAge || 0);

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mc-age">Vârsta actuală (ani)</Label>
          <Input
            id="mc-age"
            type="number"
            min={18}
            max={70}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mc-income">Venitul lunar net actual (RON)</Label>
          <Input
            id="mc-income"
            type="number"
            min={1000}
            max={100000}
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mc-years">Stagiul de cotizare realizat până acum (ani)</Label>
          <Input
            id="mc-years"
            type="number"
            min={0}
            max={50}
            value={contributionYears}
            onChange={(e) => setContributionYears(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mc-retire">Vârsta de pensionare dorită</Label>
          <Select value={String(retirementAge)} onValueChange={(value) => setRetirementAge(Number(value))}>
            <SelectTrigger id="mc-retire">
              <SelectValue placeholder="Selectează vârsta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="60">60 de ani (anticipată)</SelectItem>
              <SelectItem value="61">61 de ani (anticipată)</SelectItem>
              <SelectItem value="62">62 de ani (anticipată / tranzitoriu femei)</SelectItem>
              <SelectItem value="63">63 de ani (femei Anexa 5)</SelectItem>
              <SelectItem value="64">64 de ani</SelectItem>
              <SelectItem value="65">65 de ani (standard bărbați &amp; țintă 2035)</SelectItem>
              <SelectItem value="66">66 de ani</SelectItem>
              <SelectItem value="67">67 de ani</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {yearsToRetirement > 0 && (
          <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
            <Info className="inline h-4 w-4 mr-1" />
            Îți mai rămân <strong>{yearsToRetirement} ani</strong> de contribuție până la pensionare
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700 text-lg py-4">
          <Calculator className="mr-2 h-5 w-5" />
          Calculează Pensia
        </Button>
      </form>

      {result && (
        <Card className="bg-brand-green bg-opacity-10 border-brand-green border-opacity-20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-brand-green mb-2">Rezultatul estimării (Legea 360/2023):</h3>
            <p className="text-3xl font-bold text-brand-green mb-1">
              {result.monthlyPension.toLocaleString("ro-RO")} RON brut/lună
            </p>
            <p className="text-sm font-medium text-gray-800 mb-3">
              Net estimat (după impozit și CASS peste 3.000 lei):{" "}
              <strong>{result.netMonthlyPension.toLocaleString("ro-RO")} RON/lună</strong>
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-700 block">Punctaj total:</span>
                <p className="font-semibold">{result.totalPoints.toFixed(2)} pct</p>
              </div>
              <div>
                <span className="text-gray-700 block">Stabilitate:</span>
                <p className="font-semibold">+{result.stabilityPoints.toFixed(2)} pct</p>
              </div>
              <div>
                <span className="text-gray-700 block">VPR 2026:</span>
                <p className="font-semibold">{OFFICIAL_VPR_2026} RON</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
