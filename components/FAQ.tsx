import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sand last:border-0">
      <button 
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-navy pr-4 text-base group-hover:text-terracotta transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-terracotta" /> : <ChevronDown className="w-5 h-5 text-navy/30" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-navy/70 leading-relaxed font-medium pl-0">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <div className="flex items-center justify-center gap-2 mb-8">
        <HelpCircle className="text-sage" size={24} />
        <h2 className="text-2xl font-extrabold text-navy">Częste pytania</h2>
      </div>
      <div className="bg-sand-light rounded-2xl p-6 border border-sand">
        <FAQItem 
          question="Czy potrzebny jest specjalny sprzęt?"
          answer="Minimum. Większość gier wymaga tylko piłki, ołówków lub zwykłego Lego, które każdy ma."
        />
        <FAQItem 
          question="Od jakiego wieku zacząć?"
          answer="Idealne dla dzieci w wieku 4–10 lat. Są proste ćwiczenia dla maluchów i złożone zadania logiczne dla uczniów."
        />
        <FAQItem 
          question="Język książki?"
          answer="Polski. Wszystkie materiały są profesjonalnie zaadaptowane i przetłumaczone."
        />
      </div>
    </section>
  );
};