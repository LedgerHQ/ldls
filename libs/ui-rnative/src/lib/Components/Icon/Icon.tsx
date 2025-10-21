import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { View } from 'react-native';
import { Svg } from 'react-native-svg';
import { cn } from '../../utils';
import { IconProps } from './Icon.types';

const iconVariants = cva('inline-block', {
  variants: {
    size: {
      12: 'icon-w-12 icon-h-12 icon-stroke-12',
      16: 'icon-w-16 icon-h-16 icon-stroke-16',
      20: 'icon-w-20 icon-h-20 icon-stroke-20',
      24: 'icon-w-24 icon-h-24 icon-stroke-24',
      40: 'icon-w-40 icon-h-40 icon-stroke-40',
      48: 'icon-w-48 icon-h-48 icon-stroke-48',
      56: 'icon-w-56 icon-h-56 icon-stroke-56',
    },
  },
  defaultVariants: {
    size: 24,
  },
});

export const Icon = forwardRef<Svg, IconProps>(
  ({ size = 24, className = '', children, viewBox, ...props }, ref) => {
    return (
      <View>
        <Svg
          ref={ref}
          className={cn(className, iconVariants({ size }), 'inline-block')}
          viewBox={viewBox}
          fill='none'
          {...props}
        >
          {children}
        </Svg>
      </View>
    );
  },
);

Icon.displayName = 'Icon';
