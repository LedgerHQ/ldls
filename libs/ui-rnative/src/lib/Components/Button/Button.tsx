import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconSize } from '../Icon/Icon';
import React from 'react';
import { cn } from '../../utils';
import { Spinner } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-fit cursor-pointer flex-row items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-focus focus-visible:ring-2',
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
        true: '',
      },
      iconOnly: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'pointer-events-none cursor-default bg-disabled text-disabled hover:bg-disabled active:bg-disabled',
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
      {
        appearance: 'no-background',
        disabled: true,
        className: 'bg-base-transparent',
      },
    ],
    defaultVariants: {
      appearance: 'base',
      size: 'md',
      isFull: false,
      iconOnly: false,
      disabled: false,
    },
  },
);

export interface ButtonProps
  extends Omit<TouchableOpacityProps, 'disabled'>,
    Omit<VariantProps<typeof buttonVariants>, 'iconOnly'> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
}

/**
 * A customizable button component that supports various appearances, sizes, full-width mode, loading states, and optional icons.
 *
 * When in loading state, it displays a spinner. If an icon is provided without children, it renders as an icon-only button.
 *
 * @component
 * @param {'base' | 'gray' | 'accent' | 'transparent' | 'no-background' | 'red'} [appearance='base'] - The visual style of the button.
 * @param {'xs' | 'sm' | 'md' | 'lg'} [size='md'] - The size variant of the button.
 * @param {boolean} [isFull=false] - If true, the button expands to full width of its container.
 * @param {boolean} [loading=false] - If true, shows a loading spinner and disables the button.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [icon] - An optional icon component to render inside the button.
 *   The icon component should accept `size` (IconSize) and `className` props.
 * @param {string} [className] - Additional custom CSS classes to apply.
 * @param {React.ReactNode} [children] - The button's content, typically text or other elements.
 * @param {TouchableOpacityProps} [...] - All standard TouchableOpacity props (e.g., `disabled`, `onPress`, etc.).
 *
 * @example
 * // Basic primary button
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 *
 * <Button appearance="base" size="md" onPress={() => console.log('Clicked!')}>
 *   Click Me
 * </Button>
 *
 * // Icon-only button with loading state
 * import { Button } from '@ledgerhq/ldls-ui-rnative';
 * import { ArrowRight } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <Button icon={ArrowRight} size="sm" loading={isLoading} disabled={isLoading} />
 *
 * // Full-width button with custom class
 * <Button appearance="accent" isFull={true} className="my-custom-class">
 *   Submit
 * </Button>
 */
export const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      className,
      children,
      appearance,
      size = 'md',
      isFull,
      loading,
      icon,
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

    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          className,
          buttonVariants({
            appearance,
            size,
            isFull,
            loading,
            iconOnly,
            disabled,
          }),
        )}
        disabled={disabled ?? false}
        activeOpacity={1}
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
              <Text className="line-clamp-2 text-left body-1-semi-bold">
                {children}
              </Text>
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
              <Text className="line-clamp-2 text-left body-1-semi-bold">
                {children}
              </Text>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  },
);
Button.displayName = 'Button';
