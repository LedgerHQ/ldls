import { cn } from '@ledgerhq/ldls-utils-shared';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { DeleteCircleFill } from '../../Symbols/Icons/DeleteCircleFill';

export type BaseInputProps = TextInputProps & {
  /**
   *  The label text that floats above the input when focused or filled.
   */
  label?: string;
  /**
   *  Additional class names to apply to the container element.
   */
  className?: string;
  /**
   *  Additional class names to apply to the input element.
   */
  inputClassName?: string;
  /**
   *  Additional class names to apply to the label element.
   */
  labelClassName?: string;
  /**
   * An optional error message displayed below the input.
   */
  errorMessage?: string;
  /**
   * Custom content to render after the input (right side in LTR).
   * @example suffix={<Icon />}
   */
  suffix?: React.ReactNode;
  /**
   * Custom content to render before the input (left side in LTR).
   * @example prefix={<Icon />}
   */
  prefix?: React.ReactNode;
  /**
   * Optional function to extend the default clear behavior with custom logic.
   */
  onClear?: () => void;
  /**
   * Hide the clear button (shown by default when input has content).
   */
  hideClearButton?: boolean;
};

const baseContainerStyles = cn(
  'relative flex-row h-48 w-full items-center gap-8 px-16 rounded-sm bg-muted transition-colors border-2 border-transparent overflow-hidden',
);

const baseInputStyles = cn(
  'relative flex-1 pt-16 pb-2 size-full text-base transition-colors bg-muted outline-none',
);

const AnimatedLabel = Animated.createAnimatedComponent(Animated.Text);

export const BaseInput = React.forwardRef<TextInput, BaseInputProps>(
  (
    {
      label,
      errorMessage,
      className,
      inputClassName,
      labelClassName,
      hideClearButton,
      onChangeText: onChangeTextProp,
      editable = true,
      prefix,
      suffix,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<TextInput>(null);
    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const [uncontrolledValue, setUncontrolledValue] = useState(
      props.defaultValue || '',
    );
    const [isFocused, setIsFocused] = useState(false);

    const isControlled = props.value !== undefined;
    const value = isControlled ? props.value : uncontrolledValue;

    const hasContent = isControlled
      ? !!props.value && props.value.length > 0
      : uncontrolledValue.length > 0;

    // floating label styling
    const labelFontSize = useSharedValue(14);
    const labelTop = useSharedValue(14);
    const isFloatingLabel = isFocused || hasContent;

    const animatedLabelStyle = useAnimatedStyle(
      () => ({
        fontSize: labelFontSize.value,
        top: labelTop.value,
      }),
      [],
    );

    const showClearButton = hasContent && editable && !hideClearButton;

    useEffect(() => {
      labelFontSize.value = withTiming(isFloatingLabel ? 10 : 14, {
        duration: 200,
      });
      labelTop.value = withTiming(isFloatingLabel ? 8 : 14, {
        duration: 200,
      });
    }, [isFloatingLabel, labelFontSize, labelTop]);

    const handleChangeText = useCallback(
      (text: string) => {
        if (!isControlled) {
          setUncontrolledValue(text);
        }
        onChangeTextProp?.(text);
      },
      [isControlled, onChangeTextProp],
    );

    const handleClear = () => {
      if (!isControlled) {
        setUncontrolledValue('');
      } else {
        onChangeTextProp?.('');
      }
      props.onClear?.();
    };

    return (
      <View className={className}>
        <Pressable
          className={cn(
            baseContainerStyles,
            errorMessage && 'border-error',
            isFocused && !errorMessage && editable && 'border-active',
            !editable && 'bg-disabled text-disabled',
          )}
          onPress={() => inputRef.current?.focus()}
          disabled={!editable}
        >
          {prefix}

          <TextInput
            ref={inputRef}
            value={value}
            className={cn(
              baseInputStyles,
              !label && 'py-0',
              !editable && 'bg-disabled text-disabled',
              inputClassName,
            )}
            // TODO: eventually move to token system
            // `body-1` is inconsistent in RN, e.g., line-height is calculated differently
            style={{ fontWeight: 500 }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleChangeText}
            editable={editable}
            autoCapitalize='none'
            autoCorrect={false}
            {...props}
          />

          {label && (
            <AnimatedLabel
              className={cn(
                'absolute left-16 text-muted w-full',
                hasContent && showClearButton && 'w-[92%]',
                !editable && 'text-disabled',
                errorMessage && 'text-error',
                labelClassName,
              )}
              style={animatedLabelStyle}
              numberOfLines={1}
            >
              {label}
            </AnimatedLabel>
          )}

          {showClearButton && (
            <Pressable
              className='group'
              onPress={handleClear}
              accessibilityLabel='Clear input'
            >
              <DeleteCircleFill
                size={20}
                className='text-muted group-active:text-muted-pressed'
              />
            </Pressable>
          )}

          {!showClearButton && suffix}
        </Pressable>

        {errorMessage && (
          <View className='mt-8 flex-row items-center gap-2'>
            <DeleteCircleFill size={16} className='shrink-0 text-error' />
            <Text className='text-error body-3'>{errorMessage}</Text>
          </View>
        )}
      </View>
    );
  },
);

BaseInput.displayName = 'BaseInput';
