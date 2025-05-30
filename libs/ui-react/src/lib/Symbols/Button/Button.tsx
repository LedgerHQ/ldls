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
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-full dark ${
        size === 'small'
          ? 'py-8 px-16 text-sm'
          : size === 'medium'
          ? 'p-16 text-base'
          : 'px-32 py-16 text-lg'
      } ${
        variant === 'primary'
          ? 'bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed'
          : 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
