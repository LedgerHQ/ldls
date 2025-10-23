import { cva } from 'class-variance-authority';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Spinner } from '../../Symbols';
import { cn } from '../../utils';
import { IconSize } from '../Icon';
import { BaseButtonProps } from './BaseButton.types';

const buttonVariants = {
  root: cva(
    'inline-flex size-fit cursor-pointer flex-row items-center justify-center rounded-full transition-colors body-1-semi-bold',
    {
      variants: {
        appearance: {
          base: 'bg-interactive text-on-interactive active:bg-interactive-pressed',
          gray: 'bg-muted text-base active:bg-muted-pressed',
          accent: 'bg-accent text-on-accent active:bg-accent-pressed',
          transparent:
            'bg-muted-transparent text-base active:bg-muted-transparent-pressed',
          'no-background':
            'bg-transparent text-base active:bg-base-transparent-pressed',
          red: 'bg-error text-error active:bg-error-pressed',
        },
        size: {
          xs: 'px-12 py-8 body-2-semi-bold',
          sm: 'px-16 py-12 body-2-semi-bold',
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
          true: 'pointer-events-none cursor-default bg-disabled text-disabled active:bg-disabled',
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
  label: cva('line-clamp-2 text-left text-inherit body-1-semi-bold'),
};

export const BaseButton = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  BaseButtonProps
>(
  (
    {
      className,
      children,
      appearance,
      size = 'md',
      isFull,
      loading,
      icon,
      disabled,
      ...props
    },
    ref,
  ) => {
    const iconOnly = Boolean(icon && !children);

    const iconSizeMap: { [key: string]: IconSize } = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 24,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 24;
    const IconComponent = icon;

    return (
      <TouchableOpacity
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
        activeOpacity={1}
        {...props}
      >
        {loading && (
          <Spinner
            size={calculatedIconSize}
            className='shrink-0 animate-spin text-inherit'
            aria-label='Loading'
          />
        )}
        {!loading && IconComponent && (
          <IconComponent
            size={calculatedIconSize}
            className='shrink-0 text-inherit'
          />
        )}
        {children && <Text className={buttonVariants.label()}>{children}</Text>}
      </TouchableOpacity>
    );
  },
);

BaseButton.displayName = 'BaseButton';
