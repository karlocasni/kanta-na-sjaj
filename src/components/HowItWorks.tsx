import React from 'react';
import { MousePointerClick, Truck, Sparkles, Smile } from 'lucide-react';

const steps = [
  {
    title: 'Rezervirajte termin',
    description: 'Odaberite svoj kvart i rezervirajte pranje putem naše web stranice u samo par klikova.',
    icon: MousePointerClick,
  },
  {
    title: 'Dolazimo nakon odvoza',
    description: 'Naš tim dolazi na vašu adresu na dan kada je predviđen odvoz smeća.',
    icon: Truck,
  },
  {
    title: 'Pranje i dezinfekcija',
    description: 'Posebnim strojem peremo i dezinficiramo kantu iznutra i izvana.',
    icon: Sparkles,
  },
  {
    title: 'Gotovo!',
    description: 'Vaša kanta ostaje čista, mirisna i sigurna od bakterija do sljedećeg pranja.',
    icon: Smile,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="kako-funkcionira" className="py-32 bg-gradient-to-b from-white via-neutral-light/50 to-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 -translate-x-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kako funkcionira?</h2>
          <p className="text-gray-600 text-lg">
            Proces je jednostavan i prilagođen vašem rasporedu.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-gray-200/50 mb-6 border-4 border-neutral-light relative group-hover:border-primary/20 transition-colors duration-300 group-hover:scale-110">
                    <Icon className="text-primary" size={32} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full text-white font-bold flex items-center justify-center text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
