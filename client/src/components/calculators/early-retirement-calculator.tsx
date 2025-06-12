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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const earlyRetirementSchema = z.object({
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(70, "Vârsta maximă este 70 ani"),
  gender: z.enum(["male", "female"]),
  monthlyIncome: z.number().min(1000, "Venitul minim este 1000 RON").max(50000, "Venitul maxim este 50000 RON"),
  contributionYears: z.number().min(0, "Stagiul nu poate fi negativ").max(50, "Stagiul maxim este 50 ani"),
  earlyRetirementAge: z.number().min(58, "Vârsta minimă pentru pensie anticipată este 58 ani").max(67, "Vârsta maximă este 67 ani"),
});

type EarlyRetirementForm = z.infer<typeof earlyRetirementSchema>;

export default function EarlyRetirementCalculator() {
  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<EarlyRetirementForm>({
    resolver: zodResolver(earlyRetirementSchema),
    defaultValues: {
      currentAge: 55,
      gender: "male",
      monthlyIncome: 5000,
      contributionYears: 25,
      earlyRetirementAge: 63,
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

  const onSubmit = async (data: EarlyRetirementForm) => {
    setIsCalculating(true);
    
    try {
      const calculation = calculateEarlyRetirement({
        currentAge: data.currentAge,
        gender: data.gender,
        monthlyIncome: data.monthlyIncome,
        contributionYears: data.contributionYears,
        earlyRetirementAge: data.earlyRetirementAge,
      });

      setResult(calculation);
      
      // Save calculation to database
      await savePensionCalculation.mutateAsync({
        currentAge: data.currentAge,
        monthlyIncome: data.monthlyIncome,
        contributionYears: data.contributionYears,
        retirementAge: data.earlyRetirementAge,
        calculatedPension: calculation.earlyPension,
        calculationType: 'early',
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const gender = form.watch('gender');
  const earlyRetirementAge = form.watch('earlyRetirementAge');
  const standardRetirementAge = gender === 'male' ? 65 : 63;
  const monthsEarly = (standardRetirementAge - earlyRetirementAge) * 12;

  return (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
          <h3 className="font-semibold text-orange-800">Atenție: Pensie cu Penalizare</h3>
        </div>
        <p className="text-orange-700 text-sm">
          Pensionarea anticipată implică o reducere de 0,75% pentru fiecare lună de anticipare. 
          Asigură-te că îndeplinești condițiile de stagiu înainte de a lua această decizie.
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
                  <FormLabel>Gen</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează genul" />
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
            name="contributionYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stagiul de cotizare actual (ani)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="25" 
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
                <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue="63">
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
                    <SelectItem value="65">65 de ani</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {monthsEarly > 0 && (
            <div className="bg-red-50 p-3 rounded-lg text-sm text-red-800">
              <AlertTriangle className="inline h-4 w-4 mr-1" />
              Pensionare cu <strong>{monthsEarly} luni</strong> mai devreme = 
              <strong> {(monthsEarly * 0.75).toFixed(1)}%</strong> reducere permanentă
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-red-700 text-lg py-4"
            disabled={isCalculating}
          >
            <Calculator className="mr-2 h-5 w-5" />
            {isCalculating ? 'Se calculează...' : 'Calculează Penalizarea'}
          </Button>
        </form>
      </Form>

      {result && (
        <div className="space-y-4">
          {/* Early Retirement Result */}
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-red-800">Pensie Anticipată</h4>
                <Badge variant="destructive">Cu Penalizare</Badge>
              </div>
              <p className="text-3xl font-bold text-red-700 mb-2">
                {result.earlyPension.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
              </p>
              <p className="text-sm text-red-600">
                Reducere aplicată: {result.penaltyPercentage.toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          {/* Standard Retirement Comparison */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-green-800">Pensie Standard (la {standardRetirementAge} ani)</h4>
                <Badge className="bg-green-600">Fără Penalizare</Badge>
              </div>
              <p className="text-3xl font-bold text-green-700 mb-2">
                {result.standardPension.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
              </p>
              <p className="text-sm text-green-600">
                Diferența: +{(result.standardPension - result.earlyPension).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
              </p>
            </CardContent>
          </Card>

          {/* Analysis */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-blue-800 mb-3">Analiza Financiară</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-600">Pierdere lunară:</span>
                  <p className="font-semibold text-blue-800">
                    {(result.standardPension - result.earlyPension).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON
                  </p>
                </div>
                <div>
                  <span className="text-blue-600">Pierdere anuală:</span>
                  <p className="font-semibold text-blue-800">
                    {((result.standardPension - result.earlyPension) * 12).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON
                  </p>
                </div>
                <div>
                  <span className="text-blue-600">Ani în plus de pensie:</span>
                  <p className="font-semibold text-blue-800">{monthsEarly / 12} ani</p>
                </div>
                <div>
                  <span className="text-blue-600">Stagiu necesar:</span>
                  <p className="font-semibold text-blue-800">
                    {gender === 'male' ? '35' : '30'} ani (anticipată completă)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {result.recommendedStage && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                <h4 className="font-semibold text-yellow-800">Recomandare</h4>
              </div>
              <p className="text-yellow-700 text-sm">{result.recommendedStage}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
