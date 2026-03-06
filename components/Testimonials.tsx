import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-navy mb-8">Co mówią mamy?</h2>

      <div className="space-y-6">
        {/* Review 1 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Syn mylił litery 'b' i 'd'. Robiliśmy ćwiczenia z rysowania lustrzanego z 3. części książki — po miesiącu problem zniknął!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center font-bold text-navy text-sm">M</div>
            <div>
              <p className="font-bold text-navy text-sm">Marta</p>
              <p className="text-xs text-navy/60">Mama pierwszoklasisty</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Najbardziej lubimy ćwiczenia z Lego. To genialne — uczyć logiki przez klocki."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center font-bold text-terracotta text-sm">O</div>
            <div>
              <p className="font-bold text-navy text-sm">Olga</p>
              <p className="text-xs text-navy/60">Mama 5-letniej Zosi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};