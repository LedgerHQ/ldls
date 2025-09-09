import React from 'react';
import { cn } from '@ldls/utils-shared';

export interface AmountInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** The currency text (e.g. USD, EUR) */
  currencyText?: string;
  /** Position of the currency text. Defaults to 'left' */
  currencyPosition?: 'left' | 'right';
  /** Additional class names to apply to the input element */
  className?: string;
}

const baseInputStyles = cn(
  'bg-transparent outline-none heading-0 transition-colors caret-active py-12',
  'placeholder:text-muted-subtle',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-base-transparent disabled:text-disabled',
  '[&[aria-invalid="true"]]:text-error',
  '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
);

const currencyStyles = cn(
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
      currencyText,
      currencyPosition = 'left',
      disabled,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('bg-transparent group relative flex items-center')}>
        {currencyText && currencyPosition === 'left' && (
          <span className={cn(currencyStyles, 'shrink-0')}>{currencyText}</span>
        )}

        <input
          ref={ref}
          type="number"
          disabled={disabled}
          aria-invalid={ariaInvalid}
          className={cn(
            baseInputStyles,
            currencyPosition === 'right' && 'text-right',
            className,
          )}
          {...props}
        />

        {currencyText && currencyPosition === 'right' && (
          <span className={cn(currencyStyles, 'shrink-0')}>{currencyText}</span>
        )}
      </div>
    );
  },
);

AmountInput.displayName = 'AmountInput';
