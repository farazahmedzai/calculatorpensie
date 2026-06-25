import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FAQPageSchema } from "./seo/StructuredData";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const faqData: FAQItem[] = [
  {
    id: "retirement-age",
    question: "La ce vârstă mă pot pensiona?",
    answer: "Vârsta de pensionare depinde de sex și istoricul de cotizare. În 2025, bărbații se pot pensiona la 65 de ani cu 35 de ani stagiu de cotizare, iar femeile la 63 de ani cu 30 de ani stagiu. Folosește calculatorul nostru pentru data exactă de pensionare bazată pe situația ta specifică."
  },
  {
    id: "early-retirement",
    question: "Cum se calculează pensia anticipată?",
    answer: "Poți solicita pensie anticipată cu maximum 5 ani înainte de vârsta standard, dacă ai realizat stagiul complet de cotizare. Penalizarea lunară conform Legii 360/2023 variază între 0,15% și 0,40%, în funcție de câți ani ai peste stagiul complet."
  },
  {
    id: "pension-point-value", 
    question: "Care este valoarea punctului de referință (VPR) în 2026?",
    answer: "Începând cu 1 ianuarie 2026, VPR este 91 lei, conform legislației oficiale. Această valoare este folosită în calculul pensiei și poate fi actualizată anual prin hotărâre guvernamentală."
  },
  {
    id: "stability-points",
    question: "Ce sunt punctele de stabilitate?",
    answer: "Punctele de stabilitate sunt bonusuri acordate persoanelor cu un stagiu de cotizare mai mare de 25 de ani. Se acordă 0.5 puncte/an pentru anii 26-30, 0.75 puncte/an pentru anii 31-35 și 1 punct/an pentru stagiul de peste 35 de ani."
  },
  {
    id: "increase-pension",
    question: "Pot să-mi măresc pensia?",
    answer: "Da, există mai multe modalități: contribuirea la Pilonul III (pensia facultativă) cu beneficii fiscale, lucrul mai mulți ani pentru a crește stagiul de cotizare, sau continuarea muncii după vârsta standard de pensionare."
  },
  {
    id: "check-contribution-stage",
    question: "Unde pot vedea stagiul meu de cotizare oficial?",
    answer: "Poți verifica stagiul de cotizare exact creând un cont online pe portalul Casei Naționale de Pensii Publice (CNPP.ro) sau vizitând o casă teritorială de pensii cu actul de identitate. Acolo vei găsi istoricul complet al contribuțiilor tale."
  },
  {
    id: "minimum-pension",
    question: "Care este pensia minimă în România în 2026?",
    answer: "Pensia minimă garantată în România pentru 2026 este de 1.281 lei pentru persoanele cu stagiu complet de cotizare. Această sumă se actualizează periodic conform legii și reprezintă minimul garantat de stat pentru pensionarii cu drept deplin."
  },
  {
    id: "pension-calculation-formula",
    question: "Cum se calculează exact pensia de stat?",
    answer: "Pensia brută se calculează conform Legii 360/2023 cu formula: Număr Total de Puncte × Valoarea Punctului de Referință (VPR). Pentru 2026, VPR este 91 lei, iar punctele includ contributivitatea, stabilitatea și perioadele asimilate."
  },
  {
    id: "work-conditions-pension",
    question: "Cum influențează condițiile de muncă pensia?",
    answer: "Condițiile de muncă influențează atât vârsta de pensionare, cât și calculul pensiei. Munca în condiții deosebite permite pensionarea cu 2 ani mai devreme, iar condiții speciale cu 5-7 ani mai devreme, cu bonificații în calculul stagiului."
  },
  {
    id: "pillar3-benefits",
    question: "Ce beneficii are Pilonul III (pensia facultativă)?",
    answer: "Pilonul III oferă deducere fiscală până la 400 EUR anual, randament potențial mai mare decât inflația și flexibilitate în contribuții. Este administrat privat și complementează pensia de stat, fiind ideal pentru cei care vor o pensie mai mare."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <FAQPageSchema questions={faqData.map(item => ({ question: item.question, answer: item.answer }))} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente (FAQ) despre Calculul Pensiei
          </h2>
          <p className="text-lg text-gray-800 font-medium">
            Răspunsuri la cele mai comune întrebări despre sistemul de pensii din România
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-4 border-t border-gray-100"
                  >
                    <p className="text-gray-900 leading-relaxed pt-4 font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Nu găsești răspunsul la întrebarea ta?{" "}
            <a 
              href="/contact" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contactează-ne
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}