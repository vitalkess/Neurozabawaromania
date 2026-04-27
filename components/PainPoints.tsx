import React from 'react';
import { XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "Nu aude din prima",
      desc: "Trebuie să repeți cererea de 10 ori."
    },
    {
      title: "Nu poate sta locului",
      desc: "Nu poate sta la lecții nici măcar 5 minute."
    },
    {
      title: "Confundă literele",
      desc: "Scrie în oglindă, omite silabe sau are un scris urât."
    },
    {
      title: "Izbucnește rapid",
      desc: "Criză de furie fără motiv, greu de calmat."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-navy mt-3">
          Îți recunoști copilul?
        </h2>
      </div>

      <div className="space-y-4">
        {pains.map((item, index) => (
          <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-sage-light/50 border border-sage/10 hover:border-sage/30 transition-colors">
            <XCircle className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-navy text-lg leading-tight">{item.title}</h3>
              <p className="text-navy/70 text-sm mt-2 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-cream rounded-2xl border border-gold/20 text-center relative overflow-hidden">
        <p className="text-navy font-medium leading-relaxed relative z-10">
          Nu e <span className="text-terracotta font-extrabold">vina copilului</span>.
          <br/>Creierul lui are nevoie de „combustibil" și antrenament.
        </p>
      </div>
    </section>
  );
};