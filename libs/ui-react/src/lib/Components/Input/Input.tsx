import React from 'react';
import { cn } from '@ldls/utils-shared';
import { DeleteCircleFill } from '../../Symbols';
import { BaseInput, type BaseInputProps } from './BaseInput';

export interface InputProps extends BaseInputProps {
  /** An optional error message displayed below the input */
  errorMessage?: string;
  /** Function to render custom content on the right side of the input */
  renderRightElement?: () => React.ReactNode;
  /** Function to clear the input via a clear button */
  onClear?: () => void;
}

/**
 * A customizable input component with floating label, clear button, error states, and focus/hover effects.
 *
 * The label floats up when the input is focused or has content using CSS-only animations.
 * A clear button (X icon) appears when onClear is provided and can be clicked to empty the input.
 * Error state is controlled via the standard `aria-invalid` attribute.
 * Error message is displayed below the input when errorMessage is provided.
 * The right element is rendered on the right side of the input when renderRightElement is provided.
 *
 * @example
 * // Basic input with floating label and clear button
 * <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} onClear={() => setTitle("")} />
 *
 * // Input with error state
 * <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} errorMessage="Invalid email" />
 *
 * // Input with right element
 * <Input
 *   label="Email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   renderRightElement={() => <InformationFill size={20} className="text-muted" />}
 * />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      renderRightElement,
      onClear,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isError = Boolean(props['aria-invalid'] || errorMessage);
    const hasContent = !!props.value && props.value.toString().length > 0;
    const showClearButton = hasContent && !disabled && onClear;

    // Generate error ID for aria-describedby
    const errorId = `${props.id || 'input'}-error`;

    return (
      <>
        <div className="relative w-full">
          <BaseInput
            ref={ref}
            disabled={disabled}
            aria-invalid={isError}
            aria-describedby={errorMessage ? errorId : undefined}
            className={className}
            {...props}
          />

          {showClearButton ? (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors hover:bg-muted-hover"
              aria-label="Clear input"
            >
              <DeleteCircleFill
                size={20}
                className={cn('text-muted', isError && 'text-error')}
              />
            </button>
          ) : renderRightElement ? (
            <div className="absolute right-12 top-1/2 -translate-y-1/2">
              {renderRightElement()}
            </div>
          ) : null}
        </div>

        {errorMessage && (
          <div
            id={errorId}
            className="mt-2 flex items-center gap-2 text-error body-3"
            role="alert"
          >
            <DeleteCircleFill size={16} className="flex-shrink-0 text-error" />
            <span>{errorMessage}</span>
          </div>
        )}
      </>
    );
  },
);

Input.displayName = 'Input';
