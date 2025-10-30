import { cn } from '@ledgerhq/ldls-utils-shared';
import { forwardRef } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconSize } from '../../Components/Icon/Icon.types';

export type SpinnerProps = {
  /**
   * The size of the spinner icon in pixels.
   * @default 16
   */
  size?: IconSize;
  /**
   * Additional custom CSS classes to apply.
   */
  className?: string;
};

/**
 * A basic spinner component for loading states.
 *
 * @example
 * <Spinner />
 */
export const Spinner = forwardRef<Svg, SpinnerProps>(
  ({ className, size = 16, ...props }, ref) => {
    return (
      <View className='shrink-0 animate-spin'>
        <Svg
          className={cn('shrink-0 animate-spin text-base', className)}
          width={size}
          height={size}
          viewBox='0 0 16 16'
          fill='none'
          accessibilityLabel='Loading'
          ref={ref}
          {...props}
        >
          <Path
            d='M8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </Svg>
      </View>
    );
  },
);
