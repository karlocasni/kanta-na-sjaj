import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import clsx from 'clsx';

interface HeaderProps {
  onBookClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kanta na sjaj Logo" className="h-12 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#usluge" className="hover:text-primary transition-colors">Usluge</a>
          <a href="#kako-funkcionira" className="hover:text-primary transition-colors">Kako funkcionira</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
            Prijavi se
          </button>
          <button 
            onClick={onBookClick}
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            Rezerviraj pranje
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-4 gap-4 border-t border-gray-100">
          <a href="#usluge" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Usluge</a>
          <a href="#kako-funkcionira" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Kako funkcionira</a>
          <a href="#faq" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="h-px bg-gray-100 my-2"></div>
          <button className="text-left text-gray-700 font-medium py-2">Prijavi se</button>
          <button 
            onClick={() => {
              onBookClick();
              setMobileMenuOpen(false);
            }}
            className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold text-center mt-2"
          >
            Rezerviraj pranje
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
