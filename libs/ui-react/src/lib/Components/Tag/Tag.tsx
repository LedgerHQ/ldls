import { cn } from '@ledgerhq/lumen-utils-shared';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { IconSize } from '../Icon/Icon';
import { TagProps } from './Tag.types';

const tagVariants = cva(
  'rounded-xs inline-flex items-center justify-center gap-4',
  {
    variants: {
      appearance: {
        base: 'bg-muted-transparent text-base',
        gray: 'bg-muted-transparent text-muted',
        accent: 'bg-accent text-on-accent',
        success: 'bg-success text-success',
        error: 'bg-error text-error',
        warning: 'bg-warning text-warning',
      },
      size: {
        lg: 'body-3 px-8 py-4',
        sm: 'body-4 px-4 py-2',
      },
      disabled: {
        true: 'bg-disabled text-disabled',
        false: '',
      },
    },
    defaultVariants: {
      appearance: 'accent',
      size: 'lg',
      disabled: false,
    },
  },
);

export const Tag = React.forwardRef<
  HTMLDivElement,
  TagProps & VariantProps<typeof tagVariants>
>(({ className, appearance, size, icon, label, disabled, ...props }, ref) => {
  const iconSizeMap: { [key: string]: IconSize } = {
    lg: 16,
    sm: 12,
  };

  const calculatedIconSize = size ? iconSizeMap[size] : 16;
  const IconComponent = icon;

  return (
    <div
      className={cn(className, tagVariants({ appearance, size, disabled }))}
      ref={ref}
      {...props}
    >
      {IconComponent && (
        <IconComponent size={calculatedIconSize} className='shrink-0' />
      )}
      <span>{label}</span>
    </div>
  );
});

Tag.displayName = 'Tag';
