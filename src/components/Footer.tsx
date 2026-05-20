import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Kanta na sjaj Logo" className="h-16 w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 mb-6">
              Profesionalno pranje i dezinfekcija kanti za smeće u Zagrebu. Ekološki prihvatljivo i brzo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Brzi linkovi</h4>
            <ul className="space-y-3">
              <li><a href="#usluge" className="hover:text-primary transition-colors">Usluge</a></li>
              <li><a href="#kako-funkcionira" className="hover:text-primary transition-colors">Kako funkcionira</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Često postavljena pitanja</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prijavi se</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Zagreb, Hrvatska</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+385 91 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@kantanazjaj.hr</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Pravno</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Uvjeti korištenja</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pravila privatnosti</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kolačići</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kanta na sjaj. Sva prava pridržana.
          </p>
          <p className="text-sm text-gray-500">
            Dizajnirano s <span className="text-red-500">♥</span> u Zagrebu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
