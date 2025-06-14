import MetaTags from "@/components/seo/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă vom răspunde în cel mult 24 de ore.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="bg-white">
      <MetaTags 
        title="Contact - CalculatorPensie.com | Întrebări și Suport"
        description="Contactează echipa CalculatorPensie.com pentru întrebări despre calculatoarele de pensie, sugestii de îmbunătățire sau suport tehnic. Răspundem în 24 ore."
        canonical="https://calculatorpensie.com/contact"
        keywords="contact calculatorpensie, suport pensii romania, intrebari calculator pensie"
      />
      
      <BreadcrumbNavigation />
      
      <WebPageSchema 
        name="Contact - CalculatorPensie.com"
        description="Contactează echipa noastră pentru suport și întrebări despre calculatoarele de pensie"
        url="https://calculatorpensie.com/contact"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Contact" }
        ]}
      />
      
      <LocalBusinessSchema 
        name="CalculatorPensie.com"
        description="Servicii de calcul pensie și consultanță financiară pentru pensionare"
        url="https://calculatorpensie.com"
        telephone="+40-XXX-XXX-XXX"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ai întrebări despre calculatoarele de pensie sau sugestii de îmbunătățire? Echipa noastră este aici să te ajute.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nume complet</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ex: Ion Popescu"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Adresa de email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ex: ion.popescu@email.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subiectul mesajului</Label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selectează subiectul" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="calculator-issue">Problemă cu calculatorul</SelectItem>
                        <SelectItem value="calculation-question">Întrebare despre calcule</SelectItem>
                        <SelectItem value="feature-request">Sugestie de funcționalitate</SelectItem>
                        <SelectItem value="legislation-update">Actualizare legislativă</SelectItem>
                        <SelectItem value="partnership">Colaborare/Parteneriat</SelectItem>
                        <SelectItem value="other">Altele</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mesajul tău</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descrie în detaliu întrebarea sau sugestia ta..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email de contact
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Pentru întrebări generale și suport tehnic:
                      </p>
                      <a 
                        href="mailto:contact@calculatorpensie.com" 
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        contact@calculatorpensie.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Timp de răspuns
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Ne angajăm să răspundem la toate mesajele în:
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="text-green-700">• Întrebări urgente: 24 ore</p>
                        <p className="text-blue-700">• Întrebări generale: 48 ore</p>
                        <p className="text-purple-700">• Sugestii: 72 ore</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Tipuri de solicitări
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Putem să te ajutăm cu:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Probleme tehnice cu calculatoarele</li>
                        <li>• Întrebări despre formulele de calcul</li>
                        <li>• Sugestii pentru îmbunătățiri</li>
                        <li>• Raportarea erorilor</li>
                        <li>• Actualizări legislative</li>
                        <li>• Propuneri de colaborare</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Confidențialitatea datelor
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Informațiile pe care ni le transmiți sunt tratate confidențial și nu sunt partajate cu terți. 
                        Le folosim exclusiv pentru a răspunde la solicitarea ta.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Înainte să ne contactezi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Consultă FAQ-ul nostru
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Multe întrebări comune au deja răspunsuri detaliate în secțiunea FAQ de pe homepage.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/#faq">Vezi FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Verifică metodologia
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Pentru întrebări despre formulele de calcul, consultă pagina de metodologie.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/metodologie">Vezi Metodologia</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Commitment */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Angajamentul nostru față de tine
          </h3>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Fiecare mesaj este citit personal de echipa noastră. Răspundem prompt și oferim soluții concrete 
            pentru a îmbunătăți experiența ta cu CalculatorPensie.com.
          </p>
        </div>
      </section>
    </div>
  );
}