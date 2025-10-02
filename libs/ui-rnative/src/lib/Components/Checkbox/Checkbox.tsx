import React from 'react';

import { BaseCheckboxIndicator, BaseCheckboxRoot } from './BaseCheckbox';

import { Check } from 'src/lib/Symbols';
import { cva } from 'class-variance-authority';
import { CheckboxProps } from './types';
import { useControllableState } from '@ldls/utils-shared';

const checkboxVariants = {
  root: cva(
    [
      'size-20 shrink-0 rounded-xs transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
    ],
    {
      variants: {
        checked: { true: '', false: '' },
        disabled: { true: '', false: '' },
      },
      compoundVariants: [
        {
          checked: true,
          disabled: false,
          className:
            'bg-active text-on-accent hover:bg-active-hover active:bg-active-pressed',
        },
        {
          checked: false,
          disabled: false,
          className:
            'border border-muted bg-base hover:bg-base-hover active:bg-base-pressed',
        },
        {
          checked: true,
          disabled: true,
          className: 'bg-disabled text-disabled',
        },
        {
          checked: false,
          disabled: true,
          className: 'border-disabled bg-base',
        },
      ],
      defaultVariants: {
        checked: false,
        disabled: false,
      },
    },
  ),
  indicator: cva(['flex size-full items-center justify-center']),
};

/**
 * A customizable checkbox component built on top of Radix UI Checkbox primitive.
 *
 * The checkbox follows the design system tokens and supports checked, unchecked,
 * disabled, and focus states with proper hover and active interactions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-checkbox-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-checkbox-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {boolean} [checked] - The controlled checked state of the checkbox.
 * @param {boolean} [defaultChecked] - The default checked state (uncontrolled).
 * @param {function} [onCheckedChange] - Callback function called when the checked state changes.
 * @param {boolean} [disabled=false] - If true, the checkbox is disabled and cannot be interacted with.
 * @param {string} [name] - The name attribute for the checkbox input.
 * @param {string} [value] - The value attribute for the checkbox input.
 * @param {string} [className] - Additional custom CSS classes for the checkbox container.
 * @param {React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>} [...] - All other Radix Checkbox root props.
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
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * // Uncontrolled checkbox with default state
 * <Checkbox defaultChecked={true} />
 *
 * // Disabled checkbox
 * <Checkbox disabled checked={true} />
 *
 * // Form checkbox with name and value
 * <Checkbox
 *   name="terms"
 *   value="accepted"
 *   required
 *   onCheckedChange={(checked) => console.log('Terms accepted:', checked)}
 * />
 *
 * // With custom styling (layout only)
 * <Checkbox className="mr-8" />
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
        className={checkboxVariants.root({ className, checked, disabled })}
        {...props}
      >
        <BaseCheckboxIndicator className={checkboxVariants.indicator()}>
          <Check size={16} />
        </BaseCheckboxIndicator>
      </BaseCheckboxRoot>
    );
  },
);

Checkbox.displayName = 'Checkbox';
