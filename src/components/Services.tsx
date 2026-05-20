import React from 'react';
import { Droplets, ShieldCheck, Wind, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Profesionalno pranje',
    description: 'Pranje visokotlačnim čistačem s posebnom mlaznicom koja uklanja i najtvrdokorniju prljavštinu.',
    icon: Droplets,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Dezinfekcija',
    description: 'Uklanjanje 99.9% bakterija i virusa s unutarnjih i vanjskih površina kante.',
    icon: ShieldCheck,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    title: 'Uklanjanje mirisa',
    description: 'Poseban tretman koji u potpunosti neutralizira neugodne mirise i ostavlja svježinu.',
    icon: Wind,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    title: 'Ekološka sredstva',
    description: 'Koristimo isključivo biorazgradiva sredstva koja ne štete okolišu i vašem dvorištu.',
    icon: Leaf,
    color: 'text-primary',
    bg: 'bg-green-50',
  },
];

const Services: React.FC = () => {
  return (
    <section id="usluge" className="py-32 bg-white relative overflow-hidden">
      {/* Abstract wave or blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
          <p className="text-gray-600 text-lg">
            Pružamo kompletnu uslugu održavanja higijene vaših kanti za smeće, 
            kako biste uživali u čistom i mirisnom dvorištu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={service.color} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
