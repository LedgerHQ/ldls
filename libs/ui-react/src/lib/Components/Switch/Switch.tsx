import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ledgerhq/ldls-utils-shared';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const switchVariants = cva(
  cn(
    'group flex items-center rounded-full p-2 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
    '[&[data-state=unchecked]:not([data-disabled])]:bg-muted-strong [&[data-state=unchecked]:not([data-disabled])]:hover:bg-muted-strong-hover [&[data-state=unchecked]:not([data-disabled])]:active:bg-muted-strong-pressed',
    '[&[data-state=checked]:not([data-disabled])]:bg-active [&[data-state=checked]:not([data-disabled])]:hover:bg-active-hover [&[data-state=checked]:not([data-disabled])]:active:bg-active-pressed',
    'data-[disabled]:bg-disabled',
  ),
  {
    variants: {
      size: {
        sm: 'h-16 max-h-16 w-24 max-w-24',
        lg: 'h-24 max-h-24 w-40 max-w-40',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

const thumbVariants = cva(
  'translate-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out group-data-[disabled]:bg-base',
  {
    variants: {
      size: {
        sm: 'size-12 group-data-[state=checked]:translate-x-8',
        lg: 'size-20 group-data-[state=checked]:translate-x-16',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);

export interface SwitchProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
      'onChange' | 'checked' | 'defaultChecked' | 'onCheckedChange'
    >,
    VariantProps<typeof switchVariants> {
  selected?: boolean;
  defaultSelected?: boolean;
  onChange?: (selected: boolean) => void;
}

/**
 * A customizable switch component.
 *
 * When disabled, it shows disabled styles for both track and thumb.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs-components-switch-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-switch-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {VariantProps<typeof switchVariants>} [size] - The size of the switch.
 * @param {boolean} [defaultSelected] - The default selected state of the switch (uncontrolled).
 * @param {boolean} [selected] - The controlled selected state of the switch.
 * @param {(selected: boolean) => void} [onChange] - Event handler called when the selected state changes.
 * @param {boolean} [disabled] - If true, disables the switch.
 * @param {string} [className] - Additional custom CSS classes to apply to the switch. Do not use this prop to modify the component's core appearance.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [...] - All standard input props (e.g., `name`, `value`, `id`).
 *
 * @warning The `className` prop is applied to the label element. Use it for layout adjustments only.
 *
 * @example
 * // Basic switch
 * <Switch />
 *
 * @example
 * // Controlled small switch with disabled state
 * import { useState } from 'react';
 * const [selected, setSelected] = useState(false);
 * <Switch size="sm" selected={selected} onChange={(selected) => setSelected(selected)} disabled={someCondition} />
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    { className, selected, defaultSelected, onChange, size = 'lg', ...props },
    ref,
  ) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(className, switchVariants({ size }))}
      checked={selected}
      defaultChecked={defaultSelected}
      onCheckedChange={onChange}
      {...props}
    >
      <SwitchPrimitive.Thumb className={thumbVariants({ size })} />
    </SwitchPrimitive.Root>
  ),
);
Switch.displayName = 'Switch';
