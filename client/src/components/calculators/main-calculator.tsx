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
import { calculateStandardPension } from "@/lib/pension-calculations";
import { trackCalculatorUsage } from "@/lib/analytics";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const calculatorSchema = z.object({
  currentAge: z.number().min(18, "Vârsta minimă este 18 ani").max(70, "Vârsta maximă este 70 ani"),
  monthlyIncome: z.number().min(1000, "Venitul minim este 1000 RON").max(50000, "Venitul maxim este 50000 RON"),
  contributionYears: z.number().min(0, "Stagiul nu poate fi negativ").max(50, "Stagiul maxim este 50 ani"),
  retirementAge: z.number().min(60, "Vârsta minimă de pensionare este 60 ani").max(70, "Vârsta maximă de pensionare este 70 ani"),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

interface MainCalculatorProps {
  onCalculationComplete?: (result: number) => void;
}

export default function MainCalculator({ onCalculationComplete }: MainCalculatorProps) {
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<CalculatorForm>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      currentAge: 35,
      monthlyIncome: 5000,
      contributionYears: 15,
      retirementAge: 65,
    },
  });

  const savePensionCalculation = useMutation({
    mutationFn: async (data: any) => {
      try {
        return await apiRequest('POST', '/api/calculations', data);
      } catch (error) {
        // Fallback for static deployment - just return success
        return { success: true };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/calculations'] });
    },
  });

  const onSubmit = async (data: CalculatorForm) => {
    setIsCalculating(true);
    
    try {
      // Calculate pension using Romanian formula
      const calculatedPension = calculateStandardPension({
        currentAge: data.currentAge,
        monthlyIncome: data.monthlyIncome,
        contributionYears: data.contributionYears,
        retirementAge: data.retirementAge,
      });

      setResult(calculatedPension);
      
      // Track calculator usage for analytics
      trackCalculatorUsage('standard', calculatedPension);
      
      // Save calculation to database (graceful fallback for static deployment)
      await savePensionCalculation.mutateAsync({
        currentAge: data.currentAge,
        monthlyIncome: data.monthlyIncome,
        contributionYears: data.contributionYears,
        retirementAge: data.retirementAge,
        calculatedPension: calculatedPension,
        calculationType: 'standard',
        createdAt: new Date().toISOString(),
      });

      // Call parent callback if provided
      if (onCalculationComplete) {
        onCalculationComplete(calculatedPension);
      }
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const currentAge = form.watch('currentAge');
  const retirementAge = form.watch('retirementAge');
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
                    <SelectItem value="62">62 de ani (anticipată)</SelectItem>
                    <SelectItem value="63">63 de ani (anticipată parțială/standard femei)</SelectItem>
                    <SelectItem value="64">64 de ani</SelectItem>
                    <SelectItem value="65">65 de ani (standard bărbați)</SelectItem>
                    <SelectItem value="66">66 de ani</SelectItem>
                    <SelectItem value="67">67 de ani</SelectItem>
                    <SelectItem value="70">70 de ani</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {yearsToRetirement > 0 && (
            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
              <Info className="inline h-4 w-4 mr-1" />
              Îți mai rămân <strong>{yearsToRetirement} ani</strong> până la pensionare
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-blue-700 text-lg py-4"
            disabled={isCalculating}
          >
            <Calculator className="mr-2 h-5 w-5" />
            {isCalculating ? 'Se calculează...' : 'Calculează Pensia'}
          </Button>
        </form>
      </Form>

      {result && (
        <Card className="bg-brand-green bg-opacity-10 border-brand-green border-opacity-20">
          <CardContent className="p-6">
            <h4 className="font-semibold text-brand-green mb-2">Rezultatul calculului:</h4>
            <p className="text-3xl font-bold text-brand-green mb-2">
              {result.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
            </p>
            <p className="text-sm text-gray-700">
              *Estimare bazată pe legislația actuală (Legea 263/2010)
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-700">Punctaj estimat:</span>
                <p className="font-semibold">{((form.getValues('contributionYears') + yearsToRetirement) * 2).toFixed(1)} puncte</p>
              </div>
              <div>
                <span className="text-gray-700">Valoare punct 2024:</span>
                <p className="font-semibold">81,8 RON</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
