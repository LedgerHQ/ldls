import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

const suggestionKeyboardItemVariants = cva(
  'rounded-full px-16 py-8 text-base transition-colors body-2-semi-bold',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none cursor-default bg-disabled text-disabled active:bg-disabled',
        false: 'bg-muted text-base active:bg-muted-pressed',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface SuggestionKeyboardProps extends ViewProps {
  children: React.ReactNode;
}

export const SuggestionKeyboard = ({
  className,
  children,
  ...props
}: SuggestionKeyboardProps) => {
  return (
    <View
      className={cn(
        'flex flex-row items-center justify-between px-24',
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
};

export interface SuggestionKeyboardItemProps
  extends Omit<TouchableOpacityProps, 'disabled'> {
  children: React.ReactNode;
  /**
   * Whether the suggestion keyboard item is disabled.
   */
  disabled?: boolean;
}

export const SuggestionKeyboardItem = ({
  className,
  children,
  disabled,
  ...props
}: SuggestionKeyboardItemProps) => {
  return (
    <TouchableOpacity
      {...props}
      className={cn(
        className,
        suggestionKeyboardItemVariants({
          disabled,
        }),
      )}
      disabled={disabled ?? false}
      activeOpacity={1}
    >
      <Text
        className={cn(
          'body-2-semi-bold',
          disabled ? 'text-disabled' : 'text-base',
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
