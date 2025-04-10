import React from 'react';

import { tailwindColors } from '@ldls/design-tokens';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantClasses = {
    primary: `bg-green-500 text-white hover:bg-green-600`,
    secondary: `${tailwindColors["surface-brand-primary-default"]} text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
