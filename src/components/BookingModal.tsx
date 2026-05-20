import React, { useState } from 'react';
import { X, CheckCircle2, MapPin, Calendar as CalendarIcon, CreditCard, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface BookingModalProps {
  onClose: () => void;
}

const kvartovi = [
  { id: 'maksimir', name: 'Maksimir', days: ['Utorak', 'Petak'] },
  { id: 'tresnjevka', name: 'Trešnjevka', days: ['Ponedjeljak', 'Srijeda'] },
  { id: 'dubrava', name: 'Dubrava', days: ['Četvrtak'] },
  { id: 'novi-zagreb', name: 'Novi Zagreb', days: ['Srijeda', 'Subota'] },
];

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<'jednokratno' | 'mjesecno'>('mjesecno');
  const [kvart, setKvart] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const availableDays = kvartovi.find(k => k.id === kvart)?.days || [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Rezervacija pranja</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 px-8 pt-6">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className="flex-1 flex flex-col gap-2">
              <div className={clsx(
                "h-1.5 rounded-full transition-colors",
                step >= s ? "bg-primary" : "bg-gray-200"
              )}></div>
            </div>
          ))}
        </div>

        <div className="p-8">
          {/* Step 1: Pricing */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-800">Odaberite uslugu</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedService('mjesecno')}
                  className={clsx(
                    "p-6 rounded-2xl border-2 text-left transition-all relative overflow-hidden",
                    selectedService === 'mjesecno' ? "border-primary bg-primary/5 shadow-md" : "border-gray-200 hover:border-primary/30"
                  )}
                >
                  {selectedService === 'mjesecno' && <CheckCircle2 className="absolute top-4 right-4 text-primary" size={24} />}
                  <span className="inline-block px-3 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full mb-3">NAJPOPULARNIJE</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Mjesečno pranje</h4>
                  <div className="text-2xl font-bold text-primary mb-2">7€ <span className="text-sm text-gray-500 font-normal">/mjesečno</span></div>
                  <p className="text-sm text-gray-600">Redovito održavanje. Jednom mjesečno.</p>
                </button>

                <button 
                  onClick={() => setSelectedService('jednokratno')}
                  className={clsx(
                    "p-6 rounded-2xl border-2 text-left transition-all relative",
                    selectedService === 'jednokratno' ? "border-primary bg-primary/5 shadow-md" : "border-gray-200 hover:border-primary/30"
                  )}
                >
                  {selectedService === 'jednokratno' && <CheckCircle2 className="absolute top-4 right-4 text-primary" size={24} />}
                  <h4 className="font-bold text-gray-900 text-lg mb-1 mt-7">Jednokratno</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-2">12€</div>
                  <p className="text-sm text-gray-600">Samo jedno pranje.</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="text-primary" /> Vaš kvart
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">Pranje kanti organiziramo prema rasporedu odvoza otpada po kvartovima.</p>
                <select 
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-700"
                  value={kvart}
                  onChange={(e) => {
                    setKvart(e.target.value);
                    setSelectedDay('');
                  }}
                >
                  <option value="" disabled>Odaberi svoj kvart</option>
                  {kvartovi.map(k => (
                    <option key={k.id} value={k.id}>{k.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Scheduling */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <CalendarIcon className="text-primary" /> Odabir dana
              </h3>
              
              <p className="text-gray-600">Za vaš kvart <strong>({kvartovi.find(k=>k.id===kvart)?.name})</strong>, dostupni su sljedeći dani nakon odvoza:</p>
              
              <div className="grid grid-cols-2 gap-4">
                {availableDays.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={clsx(
                      "p-4 rounded-xl border-2 text-center transition-all font-medium",
                      selectedDay === day ? "border-primary bg-primary text-white shadow-md" : "border-gray-200 text-gray-700 hover:border-primary/50"
                    )}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Checkout */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <CreditCard className="text-primary" /> Plaćanje i detalji
              </h3>
              
              <div className="space-y-4">
                <input type="text" placeholder="Ime i prezime" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="text" placeholder="Adresa (Ulica i kućni broj)" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50" />
                <div className="flex gap-2">
                  <input type="text" placeholder="Invite kod (opcionalno)" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50" />
                  <button className="bg-gray-100 px-4 rounded-xl font-medium text-gray-700 hover:bg-gray-200">Primijeni</button>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4">
                   <div className="flex justify-between text-sm mb-2 text-gray-600">
                     <span>Usluga: {selectedService === 'mjesecno' ? 'Mjesečno pranje' : 'Jednokratno'}</span>
                     <span>{selectedService === 'mjesecno' ? '7€' : '12€'}</span>
                   </div>
                   <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-200">
                     <span>Ukupno</span>
                     <span>{selectedService === 'mjesecno' ? '7.00€' : '12.00€'}</span>
                   </div>
                </div>

                <button className="w-full bg-black text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-4">
                  Plati sa Stripe / Apple Pay
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={clsx(
              "px-6 py-2 rounded-xl font-medium transition-colors",
              step === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-200"
            )}
          >
            Nazad
          </button>
          
          {step < 4 && (
            <button 
              onClick={nextStep}
              disabled={(step === 2 && !kvart) || (step === 3 && !selectedDay)}
              className="bg-gradient-primary text-white px-8 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
            >
              Dalje <ChevronRight size={18} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
