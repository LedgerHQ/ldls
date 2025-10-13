import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn, textFormatter } from '@ledgerhq/ldls-utils-shared';

export interface AmountInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix' | 'value' | 'onChange'
  > {
  /** The currency text (e.g. USD, EUR) */
  currencyText?: string;
  /** Position of the currency text. Defaults to 'left' */
  currencyPosition?: 'left' | 'right';
  /** Maximum length for integer part (before decimal) */
  /** @default 9 */
  maxIntegerLength?: number;
  /** Maximum length for decimal part (after decimal) */
  /** @default 9 */
  maxDecimalLength?: number;
  /** Allow decimal values */
  /** @default true */
  allowDecimals?: boolean;
  /** Additional class names */
  className?: string;
  /** The controlled value of the input (required) */
  value: string | number;
  /** Change handler (required) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const baseInputStyles = cn(
  'bg-transparent outline-none heading-0 transition-colors caret-active',
  'placeholder:text-muted-subtle text-base',
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-base-transparent disabled:text-disabled',
  '[&[aria-invalid="true"]]:text-error',
  '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
);

const currencyStyles = cn(
  'heading-0 cursor-text',
  'text-base',
  'group-has-[input:placeholder-shown]:text-muted-subtle',
  'group-has-[input:disabled]:text-disabled group-has-[input:disabled]:pointer-events-none',
  'group-has-[input[aria-invalid="true"]]:text-error',
);

/**
 * AmountInput component for handling numeric input with currency display.
 * This is a controlled component - both `value` and `onChange` props are required.
 * The currency text can be positioned either on the left or right side of the input.
 */
export const AmountInput = React.forwardRef<HTMLInputElement, AmountInputProps>(
  (
    {
      className,
      currencyText,
      currencyPosition = 'left',
      disabled,
      maxIntegerLength = 9,
      maxDecimalLength = 9,
      allowDecimals = true,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(value.toString());
    const [isChanging, setIsChanging] = useState(false);

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

    function getScaleClass(val: string): string {
      const digits = val.replace(/\D/g, '').length;
      
      if (digits <= 8) return 'scale-100';
      if (digits <= 12) return 'scale-75';
      if (digits <= 16) return 'scale-[0.6]';
      return 'scale-50';
    }

    const scaleClass = getScaleClass(inputValue);

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    // Keep width in sync with hidden span
    useLayoutEffect(() => {
      if (spanRef.current && inputRef.current) {
        const width = spanRef.current.offsetWidth;
        const pxToAdd = inputValue === '' ? 33 : 8;
        inputRef.current.style.width = `${width + pxToAdd}px`;
      }
    }, [inputValue]);

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const useThousandsSeparator = true;
      const cleaned = textFormatter(
        e.target.value,
        allowDecimals,
        useThousandsSeparator,
        maxIntegerLength,
        maxDecimalLength,
      );

      // Trigger animation for significant changes
      if (cleaned !== inputValue && cleaned.length > inputValue.length) {
        setIsChanging(true);
        setTimeout(() => setIsChanging(false), 200);
      }

      setInputValue(cleaned);
      onChange({ ...e, target: { ...e.target, value: cleaned } });
    };

    return (
      <div
        className={cn(
          'group relative flex items-center justify-center transition-transform',
          scaleClass,
        )}
        onPointerDown={() => {
          const input = inputRef.current;
          if (!input) return;
          window.requestAnimationFrame(() => {
            input.focus();
          });
        }}
      >
        {currencyText && currencyPosition === 'left' && (
          <span className={cn(currencyStyles, 'shrink-0')}>
            {currencyText}
          </span>
        )}

        {/* Hidden span mirrors input value */}
        <span
          ref={spanRef}
          className={cn('invisible absolute heading-0')}
          aria-hidden='true'
        >
          {inputValue}
        </span>

        <input
          ref={composeRefs(ref, inputRef)}
          type='text'
          inputMode='decimal'
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          className={cn(
            baseInputStyles,
            'h-56',
            isChanging && 'animate-translateFromRight',
            className,
          )}
          {...props}
        />

        {currencyText && currencyPosition === 'right' && (
          <span
            className={cn(currencyStyles, 'shrink-0')}
          >
            {currencyText}
          </span>
        )}
      </div>
    );
  },
);

AmountInput.displayName = 'AmountInput';
