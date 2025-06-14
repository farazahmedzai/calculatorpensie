import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, PiggyBank, TrendingUp, Euro } from "lucide-react";
import { calculatePillar3Contributions } from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const pillar3Schema = z.object({
  monthlyIncome: z.number().min(1000, "Venitul minim este 1000 RON").max(50000, "Venitul maxim este 50000 RON"),
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(65, "Vârsta maximă este 65 ani"),
  retirementAge: z.number().min(60, "Vârsta minimă de pensionare este 60 ani").max(70, "Vârsta maximă este 70 ani"),
  monthlyContribution: z.number().min(50, "Contribuția minimă este 50 RON").max(2000, "Contribuția maximă este 2000 RON"),
  expectedReturn: z.number().min(1, "Randamentul minim este 1%").max(15, "Randamentul maxim este 15%"),
});

type Pillar3Form = z.infer<typeof pillar3Schema>;

export default function Pillar3Calculator() {
  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<Pillar3Form>({
    resolver: zodResolver(pillar3Schema),
    defaultValues: {
      monthlyIncome: 5000,
      currentAge: 35,
      retirementAge: 65,
      monthlyContribution: 200,
      expectedReturn: 6,
    },
  });

  const savePensionCalculation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('POST', '/api/calculations', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/calculations'] });
    },
  });

  const onSubmit = async (data: Pillar3Form) => {
    setIsCalculating(true);
    
    try {
      const calculation = calculatePillar3Contributions({
        monthlyIncome: data.monthlyIncome,
        currentAge: data.currentAge,
        retirementAge: data.retirementAge,
        monthlyContribution: data.monthlyContribution,
        expectedReturn: data.expectedReturn,
      });

      setResult(calculation);
      
      // Track calculator usage for analytics
      trackCalculatorUsage('pillar3', calculation.monthlyPensionFromPillar3);
      
      // Save calculation to database
      await savePensionCalculation.mutateAsync({
        currentAge: data.currentAge,
        monthlyIncome: data.monthlyIncome,
        contributionYears: data.retirementAge - data.currentAge,
        retirementAge: data.retirementAge,
        calculatedPension: calculation.monthlyPensionFromPillar3,
        calculationType: 'pillar3',
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const monthlyContribution = form.watch('monthlyContribution');
  const monthlyIncome = form.watch('monthlyIncome');
  const annualContribution = monthlyContribution * 12;
  const maxDeductibleEUR = 400;
  const maxDeductibleRON = maxDeductibleEUR * 5; // Approximate EUR to RON conversion

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <PiggyBank className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-green-800">Avantaje Pilonul III</h3>
        </div>
        <p className="text-green-700 text-sm">
          Contribuțiile la Pilonul III sunt deductibile fiscal până la {maxDeductibleEUR} EUR pe an. 
          Economia de impozit poate fi de până la 10% din contribuția anuală.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="monthlyIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venitul lunar net (RON)</FormLabel>
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
              name="currentAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vârsta actuală</FormLabel>
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
          </div>

          <FormField
            control={form.control}
            name="retirementAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vârsta de pensionare țintă</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="65" 
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
            name="monthlyContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Contribuția lunară dorită: {monthlyContribution} RON
                  {annualContribution <= maxDeductibleRON && (
                    <Badge className="ml-2 bg-green-600">Deductibil fiscal</Badge>
                  )}
                </FormLabel>
                <FormControl>
                  <Slider
                    min={50}
                    max={500}
                    step={10}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="mt-2"
                  />
                </FormControl>
                <div className="flex justify-between text-sm text-gray-700 mt-1">
                  <span>50 RON</span>
                  <span>500 RON</span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedReturn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Randament anual așteptat: {field.value}%</FormLabel>
                <FormControl>
                  <Slider
                    min={2}
                    max={12}
                    step={0.5}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                    className="mt-2"
                  />
                </FormControl>
                <div className="flex justify-between text-sm text-gray-700 mt-1">
                  <span>2% (conservator)</span>
                  <span>12% (agresiv)</span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {annualContribution > maxDeductibleRON && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-800">
              <Euro className="inline h-4 w-4 mr-1" />
              Contribuția anuală ({annualContribution.toLocaleString('ro-RO')} RON) depășește 
              limita deductibilă de {maxDeductibleRON.toLocaleString('ro-RO')} RON.
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-brand-green hover:bg-green-700 text-lg py-4"
            disabled={isCalculating}
          >
            <Calculator className="mr-2 h-5 w-5" />
            {isCalculating ? 'Se calculează...' : 'Calculează Beneficiile'}
          </Button>
        </form>
      </Form>

      {result && (
        <div className="space-y-4">
          {/* Tax Savings */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-green-800">Economie Fiscală Anuală</h4>
                <Badge className="bg-green-600">Beneficiu Imediat</Badge>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">
                {result.annualTaxSaving.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON
              </p>
              <p className="text-sm text-green-600">
                Din contribuția anuală de {result.annualContribution.toLocaleString('ro-RO')} RON
              </p>
            </CardContent>
          </Card>

          {/* Accumulated Capital */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-blue-800">Capital Acumulat la Pensionare</h4>
                <Badge className="bg-blue-600">Valoare Viitoare</Badge>
              </div>
              <p className="text-3xl font-bold text-blue-700 mb-2">
                {result.totalAccumulated.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON
              </p>
              <p className="text-sm text-blue-600">
                Din care: {result.totalContributions.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON contribuții + 
                {' '}{(result.totalAccumulated - result.totalContributions).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON dobândă
              </p>
            </CardContent>
          </Card>

          {/* Monthly Pension */}
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-purple-800">Pensie Lunară din Pilonul III</h4>
                <Badge className="bg-purple-600">Venit Suplimentar</Badge>
              </div>
              <p className="text-3xl font-bold text-purple-700 mb-2">
                {result.monthlyPensionFromPillar3.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
              </p>
              <p className="text-sm text-purple-600">
                Calculat pentru {result.yearsToRetirement} ani de contribuții
              </p>
            </CardContent>
          </Card>

          {/* Analysis */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">
                <TrendingUp className="inline h-5 w-5 mr-2" />
                Analiza Investiției
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Randament efectiv</p>
                  <p className="text-xl font-bold text-gray-800">
                    {result.effectiveReturn.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500">Cu economie fiscală</p>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Cost real lunar</p>
                  <p className="text-xl font-bold text-gray-800">
                    {result.netMonthlyCost.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON
                  </p>
                  <p className="text-xs text-gray-500">După economie fiscală</p>
                </div>
                <div className="text-center p-3 bg-white rounded">
                  <p className="text-gray-600">Multiplicator</p>
                  <p className="text-xl font-bold text-gray-800">
                    {result.moneyMultiplier.toFixed(1)}x
                  </p>
                  <p className="text-xs text-gray-500">Creșterea capitalului</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Recomandare Strategică</h4>
            <p className="text-blue-700 text-sm">
              {result.recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
