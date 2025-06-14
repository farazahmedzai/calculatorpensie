import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle, Shield } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackNewsletterSignup } from "@/lib/analytics";

const newsletterSchema = z.object({
  email: z.string().email("Adresa de email nu este validă"),
  firstName: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere").optional(),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  compact?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({ 
  compact = false, 
  title = "Primește Actualizări despre Pensii",
  description = "Abonează-te la newsletter pentru cele mai importante noutăți despre sistemul de pensii din România",
  className = ""
}: NewsletterSignupProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  const subscribeToNewsletter = useMutation({
    mutationFn: async (data: NewsletterForm) => {
      return apiRequest('POST', '/api/newsletter/subscribe', {
        email: data.email,
        firstName: data.firstName || null,
        subscriptionDate: new Date().toISOString(),
        isActive: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/newsletter'] });
      setIsSubscribed(true);
      trackNewsletterSignup();
      toast({
        title: "Abonare reușită!",
        description: "Vei primi în curând primul nostru newsletter cu informații utile despre pensii.",
      });
    },
    onError: (error: any) => {
      const message = error?.message || "A apărut o eroare la abonare";
      toast({
        title: "Eroare la abonare",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterForm) => {
    subscribeToNewsletter.mutate(data);
  };

  if (isSubscribed) {
    return (
      <Card className={`${compact ? 'p-4' : 'p-6'} bg-green-50 border-green-200 ${className}`}>
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Abonare Confirmată!</h3>
          <p className="text-green-700">
            Îți mulțumim pentru abonare. Verifică inbox-ul pentru confirmarea abonării.
          </p>
        </div>
      </Card>
    );
  }

  if (compact) {
    return (
      <div className={`bg-blue-600 rounded-lg p-6 text-white ${className}`}>
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 mr-3" />
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-blue-100 text-sm">{description}</p>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Adresa ta de email"
                      {...field}
                      className="bg-white text-gray-900"
                    />
                  </FormControl>
                  <FormMessage className="text-blue-100" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-white text-blue-600 hover:bg-blue-50"
              disabled={subscribeToNewsletter.isPending}
            >
              {subscribeToNewsletter.isPending ? 'Se abonează...' : 'Abonează-te'}
            </Button>
            
            <p className="text-xs text-blue-100 text-center">
              <Shield className="inline h-3 w-3 mr-1" />
              Nu trimitem spam. Îți poți anula abonamentul oricând.
            </p>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Mail className="h-6 w-6 mr-3 text-blue-600" />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Numele tău (opțional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Adresa de email *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={subscribeToNewsletter.isPending}
            >
              <Mail className="mr-2 h-4 w-4" />
              {subscribeToNewsletter.isPending ? 'Se abonează...' : 'Abonează-te la Newsletter'}
            </Button>
            
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2" />
              <span>Respectăm confidențialitatea datelor. Nu trimitem spam.</span>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}