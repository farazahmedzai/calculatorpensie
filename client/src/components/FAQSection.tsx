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
    answer: "Poți ieși la pensie cu câțiva ani mai devreme, dar cu o penalizare de 0,25% pe lună pentru fiecare lună de anticipare. Bărbații pot ieși la pensie anticipată de la 62 de ani, iar femeile de la 60 de ani, cu minimum 15 ani stagiu de cotizare."
  },
  {
    id: "pension-point-value", 
    question: "Care este valoarea punctului de pensie în 2025?",
    answer: "Începând cu 1 ianuarie 2025, valoarea punctului de pensie este de 2.031 lei, conform legislației oficiale. Această valoare este folosită în calculul pensiei și poate fi actualizată anual prin hotărâre guvernamentală."
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