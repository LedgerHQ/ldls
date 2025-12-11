import { cn } from '@ledgerhq/lumen-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';
import { View, Text } from 'react-native';
import { IconSize } from '../Icon';
import { TagProps } from './Tag.types';

const tagVariants = {
  root: cva(
    'inline-flex w-fit flex-row items-center justify-center gap-4 rounded-xs',
    {
      variants: {
        appearance: {
          base: 'bg-muted-transparent',
          gray: 'bg-muted-transparent',
          accent: 'bg-accent',
          success: 'bg-success',
          error: 'bg-error',
          warning: 'bg-warning',
          disabled: 'bg-disabled',
        },
        size: {
          lg: 'h-24 px-8 py-4 body-3',
          sm: 'h-20 px-4 py-2 body-4',
        },
      },
      defaultVariants: {
        appearance: 'accent',
        size: 'lg',
      },
    },
  ),
  inner: cva('', {
    variants: {
      appearance: {
        base: 'text-base',
        gray: 'text-muted',
        accent: 'text-on-accent',
        success: 'text-success',
        error: 'text-error',
        warning: 'text-warning',
        disabled: 'text-disabled',
      },
    },
  }),
};

export const Tag = React.forwardRef<View, TagProps>(
  ({ className, appearance, size, icon, label, ...props }, ref) => {
    const iconSizeMap: { [key: string]: IconSize } = {
      lg: 16,
      sm: 12,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 16;
    const IconComponent = icon;

    return (
      <View
        className={cn(className, tagVariants.root({ appearance, size }))}
        ref={ref}
        {...props}
      >
        {IconComponent && (
          <IconComponent
            size={calculatedIconSize}
            className={tagVariants.inner({ appearance, className: 'shrink-0' })}
          />
        )}
        <Text className={tagVariants.inner({ appearance })}>{label}</Text>
      </View>
    );
  },
);

Tag.displayName = 'Tag';
