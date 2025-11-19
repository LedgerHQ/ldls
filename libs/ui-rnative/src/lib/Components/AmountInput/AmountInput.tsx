import { cn, getFontSize, textFormatter } from '@ledgerhq/ldls-utils-shared';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
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
    const inputRef = useRef<TextInput>(null);
    const [inputValue, setInputValue] = useState(value.toString());

    const translateX = useSharedValue(0);
    const animatedFontSize = useSharedValue(getFontSize(inputValue));

    const animatedInputStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      fontSize: animatedFontSize.value,
      lineHeight: animatedFontSize.value * 1.2,
      letterSpacing: 0,
    }));

    const animatedCurrencyStyle = useAnimatedStyle(() => ({
      fontSize: animatedFontSize.value,
      letterSpacing: 0,
    }));

    useEffect(() => {
      setInputValue(value.toString());
    }, [value]);

    useEffect(() => {
      const newSize = getFontSize(inputValue);

      translateX.value = withSequence(
        withTiming(10, { duration: 0 }),
        withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.cubic),
        }),
      );

      animatedFontSize.value = withTiming(newSize, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    }, [inputValue, animatedFontSize, translateX]);

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
        className='relative flex flex-row items-center justify-center'
      >
        {currencyText && currencyPosition === 'left' && (
          <Animated.Text
            className={cn(
              currencyStyles,
              !editable && 'text-disabled',
              inputValue !== '' ? 'text-base' : 'text-muted-subtle',
              isInvalid && 'text-error',
            )}
            style={animatedCurrencyStyle}
          >
            {currencyText}
          </Animated.Text>
        )}

        <AnimatedTextInput
          ref={inputRef}
          keyboardType='decimal-pad'
          editable={editable}
          value={inputValue}
          onChangeText={handleChangeText}
          className={cn(
            inputStyles,
            isInvalid && 'text-error',
            !editable && 'text-disabled',
            className,
          )}
          style={animatedInputStyle}
          {...props}
        />

        {currencyText && currencyPosition === 'right' && (
          <Animated.Text
            className={cn(
              currencyStyles,
              inputValue !== '' ? 'text-base' : 'text-muted-subtle',
              isInvalid && 'text-error',
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
