import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainCalculator from "@/components/calculators/main-calculator";
import { Calculator, FastForward, PiggyBank, ChartLine, MapPin, ListCheck, Gavel, Clock } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  slug: string;
}

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [calculationResult, setCalculationResult] = useState<number | null>(null);

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ['/api/articles/recent'],
  });

  const handleCalculationComplete = (result: number) => {
    setCalculationResult(result);
    setShowResults(true);
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Calculator Pensie Online: Află Pensia Ta în Câteva Secunde
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Calculează precis pensia ta viitoare cu cel mai avansat calculator de pensie din România. 
                Planifică-ți viitorul financiar cu încredere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToCalculator} size="lg" className="bg-white text-brand-blue hover:bg-gray-50">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculează Acum
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue">
                  Ghiduri Complete
                </Button>
              </div>
            </div>

            {/* Main Calculator Widget */}
            <Card className="bg-white text-neutral-dark shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Calculator Pensie Rapid</h3>
                <MainCalculator onCalculationComplete={handleCalculationComplete} />
                
                {showResults && calculationResult && (
                  <div className="mt-6 p-4 bg-brand-green bg-opacity-10 rounded-lg border border-brand-green border-opacity-20">
                    <h4 className="font-semibold text-brand-green mb-2">Rezultatul calculului:</h4>
                    <p className="text-2xl font-bold text-brand-green">
                      {calculationResult.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} RON/lună
                    </p>
                    <p className="text-sm text-neutral-medium mt-1">*Estimare bazată pe legislația actuală</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Sigur și Confidențial</h3>
              <p className="text-neutral-medium">Datele tale sunt protejate conform GDPR</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-green text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Actualizat Conform Legii</h3>
              <p className="text-neutral-medium">Formula bazată pe legislația în vigoare</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-red text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">50,000+ Utilizatori</h3>
              <p className="text-neutral-medium">Calculatorul de încredere al românilor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="calculator" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planifică-ți Viitorul: Unelte și Resurse Esențiale</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Utilizează calculatoarele noastre specializate pentru a-ți planifica perfect tranziția la pensie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-brand-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FastForward className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calculator Pensie Anticipată</h3>
                <p className="text-neutral-medium mb-4">
                  Calculează penalizarea pentru pensionarea anticipată și află dacă îți convine această opțiune.
                </p>
                <Link href="/calculator?type=early">
                  <Button className="w-full bg-brand-blue hover:bg-blue-700">
                    Calculează Acum
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-brand-green text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calculator Contribuții Pilon III</h3>
                <p className="text-neutral-medium mb-4">
                  Optimizează contribuțiile la pilonul III pentru a-ți maximiza economia fiscală.
                </p>
                <Link href="/calculator?type=pillar3">
                  <Button className="w-full bg-brand-green hover:bg-green-700">
                    Calculează Acum
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-brand-red text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <ChartLine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simulator Planificare Pensie</h3>
                <p className="text-neutral-medium mb-4">
                  Vizualizează diferite scenarii și strategii pentru planificarea pensiei tale.
                </p>
                <Link href="/calculator?type=planning">
                  <Button className="w-full bg-brand-red hover:bg-red-700">
                    Simulează Acum
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Învață Totul Despre Sistemul de Pensii din România</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Ghidurile noastre complete te ajută să înțelegi și să navighezi cu succes sistemul de pensii românesc
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Silo 1: Planificarea Pensiei */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Financial planning workspace" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-blue text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Planificarea Pensiei</h3>
                <p className="text-neutral-medium mb-4">
                  Ghid complet pentru planificarea pensiei în România, strategii de investiții și evitarea greșelilor comune.
                </p>
                
                <div className="space-y-2 mb-6">
                  <Link href="/blog/top-5-greseli-planificare-pensie">
                    <a className="block text-brand-blue hover:underline text-sm">
                      → Top 5 Greșeli de Evitat în Planificarea Pensiei
                    </a>
                  </Link>
                  <Link href="/blog/pilonul-ii-vs-pilonul-iii">
                    <a className="block text-brand-blue hover:underline text-sm">
                      → Pilonul II vs. Pilonul III: Ghid de Decizie
                    </a>
                  </Link>
                  <Link href="/blog/strategii-investitii-pensie">
                    <a className="block text-brand-blue hover:underline text-sm">
                      → Strategii de Investiții pentru o Pensie Liniștită
                    </a>
                  </Link>
                </div>
                
                <Link href="/planificare">
                  <Button className="w-full bg-brand-blue hover:bg-blue-700">
                    Vezi Ghidul Complet
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silo 2: Tipuri de Pensii */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Senior couple planning retirement" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-green text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <ListCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tipuri de Pensii</h3>
                <p className="text-neutral-medium mb-4">
                  Ghid exhaustiv despre toate tipurile de pensii disponibile în sistemul public din România.
                </p>
                
                <div className="space-y-2 mb-6">
                  <Link href="/blog/pensie-limita-varsta">
                    <a className="block text-brand-green hover:underline text-sm">
                      → Totul despre Pensia pentru Limită de Vârstă
                    </a>
                  </Link>
                  <Link href="/blog/pensie-anticipata-partiala">
                    <a className="block text-brand-green hover:underline text-sm">
                      → Ghid Detaliat: Pensia Anticipată Parțială
                    </a>
                  </Link>
                  <Link href="/blog/pensie-urmas">
                    <a className="block text-brand-green hover:underline text-sm">
                      → Pensia de Urmaș: Condiții de Acordare și Calcul
                    </a>
                  </Link>
                </div>
                
                <Link href="/tipuri-pensii">
                  <Button className="w-full bg-brand-green hover:bg-green-700">
                    Vezi Ghidul Complet
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Silo 3: Legislație și Resurse */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                alt="Legal documents and books" 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="bg-brand-red text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Gavel className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legislație și Resurse</h3>
                <p className="text-neutral-medium mb-4">
                  Legea pensiilor pe înțelesul tuturor, cu actualizări legislative și resurse oficiale.
                </p>
                
                <div className="space-y-2 mb-6">
                  <Link href="/blog/varsta-pensionare-romania">
                    <a className="block text-brand-red hover:underline text-sm">
                      → Vârsta Standard de Pensionare în România: Tabel Complet
                    </a>
                  </Link>
                  <Link href="/blog/stagiu-cotizare-calcul">
                    <a className="block text-brand-red hover:underline text-sm">
                      → Cum se Calculează Corect Stagiul de Cotizare?
                    </a>
                  </Link>
                  <Link href="/blog/indexarea-pensiilor">
                    <a className="block text-brand-red hover:underline text-sm">
                      → Indexarea Pensiilor: Mecanism și Impact
                    </a>
                  </Link>
                </div>
                
                <Link href="/legislatie">
                  <Button className="w-full bg-brand-red hover:bg-red-700">
                    Vezi Ghidul Complet
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ultimele Articole de pe Blog</h2>
            <p className="text-xl text-neutral-medium">Rămâi la curent cu toate noutățile din sistemul de pensii</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
                    alt="Article illustration" 
                    className="w-full h-48 object-cover" 
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`text-white text-xs px-3 py-1 rounded-full ${
                        article.category === 'planificare' ? 'bg-brand-blue' :
                        article.category === 'tipuri-pensii' ? 'bg-brand-green' : 'bg-brand-red'
                      }`}>
                        {article.category === 'planificare' ? 'Planificare' :
                         article.category === 'tipuri-pensii' ? 'Tipuri Pensii' : 'Legislație'}
                      </span>
                      <span className="text-neutral-medium text-sm ml-3">
                        {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        <a>{article.title}</a>
                      </Link>
                    </h3>
                    <p className="text-neutral-medium mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-medium">
                        <Clock className="inline h-4 w-4 mr-1" />
                        {article.readTime} min citire
                      </span>
                      <Link href={`/blog/${article.slug}`}>
                        <a className="text-brand-blue font-medium hover:underline">
                          Citește mai mult →
                        </a>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-medium text-lg">Nu există articole disponibile momentan.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" variant="outline" className="bg-neutral-dark text-white hover:bg-neutral-700">
                Vezi Toate Articolele →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <svg className="w-16 h-16 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Rămâi la Curent cu Schimbările Legislative</h2>
            <p className="text-xl mb-8 text-blue-100">
              Primește săptămânal în email cele mai importante actualizări despre sistemul de pensii din România
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Adresa ta de email" 
                  className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-brand-red text-white hover:bg-red-700 whitespace-nowrap"
                >
                  Abonează-te
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                🔒 Datele tale sunt protejate. Nu trimitem spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
