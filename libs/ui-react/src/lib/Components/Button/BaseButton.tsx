import React, { useCallback } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { Spinner } from '../../Symbols/Icons/Spinner';

const baseButtonVariants = cva(
  'duration-250 inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus [&[data-disabled="true"]]:bg-disabled [&[data-disabled="true"]]:text-disabled',
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

    const iconContent = loading ? (
      <Spinner
        size={iconSize}
        className='shrink-0 animate-spin'
        aria-label='Loading'
      />
    ) : (
      Icon && <Icon size={iconSize} className='shrink-0' />
    );

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
        {iconContent}
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
