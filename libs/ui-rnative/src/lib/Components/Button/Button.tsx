import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconSize } from '../Icon/Icon';
import React from 'react';
import { cn } from '@ldls/utils-shared';
import { Spinner } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-fit cursor-pointer items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-focus focus-visible:ring-2 disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
  {
    variants: {
      appearance: {
        base: 'bg-interactive text-on-interactive hover:bg-interactive-hover active:bg-interactive-pressed',
        gray: 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed',
        accent:
          'bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-pressed',
        transparent:
          'bg-muted-transparent text-base hover:bg-muted-transparent-hover active:bg-muted-transparent-pressed',
        'no-background':
          'bg-transparent text-base hover:bg-base-transparent-hover active:bg-base-transparent-pressed disabled:bg-base-transparent',
        red: 'bg-error text-error hover:bg-error-hover active:bg-error-pressed',
      },
      size: {
        xs: 'px-12 py-8 body-2-semi-bold',
        sm: 'px-16 py-8 body-2-semi-bold',
        md: 'px-16 py-12',
        lg: 'p-16',
      },
      isFull: {
        true: 'w-full',
      },
      loading: {
        true: '',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        iconOnly: true,
        className: 'p-8',
      },
      {
        size: 'sm',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'md',
        iconOnly: true,
        className: 'p-12',
      },
      {
        size: 'lg',
        iconOnly: true,
        className: 'p-16',
      },
      {
        iconOnly: false,
        className: 'gap-8',
      },
    ],
    defaultVariants: {
      appearance: 'base',
      size: 'md',
      isFull: false,
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
}

export const Button = React.forwardRef<typeof TouchableOpacity, ButtonProps>(
  (
    {
      className,
      children,
      appearance,
      size = 'md',
      isFull,
      loading,
      icon,
      ...props
    },
    ref,
  ) => {
    const iconOnly = Boolean(icon && !children);

    const iconSizeMap: { [key: string]: IconSize } = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 40,
      xl: 48,
      xxl: 56,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 24;
    const IconComponent = icon;

    return (
      <TouchableOpacity
        ref={ref as any}
        className={cn(
          className,
          buttonVariants({
            appearance,
            size,
            isFull,
            loading,
            iconOnly,
          }),
        )}
        disabled={props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <Spinner
              size={calculatedIconSize}
              className="flex-shrink-0 animate-spin"
              aria-label="Loading"
            />
            {children && (
              <Text className="line-clamp-2 text-left">{children}</Text>
            )}
          </>
        ) : (
          <>
            {IconComponent && (
              <IconComponent
                size={calculatedIconSize}
                className="flex-shrink-0"
              />
            )}
            {children && (
              <Text className="line-clamp-2 text-left">{children}</Text>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  },
);
Button.displayName = 'Button';
