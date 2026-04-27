import React from 'react';
import { Move, BrainCircuit, Activity, Wind, Gift } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto border-t border-gold/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-navy">Ce conține?</h2>
      </div>

      <div className="space-y-6">
        
        {/* Part 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-terracotta/10">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center text-terracotta shrink-0">
              <Move size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Partea 1. Neurojocuri pentru atenție și energie</h3>
                <span className="text-sm font-bold text-terracotta">(52 jocuri de mișcare)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Ce facem:</strong> Jocuri de mișcare pentru a „reporni” creierul și a reduce tensiunea.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Exerciții de top:</strong> „Ureche-Nas”, „Tăcere-Șoaptă-Strigăt”, „Cele patru elemente”.</span>
            </li>
          </ul>
          <div className="bg-terracotta/5 p-3 rounded-lg text-sm text-terracotta font-semibold border border-terracotta/10">
            Rezultat: Copilul învață să audă comenzile din prima și să-și controleze corpul.
          </div>
        </div>

        {/* Part 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sand/30 rounded-xl flex items-center justify-center text-navy shrink-0">
              <BrainCircuit size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Partea 2. Dezvoltare cognitivă</h3>
                <span className="text-sm font-bold text-navy/60">(29 jocuri logice)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Ce facem:</strong> Sarcini de gândire spațială, concentrare și memorie.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Jocuri de top:</strong> „Numărul interzis”, „Gândăcelul” (orientare pe caroiaj), „Ce s-a schimbat pe masă?”.</span>
            </li>
          </ul>
          <div className="bg-sand/20 p-3 rounded-lg text-sm text-navy font-semibold border border-gold/20">
            Rezultat: Copilul memorează mai ușor poezii, materia școlară și devine mai atent.
          </div>
        </div>

        {/* Part 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center text-sage shrink-0">
              <Activity size={24} strokeWidth={2.5} />
            </div>
             <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Partea 3. Stretching și Corp</h3>
                <span className="text-sm font-bold text-sage">(10 tehnici de relaxare)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Ce facem:</strong> Poziții speciale pentru eliminarea tensiunilor musculare.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Exerciții de top:</strong> „Cobra”, „Meduza”, „Copacul”.</span>
            </li>
          </ul>
          <div className="bg-sage-light p-3 rounded-lg text-sm text-sage font-semibold border border-sage/20">
            Rezultat: Calmează sistemul nervos după ore la bancă sau la telefon.
          </div>
        </div>

        {/* Part 4 - Breathing */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Wind size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Partea 4. Exerciții de respirație (Antistres)</h3>
                <span className="text-sm font-bold text-navy/60">(26 practici de respirație)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Ce facem:</strong> Tehnici de oxigenare a creierului și control emoțional.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Exerciții de top:</strong> „Lumânarea”, „Balonul”, „Respirație pe nas”.</span>
            </li>
          </ul>
           <div className="bg-navy/5 p-3 rounded-lg text-sm text-navy font-semibold border border-navy/10">
            Rezultat: Ajută copilul să se calmeze rapid în timpul unei crize sau înainte de somn.
          </div>
        </div>

        {/* Bonus */}
        <div className="bg-gradient-to-br from-white to-sand-light rounded-2xl p-6 shadow-md border-2 border-gold/40 relative overflow-hidden">
             {/* Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>

          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Gift size={24} strokeWidth={2.5} />
            </div>
            <div>
                 <h3 className="text-xl font-bold text-navy leading-tight">BONUS: Caiete de exerciții</h3>
                 <span className="text-sm font-bold text-navy/60">(50+ pagini de sarcini)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1 relative z-10">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Grafomotricitate:</strong> „Desen cu ambele mâini” (sincronizează emisferele!).</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Codare cu Lego:</strong> Scheme gata pentru dezvoltarea logicii prin cuburi.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
               <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Desen în oglindă</strong> și pixel-art („Pătrate amuzante”).</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};