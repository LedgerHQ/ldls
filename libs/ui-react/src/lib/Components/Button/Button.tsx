import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { Spinner } from '../../Symbols';
import { IconSize } from '../Icon/Icon';

const buttonVariants = cva(
  'inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-focus focus-visible:ring-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
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
          'bg-transparent text-base hover:bg-base-transparent-hover active:bg-base-transparent-pressed',
        red: 'hover:bg-error-hover active:bg-error-pressed bg-error text-error',
      },
      size: {
        xs: 'px-12 py-8 body-2-semi-bold',
        s: 'px-16 py-8 body-2-semi-bold',
        m: 'px-16 py-12',
        l: 'p-16',
      },
      isFull: {
        true: 'w-full',
      },
      loading: {
        true: '',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        iconOnly: true,
        className: 'p-8',
      },
      {
        size: 's',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'm',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'l',
        iconOnly: true,
        className: 'p-16',
      },
      {
        iconOnly: false,
        className: 'gap-8',
      },
    ],
    defaultVariants: {
      appearance: 'base',
      size: 'm',
      isFull: false,
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      appearance,
      size = 'm',
      isFull,
      loading,
      icon,
      ...props
    },
    ref,
  ) => {
    const iconOnly = Boolean(icon && !children);

    const iconSizeMap: { [key: string]: IconSize } = {
      xs: 16,
      s: 20,
      m: 24,
      l: 24,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 24;
    const IconComponent = icon;

    return (
      <button
        ref={ref}
        className={cn(
          className,
          buttonVariants({
            appearance,
            size,
            isFull,
            loading,
            iconOnly,
          }),
        )}
        disabled={props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <Spinner
              size={calculatedIconSize}
              className="flex-shrink-0 animate-spin"
              aria-label="Loading"
            />
            {children && (
              <span className="line-clamp-2 text-left">{children}</span>
            )}
          </>
        ) : (
          <>
            {IconComponent && (
              <IconComponent
                size={calculatedIconSize}
                className="flex-shrink-0"
              />
            )}
            {children && (
              <span className="line-clamp-2 text-left">{children}</span>
            )}
          </>
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
