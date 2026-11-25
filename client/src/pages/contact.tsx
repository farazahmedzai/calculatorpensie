import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/contact/"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjText = encodeURIComponent(`[CalculatorPensie] ${subject || "Întrebare"} - ${name}`);
    const bodyText = encodeURIComponent(
      `Nume: ${name}\nEmail expeditor: ${email}\nSubiect: ${subject}\n\nMesaj:\n${message}`
    );
    const mailtoUrl = `mailto:contact@calculatorpensie.com?subject=${subjText}&body=${bodyText}`;
    setPreparedMailto(mailtoUrl);
    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="webpage"
        schemaName={PAGE_META.schemaName}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactează-ne</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ai întrebări despre calculatoarele noastre sau sugestii de îmbunătățire? Scrie-ne direct pe email sau completează formularul de mai jos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pregătește un mesaj</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                    <Label htmlFor="email">Adresa ta de email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ex: nume@email.ro"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subiect</Label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selectează subiectul" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Problemă calculator">Problemă cu calculatorul</SelectItem>
                        <SelectItem value="Întrebare formule">Întrebare despre calcule</SelectItem>
                        <SelectItem value="Actualizare legislativă">Actualizare legislativă</SelectItem>
                        <SelectItem value="Sugestie">Sugestie sau colaborare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mesajul tău</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descrie întrebarea sau observația ta..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Deschide Aplicația de Email cu Mesajul
                  </Button>

                  {preparedMailto && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900">
                      Dacă aplicația de email nu s-a deschis automat, trimite mesajul folosind{" "}
                      <a href={preparedMailto} className="underline font-semibold">
                        acest link direct către contact@calculatorpensie.com
                      </a>
                      .
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Oficial</h3>
                    <p className="text-gray-600 text-sm mb-2">Pentru sesizări tehnice și întrebări generale:</p>
                    <a href="mailto:contact@calculatorpensie.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                      contact@calculatorpensie.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Timp de Răspuns</h3>
                    <p className="text-gray-600 text-sm">Răspundem de obicei în 24–48 de ore lucrătoare.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Notă Importantă YMYL</h3>
                    <p className="text-gray-600 text-sm">
                      CalculatorPensie.com nu este o instituție publică. Pentru decizii oficiale privind dosarul tău de pensie, adresează-te Casei Teritoriale de Pensii (cnpp.ro).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Shield className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Linkuri Utile</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm">
                      <Link href="/faq/" className="text-blue-600 underline">Vezi FAQ</Link>
                      <Link href="/metodologie/" className="text-blue-600 underline">Metodologie</Link>
                      <Link href="/privacy/" className="text-blue-600 underline">Confidențialitate</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
