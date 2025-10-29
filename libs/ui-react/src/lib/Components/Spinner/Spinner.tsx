import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { IconSize } from '../../Components/Icon/Icon';
import { Spinner as SpinnerIcon } from '../../Symbols/Icons/Spinner';

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  size?: IconSize;
  appearance?: 'base' | 'accent';
};

const iconVariants = cva('shrink-0 animate-spin', {
  variants: {
    appearance: {
      base: 'text-base',
      accent: 'text-interactive',
    },
  },
  defaultVariants: {
    appearance: 'base',
  },
});

/**
 * A basic spinner component for loading states.
 *
 * @example
 * <Spinner />
 *
 * @default size 16
 * @default appearance 'base'
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 16, appearance = 'base', ...props }, ref) => {
    return (
      <SpinnerIcon
        size={size}
        className={cn(iconVariants({ appearance }), className)}
        ref={ref}
        aria-label='Loading'
        {...props}
      />
    );
  },
);
