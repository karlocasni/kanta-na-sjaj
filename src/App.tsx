import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      <Header onBookClick={openBookingModal} />
      
      <main className="flex-grow">
        <Hero onBookClick={openBookingModal} />
        <Services />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />

      {isBookingModalOpen && (
        <BookingModal onClose={closeBookingModal} />
      )}
    </div>
  );
}

export default App;
