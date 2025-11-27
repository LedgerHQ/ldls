import { cva } from 'class-variance-authority';
import React from 'react';
import { Text, Pressable } from 'react-native';
import { cn } from '../../utils';
import { IconSize } from '../Icon';
import { Spinner } from '../Spinner';
import { BaseButtonProps } from './BaseButton.types';

const buttonVariants = {
  root: cva(
    'inline-flex size-fit flex-row items-center justify-center rounded-full transition-colors body-1-semi-bold',
    {
      variants: {
        appearance: {
          base: 'bg-interactive active:bg-interactive-pressed',
          gray: 'bg-muted active:bg-muted-pressed',
          accent: 'bg-accent active:bg-accent-pressed',
          transparent:
            'bg-muted-transparent active:bg-muted-transparent-pressed',
          'no-background': 'bg-transparent active:bg-base-transparent-pressed',
          red: 'bg-error active:bg-error-pressed',
        },
        size: {
          xs: 'px-12 py-8 body-2-semi-bold',
          sm: 'px-16 py-10 body-2-semi-bold',
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
        disabled: {
          true: 'bg-disabled text-disabled active:bg-disabled',
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
        {
          appearance: 'no-background',
          disabled: true,
          className: 'bg-base-transparent',
        },
      ],
      defaultVariants: {
        appearance: 'base',
        size: 'md',
        isFull: false,
        iconOnly: false,
        disabled: false,
      },
    },
  ),
  label: cva('line-clamp-2 text-left text-inherit body-1-semi-bold', {
    variants: {
      appearance: {
        base: 'text-on-interactive',
        accent: 'text-on-accent',
        red: 'text-error',
        gray: 'text-base',
        'no-background': 'text-base',
        transparent: 'text-base',
      },
      disabled: {
        true: 'text-disabled',
      },
    },
  }),
};

const iconVariants = cva('shrink-0', {
  variants: {
    appearance: {
      base: 'text-on-interactive',
      accent: 'text-on-accent',
      red: 'text-error',
      gray: 'text-base',
      'no-background': 'text-base',
      transparent: 'text-base',
    },
    disabled: {
      true: 'text-disabled',
    },
  },
});

/**
 * Base button component
 * @default appearance 'base'
 * @default size 'md'
 */
export const BaseButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  BaseButtonProps
>(
  (
    {
      className,
      children,
      appearance = 'base',
      size = 'md',
      isFull,
      loading,
      icon: IconProp,
      disabled,
      ...props
    },
    ref,
  ) => {
    const iconOnly = Boolean(IconProp && !children);

    const iconSizeMap: { [key: string]: IconSize } = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 24,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 24;

    return (
      <Pressable
        ref={ref}
        className={cn(
          className,
          buttonVariants.root({
            appearance,
            size,
            isFull,
            loading,
            iconOnly,
            disabled,
          }),
        )}
        disabled={disabled ?? false}
        {...props}
      >
        {loading && (
          <Spinner
            size={calculatedIconSize}
            className={iconVariants({ appearance, disabled })}
          />
        )}
        {!loading && IconProp && (
          <IconProp
            size={calculatedIconSize}
            className={iconVariants({ appearance, disabled })}
          />
        )}
        {children && (
          <Text className={buttonVariants.label({ appearance, disabled })}>
            {children}
          </Text>
        )}
      </Pressable>
    );
  },
);

BaseButton.displayName = 'BaseButton';
