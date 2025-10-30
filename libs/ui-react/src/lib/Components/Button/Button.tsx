import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

const buttonVariants = cva('', {
  variants: {
    size: {
      sm: 'px-16 py-12 body-2-semi-bold',
      md: 'px-16 py-12',
      lg: 'p-16',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ButtonProps
  extends Omit<BaseButtonProps, 'children' | 'size'> {
  /**
   * If true, shows a loading spinner and disables the button.
   * @default false
   */
  loading?: boolean;
  /**
   * The content of the button. This is required to ensure buttons always have a label.
   * @required
   */
  children: React.ReactNode;
  /**
   * The size variant of the button.
   * @default md
   */
  size?: 'sm' | 'md' | 'lg';
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
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, loading, disabled, children, size, icon, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        size={size}
        disabled={disabled}
        icon={icon}
        loading={loading}
        className={cn(buttonVariants({ size }), 'gap-8', className)}
        {...props}
      >
        {children}
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';
