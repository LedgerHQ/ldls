import { cn } from '@ledgerhq/ldls-utils-shared';
import { forwardRef } from 'react';
import Svg from 'react-native-svg';
import { Spinner as SpinnerIcon } from '../Icons/Spinner';

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
export const Spinner = forwardRef<Svg, SpinnerProps>(({ className }, ref) => {
  return (
    <SpinnerIcon
      ref={ref}
      className={cn('shrink-0 animate-spin', className)}
      aria-label='Loading'
    />
  );
});
