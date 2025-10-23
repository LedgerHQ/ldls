import { cva } from 'class-variance-authority';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Spinner } from '../../Symbols';
import { cn } from '../../utils';
import { IconSize } from '../Icon';
import { BaseButtonProps } from './BaseButton.types';

const buttonVariants = {
  root: cva(
    'body-1-semi-bold inline-flex size-fit cursor-pointer flex-row items-center justify-center gap-8 rounded-full transition-colors',
    {
      variants: {
        appearance: {
          base: 'bg-interactive text-on-interactive active:bg-interactive-pressed',
          gray: 'bg-muted active:bg-muted-pressed text-base',
          accent: 'bg-accent text-on-accent active:bg-accent-pressed',
          transparent:
            'bg-muted-transparent active:bg-muted-transparent-pressed text-base',
          'no-background':
            'active:bg-base-transparent-pressed bg-transparent text-base',
          red: 'bg-error text-error active:bg-error-pressed',
        },
        size: {
          sm: 'body-2-semi-bold px-16 py-12',
          md: 'px-16 py-12',
          lg: 'p-16',
        },
        isFull: {
          true: 'w-full',
        },
        loading: {
          true: '',
        },
        disabled: {
          true: 'bg-disabled text-disabled active:bg-disabled pointer-events-none cursor-default',
          false: '',
        },
      },
      compoundVariants: [
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
        disabled: false,
      },
    },
  ),
  label: cva('body-1-semi-bold line-clamp-2 text-left text-inherit'),
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
    const iconSizeMap: { [key: string]: IconSize } = {
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
            disabled,
          }),
        )}
        disabled={disabled ?? false}
        activeOpacity={1}
        {...props}
      >
        {loading ? (
          <>
            <Spinner
              size={calculatedIconSize}
              className='shrink-0 animate-spin text-inherit'
              aria-label='Loading'
            />
            {children && (
              <Text className={buttonVariants.label()}>{children}</Text>
            )}
          </>
        ) : (
          <>
            {IconComponent && (
              <IconComponent
                size={calculatedIconSize}
                className='shrink-0 text-inherit'
              />
            )}
            {children && (
              <Text className={buttonVariants.label()}>{children}</Text>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  },
);

BaseButton.displayName = 'BaseButton';
