import React from 'react';
import { cn } from '@ldls/utils-shared';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const defaultClassName = cn(
  'group flex h-24 max-h-24 w-40 max-w-40 items-center rounded-full p-2 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
  '[&[data-state=off]:not([data-disabled])]:bg-muted-strong [&[data-state=off]:not([data-disabled])]:hover:bg-muted-strong-hover [&[data-state=off]:not([data-disabled])]:active:bg-muted-strong-pressed',
  '[&[data-state=on]:not([data-disabled])]:bg-active [&[data-state=on]:not([data-disabled])]:hover:bg-active-hover [&[data-state=on]:not([data-disabled])]:active:bg-active-pressed',
  'data-[disabled]:bg-disabled',
);

export type ToggleProps = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
>;

/**
 * A customizable toggle switch component.
 *
 * When disabled, it shows disabled styles for both track and thumb.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs-components-toggle-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-toggle-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {string} [className] - Additional custom CSS classes to apply to the label. Do not use this prop to modify the component's core appearance.
 * @param {boolean} [defaultSelected] - The default selected state of the toggle (uncontrolled).
 * @param {boolean} [selected] - The controlled selected state of the toggle.
 * @param {(selected: boolean) => void} [onChange] - Event handler called when the selected state changes.
 * @param {boolean} [disabled] - If true, disables the toggle.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [...] - All standard input props (e.g., `name`, `value`, `id`).
 *
 * @warning The `className` prop is applied to the label element. Use it for layout adjustments only.
 *
 * @example
 * // Basic toggle
 * <Toggle />
 *
 * @example
 * // Small toggle with accent appearance
 * <Toggle appearance="accent" />
 *
 * @example
 * // Controlled toggle with disabled state
 * import { useState } from 'react';
 * const [selected, setSelected] = useState(false);
 * <Toggle selected={selected} onChange={(selected) => setSelected(selected)} disabled={someCondition} />
 */
export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  Omit<
    ToggleProps,
    | 'pressed'
    | 'defaultPressed'
    | 'onPressedChange'
    | 'defaultChecked'
    | 'defaultValue'
    | 'checked'
    | 'value'
  > & {
    selected?: boolean;
    defaultSelected?: boolean;
    onChange?: (selected: boolean) => void;
  }
>(({ className, selected, defaultSelected, onChange, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(defaultClassName, className)}
    pressed={selected}
    defaultPressed={defaultSelected}
    onPressedChange={onChange}
    {...props}
  >
    <span className="h-20 w-20 translate-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out group-data-[state=on]:translate-x-16" />
  </TogglePrimitive.Root>
));
Toggle.displayName = 'Toggle';
