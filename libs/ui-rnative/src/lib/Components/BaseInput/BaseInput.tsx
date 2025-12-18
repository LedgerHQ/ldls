import { cn } from '@ledgerhq/lumen-utils-shared';
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Text, TextInput, View } from 'react-native';
import { useCommonTranslation } from '../../../i18n';
import { LumenStyleSheet, mergeStyles } from '../../../styles';
import { DeleteCircleFill } from '../../Symbols/Icons/DeleteCircleFill';
import { InteractiveIcon } from '../InteractiveIcon';
import { Pressable } from '../Utility';
import { BaseInputProps } from './BaseInput.types';

export const BaseInput = React.forwardRef<TextInput, BaseInputProps>(
  (
    {
      style,
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
    const { t } = useCommonTranslation();
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

    const isFloatingLabel = isFocused || hasContent;
    const showClearButton = hasContent && editable && !hideClearButton;

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

    const styles = useStyles({
      hasError: !!errorMessage,
      isFocused,
      isEditable: editable,
    });

    const floatingLabelStyles = useFloatingLabelStyles({
      isFloating: isFloatingLabel,
      hasContent,
      showClearButton,
      hasError: !!errorMessage,
      isEditable: editable,
    });

    return (
      <View className={className}>
        <Pressable
          style={styles.container}
          onPress={() => inputRef.current?.focus()}
          disabled={!editable}
        >
          {prefix}

          <TextInput
            ref={inputRef}
            value={value}
            className={cn(inputClassName)}
            // TODO: eventually move to token system
            // `body-1` is inconsistent in RN, e.g., line-height is calculated differently
            style={[styles.input, { fontWeight: '500', lineHeight: 0 }]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleChangeText}
            editable={editable}
            autoCapitalize='none'
            autoCorrect={false}
            {...props}
          />

          {label && (
            <Text
              className={cn(labelClassName)}
              style={floatingLabelStyles.label}
              numberOfLines={1}
            >
              {label}
            </Text>
          )}

          {showClearButton && (
            <InteractiveIcon
              iconType='stroked'
              onPress={handleClear}
              accessibilityLabel={t('components.baseInput.clearInputAriaLabel')}
            >
              <DeleteCircleFill size={20} />
            </InteractiveIcon>
          )}

          {!showClearButton && suffix}
        </Pressable>

        {errorMessage && (
          <View className='mt-8 flex-row items-center gap-2'>
            <DeleteCircleFill size={16} className='text-error shrink-0' />
            <Text className='text-error body-3'>{errorMessage}</Text>
          </View>
        )}
      </View>
    );
  },
);

const useStyles = ({
  hasError,
  isFocused,
  isEditable,
}: {
  hasError: boolean;
  isFocused: boolean;
  isEditable: boolean;
}) => {
  return LumenStyleSheet.useCreate((t) => {
    return {
      container: mergeStyles(
        {
          position: 'relative',
          flexDirection: 'row',
          height: t.sizes.s48,
          width: t.sizes.full,
          alignItems: 'center',
          gap: t.spacings.s8,
          paddingHorizontal: t.spacings.s16,
          borderRadius: t.borderRadius.sm,
          backgroundColor: t.colors.bg.muted,
          borderWidth: t.borderWidth.s2,
          borderColor: 'transparent',
          overflow: 'hidden',
        },
        hasError && {
          borderColor: t.colors.border.error,
        },
        !isEditable && {
          backgroundColor: t.colors.bg.disabled,
        },
        isFocused &&
          !hasError &&
          isEditable && { borderColor: t.colors.border.active },
      ),
      input: mergeStyles(
        {
          position: 'relative',
          flex: 1,
          paddingTop: t.spacings.s16,
          paddingBottom: t.spacings.s2,
          height: t.sizes.full,
          width: t.sizes.full,
          color: t.colors.text.base,
          backgroundColor: t.colors.bg.muted,
          outlineWidth: 0,
          outlineColor: 'transparent',
        },
        !isEditable && {
          backgroundColor: t.colors.bg.disabled,
          color: t.colors.text.disabled,
        },
      ),
    };
  });
};

const useFloatingLabelStyles = ({
  isFloating,
  hasContent,
  showClearButton,
  hasError,
  isEditable,
}: {
  isFloating: boolean;
  hasContent: boolean;
  showClearButton: boolean;
  hasError: boolean;
  isEditable: boolean;
}) =>
  LumenStyleSheet.useCreate((t) => {
    return {
      label: mergeStyles(
        {
          position: 'absolute',
          left: t.spacings.s16,
          width: t.sizes.full,
          color: t.colors.text.muted,
        },
        isFloating
          ? { ...t.typographies.body4, top: t.spacings.s6 }
          : { ...t.typographies.body2, top: t.spacings.s12 },
        hasContent &&
          showClearButton && {
            width: '92%',
          },
        !isEditable && {
          color: t.colors.text.disabled,
        },
        hasError && {
          color: t.colors.text.error,
        },
      ),
    };
  });

BaseInput.displayName = 'BaseInput';
