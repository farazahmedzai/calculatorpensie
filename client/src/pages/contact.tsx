import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă vom răspunde în cel mai scurt timp posibil.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600">
            Suntem aici să te ajutăm cu întrebările despre calculul pensiei și planificarea financiară pentru pensionare.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Trimite-ne un Mesaj
              </h2>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nume Complet</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Numele tău"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@exemplu.ro"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subiect</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Subiectul mesajului"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Descrie întrebarea sau sugestia ta..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Cum Te Putem Ajuta
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <HelpCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Întrebări despre Calculator</h3>
                        <p className="text-gray-600">
                          Dacă ai întrebări despre cum funcționează calculatorul nostru de pensie sau despre interpretarea rezultatelor.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Sugestii și Feedback</h3>
                        <p className="text-gray-600">
                          Ne interesează părerea ta! Trimite-ne sugestii pentru îmbunătățirea site-ului sau a calculatorului.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Colaborări și Parteneriate</h3>
                        <p className="text-gray-600">
                          Interesez colaborări cu consultanți financiari, firme de contabilitate sau instituții financiare.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Contact Direct</h3>
                        <p className="text-gray-600 mb-3">
                          Pentru întrebări urgente sau specifice, ne poți contacta direct:
                        </p>
                        <p className="text-blue-600 font-medium">
                          contact@calculatorpensie.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Timp de Răspuns
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Încercăm să răspundem la toate mesajele în maximum 24 de ore în zilele lucrătoare.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800">
              <strong>Notă:</strong> Pentru întrebări oficiale despre pensie, vă recomandăm să contactați direct Casa Națională de Pensii Publice (CNPP) 
              la numărul de telefon 021.301.03.00 sau să vizitați o casă teritorială de pensii.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}