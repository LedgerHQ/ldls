import React from 'react';
import { BaseInput, type BaseInputProps } from './BaseInput';

export type InputProps = Omit<BaseInputProps, 'prefix'>;

/**
 * A customizable input component with floating label, clear button, error states, and focus/hover effects.
 *
 * The label floats up when the input is focused or has content using CSS-only animations.
 * A clear button (X icon) appears when onClear is provided and can be clicked to empty the input.
 * Error state is controlled via the standard `aria-invalid` attribute.
 * Error message is displayed below the input when errorMessage is provided.
 * The suffix element is rendered on the right side of the input when suffix is provided.
 *
 * @example
 * // Basic input with floating label and clear button
 * <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} onClear={() => setTitle("")} />
 *
 * // Input with error state
 * <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} errorMessage="Invalid email" />
 *
 * // Input with suffix element
 * <Input
 *   label="Email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   suffix={() => <InformationFill size={20} className="text-muted" />}
 * />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <BaseInput ref={ref} {...props} />;
  },
);

Input.displayName = 'Input';
