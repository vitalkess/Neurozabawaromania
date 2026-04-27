import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-sand-light/60 py-8 px-4 text-center max-w-lg mx-auto">
      <p className="text-sm">© {new Date().getFullYear()} NeiroBook. Toate drepturile rezervate.</p>
      <div className="mt-4 flex justify-center gap-4 text-xs">
        <a href="#" className="hover:text-white transition-colors">Oferta publică</a>
        <a href="#" className="hover:text-white transition-colors">Politica de confidențialitate</a>
      </div>
    </footer>
  );
};