import React from 'react';

import { BaseCheckboxIndicator, BaseCheckboxRoot } from './BaseCheckbox';

import { Check } from '../../Symbols';
import { CheckboxProps } from './types';
import { useControllableState } from '../../utils';
import { Label } from '../Label';
import { View } from 'react-native';
import { cva } from 'class-variance-authority';

const checkboxVariants = {
  root: cva(['flex flex-row items-center gap-8']),
};

/**
 * The checkbox follows the design system tokens and supports checked, unchecked,
 * disabled, and focus states with proper hover and active interactions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-checkbox--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-checkbox--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the checkbox's core appearance.
 *
 * @example
 * import { Checkbox } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic controlled checkbox
 * const [checked, setChecked] = useState(false);
 * <Checkbox
 *   label="My label"
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * // Uncontrolled checkbox with default state
 * <Checkbox defaultChecked={true} onCheckedChange={handleChange} />
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
      label,
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
      <View className={checkboxVariants.root({ className })}>
        <BaseCheckboxRoot
          ref={ref}
          disabled={disabled}
          checked={checked}
          onCheckedChange={onCheckedChange}
          {...props}
        >
          <BaseCheckboxIndicator>
            <Check size={16} />
          </BaseCheckboxIndicator>
        </BaseCheckboxRoot>
        {label && (
          <Label disabled={disabled} onPress={() => onCheckedChange(!checked)}>
            {label}
          </Label>
        )}
      </View>
    );
  },
);

Checkbox.displayName = 'Checkbox';
