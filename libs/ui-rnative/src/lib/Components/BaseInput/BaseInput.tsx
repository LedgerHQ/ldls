import { cn } from '@ledgerhq/ldls-utils-shared';
import React, { useCallback, useRef, useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';
import { DeleteCircleFill } from '../../Symbols/Icons/DeleteCircleFill';

export type BaseInputProps = TextInputProps & {
  /**
   *  The label text that floats above the input when focused or filled.
   */
  label?: string;
  /**
   *  Additional class names to apply to the input element.
   */
  className?: string;
  /**
   *  Additional class names to apply to the container element.
   */
  containerClassName?: string;
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
  /*
   * Hide the clear button (shown by default when input has content).
   */
  hideClearButton?: boolean;
};

const baseContainerStyles = cn(
  'cursor-text relative flex-row h-48 w-full items-center gap-8 px-16 rounded-sm bg-muted transition-colors overflow-hidden',
  'disabled:bg-disabled disabled:text-disabled',
);

const baseInputStyles = cn(
  'peer flex-1 w-full text-base outline-none body-1 transition-colors bg-muted caret-active truncate',
  'disabled:bg-disabled disabled:text-disabled',
  'placeholder:text-muted disabled:placeholder:text-disabled',
  'truncate',
);

const baseLabelStyles = cn(
  'absolute left-16 top-6 origin-left text-muted transition-all duration-300 body-4',
  'disabled:text-disabled',
  'peer-focus:top-6 peer-focus:-translate-y-0 peer-focus:body-4',
  'truncate w-[calc(100%-var(--size-56))]',
);

export const BaseInput = React.forwardRef<TextInput, BaseInputProps>(
  ({
    label,
    errorMessage,
    className,
    containerClassName,
    labelClassName,
    hideClearButton,
    onChangeText: onChangeTextProp,
    editable = true,
    ...props
  }) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(
      props.defaultValue || '',
    );
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const isControlled = props.value !== undefined;
    const value = isControlled ? props.value : uncontrolledValue;

    const onChangeText = useCallback(
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

    const hasContent = isControlled
      ? !!props.value && props.value.length > 0
      : uncontrolledValue.length > 0;

    const showClearButton = hasContent && editable && !hideClearButton;

    return (
      <View>
        <Pressable
          className={cn(
            baseContainerStyles,
            errorMessage && 'ring-1 ring-error border-error',
            isFocused && !errorMessage && editable && 'ring-2 ring-active',
            containerClassName,
          )}
          onFocus={() => inputRef.current?.focus()}
          disabled={!editable}
        >
          <TextInput
            ref={inputRef}
            value={value}
            className={cn(
              baseInputStyles,
              label && 'pt-12 body-2',
              !editable && 'bg-disabled text-disabled',
              className,
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            editable={editable}
            {...props}
          />
          {label && (
            <Text
              className={cn(
                baseLabelStyles,
                !value && 'top-1/2 -translate-y-1/2 scale-[1.4]',
                !editable && 'text-disabled',
                errorMessage && 'text-error',
                labelClassName,
              )}
            >
              {label}
            </Text>
          )}
          {showClearButton && (
            <Pressable
              className='ml-auto'
              onPress={handleClear}
              accessibilityLabel='clear input'
              style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            >
              <DeleteCircleFill size={20} />
            </Pressable>
          )}
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
