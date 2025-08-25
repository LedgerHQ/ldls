import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { Spinner } from '../../Symbols/Icons/Spinner';
import { IconSize } from '../Icon/Icon';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'dis inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-focus focus-visible:ring-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
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
      loading: {
        true: 'pointer-events-none',
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  asChild?: boolean;
}

/**
 * A customizable button component that supports various appearances, sizes, full-width mode, loading states, and optional icons.
 *
 * When in loading state, it displays a spinner. If an icon is provided without children, it renders as an icon-only button.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-button-react--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-button-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'base' | 'gray' | 'accent' | 'transparent' | 'no-background' | 'red'} [appearance='base'] - The visual style of the button.
 * @param {'xs' | 'sm' | 'md' | 'lg'} [size='md'] - The size variant of the button.
 * @param {boolean} [isFull=false] - If true, the button expands to full width of its container.
 * @param {boolean} [loading=false] - If true, shows a loading spinner and disables the button.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [icon] - An optional icon component to render inside the button.
 *   The icon styles are defined by the button. Please do not override them.
 * @param {boolean} [asChild=false] - If true, renders the child element directly with button styles instead of wrapping in a button element.
 *   Useful for creating link buttons or other semantic elements with button appearance.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {React.ReactNode} [children] - The button's content, typically text or other elements.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [...] - All standard button props (e.g., `disabled`, `onClick`, `type`).
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the button's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Button } from '@ldls/ui-react';
 *
 * // Basic primary button
 * <Button appearance="base" size="md" onClick={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 *
 * // Icon-only button with loading state
 * import { Button } from '@ldls/ui-react';
 * import { ArrowRight } from '@ldls/ui-react/symbols';
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
