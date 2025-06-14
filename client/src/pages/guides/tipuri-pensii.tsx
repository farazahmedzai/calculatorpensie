import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ListCheck, ArrowRight, Calculator, Clock, Users, Heart, AlertCircle } from "lucide-react";

export default function TipuriPensiiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <ListCheck className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold">Ghid Exhaustiv: Tipuri de Pensii din Sistemul Public din România</h1>
          </div>
          <p className="text-xl text-white mb-8 font-medium">
            Descoperă toate tipurile de pensii disponibile în România, condițiile de acordare 
            și cum să îți calculezi corect drepturile de pensie pentru fiecare categorie.
          </p>
          <Link href="/calculator">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-50">
              <Calculator className="mr-2 h-5 w-5" />
              Calculează Pensia Ta
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Sistemul de Pensii din România - Prezentare Generală</h2>
            <p>
              Sistemul public de pensii din România oferă mai multe tipuri de pensii, 
              fiecare cu condiții specifice de acordare. Înțelegerea acestor diferențe 
              este crucială pentru planificarea corectă a viitorului tău financiar.
            </p>
          </div>

          {/* Types of Pensions */}
          <div className="space-y-8 mb-12">
            
            {/* 1. Pensia pentru Limită de Vârstă */}
            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-brand-blue mr-3" />
                    <CardTitle className="text-xl">1. Pensia pentru Limită de Vârstă: Baza Sistemului</CardTitle>
                  </div>
                  <Badge variant="secondary">Principală</Badge>
                </div>
                <CardDescription>
                  Pensia standard acordată la împlinirea vârstei legale de pensionare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Condiții de Acordare:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Vârsta: 65 ani (bărbați), 63 ani (femei, cu creștere graduală)</li>
                      <li>• Stagiu minim: 15 ani de cotizare</li>
                      <li>• Pentru pensie completă: 35 ani (bărbați), 30 ani (femei)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Calcul Pensie:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Punctaj anual × Valoarea punctului</li>
                      <li>• Valoarea punctului (2024): 81,8 RON</li>
                      <li>• Punctaj maxim/an: 5 puncte</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Pensia pentru limită de vârstă este forma principală de pensie din sistemul public românesc. 
                  Pentru detalii complete despre condițiile de acordare și modalitatea de calcul, 
                  consultă <strong>articolul nostru dedicat despre pensia pentru limită de vârstă</strong>.
                </p>
                <Link href="/blog/pensie-limita-varsta">
                  <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    Citește Ghidul Complet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 2. Pensia Anticipată */}
            <Card className="border-l-4 border-l-brand-red">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle className="h-6 w-6 text-brand-red mr-3" />
                    <CardTitle className="text-xl">2. Pensia Anticipată și Pensia Anticipată Parțială</CardTitle>
                  </div>
                  <Badge variant="destructive">Cu Penalizare</Badge>
                </div>
                <CardDescription>
                  Opțiuni pentru pensionarea înainte de vârsta standard cu reducerea cuvenită
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pensie Anticipată:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cu 5 ani mai devreme decât vârsta standard</li>
                      <li>• Stagiu: 35 ani (bărbați), 30 ani (femei)</li>
                      <li>• Reducere: 0,75% pentru fiecare lună anticipată</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pensie Anticipată Parțială:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cu 2 ani mai devreme</li>
                      <li>• Stagiu: 37 ani (bărbați), 32 ani (femei)</li>
                      <li>• Reducere: 0,75% pentru fiecare lună anticipată</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Dacă vrei să te retragi mai devreme, este important să înțelegi impactul penalizării. 
                  Consultă <strong>ghidul nostru despre calculul și condițiile pensiei anticipate parțiale</strong> 
                  pentru a lua o decizie informată.
                </p>
                <div className="flex gap-4">
                  <Link href="/blog/pensie-anticipata-partiala">
                    <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                      Ghid Pensie Anticipată <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/calculator?type=early">
                    <Button className="bg-brand-red hover:bg-red-700">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculează Penalizarea
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 3. Pensia de Urmaș */}
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-brand-green mr-3" />
                    <CardTitle className="text-xl">3. Pensia de Urmaș: Protecție pentru Familie</CardTitle>
                  </div>
                  <Badge className="bg-brand-green">Protecție Socială</Badge>
                </div>
                <CardDescription>
                  Pensie acordată membrilor familiei în cazul decesului asiguratului sau pensionarului
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Beneficiari:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Soțul/Soția supraviețuitor</li>
                      <li>• Copiii minori sau în întreținere</li>
                      <li>• Părinții în întreținere</li>
                      <li>• Alte persoane în întreținere (condiții speciale)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Condiții:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Decedatul avea drept la pensie sau era pensionar</li>
                      <li>• Minimum 1 an de căsătorie (soț/soție)</li>
                      <li>• Copiii: până la 16 ani (26 ani dacă studiază)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Pensia de urmaș asigură protecție financiară familiei în caz de deces. 
                  Înțelege <strong>cine beneficiază și cum se calculează</strong> citind articolul nostru 
                  dedicat despre pensia de urmaș.
                </p>
                <Link href="/blog/pensie-urmas">
                  <Button variant="outline" className="text-brand-green border-brand-green hover:bg-brand-green hover:text-white">
                    Detalii Complete <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 4. Pensia de Invaliditate */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-xl">4. Pensia de Invaliditate</CardTitle>
                  </div>
                  <Badge className="bg-yellow-500">Grad I, II, III</Badge>
                </div>
                <CardDescription>
                  Pensie acordată persoanelor cu capacitate de muncă diminuată
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Gradul I</h4>
                    <p className="text-sm text-yellow-600">Invaliditate severă</p>
                    <p className="text-xs text-yellow-600 mt-1">100% din pensia de referință</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Gradul II</h4>
                    <p className="text-sm text-orange-600">Invaliditate accentuată</p>
                    <p className="text-xs text-orange-600 mt-1">85% din pensia de referință</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Gradul III</h4>
                    <p className="text-sm text-red-600">Invaliditate mediu</p>
                    <p className="text-xs text-red-600 mt-1">70% din pensia de referință</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Pensia de invaliditate se acordă în funcție de gradul de invaliditate stabilit 
                  de comisia de expertiză medicală. Detalii complete despre 
                  <strong> gradele de invaliditate</strong> găsești în ghidul nostru despre pensia de invaliditate.
                </p>
                <Link href="/blog/pensie-invaliditate">
                  <Button variant="outline" className="text-yellow-600 border-yellow-500 hover:bg-yellow-500 hover:text-white">
                    Ghid Pensie Invaliditate <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>

          {/* Comparison Table */}
          <div className="bg-neutral-light rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Comparație Rapidă - Tipuri de Pensii</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2">Tip Pensie</th>
                    <th className="text-left py-2">Vârsta Minimă</th>
                    <th className="text-left py-2">Stagiu Minim</th>
                    <th className="text-left py-2">Observații</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Limită Vârstă</td>
                    <td className="py-2">65/63 ani</td>
                    <td className="py-2">15 ani</td>
                    <td className="py-2">Standard, fără penalizare</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Anticipată</td>
                    <td className="py-2">60/58 ani</td>
                    <td className="py-2">35/30 ani</td>
                    <td className="py-2">Cu penalizare 0,75%/lună</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Anticipată Parțială</td>
                    <td className="py-2">63/61 ani</td>
                    <td className="py-2">37/32 ani</td>
                    <td className="py-2">Cu penalizare 0,75%/lună</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Urmaș</td>
                    <td className="py-2">Nu se aplică</td>
                    <td className="py-2">Variable</td>
                    <td className="py-2">Pentru beneficiarii legali</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Invaliditate</td>
                    <td className="py-2">Nu se aplică</td>
                    <td className="py-2">Variable</td>
                    <td className="py-2">În funcție de gradul de invaliditate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-brand-green bg-opacity-10 rounded-xl p-8 text-center border border-brand-green border-opacity-20">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Calculează-ți Pensia pentru Orice Tip</h3>
            <p className="text-gray-700 mb-6">
              Folosește calculatoarele noastre specializate pentru a afla exact ce pensie ai avea 
              în funcție de tipul ales și situația ta specifică.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" className="bg-brand-green hover:bg-green-700">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculator Pensie Standard
                </Button>
              </Link>
              <Link href="/calculator?type=early">
                <Button size="lg" variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                  Calculator Pensie Anticipată
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
