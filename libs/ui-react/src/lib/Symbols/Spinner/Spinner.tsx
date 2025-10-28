import { cn } from '@ledgerhq/ldls-utils-shared';
import { forwardRef } from 'react';
import { IconSize } from '../../Components/Icon/Icon';
import { Spinner as SpinnerIcon } from '../Icons/Spinner';

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  size?: IconSize;
  appearance?: 'base' | 'accent'; // TODO: use cva later
};

/**
 * A basic spinner component for loading states.
 *
 * @example
 * <Spinner />
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 16, appearance = 'base', ...props }, ref) => {
    return (
      <SpinnerIcon
        size={size}
        className={cn(
          'shrink-0 animate-spin',
          {
            'text-on-accent': appearance === 'base',
            'text-on-interactive': appearance === 'accent',
          },
          className,
        )}
        ref={ref}
        aria-label='Loading'
        {...props}
      />
    );
  },
);
