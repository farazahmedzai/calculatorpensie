import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Calculator, Users, Gavel, TrendingUp, Shield, FileText } from "lucide-react";

export default function FAQ() {
  // Schema.org structured data for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "La ce vârstă mă pot pensiona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vârsta de pensionare depinde de sex și stagiul de cotizare. Bărbații se pot pensiona la 65 de ani cu minimum 35 de ani stagiu de cotizare, iar femeile la 63 de ani cu minimum 30 de ani stagiu. Pentru pensionarea anticipată, bărbații pot ieși la pensie de la 62 de ani, iar femeile de la 60 de ani, dar cu penalizări de 0,25% pe lună pentru fiecare lună de anticipare."
        }
      },
      {
        "@type": "Question", 
        "name": "Care este valoarea punctului de pensie în 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Începând cu 1 ianuarie 2024, valoarea punctului de pensie este de 2.031 lei, conform Legii nr. 263/2010 privind sistemul unitar de pensii publice, cu modificările și completările ulterioare."
        }
      },
      {
        "@type": "Question",
        "name": "Cum se calculează pensia de stat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pensia de stat se calculează folosind formula: Punctajul mediu anual × Stagiul de cotizare (ani) × Valoarea punctului de pensie (2.031 lei în 2024). Punctajul mediu anual rezultă din raportul dintre salariul brut lunar și salariul mediu brut pe economie din perioada de contribuție."
        }
      },
      {
        "@type": "Question",
        "name": "Ce este pensia anticipată și cum funcționează?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pensia anticipată permite ieșirea la pensie cu până la 3 ani mai devreme față de vârsta standard, dar cu o penalizare de 0,25% pe lună pentru fiecare lună de anticipare. Bărbații pot ieși la pensie anticipată de la 62 de ani, iar femeile de la 60 de ani, cu condiția să aibă minimum 15 ani stagiu de cotizare."
        }
      },
      {
        "@type": "Question",
        "name": "Ce avantaje oferă Pilonul III?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pilonul III oferă deducere fiscală anuală de până la 400 de euro, impozitare redusă de 10% asupra contribuțiilor, și posibilitatea retragerii fără impozitare după vârsta de 60 de ani și minimum 5 ani de la prima contribuție. Este o pensie facultativă care completează pensia de stat."
        }
      },
      {
        "@type": "Question",
        "name": "Cum afectează condițiile speciale de muncă vârsta de pensionare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Condițiile speciale de muncă (I și II) și condițiile deosebite de muncă reduc vârsta de pensionare cu 1-7 ani, în funcție de categoria de muncă și perioada lucrată în aceste condiții. Pentru fiecare an lucrat în condiții speciale, vârsta de pensionare se reduce proporțional."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SEO Meta Tags */}
      <title>Întrebări Frecvente - Calculator Pensie România | FAQ Pensii</title>
      <meta 
        name="description" 
        content="Răspunsuri la întrebările frecvente despre pensii în România. Află la ce vârstă te poți pensiona, cum se calculează pensia și care sunt avantajele Pilonului III." 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Întrebări Frecvente despre Pensii
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Găsește răspunsuri clare la cele mai importante întrebări despre sistemul de pensii din România
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            
            {/* Question 1 - Most Important for SEO */}
            <AccordionItem value="retirement-age" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">La ce vârstă mă pot pensiona?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Vârsta de pensionare depinde de <strong>sex</strong> și <strong>stagiul de cotizare</strong>:
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">Vârsta Standard de Pensionare (2024)</h4>
                    <ul className="space-y-2">
                      <li><strong>Bărbați:</strong> 65 ani cu minimum 35 ani stagiu de cotizare</li>
                      <li><strong>Femei:</strong> 63 ani cu minimum 30 ani stagiu de cotizare</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-900">Pensionare Anticipată</h4>
                    <ul className="space-y-2">
                      <li><strong>Bărbați:</strong> de la 62 ani (cu penalizare 0,25%/lună)</li>
                      <li><strong>Femei:</strong> de la 60 ani (cu penalizare 0,25%/lună)</li>
                      <li><strong>Condiție:</strong> minimum 15 ani stagiu de cotizare</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-900">Condiții Speciale de Muncă</h4>
                    <p>Condițiile speciale și deosebite de muncă pot reduce vârsta de pensionare cu 1-7 ani, în funcție de categoria și perioada lucrată.</p>
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.location.href = '/calculator'}
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculează Data Ta de Pensionare
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 2 */}
            <AccordionItem value="pension-point-value" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">Care este valoarea punctului de pensie în 2025?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Începând cu <strong>1 ianuarie 2024</strong>, valoarea punctului de pensie este de <strong className="text-green-600 text-xl">2.031 lei</strong>.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-900">Detalii Importante</h4>
                    <ul className="space-y-2">
                      <li>• Stabilită conform Legii nr. 263/2010</li>
                      <li>• Se actualizează anual prin Hotărâre de Guvern</li>
                      <li>• Folosită pentru calculul tuturor pensiilor de stat</li>
                      <li>• Aplicabilă pentru toate categoriile de pensionari</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">Evoluția Valorii Punctului</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>2023: 1.785 lei</div>
                      <div>2024: 2.031 lei</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Creștere de 13,8% față de anul anterior</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 3 */}
            <AccordionItem value="pension-calculation" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">Cum se calculează pensia de stat?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-purple-900">Formula Oficială de Calcul</h4>
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="text-lg font-mono">
                        <strong>Pensia = Punctajul Mediu Anual × Stagiul de Cotizare × 2.031 lei</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-900">Punctajul Mediu Anual</h5>
                      <p className="text-sm">Se calculează ca raportul dintre salariul brut lunar și salariul mediu brut pe economie din fiecare an de contribuție.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-900">Stagiul de Cotizare</h5>
                      <p className="text-sm">Numărul total de ani în care ai plătit contribuții la sistemul public de pensii.</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Exemplu de Calcul</h5>
                    <div className="text-sm space-y-1">
                      <div>• Punctaj mediu anual: 1,2</div>
                      <div>• Stagiul de cotizare: 35 de ani</div>
                      <div>• Pensia = 1,2 × 35 × 2.031 = <strong className="text-green-600">8.530 lei/lună</strong></div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 4 */}
            <AccordionItem value="early-retirement" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">Ce este pensia anticipată și cum funcționează?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Pensia anticipată permite <strong>ieșirea la pensie cu până la 3 ani mai devreme</strong> față de vârsta standard, dar cu penalizări.
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-900">Condiții de Acordare</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Bărbați:</strong> de la 62 ani (în loc de 65)</li>
                      <li>• <strong>Femei:</strong> de la 60 ani (în loc de 63)</li>
                      <li>• <strong>Stagiu minim:</strong> 15 ani de cotizare</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-900">Penalizarea</h4>
                    <ul className="space-y-2">
                      <li>• <strong>0,25% pe lună</strong> pentru fiecare lună de anticipare</li>
                      <li>• <strong>3% pe an</strong> pentru fiecare an de anticipare</li>
                      <li>• Penalizarea este <strong>permanentă</strong></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Exemplu de Penalizare</h5>
                    <div className="text-sm space-y-1">
                      <div>• Pensia calculată: 3.000 lei</div>
                      <div>• Anticipare: 2 ani (24 luni)</div>
                      <div>• Penalizare: 24 × 0,25% = 6%</div>
                      <div>• Pensia finală: 3.000 - 6% = <strong className="text-red-600">2.820 lei/lună</strong></div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700"
                      onClick={() => window.location.href = '/calculator?type=early'}
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculează Pensia Anticipată
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 5 */}
            <AccordionItem value="pillar-iii-benefits" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 text-indigo-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">Ce avantaje oferă Pilonul III?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Pilonul III este o <strong>pensie facultativă</strong> cu multiple avantaje fiscale și de flexibilitate.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-900">Avantaje Fiscale</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Deducere anuală până la <strong>400 €</strong></li>
                        <li>• Impozitare redusă <strong>10%</strong> pe contribuții</li>
                        <li>• Retragere fără impozitare după 60 ani + 5 ani</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-900">Flexibilitate</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Contribuții variabile în timp</li>
                        <li>• Posibilitate de suspendare</li>
                        <li>• Alegerea administratorului</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-indigo-900">Randament și Risc</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Randamente istorice: 4-8% anual</li>
                      <li>• Diversificare prin fonduri de investiții</li>
                      <li>• Risc controlat prin reglementări ASF</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Exemplu de Economie</h5>
                    <div className="text-sm space-y-1">
                      <div>• Contribuție anuală: 2.000 lei (≈400€)</div>
                      <div>• Deducere fiscală: 25% din 2.000 = 500 lei</div>
                      <div>• Cost real: 2.000 - 500 = <strong className="text-green-600">1.500 lei</strong></div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => window.location.href = '/calculator?type=pillar3'}
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculează Contribuții Pilon III
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Question 6 */}
            <AccordionItem value="special-work-conditions" className="border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 text-red-600 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Gavel className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold">Cum afectează condițiile speciale de muncă vârsta de pensionare?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Condițiile speciale și deosebite de muncă <strong>reduc vârsta de pensionare</strong> în funcție de categoria și perioada lucrată.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-900">Condiții Deosebite</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Reducere: <strong>1-3 ani</strong></li>
                        <li>• Munca în subteran</li>
                        <li>• Temperaturi extreme</li>
                        <li>• Zgomot puternic</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-900">Condiții Speciale</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Reducere: <strong>4-7 ani</strong></li>
                        <li>• Radiații ionizante</li>
                        <li>• Substanțe toxice</li>
                        <li>• Riscuri pentru sănătate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">Categorii Profesionale</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Mineri</div>
                      <div>• Metalurgiști</div>
                      <div>• Radiologi</div>
                      <div>• Piloți</div>
                      <div>• Controlori trafic aerian</div>
                      <div>• Personal medical din oncologie</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Exemplu de Calcul</h5>
                    <div className="text-sm space-y-1">
                      <div>• Bărbat, 65 ani vârsta standard</div>
                      <div>• 10 ani în condiții speciale Categoria I</div>
                      <div>• Reducere: 5 ani</div>
                      <div>• Vârsta de pensionare: <strong className="text-green-600">60 ani</strong></div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ai Încă Întrebări?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Folosește calculatoarele noastre pentru a obține răspunsuri personalizate
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Calculator Principal</h3>
                <p className="text-sm text-gray-600 mb-4">Calculează pensia de stat</p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/calculator'}
                >
                  Calculează
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pensie Anticipată</h3>
                <p className="text-sm text-gray-600 mb-4">Verifică penalizările</p>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => window.location.href = '/calculator?type=early'}
                >
                  Calculează
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pilon III</h3>
                <p className="text-sm text-gray-600 mb-4">Optimizează contribuțiile</p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.location.href = '/calculator?type=pillar3'}
                >
                  Calculează
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Nu ai găsit răspunsul?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = '/contact'}
              >
                <FileText className="h-4 w-4 mr-2" />
                Contactează-ne
              </Button>
              <Button 
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={() => window.location.href = '/blog'}
              >
                Citește Ghidurile Noastre
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}