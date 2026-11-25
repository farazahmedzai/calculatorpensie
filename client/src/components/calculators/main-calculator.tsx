import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Info } from "lucide-react";
import {
  calculateStandardPension,
  OFFICIAL_VPR_2026,
  type PensionResult,
} from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";

const calculatorSchema = z.object({
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(70, "Vârsta maximă este 70 ani"),
  monthlyIncome: z.number().min(1000, "Venitul minim este 1000 RON").max(100000, "Venitul maxim este 100000 RON"),
  contributionYears: z.number().min(0, "Stagiul nu poate fi negativ").max(50, "Stagiul maxim este 50 ani"),
  retirementAge: z.number().min(60, "Vârsta minimă de pensionare este 60 ani").max(70, "Vârsta maximă de pensionare este 70 ani"),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

interface MainCalculatorProps {
  onCalculationComplete?: (result: number) => void;
}

export default function MainCalculator({ onCalculationComplete }: MainCalculatorProps) {
  const [result, setResult] = useState<PensionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const form = useForm<CalculatorForm>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      currentAge: 35,
      monthlyIncome: 5000,
      contributionYears: 15,
      retirementAge: 65,
    },
  });

  const onSubmit = (data: CalculatorForm) => {
    setErrorMsg(null);
    try {
      const calculatedPension = calculateStandardPension({
        currentAge: data.currentAge,
        monthlyIncome: data.monthlyIncome,
        incomeType: "net",
        contributionYears: data.contributionYears,
        retirementAge: data.retirementAge,
      });

      setResult(calculatedPension);
      trackCalculatorUsage("standard", calculatedPension.monthlyPension);
      if (onCalculationComplete) {
        onCalculationComplete(calculatedPension.monthlyPension);
      }
    } catch (error: any) {
      setErrorMsg(error?.message || "Verifică datele introduse.");
    }
  };

  const currentAge = form.watch("currentAge");
  const retirementAge = form.watch("retirementAge");
  const yearsToRetirement = retirementAge ? retirementAge - (currentAge || 0) : 0;

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currentAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vârsta actuală (ani)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="35"
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
                <FormLabel>Stagiul de cotizare realizat până acum (ani)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="15"
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
            name="retirementAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vârsta de pensionare dorită</FormLabel>
                <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue="65">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează vârsta" />
                    </SelectTrigger>
                  </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />

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
      </Form>

      {result && (
        <Card className="bg-brand-green bg-opacity-10 border-brand-green border-opacity-20">
          <CardContent className="p-6">
            <h4 className="font-semibold text-brand-green mb-2">Rezultatul estimării (Legea 360/2023):</h4>
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
