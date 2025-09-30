import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cva } from 'class-variance-authority';
import { IconSize } from '../Icon/Icon';
import React from 'react';
import { cn } from '../../utils';
import { Spinner } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex size-fit cursor-pointer flex-row items-center justify-center rounded-full transition-colors body-1-semi-bold',
  {
    variants: {
      appearance: {
        base: 'bg-interactive text-on-interactive active:bg-interactive-pressed',
        gray: 'bg-muted text-base active:bg-muted-pressed',
        accent: 'bg-accent text-on-accent active:bg-accent-pressed',
        transparent:
          'bg-muted-transparent text-base active:bg-muted-transparent-pressed',
        'no-background':
          'bg-transparent text-base active:bg-base-transparent-pressed',
        red: 'bg-error text-error active:bg-error-pressed',
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
        true: 'pointer-events-none cursor-default bg-disabled text-disabled active:bg-disabled',
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

export interface ButtonProps extends Omit<TouchableOpacityProps, 'disabled'> {
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
}

/**
 * A customizable button component that supports various appearances, sizes, full-width mode, loading states, and optional icons.
 *
 * When in loading state, it displays a spinner. If an icon is provided without children, it renders as an icon-only button.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-button--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-button--docs#dos-and-donts Guidelines}
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
              className="shrink-0 animate-spin"
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
              <IconComponent size={calculatedIconSize} className="shrink-0" />
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
