import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  subtext?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  subtext,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold py-4 px-6 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md flex flex-col items-center justify-center text-center";
  const variants = {
    primary: "bg-terracotta hover:bg-terracotta-dark text-white shadow-terracotta/20",
    secondary: "bg-white text-terracotta border border-sand hover:bg-sand-light hover:border-terracotta/30"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-2 text-lg uppercase tracking-wide">
        {children}
        <ArrowRight className="w-5 h-5 opacity-80" />
      </span>
      {subtext && (
        <span className="text-xs font-medium opacity-90 mt-1 block text-white/90">
          {subtext}
        </span>
      )}
    </button>
  );
};