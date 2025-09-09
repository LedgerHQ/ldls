import React, {
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@ldls/utils-shared';

export interface AmountInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** The currency text (e.g. USD, EUR) */
  currencyText?: string;
  /** Position of the currency text. Defaults to 'left' */
  currencyPosition?: 'left' | 'right';
  /** Maximum character length */
  maxLength?: number;
  /** Allow decimal values */
  allowDecimals?: boolean;
  /** Additional class names */
  className?: string;
}

const baseInputStyles = cn(
  'bg-transparent outline-none heading-0 transition-colors caret-active',
  'placeholder:text-muted-subtle',
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
      maxLength = 12,
      allowDecimals = true,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(value?.toString() ?? '');

    // Forward the internal ref properly with types
    useImperativeHandle<HTMLInputElement | null, HTMLInputElement>(
      ref,
      () => inputRef.current!,
      [],
    );

    // Keep width in sync with hidden span
    useLayoutEffect(() => {
      if (spanRef.current && inputRef.current) {
        const width = spanRef.current.offsetWidth;
        console.log('width', width);
        const pxToAdd = inputValue === '' ? 33 : 8;
        inputRef.current.style.width = `${width + pxToAdd}px`;
      }
    }, [inputValue]);

    useEffect(() => {
      if (value !== undefined && value !== null) {
        setInputValue(value.toString());
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const cleaned = allowDecimals
        ? raw.replace(/[^\d.]/g, '')
        : raw.replace(/\D/g, '');
      if (cleaned.replace(/\D/g, '').length <= maxLength) {
        setInputValue(cleaned);
        onChange?.({ ...e, target: { ...e.target, value: cleaned } });
      }
    };

    return (
      <div
        className="group relative flex items-center justify-center"
        onPointerDown={() => {
          const input = inputRef.current;
          if (!input) return;
          window.requestAnimationFrame(() => {
            input.focus();
          });
        }}
      >
        {currencyText && currencyPosition === 'left' && (
          <span className={cn(currencyStyles, 'shrink-0')}>{currencyText}</span>
        )}

        {/* Hidden span mirrors input value */}
        <span
          ref={spanRef}
          className={cn('invisible absolute heading-0')}
          aria-hidden="true"
        >
          {inputValue}
        </span>

        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          className={cn(baseInputStyles, className)}
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
