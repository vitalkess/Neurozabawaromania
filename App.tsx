import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PurchaseModal } from './components/PurchaseModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // Max-w-lg centers the content to simulate a mobile view on desktop, 
    // while remaining full width on actual mobile devices.
    <div className="min-h-screen bg-cream font-sans text-navy">
      <div className="bg-cream shadow-2xl max-w-lg mx-auto min-h-screen border-x border-sand/30 relative">
        <main>
          <Hero onBuyClick={openModal} />
          <PainPoints />
          <Features />
          <Gallery />
          <Results />
          <Testimonials />
          <Offer onBuyClick={openModal} />
          <FAQ />
        </main>
        <Footer />
        <PurchaseModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;