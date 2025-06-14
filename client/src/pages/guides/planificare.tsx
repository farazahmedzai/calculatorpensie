import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, ArrowRight, Calculator, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";

export default function PlanificarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <MapPin className="h-8 w-8 mr-3" />
            <h1 className="text-4xl font-bold">Ghid Complet pentru Planificarea Pensiei în România</h1>
          </div>
          <p className="text-xl text-blue-100 mb-8">
            Descoperă strategiile esențiale pentru o pensie liniștită și învață să eviți greșelile 
            costisitoare în planificarea viitorului tău financiar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/calculator">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-50">
                <Calculator className="mr-2 h-5 w-5" />
                Calculează Pensia
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <BookOpen className="mr-2 h-5 w-5" />
              Descarcă Ghidul PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <h2>De ce este Crucială Planificarea Pensiei?</h2>
            <p>
              Planificarea pensiei nu este doar despre economisirea de bani - este despre asigurarea 
              unui trai decent și independent la bătrânețe. În România, sistemul public de pensii 
              oferă doar o protecție de bază, iar pentru a menține nivelul de trai dorit, 
              este esențial să planifici suplimentar.
            </p>

            <h2>Pilonii Sistemului de Pensii din România</h2>
            
            <h3>1. Pilonul I - Sistemul Public</h3>
            <p>
              Sistemul public de pensii (Pilonul I) este obligatoriu pentru toți salariații și 
              funcționează pe principiul solidarității între generații. Contribuția este de 25% 
              din salariul brut, plătită integral de angajator.
            </p>

            <h3>2. Pilonul II - Pensiile Private Obligatorii</h3>
            <p>
              Pentru cei născuți după 1 ianuarie 1977, participarea la Pilonul II este obligatorie. 
              Contribuția este de 3,75% din salariul brut și este administrată de fonduri de pensii private.
            </p>

            <h3>3. Pilonul III - Pensiile Private Facultative</h3>
            <p>
              Pilonul III permite economisirea voluntară pentru pensie cu avantaje fiscale. 
              Poți deduce fiscal până la 400 EUR pe an din contribuțiile la acest pilon.
            </p>
          </div>

          {/* Related Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-brand-red mr-2" />
                  <CardTitle className="text-lg">Top 5 Greșeli de Evitat</CardTitle>
                </div>
                <CardDescription>
                  Descoperă cele mai comune greșeli în planificarea pensiei și cum să le eviți
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Multe persoane fac aceleași greșeli costisitoare când vine vorba de planificarea pensiei. 
                  Află care sunt acestea și cum să le eviți pentru un viitor financiar sigur.
                </p>
                <Link href="/blog/top-5-greseli-planificare-pensie">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-brand-green mr-2" />
                  <CardTitle className="text-lg">Pilonul II vs. Pilonul III</CardTitle>
                </div>
                <CardDescription>
                  Ghid complet de decizie pentru optimizarea pensiilor private
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Înțelege diferențele între cei doi piloni de pensii private și cum să îți optimizezi 
                  strategia pentru randamente maxime pe termen lung.
                </p>
                <Link href="/blog/pilonul-ii-vs-pilonul-iii">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-brand-blue mr-2" />
                  <CardTitle className="text-lg">Strategii de Investiții</CardTitle>
                </div>
                <CardDescription>
                  Cum să investești pentru o pensie liniștită și sigură
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Strategiile de investiții pe termen lung specifice pentru constituirea unui fond de pensie 
                  suplimentar prin instrumente financiare diversificate.
                </p>
                <Link href="/blog/strategii-investitii-pensie">
                  <Button variant="outline" className="w-full">
                    Citește Articolul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Calculator className="h-5 w-5 text-brand-green mr-2" />
                  <CardTitle className="text-lg">Calculator Contribuții</CardTitle>
                </div>
                <CardDescription>
                  Optimizează contribuțiile la Pilonul III pentru avantaje fiscale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Folosește calculatorul nostru specializat pentru a determina contribuția optimă 
                  la Pilonul III și economia fiscală rezultată.
                </p>
                <Link href="/calculator?type=pillar3">
                  <Button className="w-full bg-brand-green hover:bg-green-700">
                    Deschide Calculatorul <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Pași Concreți pentru Planificarea Pensiei</h2>
            
            <h3>1. Evaluează Situația Financiară Actuală</h3>
            <p>
              Începe prin a calcula pensia estimată din sistemul public folosind 
              <Link href="/calculator"> calculatorul nostru de pensie</Link>. 
              Compară această sumă cu cheltuielile estimate pentru perioada de pensionare.
            </p>

            <h3>2. Stabilește Obiective Clare</h3>
            <p>
              Determină ce procent din venitul actual vrei să îl menții la pensie. 
              Experții recomandă între 70-80% din venitul din perioada activă.
            </p>

            <h3>3. Diversifică Sursele de Venit</h3>
            <p>
              Nu te baza doar pe sistemul public. Combină Pilonul II și III cu alte 
              instrumente de economisire și investiții pe termen lung.
            </p>

            <h3>4. Începe Cât Mai Devreme</h3>
            <p>
              Puterea dobânzii compuse este extraordinară pe termen lung. 
              Cu cât începi mai devreme să economisești, cu atât mai puțin va trebui 
              să contribui lunar pentru a atinge obiectivele.
            </p>

            <h3>5. Revizuiește și Ajustează Periodic</h3>
            <p>
              Situația financiară și legislația se schimbă. Revizuiește strategia 
              de planificare a pensiei cel puțin o dată pe an.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-neutral-light rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Începe să îți Planifici Pensia Astăzi</h3>
            <p className="text-gray-700 mb-6">
              Folosește instrumentele noastre gratuite pentru a îți calcula pensia și 
              a dezvolta o strategie personalizată de planificare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculează Pensia
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Citește Mai Multe Ghiduri
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
