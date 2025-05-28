import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick 
}: ButtonProps) => {
  
  return (
    <button
      className={`'font-medium transition-colors rounded-full' ${
        size === "small"
          ? "px-4 py-2 text-sm"
          : size === "medium"
          ? "px-6 py-3 text-base"
          : "px-8 py-4 text-lg"
      } ${
        variant === "primary"
          ? "bg-base text-base hover:bg-base-hover active:bg-base-pressed"
          : "bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
