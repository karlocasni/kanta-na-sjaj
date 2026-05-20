import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'Koliko često trebam prati kantu?',
    answer: 'Preporučujemo pranje kante jednom mjesečno kako bi se spriječilo nakupljanje bakterija, crva i neugodnih mirisa. Tijekom ljetnih mjeseci, pranje se preporučuje i češće.'
  },
  {
    question: 'Moram li biti kod kuće tijekom pranja?',
    answer: 'Ne, ne morate biti kod kuće. Mi dolazimo isti dan nakon što Čistoća isprazni vaše kante. Bitno je samo da kantu ostavite na dostupnom mjestu nakon odvoza smeća.'
  },
  {
    question: 'Koristite li kemikalije opasne za kućne ljubimce?',
    answer: 'Ne. Naša sredstva za čišćenje i dezinfekciju su 100% biorazgradiva i potpuno sigurna za ljude, kućne ljubimce i okoliš.'
  },
  {
    question: 'Što ako zaboravim ostaviti kantu vani?',
    answer: 'Ukoliko naša ekipa dođe, a kanta nije na dogovorenom mjestu, kontaktirat ćemo vas. Ako niste u mogućnosti iznijeti kantu, pranje ćemo prebaciti na sljedeći termin bez dodatne naplate.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Često postavljena pitanja</h2>
          <p className="text-gray-600 text-lg">
            Sve što trebate znati o našoj usluzi.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={clsx(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen ? "border-primary/30 shadow-md shadow-primary/5 bg-primary/5" : "border-gray-200 hover:border-primary/30 bg-white"
                )}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={clsx(
                      "text-gray-500 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-primary" : ""
                    )} 
                    size={20} 
                  />
                </button>
                
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
