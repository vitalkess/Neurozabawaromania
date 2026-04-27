import React from 'react';
import { Check } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <h2 className="text-2xl font-extrabold text-navy mb-8 relative z-10">
        Doar 15 minute pe zi:
      </h2>

      <div className="space-y-4 relative z-10">
        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Se va îmbunătăți scrisul de mână</h3>
            <p className="text-navy/70 mt-1">Prin exerciții de interacțiune inter-emisferică.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Vor dispărea crizele de furie</h3>
            <p className="text-navy/70 mt-1">Exerciții de respirație (ex. „Suflatul lumânării").</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Vor crește rezultatele la învățătură</h3>
            <p className="text-navy/70 mt-1">Un creier dezvoltat „prinde" mai repede informații noi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};