import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { BaseInput, type BaseInputProps } from '../BaseInput';

export type TextInputProps = Omit<BaseInputProps, 'prefix'>;

/**
 * A customizable input component with floating label, automatic clear button, error states, and focus/blur effects.
 *
 * ## Key Features
 * - **Automatic clear button** appears when input has content
 * - **Floating label** with smooth animations
 * - **Suffix elements** for icons, buttons, or custom content
 * - **Error state styling** with errorMessage support
 * - **Container-based spacing** with padding and gap for clean layout
 * - **Flexible styling** via className, inputClassName, and labelClassName
 * - **React Native TextInput** with proper mobile behavior
 *
 * ## Clear Button Behavior
 * - Shows automatically when input has content and is not disabled
 * - Works with both controlled and uncontrolled inputs
 * - Can be hidden with `hideClearButton={true}`
 * - Extended behavior via optional `onClear` prop
 *
 * ## Layout & Spacing
 * Uses container-based spacing (px-16 padding + gap-8) for consistent element positioning.
 * Suffix elements are automatically hidden when clear button appears.
 *
 *
 * @example
 * // Basic input with automatic clear button
 * <TextInput label="Title" value={title} onChangeText={setTitle} />
 *
 * // Input with error state
 * <TextInput
 *   label="Email"
 *   value={email}
 *   onChangeText={setEmail}
 *   errorMessage="Please enter a valid email address"
 * />
 *
 * // Input with suffix element
 * <TextInput
 *   label="Search"
 *   value={query}
 *   onChangeText={setQuery}
 *   suffix={<SearchIcon size={20} className="text-muted" />}
 *   hideClearButton={true} // Keep suffix visible
 * />
 *
 * // Extend clear behavior with analytics
 * <TextInput
 *   label="Username"
 *   value={username}
 *   onChangeText={setUsername}
 *   onClear={() => {
 *     analytics.track('username_cleared');
 *   }}
 * />
 */
export const TextInput = React.forwardRef<
  React.ElementRef<typeof RNTextInput>,
  TextInputProps
>((props, ref) => {
  return <BaseInput ref={ref} {...props} />;
});

TextInput.displayName = 'TextInput';
