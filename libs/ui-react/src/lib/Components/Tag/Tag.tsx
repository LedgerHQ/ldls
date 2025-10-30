import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { IconSize } from '../Icon/Icon';

const tagVariants = cva(
  'inline-flex items-center justify-center gap-4 rounded-xs',
  {
    variants: {
      appearance: {
        base: 'bg-muted-transparent text-base',
        gray: 'bg-muted-transparent text-muted',
        accent: 'bg-accent text-on-accent',
        success: 'bg-success text-success',
        error: 'bg-error text-error',
        warning: 'bg-warning text-warning',
        disabled: 'bg-disabled text-disabled',
      },
      size: {
        lg: 'px-8 py-4 body-3',
        sm: 'px-4 py-2 body-4',
      },
    },
    defaultVariants: {
      appearance: 'accent',
      size: 'lg',
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  /**
   * The appearance of the tag.
   * @default accent
   */
  appearance?:
    | 'base'
    | 'gray'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'disabled';
  /**
   * The size of the tag.
   * @default lg
   */
  size?: 'sm' | 'lg';
  /**
   * Icon component to render.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * Label text to display.
   * @required
   */
  label: string;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, appearance, size, icon, label, ...props }, ref) => {
    const iconSizeMap: { [key: string]: IconSize } = {
      lg: 16,
      sm: 12,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 16;
    const IconComponent = icon;

    return (
      <div
        className={cn(className, tagVariants({ appearance, size }))}
        ref={ref}
        {...props}
      >
        {IconComponent && (
          <IconComponent size={calculatedIconSize} className='shrink-0' />
        )}
        <span>{label}</span>
      </div>
    );
  },
);

Tag.displayName = 'Tag';
