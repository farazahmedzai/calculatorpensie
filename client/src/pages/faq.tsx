import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Calculator, Shield, TrendingUp, FileText } from "lucide-react";
import { Link } from "wouter";
import MetaTags from "@/components/seo/MetaTags";
import BreadcrumbNavigation from "@/components/seo/BreadcrumbNavigation";
import { HOMEPAGE_FAQ_DATA } from "@/data/faq-data";
import { ROUTES_META } from "@/data/routes-meta";

const PAGE_META = ROUTES_META["/faq/"];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={PAGE_META.title}
        description={PAGE_META.description}
        canonical={PAGE_META.canonical}
        keywords={PAGE_META.keywords}
        schemaKind="faq"
        schemaName={PAGE_META.schemaName}
        faqQuestions={HOMEPAGE_FAQ_DATA.map((q) => ({ question: q.question, answer: q.answer }))}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNavigation />
      </div>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Întrebări Frecvente despre Pensii în România (2026)
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Răspunsuri clare bazate pe Legea nr. 360/2023, Legea nr. 141/2025 și normele CNPP
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Răspunsuri Rapide privind Legea nr. 360/2023 și Impozitarea 2026
          </h2>
          <Accordion
            type="multiple"
            defaultValue={["retirement-age", "pension-point-value", "pension-taxes-2026"]}
            className="space-y-4"
          >
            {HOMEPAGE_FAQ_DATA.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-base leading-relaxed text-gray-700">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Ghiduri Practice pentru Situații Speciale</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Dacă ai lucrat atât în România, cât și în state UE sau în activități independente, consultă analizele noastre dedicate pentru totalizarea stagiilor și regulile de contribuție aplicabile în 2026.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li>
                <Link href="/blog/transfer-drepturi-pensie-ue/" className="text-blue-700 font-semibold hover:underline">
                  Pensia comunitară și totalizarea anilor lucrați în UE →
                </Link>
              </li>
              <li>
                <Link href="/blog/calculul-pensiei-freelanceri-pfa/" className="text-blue-700 font-semibold hover:underline">
                  Cum se calculează pensia pentru PFA și freelanceri →
                </Link>
              </li>
              <li>
                <Link href="/blog/pensie-minima-garantata-2026/" className="text-blue-700 font-semibold hover:underline">
                  Pensia minimă garantată (1.281 Lei) și condițiile legale →
                </Link>
              </li>
              <li>
                <Link href="/blog/vizualizare-vechime-munca-cnpp/" className="text-blue-700 font-semibold hover:underline">
                  Cum verifici stagiul de cotizare online pe portalul CNPP →
                </Link>
              </li>
              <li>
                <Link href="/despre-noi/" className="text-blue-700 font-semibold hover:underline">
                  Despre politica editorială CalculatorPensie.com →
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-blue-700 font-semibold hover:underline">
                  Termeni de utilizare și limitele estimărilor orientative →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Calculează-ți Situația Concretă</h2>
          <p className="text-xl text-gray-600 mb-8">
            Folosește calculatoarele noastre gratuite pentru estimări personalizate
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Calculator Principal</h3>
                <p className="text-sm text-gray-600 mb-4">Estimează pensia de stat (VPR 81 Lei)</p>
                <Link href="/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Calculează</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pensie Anticipată</h3>
                <p className="text-sm text-gray-600 mb-4">Simulează penalizarea lunară</p>
                <Link href="/calculator-pensie-anticipata/">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Calculează</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pilon III</h3>
                <p className="text-sm text-gray-600 mb-4">Deductibilitate 400 EUR/an</p>
                <Link href="/calculator-pensie-pilon-3/">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Calculează</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Ai nevoie de mai multe detalii?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <FileText className="h-4 w-4 mr-2" />
                  Contactează-ne
                </Button>
              </Link>
              <Link href="/blog/">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Citește Ghidurile Noastre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
