import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  /** Whether to use thousands separator */
  /** @default true */
  useThousandsSeparator?: boolean;
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
      useThousandsSeparator = true,
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

    /** Track previous value for animation trigger */
    const prevValueRef = useRef<string>(inputValue);

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

    // Font size calculation constants
    const MAX_FONT_SIZE = 48;
    const MIN_FONT_SIZE = 17;
    const SCALE_FACTOR = 2;

    function getFontSize(val: string): string {
      const digits = val.replace(/\D/g, '').length;
      // Max font 48px, min 17px
      const fontSize = Math.max(
        MIN_FONT_SIZE,
        MAX_FONT_SIZE - digits * SCALE_FACTOR,
      );
      return `${fontSize}px`;
    }

    const fontSize = useMemo(() => getFontSize(inputValue), [inputValue]);

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
      const cleaned = textFormatter(
        e.target.value,
        allowDecimals,
        useThousandsSeparator,
        maxIntegerLength,
        maxDecimalLength,
      );

      setInputValue(cleaned);
      onChange({ ...e, target: { ...e.target, value: cleaned } });

      // Trigger animation if value actually changes
      if (cleaned !== prevValueRef.current) {
        setIsChanging(true);
      }

      prevValueRef.current = cleaned;
    };

    return (
      <div
        className={cn(
          'group relative flex items-center justify-center transition-transform',
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
          <span
            className={cn(currencyStyles, 'shrink-0')}
            style={{ fontSize, letterSpacing: 'normal' }}
          >
            {currencyText}
          </span>
        )}

        {/* Hidden span mirrors input value */}
        <span
          ref={spanRef}
          className={cn('invisible absolute heading-0')}
          aria-hidden='true'
          style={{ fontSize, letterSpacing: 'normal' }}
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
          onAnimationEnd={() => setIsChanging(false)}
          className={cn(
            baseInputStyles,
            'h-56',
            isChanging && 'animate-translateFromRight',
            className,
          )}
          {...props}
          style={{ fontSize, letterSpacing: 'normal' }}
        />

        {currencyText && currencyPosition === 'right' && (
          <span
            className={cn(currencyStyles, 'shrink-0')}
            style={{ fontSize, letterSpacing: 'normal' }}
          >
            {currencyText}
          </span>
        )}
      </div>
    );
  },
);

AmountInput.displayName = 'AmountInput';
