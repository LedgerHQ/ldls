import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { Spinner } from '../../Symbols/Icons/Spinner';
import { IconSize } from '../Icon/Icon';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:bg-disabled disabled:text-disabled',
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
        xs: 'px-12 py-8 body-2-semi-bold',
        sm: 'px-16 py-12 body-2-semi-bold',
        md: 'px-16 py-12',
        lg: 'p-16',
      },
      isFull: {
        true: 'w-full',
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
        size: 'sm',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'md',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'lg',
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
      size: 'md',
      isFull: false,
      iconOnly: false,
    },
  },
);

export interface ButtonProps
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
   * If true, shows a loading spinner and disables the button.
   */
  loading?: boolean;
  /**
   * An optional icon component to render inside the button.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * Additional custom CSS classes to apply.
   */
  className?: string;
  /**
   * The button's content, typically text or other elements.
   */
  children?: React.ReactNode;
  /**
   * If true, renders the child element directly with button styles instead of wrapping in a button element.
   */
  asChild?: boolean;
}

/**
 * A customizable button component that supports various appearances, sizes, full-width mode, loading states, and optional icons.
 *
 * When in loading state, it displays a spinner. If an icon is provided without children, it renders as an icon-only button.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/action-button--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/action-button--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the button's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Button } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic primary button
 * <Button appearance="base" size="md" onClick={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 *
 * // Icon-only button with loading state
 * import { Button } from '@ledgerhq/ldls-ui-react';
 * import { ArrowRight } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Button icon={ArrowRight} size="sm" loading={isLoading} disabled={isLoading} />
 *
 * // Full-width button with custom class
 * <Button appearance="accent" isFull={true} className="ml-16">
 *   Submit
 * </Button>
 *
 * // Button as a link (asChild pattern)
 * import { Link } from 'react-router-dom';
 *
 * <Button asChild appearance="base" size="md">
 *   <Link to="/dashboard">Go to Dashboard</Link>
 * </Button>
 *
 * // Button as an anchor tag
 * <Button asChild appearance="accent" size="sm">
 *   <a href="https://example.com" target="_blank" rel="noopener noreferrer">
 *     External Link
 *   </a>
 * </Button>
 *
 * // Note: When using asChild, the child element is responsible for its own content.
 * // Icons, loading states, and other Button props like 'icon' and 'loading' are ignored
 * // when asChild is true - you should handle these in the child element if needed.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      appearance,
      size = 'md',
      isFull,
      loading,
      icon,
      asChild = false,
      onClick,
      disabled,
      ...props
    },
    ref,
  ) => {
    const iconOnly = Boolean(icon && !children);

    const iconSizeMap: { [key: string]: IconSize } = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 24,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 24;
    const IconComponent = icon;

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        onClick={disabled || loading ? undefined : onClick}
        className={cn(
          className,
          buttonVariants({
            appearance,
            size,
            isFull,
            iconOnly,
          }),
        )}
        disabled={disabled}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
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
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
