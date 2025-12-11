import { cn, getFontSize, textFormatter } from '@ledgerhq/lumen-utils-shared';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Pressable, TextInput, View, type TextInputProps } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  withRepeat,
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
  'heading-0 h-56 bg-transparent text-base outline-none items-start',
);
const currencyStyles = cn('heading-0 text-base');

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
    const inputValue = String(value);
    const [isFocused, setIsFocused] = useState(false);

    const translateX = useSharedValue(0);
    const animatedFontSize = useSharedValue(getFontSize(inputValue));
    const caretOpacity = useSharedValue(0);

    useImperativeHandle(ref, () => inputRef.current as TextInput, []);

    const animatedInputStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      fontSize: animatedFontSize.value,
      letterSpacing: 0,
    }));

    const animatedCurrencyStyle = useAnimatedStyle(() => ({
      fontSize: animatedFontSize.value,
      letterSpacing: 0,
    }));

    const animatedCaretStyle = useAnimatedStyle(() => ({
      opacity: caretOpacity.value,
      height: animatedFontSize.value,
    }));

    useEffect(() => {
      const newSize = getFontSize(inputValue);

      translateX.value = withSequence(
        withTiming(4, { duration: 0 }),
        withTiming(0, {
          duration: 250,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        }),
      );

      animatedFontSize.value = withTiming(newSize, {
        duration: 250,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });
    }, [inputValue, animatedFontSize, translateX]);

    useEffect(() => {
      if (isFocused && editable) {
        // custom caret animation
        caretOpacity.value = withRepeat(
          withSequence(
            withTiming(1, { duration: 150, easing: Easing.ease }),
            withTiming(1, { duration: 500 }),
            withTiming(0, { duration: 150, easing: Easing.ease }),
            withTiming(0, { duration: 500 }),
          ),
          -1,
          false,
        );
      } else {
        caretOpacity.value = 0;
      }
    }, [isFocused, editable, caretOpacity]);

    const handleChangeText = (text: string) => {
      const formatted = textFormatter(text, {
        allowDecimals,
        thousandsSeparator,
        maxIntegerLength,
        maxDecimalLength,
      });

      onChangeText(formatted);
    };

    const CurrencyText = currencyText ? (
      <Animated.Text
        className={cn(
          currencyStyles,
          !inputValue && 'text-muted-subtle',
          !editable && 'text-disabled',
          isInvalid && 'text-error',
        )}
        style={animatedCurrencyStyle}
      >
        {currencyText}
      </Animated.Text>
    ) : null;

    const handlePress = () => {
      if (editable) {
        inputRef.current?.focus();
      }
    };

    return (
      <View className='relative'>
        {/** hidden text input because of flickering issue */}
        <TextInput
          ref={inputRef}
          keyboardType='decimal-pad'
          editable={editable}
          value={inputValue}
          onChangeText={handleChangeText}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className='absolute size-full opacity-0'
          {...props}
        />
        <Pressable
          onPress={handlePress}
          className='flex-row items-center justify-center'
          accessibilityLabel={props.accessibilityLabel || 'Amount input'}
        >
          {currencyPosition === 'left' && CurrencyText}

          {/** display text that mirrors the hidden input's value */}
          <Animated.Text
            className={cn(
              inputStyles,
              isInvalid && 'text-error',
              !editable && 'text-disabled',
              !inputValue && 'text-muted-subtle',
              className,
            )}
            style={animatedInputStyle}
          >
            {inputValue || '0'}
          </Animated.Text>

          {/** custom caret */}
          <Animated.View
            className='mx-2'
            // TODO: use theme object here
            style={[
              animatedCaretStyle,
              {
                width: 3,
                borderRadius: 1.5,
                backgroundColor: '#007AFF',
              },
            ]}
          />

          {currencyPosition === 'right' && CurrencyText}
        </Pressable>
      </View>
    );
  },
);

AmountInput.displayName = 'AmountInput';
