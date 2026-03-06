import React from 'react';
import { Move, BrainCircuit, Activity, Wind, Gift } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto border-t border-gold/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-navy">Co jest w środku?</h2>
      </div>

      <div className="space-y-6">
        
        {/* Part 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-terracotta/10">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center text-terracotta shrink-0">
              <Move size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Część 1. Neurogry na uwagę i energię</h3>
                <span className="text-sm font-bold text-terracotta">(52 gry ruchowe)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Co robimy:</strong> Gry ruchowe, aby „zrestartować” mózg i złagodzić napięcie.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Topowe ćwiczenia:</strong> „Ucho-Nos”, „Cisza-Szept-Krzyk”, „Cztery żywioły”.</span>
            </li>
          </ul>
          <div className="bg-terracotta/5 p-3 rounded-lg text-sm text-terracotta font-semibold border border-terracotta/10">
            Rezultat: Dziecko uczy się słyszeć polecenia za pierwszym razem i kontrolować swoje ciało.
          </div>
        </div>

        {/* Part 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sand/30 rounded-xl flex items-center justify-center text-navy shrink-0">
              <BrainCircuit size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Część 2. Rozwój poznawczy</h3>
                <span className="text-sm font-bold text-navy/60">(29 gier logicznych)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Co robimy:</strong> Zadania na myślenie przestrzenne, koncentrację i pamięć.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Topowe gry:</strong> „Zakazana liczba”, „Chrząszcz” (orientacja w kratkach), „Co zmieniło się na stole?”.</span>
            </li>
          </ul>
          <div className="bg-sand/20 p-3 rounded-lg text-sm text-navy font-semibold border border-gold/20">
            Rezultat: Dziecko łatwiej zapamiętuje wiersze, materiał szkolny i staje się bardziej uważne.
          </div>
        </div>

        {/* Part 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center text-sage shrink-0">
              <Activity size={24} strokeWidth={2.5} />
            </div>
             <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Część 3. Rozciąganie i Ciało</h3>
                <span className="text-sm font-bold text-sage">(10 technik relaksacyjnych)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Co robimy:</strong> Specjalne pozycje do usuwania napięć mięśniowych.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Topowe ćwiczenia:</strong> „Kobra”, „Meduza”, „Drzewo”.</span>
            </li>
          </ul>
          <div className="bg-sage-light p-3 rounded-lg text-sm text-sage font-semibold border border-sage/20">
            Rezultat: Uspokaja układ nerwowy po siedzeniu w ławce lub przy telefonie.
          </div>
        </div>

        {/* Part 4 - Breathing */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Wind size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Część 4. Ćwiczenia oddechowe (Antystres)</h3>
                <span className="text-sm font-bold text-navy/60">(26 praktyk oddechowych)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Co robimy:</strong> Techniki nasycania mózgu tlenem i kontroli emocjonalnej.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Topowe ćwiczenia:</strong> „Świeczka”, „Balonik”, „Oddychanie nosem”.</span>
            </li>
          </ul>
           <div className="bg-navy/5 p-3 rounded-lg text-sm text-navy font-semibold border border-navy/10">
            Rezultat: Pomaga dziecku szybko uspokoić się podczas histerii lub przed snem.
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
                 <h3 className="text-xl font-bold text-navy leading-tight">BONUS: Zeszyty ćwiczeń</h3>
                 <span className="text-sm font-bold text-navy/60">(50+ stron zadań)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1 relative z-10">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Grafomotoryka:</strong> „Rysowanie obiema rękami” (synchronizuje półkule!).</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Lego-kodowanie:</strong> Gotowe schematy do rozwoju logiki poprzez klocki.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
               <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Rysowanie lustrzane</strong> i pixel-art („Śmieszne kwadraty”).</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};