import { cn } from '@ledgerhq/ldls-utils-shared';
import { forwardRef } from 'react';
import { Spinner as LibSpinner } from '../Icons/Spinner';

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  size?: 16 | 20 | 24;
  appearance?: 'accent'; // TODO: use cva later
};

/**
 * A basic spinner component for loading states.
 *
 * @example
 * <Spinner />
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className }, ref) => {
    return (
      <LibSpinner
        className={cn('shrink-0 animate-spin', className)}
        ref={ref}
        aria-label='Loading'
      />
    );
  },
);
