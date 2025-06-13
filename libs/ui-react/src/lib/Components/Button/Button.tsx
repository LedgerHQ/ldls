import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
  {
    variants: {
      variant: {
        accent:
          'bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed',
        primary:
          'bg-interactive text-on-interactive hover:bg-interactive-hover active:bg-interactive-pressed',
        secondary:
          'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed',
        'secondary-transparent':
          'bg-muted-transparent text-base hover:bg-muted-transparent-hover active:bg-muted-transparent-pressed',
      },
      size: {
        small: 'py-8 px-16 text-sm',
        medium: 'p-16 text-base',
        large: 'px-32 py-16 text-lg',
      },
    },
    defaultVariants: {
      variant: 'accent',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
