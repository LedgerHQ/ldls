import { cn } from '@ledgerhq/ldls-utils-shared';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React, { useCallback } from 'react';
import { Spinner } from '../../Symbols/Spinner';
import { IconSize } from '../Icon/Icon';

const baseButtonVariants = cva(
  'inline-flex size-fit cursor-pointer items-center justify-center rounded-full transition-colors duration-200 body-1-semi-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus [&[data-disabled="true"]]:bg-disabled [&[data-disabled="true"]]:text-disabled',
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
          'bg-transparent text-base hover:bg-base-transparent-hover active:bg-base-transparent-pressed disabled:bg-base-transparent',
        red: 'bg-error text-error hover:bg-error-hover active:bg-error-pressed',
      },
      size: {
        xs: 'p-8',
        sm: 'p-12',
        md: 'p-12',
        lg: 'p-16',
      },
      isFull: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      appearance: 'base',
      size: 'md',
      isFull: false,
    },
  },
);

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button.
   */
  appearance?:
    | 'base'
    | 'gray'
    | 'accent'
    | 'transparent'
    | 'no-background'
    | 'red';
  /**
   * The size variant of the button.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * If true, the button expands to full width of its container.
   */
  isFull?: boolean;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * If true, shows a loading spinner instead of the icon.
   * @default false
   */
  loading?: boolean;
  /**
   * Additional custom CSS classes to apply.
   */
  className?: string;
  /**
   * Optional prop to render the button as a child element.
   */
  asChild?: boolean;
  /**
   * An optional icon component to render inside the button.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * Optional children to render inside the button.
   */
  children?: React.ReactNode;
}

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      className,
      appearance,
      size,
      isFull,
      disabled,
      asChild = false,
      icon: Icon,
      loading,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // If the button is disabled, prevent the default action (e.g., navigation).
        if (disabled || loading) {
          event.preventDefault();
          return;
        }
        // Otherwise, call the original onClick handler if it was provided.
        onClick?.(event);
      },
      [disabled, loading, onClick],
    );

    const iconSize = size === 'lg' ? 24 : size === 'xs' ? 16 : 20;
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          baseButtonVariants({ appearance, size, isFull }),
          className,
        )}
        ref={ref}
        data-disabled={disabled || undefined}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {loading && <Spinner size={iconSize} />}
        {!loading && Icon && <Icon size={iconSize} className='shrink-0' />}

        {children &&
          (asChild ? (
            <Slottable>{children}</Slottable>
          ) : (
            <span className='line-clamp-2 text-left'>{children}</span>
          ))}
      </Comp>
    );
  },
);

BaseButton.displayName = 'BaseButton';
