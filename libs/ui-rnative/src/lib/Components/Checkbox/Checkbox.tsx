import React from 'react';

import { BaseCheckboxIndicator, BaseCheckboxRoot } from './BaseCheckbox';

import { Check } from '../../Symbols';
import { CheckboxProps } from './types';
import { useControllableState } from '@ldls/utils-shared';

/**
 * A customizable checkbox component built on top of Radix UI Checkbox primitive.
 *
 * The checkbox follows the design system tokens and supports checked, unchecked,
 * disabled, and focus states with proper hover and active interactions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-checkbox--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-checkbox--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the checkbox's core appearance.
 *
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof BaseCheckboxRoot>,
  CheckboxProps
>(
  (
    {
      className,
      checked: checkedProp,
      onCheckedChange: onCheckedChangeProp,
      defaultChecked = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [checked, onCheckedChange] = useControllableState({
      prop: checkedProp,
      onChange: onCheckedChangeProp,
      defaultProp: defaultChecked,
    });

    return (
      <BaseCheckboxRoot
        ref={ref}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={className}
        {...props}
      >
        <BaseCheckboxIndicator>
          <Check size={16} />
        </BaseCheckboxIndicator>
      </BaseCheckboxRoot>
    );
  },
);

Checkbox.displayName = 'Checkbox';
