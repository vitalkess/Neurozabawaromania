import React from 'react';
import { XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "Nie słyszy za pierwszym razem",
      desc: "Trzeba powtarzać prośbę 10 razy."
    },
    {
      title: "Nie może usiedzieć w miejscu",
      desc: "Nie może wysiedzieć przy lekcjach nawet 5 minut."
    },
    {
      title: "Myli litery",
      desc: "Pisze w lustrzanym odbiciu, opuszcza sylaby lub ma brzydki charakter pisma."
    },
    {
      title: "Szybko wybucha",
      desc: "Histeria bez powodu, trudno się uspokoić."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-navy mt-3">
          Czy rozpoznajesz swoje dziecko?
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
          To <span className="text-terracotta font-extrabold">nie wina dziecka</span>. 
          <br/>Jego mózg po prostu potrzebuje odpowiedniego „paliwa” i treningu.
        </p>
      </div>
    </section>
  );
};