import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';

const buttonVariants = cva(
  'inline-flex w-fit max-w-[384px] items-center justify-center gap-8 rounded-full transition-colors body-1-semi-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
  {
    variants: {
      appearance: {
        base: 'bg-interactive text-on-interactive hover:bg-interactive-hover active:bg-interactive-pressed',
        gray: 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed',
        accent:
          'bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed',
        transparent:
          'bg-muted-transparent text-base hover:bg-muted-transparent-hover active:bg-muted-transparent-pressed',
        'no-background':
          'bg-transparent text-base hover:bg-muted-subtle active:bg-muted-pressed',
      },
      size: {
        xs: 'size-32 body-2-semi-bold',
        s: 'px-16 py-8 body-2-semi-bold',
        m: 'p-16',
        l: 'px-32 py-16',
      },
      hasIcon: {
        true: '',
        false: '',
      },
      loading: {
        true: 'cursor-wait',
        false: '',
      },
    },
    defaultVariants: {
      appearance: 'base',
      size: 'm',
      hasIcon: false,
      loading: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'hasIcon'> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button = ({
  children,
  appearance,
  size,
  className,
  icon,
  loading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const isIconOnly = Boolean(icon && !children);

  return (
    <button
      className={cn(
        className,
        buttonVariants({
          appearance,
          size,
          hasIcon: Boolean(icon),
          loading,
        }),
        isIconOnly && 'p-0',
      )}
      disabled={disabled || loading}
      {...props}
    >
      {isIconOnly ? (
        icon
      ) : icon ? (
        <>
          {icon}
          <span className="line-clamp-2">{children}</span>
        </>
      ) : (
        <span className="line-clamp-2">{children}</span>
      )}
    </button>
  );
};

export default Button;
