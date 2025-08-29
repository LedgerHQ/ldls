import React from 'react';
import { cn } from '@ldls/utils-shared';
import { DeleteCircleFill } from '../../Symbols';

const baseRootStyles = cn(
  'group relative flex h-48 w-full items-center rounded-md bg-muted transition-colors',
  'hover:bg-muted-hover focus-within:ring-2 focus-within:ring-active',
  'has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:bg-disabled has-[:disabled]:text-disabled',
  'has-[:invalid]:ring-1 has-[:invalid]:ring-error has-[:invalid]:border-error',
  'has-[input[aria-invalid="true"]]:ring-1 has-[input[aria-invalid="true"]]:ring-error has-[input[aria-invalid="true"]]:border-error',
);

const baseInputStyles = cn(
  'peer flex-1 bg-transparent pl-16 text-base outline-none body-2 transition-colors bg-muted rounded-md',
  'group-hover:bg-muted-hover group-disabled:bg-disabled',
  'group-has-[:disabled]:pointer-events-none group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:bg-disabled group-has-[:disabled]:text-disabled',
  'placeholder:text-transparent',
);

const baseLabelStyles = cn(
  'pointer-events-none absolute left-16 top-8 origin-left text-muted transition-all duration-300 body-4',
  'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:body-2',
  'group-has-[:disabled]:text-disabled',
  'peer-focus:top-8 peer-focus:-translate-y-0 peer-focus:body-4',
);

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The label text that floats above the input when focused or filled */
  label?: string;
  /** Additional class names to apply to the input */
  className?: string;
  /** An optional error message displayed below the input */
  errorMessage?: string;
  /**
   * Custom content to render on the right side of the input.
   * @example rightElement={<Icon />}
   */
  rightElement?: React.ReactNode;
  /**
   * Custom content to render on the left side of the input.
   * @example leftElement={<Icon />}
   */
  leftElement?: React.ReactNode;
  /** Function to clear the input via a clear button */
  onClear?: () => void;
}

/**
 * Base input component with floating label and error state styling.
 * This is an internal component used to build other input components.
 *
 * @internal
 */

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      className,
      label,
      id,
      disabled,
      errorMessage,
      rightElement,
      leftElement,
      onClear,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const reactId = React.useId();
    const inputId = id || `input-${reactId}`;

    // Handle aria-invalid properly - use provided value or derive from errorMessage
    const ariaInvalid = props['aria-invalid']
      ? props['aria-invalid']
      : errorMessage
        ? true
        : undefined;

    const hasContent = !!props.value && props.value.toString().length > 0;
    const showClearButton = hasContent && !disabled && onClear;

    const errorId = `${inputId}-error`;

    /** TODO: move to ui-core */
    function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
      return (node: T) => {
        refs.forEach((ref) => {
          if (!ref) return;
          if (typeof ref === 'function') {
            ref(node);
          } else {
            (ref as React.MutableRefObject<T | null>).current = node;
          }
        });
      };
    }

    return (
      <div>
        <div
          className={cn(className, baseRootStyles)}
          onPointerDown={(event: React.PointerEvent<HTMLDivElement>) => {
            const target = event.target as Element;
            if (target.closest('input, button, a')) return;

            const input = inputRef.current;
            if (!input) return;

            const isRightElement = target.closest('[data-side="right"]');
            const cursorPosition = isRightElement ? input.value.length : 0;

            window.requestAnimationFrame(() => {
              try {
                input.setSelectionRange(cursorPosition, cursorPosition);
              } catch {
                // setSelectionRange is not supported on all input types
              }
              input.focus();
            });
          }}
        >
          {leftElement && (
            <div data-side="left" className="ml-16">
              {leftElement}
            </div>
          )}

          <input
            ref={composeRefs(ref, inputRef)}
            id={inputId}
            disabled={disabled}
            placeholder=" "
            aria-invalid={ariaInvalid}
            aria-describedby={errorMessage ? errorId : undefined}
            className={cn(
              baseInputStyles,
              label && 'pt-16',
              rightElement && 'pr-8',
              leftElement && 'pl-8',
            )}
            {...(({ 'aria-invalid': _, ...rest }) => rest)(props)}
          />

          {label && (
            <label htmlFor={inputId} className={baseLabelStyles}>
              {label}
            </label>
          )}

          {showClearButton && (
            /** TODO: extract to a new component IconButton */
            <button
              type="button"
              onClick={onClear}
              className="mr-16 cursor-pointer rounded-full"
              aria-label="Clear input"
              data-side="right"
            >
              <DeleteCircleFill
                size={20}
                className={cn('text-muted', ariaInvalid && 'text-error')}
              />
            </button>
          )}

          {rightElement && !showClearButton && (
            <div className="mr-16" data-side="right">
              {rightElement}
            </div>
          )}
        </div>
        {errorMessage && (
          <div
            id={errorId}
            className="mt-8 flex items-center gap-2 text-error body-3"
            role="alert"
          >
            <DeleteCircleFill size={16} className="flex-shrink-0 text-error" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  },
);

BaseInput.displayName = 'BaseInput';
