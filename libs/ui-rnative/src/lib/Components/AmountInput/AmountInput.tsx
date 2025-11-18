import { cn, getFontSize, textFormatter } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  type TextInputProps,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  Pressable,
} from 'react-native';

export type AmountInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText'
> & {
  /**
   * The controlled value of the input
   * @required
   */
  value: string | number;
  /**
   * Change handler
   * @required
   */
  onChangeText: (text: string) => void;
  /**
   * The currency text (e.g. USD, EUR)
   */
  currencyText?: string;
  /**
   * Position of the currency text.
   * @default 'left'
   */
  currencyPosition?: 'left' | 'right';
  /**
   * Maximum length for integer part (before decimal)
   * @default 9
   */
  maxIntegerLength?: number;
  /**
   * Maximum length for decimal part (after decimal)
   * @default 9
   */
  maxDecimalLength?: number;
  /**
   * Allow decimal values
   * @default true
   */
  allowDecimals?: boolean;
  /**
   * Additional class names
   */
  className?: string;
  /**
   * Whether to use thousands separator (e.g. 1 000 for 1000)
   * @default true
   */
  thousandsSeparator?: boolean;
  /**
   * Mark input as invalid (e.g. for error display)
   * @default false
   */
  isInvalid?: boolean;
};

const inputStyles = cva(
  [
    'caret-active heading-0 h-56 bg-transparent text-base outline-none transition-colors',
  ],
  {
    variants: {
      isChanging: {
        true: 'animate-translate-from-right',
        false: '',
      },
    },
    defaultVariants: {
      isChanging: false,
    },
  },
);

const currencyStyles = cn('shrink-0 heading-0 cursor-text text-base');

/**
 * AmountInput component for handling numeric input with currency display.
 * This is a controlled component - both `value` and `onChange` props are required.
 * The currency text can be positioned either on the left or right side of the input.
 */
export const AmountInput = React.forwardRef<TextInput, AmountInputProps>(
  (
    {
      className,
      currencyText,
      currencyPosition = 'left',
      editable,
      maxIntegerLength = 9,
      maxDecimalLength = 9,
      allowDecimals = true,
      thousandsSeparator = true,
      value,
      onChangeText,
      isInvalid = false,
      ...props
    },
    ref,
  ) => {
    const spanRef = useRef<Text>(null);
    const inputRef = useRef<TextInput>(null);
    const [inputValue, setInputValue] = useState(value.toString());
    const [isChanging, setIsChanging] = useState(false);

    // track previous value for animation trigger
    const prevValueRef = useRef<string>(inputValue);

    const fontSize = useMemo(() => getFontSize(inputValue), [inputValue]);

    // keep width in sync with hidden span
    // useLayoutEffect(() => {
    //   if (spanRef.current && inputRef.current) {
    //     const spanElement = spanRef.current as unknown as HTMLElement;
    //     const inputElement = inputRef.current as unknown as HTMLInputElement;
    //     const width = spanElement.offsetWidth;
    //     const pxToAdd = inputValue === '' ? 33 : 8;
    //     inputElement.style.width = `${width + pxToAdd}px`;
    //   }
    // }, [inputValue]);

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    // reset animation state after animation duration
    useEffect(() => {
      if (!isChanging) return;

      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 300);
      return () => clearTimeout(timer);
    }, [isChanging]);

    const handleChange = (
      e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
      const cleaned = textFormatter(e.nativeEvent.text, {
        allowDecimals,
        thousandsSeparator,
        maxIntegerLength,
        maxDecimalLength,
      });

      setInputValue(cleaned);
      onChangeText(cleaned);

      // trigger animation if value actually changes
      if (cleaned !== prevValueRef.current) {
        setIsChanging(true);
      }

      prevValueRef.current = cleaned;
    };

    return (
      <View
        ref={ref}
        className='group relative flex items-center justify-center transition-transform'
      >
        <Pressable
          onPressIn={() => {
            const input = inputRef.current;
            if (!input) return;
            // window.requestAnimationFrame(() => {
            //   input.focus();
            // });
          }}
        >
          {currencyText && currencyPosition === 'left' && (
            <Text
              className={cn(
                currencyStyles,
                !editable && 'text-disabled',
                isInvalid && 'text-error',
              )}
              style={{ fontSize }}
            >
              {currencyText}
            </Text>
          )}

          {/* Hidden span mirrors input value */}
          <Text
            ref={spanRef}
            className={cn('invisible absolute heading-0')}
            accessible={false}
            style={{ fontSize }}
          >
            {inputValue}
          </Text>

          <TextInput
            ref={inputRef}
            keyboardType='decimal-pad'
            editable={editable}
            value={inputValue}
            onChange={handleChange}
            className={cn(
              inputStyles({ isChanging }),
              isInvalid && 'text-error',
              !editable && 'bg-base-transparent text-disabled',
              className,
            )}
            {...props}
            style={{ fontSize }}
          />

          {currencyText && currencyPosition === 'right' && (
            <Text className={cn(currencyStyles)} style={{ fontSize }}>
              {currencyText}
            </Text>
          )}
        </Pressable>
      </View>
    );
  },
);

AmountInput.displayName = 'AmountInput';
