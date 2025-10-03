import React, { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import { LabelProps } from './types';
import { Text } from 'react-native';
import { cn } from 'src/lib/utils';

const REQUIRED_SYMBOL = '*';

const labelVariants = cva(['body-2'], {
  variants: {
    disabled: {
      true: 'text-disabled',
      false: 'text-base',
    },
  },
});

/**
 * A label that should be used to describe a form field.
 *
 * Either choices fields like checkbox, switch or radio.
 * Or text fields like input, textarea, select, etc.
 */
export const Label = forwardRef<React.ElementRef<typeof Text>, LabelProps>(
  (
    { className, disabled = false, required = false, children, ...props },
    ref,
  ) => {
    return (
      <Text
        disabled={disabled}
        onPress={disabled ? undefined : props.onPress}
        onLongPress={disabled ? undefined : props.onLongPress}
        className={cn(labelVariants({ disabled }), className)}
        {...props}
      >
        {children} {required && REQUIRED_SYMBOL}
      </Text>
    );
  },
);

Label.displayName = 'LabelProps';
