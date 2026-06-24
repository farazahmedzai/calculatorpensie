import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Calculator, Users, Gavel, TrendingUp, Shield, FileText } from "lucide-react";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { FAQPageSchema, WebPageSchema } from "@/components/seo/StructuredData";

export default function FAQ() {
  // Schema.org structured data for rich snippets under Law 360/2023
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "La ce vârstă mă pot pensiona în România?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conform Legii nr. 360/2023, vârsta standard de pensionare este de 65 de ani pentru bărbați și femei. Pentru bărbați vârsta este deja activă, iar pentru femei crește gradual de la 63 de ani spre 65 de ani până în anul 2035. Stagiul complet de cotizare contributiv este de 35 de ani, iar cel minim de 15 ani."
        }
      },
      {
        "@type": "Question", 
        "name": "Care este valoarea punctului de referință (VPR) în 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "În anul 2025, Valoarea Punctului de Referință (VPR) este stabilită oficial la 91 Lei, crescută de la 81 Lei în 2024. Punctul de pensie general este menținut la valoarea de 2.031 Lei."
        }
      },
      {
        "@type": "Question",
        "name": "Cum se calculează pensia de stat conform noii legi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formula de calcul conform Legii nr. 360/2023 este: Pensia Brută = Număr Total de Puncte × VPR (91 Lei în 2025). Numărul total de puncte reprezintă suma dintre punctele de contributivitate, punctele de stabilitate (bonusul pentru stagiul peste 25 de ani) și punctele asimilate (studii, armată)."
        }
      },
      {
        "@type": "Question",
        "name": "Ce este pensia anticipată și ce penalizări se aplică?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pensia anticipată se poate solicita cu maximum 5 ani înainte de împlinirea vârstei standard, cu condiția realizării stagiului complet de cotizare (35 de ani). Penalizarea aplicată sub Legea 360/2023 este diminuată și variază între 0,15% și 0,40% pe lună de anticipare (în funcție de stagiul suplimentar realizat), spre deosebire de cota veche de 0,75%."
        }
      },
      {
        "@type": "Question",
        "name": "Ce avantaje oferă Pilonul III de pensie privată facultativă?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pilonul III oferă posibilitatea acumulării de capital suplimentar pentru bătrânețe, având ca principal beneficiu deductibilitatea fiscală a contribuțiilor în limită de 400 de Euro pe an atât pentru angajat, cât și pentru angajator."
        }
      },
      {
        "@type": "Question",
        "name": "Cum se acordă punctele de stabilitate conform noii legi a pensiilor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Punctele de stabilitate se acordă ca bonus pentru anii de muncă ce depășesc stagiul de 25 de ani: +0,50 puncte/an pentru anii 26-30; +0,75 puncte/an pentru anii 31-35; +1,00 punct/an pentru anii ce depășesc 35 de ani de activitate."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Întrebări Frecvente - Calculator Pensie România | FAQ Pensii 2025"
        description="Răspunsuri la întrebările frecvente despre pensii în România. Află la ce vârstă te poți pensiona, cum se calculează pensia și care sunt avantajele Pilonului III."
        canonical="https://calculatorpensie.com/faq"
        keywords="intrebari frecvente pensii, FAQ pensii romania, varsta pensionare, legea 360/2023, vpr 2025, puncte de stabilitate"
      />
      
      <FAQPageSchema questions={faqSchema.mainEntity.map(q => ({
        question: q.name,
        answer: q.acceptedAnswer.text
      }))} />
      
      <WebPageSchema 
        name="Întrebări Frecvente tentang Pensii în România"
        description="Ghid complet cu răspunsuri la cele mai frecvente întrebări despre sistemul de pensii din România conform Legii 360/2023"
        url="https://calculatorpensie.com/faq"
        breadcrumbs={[
          { name: "Acasă", url: "https://calculatorpensie.com" },
          { name: "Întrebări Frecvente" }
        ]}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

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
            Găsește răspunsuri clare la cele mai importante întrebări despre sistemul de pensii din România conform reformelor recente
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
                    Vârsta de pensionare în România este stabilită unitar la <strong>65 de ani</strong>, însă aplicarea se face gradual pentru femei:
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-900">Vârsta Standard de Pensionare</h4>
                    <ul className="space-y-2">
                      <li><strong>Bărbați:</strong> 65 de ani (deja în vigoare) cu minimum 15 ani stagiu minim de cotizare, respectiv 35 de ani stagiu complet.</li>
                      <li><strong>Femei:</strong> Crește gradual de la 63 de ani spre 65 de ani până în 2035. Stagiul minim este de 15 ani, iar cel complet de 35 de ani.</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-900">Pensionare Anticipată</h4>
                    <p className="text-sm">
                      Se poate solicita cu maximum 5 ani înainte de împlinirea vârstei standard (de exemplu, de la 60 de ani), dar <strong>doar dacă s-a realizat stagiul complet de cotizare de 35 de ani</strong>. Reducerile se aplică permanent sub formă de penalizări lunare reduse.
                    </p>
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
                  <span className="text-lg font-semibold">Care este valoarea punctului de referință (VPR) în 2025?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Începând cu <strong>1 ianuarie 2025</strong>, Valoarea Punctului de Referință (VPR) este de <strong className="text-green-600 text-xl">91 Lei</strong>.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-900">Evoluție și Detalii</h4>
                    <ul className="space-y-2">
                      <li>• Introdus prin Legea nr. 360/2023 pentru recalcularea pensiilor.</li>
                      <li>• A crescut de la 81 Lei (în septembrie 2024) la 91 Lei în 2025 prin indexare automată legală.</li>
                      <li>• Punctul de pensie clasic este menținut ca valoare de bază la 2.031 Lei.</li>
                    </ul>
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
                    <h4 className="font-semibold mb-3 text-purple-900">Noua Formulă de Calcul (Legea 360/2023)</h4>
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="text-lg font-mono">
                        <strong>Pensia Brută = Număr Total Puncte × VPR (91 Lei)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-900">1. Puncte Contributivitate</h5>
                      <p className="text-xs">Se calculează prin raportarea salariului tău brut lunar la cel mediu brut național din fiecare lună de muncă active.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-900">2. Puncte Stabilitate</h5>
                      <p className="text-xs">Bonus oferit pentru anii de muncă ce depășesc 25 de ani (+0.5p/an între 26-30 ani; +0.75p/an între 31-35 ani; +1.0p/an peste 35 ani).</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-900">3. Puncte Asimilate</h5>
                      <p className="text-xs">Se adaugă câte 0.25 puncte pe an pentru perioadele de facultate la zi, stagiu militar sau concediu de creștere a copilului.</p>
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
                    Pensia anticipată permite retragerea din activitate cu până la 5 ani înainte de vârsta standard de pensionare (65 de ani), cu următoarele reguli conform noii legi:
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-900">Condiții Obligatorii de Cotizare</h4>
                    <p className="text-sm">
                      Trebuie să fi realizat integral <strong>stagiul complet de cotizare contributiv de 35 de ani</strong>. Perioadele necontributive (facultatea, armata) nu se iau în considerare pentru atingerea acestui prag minim de acces.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-900">Grila de Penalizare Progresivă</h4>
                    <p className="text-sm">
                      Penalizarea se aplică pentru fiecare lună de anticipare și este mult diminuată față de vechea lege (de maximum 0,75% pe lună), variind în funcție de stagiul realizat peste limita de 35 de ani:
                    </p>
                    <ul className="space-y-1 text-xs mt-2 pl-4 list-disc">
                      <li>Depășire sub 1 an: penalizare de <strong>0.40%</strong>/lună.</li>
                      <li>Depășire între 1 și 2 ani: penalizare de <strong>0.35%</strong>/lună.</li>
                      <li>Depășire între 2 și 3 ani: penalizare de <strong>0.30%</strong>/lună.</li>
                      <li>Depășire între 3 și 4 ani: penalizare de <strong>0.25%</strong>/lună.</li>
                      <li>Depășire între 4 și 5 ani: penalizare de <strong>0.20%</strong>/lună.</li>
                      <li>Depășire între 5 și 8 ani: penalizare de <strong>0.15%</strong>/lună.</li>
                    </ul>
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
                    Pilonul III este o <strong>pensie facultativă</strong> administrată privat, extrem de utilă pentru a suplimenta veniturile la bătrânețe.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-900">Avantaje Fiscale</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• Deducere din impozitul pe venit în limita a <strong>400 Euro pe an</strong>.</li>
                        <li>• Aceeași deductibilitate de 400 Euro se oferă și angajatorului pentru contribuția plătită în numele tău.</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-900">Flexibilitate</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• Contribuții flexibile ce pot fi mărite, reduse sau suspendate oricând.</li>
                        <li>• Retragere garantată la împlinirea vârstei de 60 de ani și realizarea a minimum 90 de contribuții lunare.</li>
                      </ul>
                    </div>
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
                    Condițiile deosebite (Grupa II) sau speciale (Grupa I) de muncă <strong>reduc vârsta de pensionare standard</strong> și oferă majorări procentuale ale punctajelor lunare.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-900">Condiții Deosebite</h4>
                      <p className="text-xs">Reducerea vârstei de pensionare cu 4 luni pentru fiecare an lucrat în aceste condiții, plus un spor de punctaj de 25%.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-900">Condiții Speciale</h4>
                      <p className="text-xs">Reducerea vârstei de pensionare cu 6 luni pentru fiecare an lucrat în aceste condiții, plus un spor de punctaj de 50%.</p>
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
                  onClick={() => window.location.href = '/calculator-pensie-anticipata'}
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