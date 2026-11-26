import { useState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, AlertTriangle, Info } from "lucide-react";
import { calculateEarlyRetirement } from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";

export default function EarlyRetirementCalculator() {
  const [currentAge, setCurrentAge] = useState<number>(55);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [contributionYears, setContributionYears] = useState<number>(30);
  const [earlyRetirementAge, setEarlyRetirementAge] = useState<number>(62);
  const [result, setResult] = useState<ReturnType<typeof calculateEarlyRetirement> | null>(null);
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

    try {
      const calculation = calculateEarlyRetirement({
        currentAge,
        gender,
        monthlyIncome,
        incomeType: "net",
        contributionYears,
        earlyRetirementAge,
      });

      startTransition(() => {
        setResult(calculation);
      });
      trackCalculatorUsage("early", calculation.earlyPension);
    } catch (error: any) {
      startTransition(() => {
        setResult(null);
      });
      setErrorMsg(error?.message || "Condițiile pentru pensia anticipată nu sunt îndeplinite.");
    }
  };

  const standardRetirementAge = gender === "male" ? 65 : 63;
  const monthsEarly = Math.max(0, (standardRetirementAge - earlyRetirementAge) * 12);
  const requiredYears = gender === "male" ? 35 : 33;
  const totalYearsAtEarlyRetirement = contributionYears + Math.max(0, earlyRetirementAge - currentAge);
  const exceedYears = totalYearsAtEarlyRetirement - requiredYears;
  const penaltyRate =
    exceedYears >= 8
      ? 0
      : exceedYears >= 5
        ? 0.15
        : exceedYears >= 4
          ? 0.20
          : exceedYears >= 3
            ? 0.25
            : exceedYears >= 2
              ? 0.30
              : exceedYears >= 1
                ? 0.35
                : 0.40;

  return (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
          <h3 className="font-semibold text-orange-800">Atenție: Condiții de Stagiu &amp; Penalizare</h3>
        </div>
        <p className="text-orange-700 text-sm">
          Conform Legii nr. 360/2023, pensia anticipată necesită realizarea stagiului complet de cotizare contributiv și aplică o diminuare între{" "}
          <strong>0,15% și 0,40%</strong> pentru fiecare lună de anticipare până la împlinirea vârstei standard.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="erc-age">Vârsta actuală</Label>
            <Input
              id="erc-age"
              type="number"
              min={18}
              max={70}
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="erc-gender">Sex</Label>
            <Select value={gender} onValueChange={(v) => setGender(v as "male" | "female")}>
              <SelectTrigger id="erc-gender">
                <SelectValue placeholder="Selectează sexul" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Bărbat</SelectItem>
                <SelectItem value="female">Femeie</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="erc-income">Venitul lunar net actual (RON)</Label>
          <Input
            id="erc-income"
            type="number"
            min={1000}
            max={100000}
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="erc-years">Stagiul de cotizare contributiv actual (ani)</Label>
          <Input
            id="erc-years"
            type="number"
            min={0}
            max={50}
            value={contributionYears}
            onChange={(e) => setContributionYears(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="erc-retire">Vârsta de pensionare anticipată dorită</Label>
          <Select value={String(earlyRetirementAge)} onValueChange={(value) => setEarlyRetirementAge(Number(value))}>
            <SelectTrigger id="erc-retire">
              <SelectValue placeholder="Selectează vârsta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="58">58 de ani</SelectItem>
              <SelectItem value="59">59 de ani</SelectItem>
              <SelectItem value="60">60 de ani</SelectItem>
              <SelectItem value="61">61 de ani</SelectItem>
              <SelectItem value="62">62 de ani</SelectItem>
              <SelectItem value="63">63 de ani</SelectItem>
              <SelectItem value="64">64 de ani</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {monthsEarly > 0 && (
          <div className="bg-red-50 p-3 rounded-lg text-sm text-red-800">
            <AlertTriangle className="inline h-4 w-4 mr-1" />
            Anticipare cu <strong>{monthsEarly} luni</strong> → penalizare estimată{" "}
            <strong>{(monthsEarly * penaltyRate).toFixed(1)}%</strong> (rată {penaltyRate.toFixed(2)}%/lună)
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800">
            {errorMsg}
          </div>
        )}

        <Button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-lg py-4">
          <Calculator className="mr-2 h-5 w-5" />
          Calculează Penalizarea
        </Button>
      </form>

      {result && (
        <div className="space-y-4">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-red-800">Pensie Anticipată (VPR 81 Lei)</h3>
                <Badge variant="destructive">Cu Penalizare</Badge>
              </div>
              <p className="text-3xl font-bold text-red-700 mb-2">
                {result.earlyPension.toLocaleString("ro-RO")} RON brut/lună
              </p>
              <p className="text-sm text-red-700">
                Reducere aplicată temporar până la vârsta standard: <strong>{result.penaltyPercentage.toFixed(1)}%</strong> ({result.monthsEarly} luni × {penaltyRate.toFixed(2)}%)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-800">Pensie fără Penalizare (la {standardRetirementAge} ani)</h3>
                <Badge className="bg-green-600">După Împlinirea Vârstei</Badge>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">
                {result.standardPension.toLocaleString("ro-RO")} RON brut/lună
              </p>
              <p className="text-sm text-green-700">
                Diferență lunară: +{(result.standardPension - result.earlyPension).toLocaleString("ro-RO")} RON/lună
              </p>
            </CardContent>
          </Card>

          {result.recommendedStage && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                <h3 className="font-semibold text-yellow-800">Recomandare</h3>
              </div>
              <p className="text-yellow-800 text-sm">{result.recommendedStage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
