import React from 'react';
import { cn } from '@ldls/utils-shared';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const defaultClassName = cn(
  'group flex h-24 max-h-24 w-40 max-w-40 items-center rounded-full p-2 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
  '[&[data-state=unchecked]:not([data-disabled])]:bg-muted-strong [&[data-state=unchecked]:not([data-disabled])]:hover:bg-muted-strong-hover [&[data-state=unchecked]:not([data-disabled])]:active:bg-muted-strong-pressed',
  '[&[data-state=checked]:not([data-disabled])]:bg-active [&[data-state=checked]:not([data-disabled])]:hover:bg-active-hover [&[data-state=checked]:not([data-disabled])]:active:bg-active-pressed',
  'data-[disabled]:bg-disabled',
);

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
>;

/**
 * A customizable switch component.
 *
 * When disabled, it shows disabled styles for both track and thumb.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs-components-switch-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-switch-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {string} [className] - Additional custom CSS classes to apply to the label. Do not use this prop to modify the component's core appearance.
 * @param {boolean} [defaultSelected] - The default selected state of the switch (uncontrolled).
 * @param {boolean} [selected] - The controlled selected state of the switch.
 * @param {(selected: boolean) => void} [onChange] - Event handler called when the selected state changes.
 * @param {boolean} [disabled] - If true, disables the switch.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [...] - All standard input props (e.g., `name`, `value`, `id`).
 *
 * @warning The `className` prop is applied to the label element. Use it for layout adjustments only.
 *
 * @example
 * // Basic switch
 * <Switch />
 *
 * @example
 * // Controlled switch with disabled state
 * import { useState } from 'react';
 * const [selected, setSelected] = useState(false);
 * <Switch selected={selected} onChange={(selected) => setSelected(selected)} disabled={someCondition} />
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  Omit<SwitchProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> & {
    selected?: boolean;
    defaultSelected?: boolean;
    onChange?: (selected: boolean) => void;
  }
>(({ className, selected, defaultSelected, onChange, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(defaultClassName, className)}
    checked={selected}
    defaultChecked={defaultSelected}
    onCheckedChange={onChange}
    {...props}
  >
    <SwitchPrimitive.Thumb className="h-20 w-20 translate-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out group-data-[state=checked]:translate-x-16 group-data-[disabled]:bg-base" />
  </SwitchPrimitive.Root>
));
Switch.displayName = 'Switch';
