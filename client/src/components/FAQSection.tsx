import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { HOMEPAGE_FAQ_DATA } from "@/data/faq-data";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([
    "pension-point-value",
    "retirement-age",
  ]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Întrebări Frecvente (FAQ) despre Calculul Pensiei în 2026
          </h2>
          <p className="text-lg text-gray-800 font-medium">
            Răspunsuri verificate conform Legii nr. 360/2023 și Legii nr. 141/2025
          </p>
        </div>

        <div className="space-y-4">
          {HOMEPAGE_FAQ_DATA.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
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
                    className="px-6 pb-4 pt-2 border-t border-gray-100"
                  >
                    <p className="text-gray-800 leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
