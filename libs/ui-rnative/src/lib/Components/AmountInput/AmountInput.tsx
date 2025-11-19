import { cn, getFontSize, textFormatter } from '@ledgerhq/ldls-utils-shared';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';

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

const inputStyles = cn(
  'caret-active heading-0 h-56 bg-transparent text-base outline-none transition-colors',
);
const currencyStyles = cn('shrink-0 heading-0 cursor-text text-base');

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

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
      editable = true,
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

    const prevValueRef = useRef<string>(inputValue);

    const translateX = useSharedValue(0);
    const animatedFontSize = useSharedValue(getFontSize(inputValue));

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

    const animatedInputStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      fontSize: animatedFontSize.value,
      // lineHeight: 56,
    }));
    const animatedCurrencyStyle = useAnimatedStyle(() => ({
      fontSize: animatedFontSize.value,
      // lineHeight: 56,
    }));

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    useEffect(() => {
      const newFontSize = getFontSize(inputValue);

      if (inputValue !== prevValueRef.current) {
        translateX.value = withSequence(
          withTiming(10, { duration: 0 }),
          withTiming(0, {
            duration: 300,
            easing: Easing.out(Easing.cubic),
          }),
        );
      }
      animatedFontSize.value = withTiming(newFontSize, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });

      prevValueRef.current = inputValue;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    const handleChangeText = (text: string) => {
      textFormatter(text, {
        allowDecimals,
        thousandsSeparator,
        maxIntegerLength,
        maxDecimalLength,
      });

      setInputValue(text);
      onChangeText(text);
    };

    return (
      <View
        ref={ref}
        className='group relative flex flex-row items-center justify-center transition-transform'
      >
        {currencyText && currencyPosition === 'left' && (
          <Animated.Text
            className={cn(
              currencyStyles,
              !editable && 'text-disabled',
              inputValue !== '' ? 'text-base' : 'text-muted-subtle', // TODO: move this to cva potentially
              isInvalid && 'text-error',
            )}
            style={animatedCurrencyStyle}
          >
            {currencyText}
          </Animated.Text>
        )}

        <Animated.Text
          ref={spanRef}
          className={cn('invisible absolute heading-0')}
          accessible={false}
          style={animatedCurrencyStyle}
        >
          {inputValue}
        </Animated.Text>

        <AnimatedTextInput
          ref={inputRef}
          keyboardType='decimal-pad'
          editable={editable}
          value={inputValue}
          onChangeText={handleChangeText}
          className={cn(
            inputStyles,
            isInvalid && 'text-error',
            !editable && 'bg-base-transparent text-disabled',
            className,
          )}
          {...props}
          style={animatedInputStyle}
        />

        {currencyText && currencyPosition === 'right' && (
          <Animated.Text
            className={cn(
              currencyStyles,
              isInvalid && 'text-error',
              inputValue !== '' ? 'text-base' : 'text-muted-subtle', // TODO: move this to cva potentially
            )}
            style={animatedCurrencyStyle}
          >
            {currencyText}
          </Animated.Text>
        )}
      </View>
    );
  },
);

AmountInput.displayName = 'AmountInput';
