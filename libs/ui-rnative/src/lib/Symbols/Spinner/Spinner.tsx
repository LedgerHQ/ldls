import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import Svg from 'react-native-svg';
import { IconSize } from '../../Components/Icon/Icon.types';
import { Spinner as SpinnerIcon } from '../Icons/Spinner';

export type SpinnerProps = {
  size?: IconSize;
  appearance?: 'base' | 'accent';
  className?: string;
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
export const Spinner = forwardRef<Svg, SpinnerProps>(
  ({ className, size = 16, appearance = 'base' }, ref) => {
    return (
      <SpinnerIcon
        size={size}
        className={cn(iconVariants({ appearance }), className)}
        ref={ref}
        accessibilityLabel='Loading'
      />
    );
  },
);
