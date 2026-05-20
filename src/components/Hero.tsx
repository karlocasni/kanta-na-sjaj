import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Droplets, Sparkles as SparklesIcon } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const kvartovi = [
  { id: 'maksimir', name: 'Maksimir', days: 'Utorkom i Petkom' },
  { id: 'tresnjevka', name: 'Trešnjevka', days: 'Ponedjeljkom i Srijedom' },
  { id: 'dubrava', name: 'Dubrava', days: 'Četvrtkom' },
  { id: 'novi-zagreb', name: 'Novi Zagreb', days: 'Srijedom i Subotom' },
];

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [selectedKvart, setSelectedKvart] = useState('');

  const selectedInfo = kvartovi.find(k => k.id === selectedKvart);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-neutral-light via-white to-white">
      {/* Playful Colorful Blobs (Water & Slime vibes) */}
      <div className="absolute top-0 right-0 -translate-y-10 translate-x-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[25rem] h-[25rem] bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative Bubbles */}
      <div className="absolute top-32 left-10 text-secondary/40 animate-bounce-slow">
        <div className="w-6 h-6 rounded-full bg-secondary/20"></div>
      </div>
      <div className="absolute bottom-40 right-20 text-primary/40 animate-bounce-slow" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-10 rounded-full border-4 border-primary/20"></div>
      </div>
      <div className="absolute top-20 right-1/3 text-secondary/30 animate-float" style={{ animationDelay: '3s' }}>
        <Droplets size={48} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-semibold text-primary mb-6">
              <SparklesIcon size={16} /> 100% Ekološki & Biorazgradivo
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-gray-900 mb-6 tracking-tight">
              Kanta na <span className="text-gradient relative inline-block">sjaj<SparkleSVG /></span> <br />
              higijena dvorišta
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Profesionalno pranje i dezinfekcija kanti za smeće u Zagrebu. 
              Brzo, sigurno i s predivnim mirisom. Vrijeme je da vaše kante ponovno zablistaju!
            </p>

            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl shadow-primary/10 border border-white max-w-md relative">
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform rotate-12">
                BRZA REZERVACIJA
              </div>
              
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <MapPin className="text-primary" size={22} />
                Provjeri dostupnost u svom kvartu
              </h3>
              
              <div className="space-y-4">
                <select 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 font-medium cursor-pointer"
                  value={selectedKvart}
                  onChange={(e) => setSelectedKvart(e.target.value)}
                >
                  <option value="" disabled>Odaberi svoj kvart</option>
                  {kvartovi.map(k => (
                    <option key={k.id} value={k.id}>{k.name}</option>
                  ))}
                </select>

                {selectedInfo && (
                  <div className="bg-primary/10 text-primary-dark p-4 rounded-2xl flex items-start gap-3 animate-fade-in-up" style={{animationDuration: '0.3s'}}>
                    <Calendar className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="font-bold text-sm">Dostupni smo u tvom kvartu!</p>
                      <p className="text-xs mt-1 opacity-90">Dani pranja: <span className="font-extrabold">{selectedInfo.days}</span></p>
                    </div>
                  </div>
                )}

                <button 
                  onClick={onBookClick}
                  className="w-full bg-gradient-primary text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                >
                  Započni rezervaciju
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up mt-10 lg:mt-0" style={{animationDelay: '0.2s'}}>
             {/* Playful Image Container */}
             <div className="relative w-full max-w-[32rem] flex items-center justify-center">
                  {/* Displaying the actual Logo prominently in the Hero */}
                  <img src="/logo.png" alt="Kanta na sjaj mascot" className="object-contain w-full h-auto drop-shadow-2xl animate-float relative z-10" />
                  
                  {/* Floating Cards */}
                  <div className="absolute bottom-10 left-0 lg:-left-10 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float z-20 border border-white/50" style={{animationDelay: '1s'}}>
                      <div className="bg-primary/20 p-3 rounded-xl text-primary">
                          <SparklesIcon size={24} />
                      </div>
                      <div>
                          <p className="text-base font-bold text-gray-900 leading-tight">Sjajno čisto!</p>
                      </div>
                  </div>

                  <div className="absolute top-20 right-0 lg:-right-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float z-20 border border-white/50" style={{animationDelay: '2s'}}>
                      <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                          <Droplets size={24} />
                      </div>
                      <div>
                          <p className="text-base font-bold text-gray-900 leading-tight">Uklanja mirise</p>
                      </div>
                  </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SparkleSVG = () => (
  <svg className="absolute -top-5 -right-8 w-10 h-10 text-yellow-400 animate-pulse drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
  </svg>
)

export default Hero;
