import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, AlertTriangle, Info } from "lucide-react";
import { calculateEarlyRetirement } from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";

const earlyRetirementSchema = z.object({
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(70, "Vârsta maximă este 70 ani"),
  gender: z.enum(["male", "female"]),
  monthlyIncome: z.number().min(1000, "Venitul minim este 1000 RON").max(100000, "Venitul maxim este 100000 RON"),
  contributionYears: z.number().min(0, "Stagiul nu poate fi negativ").max(50, "Stagiul maxim este 50 ani"),
  earlyRetirementAge: z.number().min(58, "Vârsta minimă pentru pensie anticipată este 58 ani").max(67, "Vârsta maximă este 67 ani"),
});

type EarlyRetirementForm = z.infer<typeof earlyRetirementSchema>;

export default function EarlyRetirementCalculator() {
  const [result, setResult] = useState<ReturnType<typeof calculateEarlyRetirement> | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const form = useForm<EarlyRetirementForm>({
    resolver: zodResolver(earlyRetirementSchema),
    defaultValues: {
      currentAge: 55,
      gender: "male",
      monthlyIncome: 5000,
      contributionYears: 30,
      earlyRetirementAge: 62,
    },
  });

  const onSubmit = (data: EarlyRetirementForm) => {
    setErrorMsg(null);
    setResult(null);
    try {
      const calculation = calculateEarlyRetirement({
        currentAge: data.currentAge,
        gender: data.gender,
        monthlyIncome: data.monthlyIncome,
        incomeType: "net",
        contributionYears: data.contributionYears,
        earlyRetirementAge: data.earlyRetirementAge,
      });

      setResult(calculation);
      trackCalculatorUsage("early", calculation.earlyPension);
    } catch (error: any) {
      setErrorMsg(error?.message || "Condițiile pentru pensia anticipată nu sunt îndeplinite.");
    }
  };

  const gender = form.watch("gender");
  const earlyRetirementAge = form.watch("earlyRetirementAge");
  const currentAge = form.watch("currentAge");
  const contributionYears = form.watch("contributionYears");
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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="currentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vârsta actuală</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="55"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează sexul" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Bărbat</SelectItem>
                      <SelectItem value="female">Femeie</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="monthlyIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venitul lunar net actual (RON)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="5000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contributionYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stagiul de cotizare contributiv actual (ani)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="30"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="earlyRetirementAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vârsta de pensionare anticipată dorită</FormLabel>
                <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue="62">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează vârsta" />
                    </SelectTrigger>
                  </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />

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
      </Form>

      {result && (
        <div className="space-y-4">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-red-800">Pensie Anticipată (VPR 81 Lei)</h4>
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
                <h4 className="font-semibold text-green-800">Pensie fără Penalizare (la {standardRetirementAge} ani)</h4>
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
                <h4 className="font-semibold text-yellow-800">Recomandare</h4>
              </div>
              <p className="text-yellow-800 text-sm">{result.recommendedStage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
