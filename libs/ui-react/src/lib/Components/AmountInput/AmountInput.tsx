import React from 'react';
import { cn } from '@ldls/utils-shared';

export interface AmountInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** The fiat currency text (e.g. USD, EUR) */
  fiatText?: string;
  /** Position of the fiat text. Defaults to 'left' */
  fiatPosition?: 'left' | 'right';
  /** Additional class names to apply to the input element */
  className?: string;
}

const baseInputStyles = cn(
  'w-full min-w-0 bg-transparent outline-none heading-0 transition-colors caret-active py-12',
  'placeholder:text-muted-subtle',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-base-transparent disabled:text-disabled',
  '[&[aria-invalid="true"]]:text-error',
);

const fiatStyles = cn(
  'heading-0 pointer-events-none',
  'text-base',
  'group-has-[input:placeholder-shown]:text-muted-subtle',
  'group-has-[input:disabled]:text-disabled',
  'group-has-[input[aria-invalid="true"]]:text-error',
);

/**
 * AmountInput component for handling numeric input with fiat currency display.
 * The fiat text can be positioned either on the left or right side of the input.
 */
export const AmountInput = React.forwardRef<HTMLInputElement, AmountInputProps>(
  (
    {
      className,
      fiatText,
      fiatPosition = 'left',
      disabled,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn('bg-transparent group relative flex w-full items-center')}
      >
        {fiatText && fiatPosition === 'left' && (
          <span className={cn(fiatStyles, 'shrink-0')}>{fiatText}</span>
        )}

        <input
          ref={ref}
          type="text"
          inputMode="decimal"
          disabled={disabled}
          aria-invalid={ariaInvalid}
          className={cn(
            baseInputStyles,
            fiatPosition === 'right' && 'text-right',
            className,
          )}
          placeholder=" "
          {...props}
        />

        {fiatText && fiatPosition === 'right' && (
          <span className={cn(fiatStyles, 'shrink-0')}>{fiatText}</span>
        )}
      </div>
    );
  },
);

AmountInput.displayName = 'AmountInput';
