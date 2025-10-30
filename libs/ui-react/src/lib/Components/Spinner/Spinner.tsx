import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { IconSize } from '../../Components/Icon/Icon';

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  /**
   * The size of the spinner icon in pixels.
   * @default 16
   */
  size?: IconSize;
  /**
   * The visual style of the spinner.
   * @default 'base'
   */
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
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 16, appearance = 'base', ...props }, ref) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        className={cn(iconVariants({ appearance }), className)}
        aria-label='Loading'
        role='img'
        ref={ref}
        {...props}
      >
        <path
          d='M8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8'
          stroke='currentColor'
          strokeWidth={1.5}
          strokeLinecap='round'
          fill='none'
        />
      </svg>
    );
  },
);
