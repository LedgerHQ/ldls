import React, { forwardRef } from 'react';

import { cva } from 'class-variance-authority';
import { LabelProps } from './types';
import { Text } from 'react-native';
import { cn } from '../../utils';
<<<<<<< HEAD
=======

const REQUIRED_SYMBOL = '*';
>>>>>>> 64b1833 (fix(rnative): fix Label disabled state, bad props drill)

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
    { className, disabled = false, children, onPress, onLongPress, ...props },
    ref,
  ) => {
    return (
      <Text
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
        onLongPress={disabled ? undefined : onLongPress}
        className={cn(labelVariants({ disabled }), className)}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

Label.displayName = 'Label';
