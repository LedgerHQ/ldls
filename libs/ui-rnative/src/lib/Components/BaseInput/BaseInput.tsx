import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
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
      inputStyle,
      labelStyle,
      label,
      errorMessage,
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
    const { theme } = LumenStyleSheet.useTheme();
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

    const floatingAnimation = useRef(
      new Animated.Value(isFloatingLabel ? 1 : 0),
    ).current;

    useEffect(() => {
      Animated.timing(floatingAnimation, {
        toValue: isFloatingLabel ? 1 : 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }, [isFloatingLabel, floatingAnimation]);

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
      hasLabel: !!label,
    });

    const floatingLabelStyles = useFloatingLabelStyles({
      floatingAnimation,
      hasContent,
      showClearButton,
      hasError: !!errorMessage,
      isEditable: editable,
    });

    return (
      <View style={style}>
        <Pressable
          style={styles.container}
          onPress={() => inputRef.current?.focus()}
          disabled={!editable}
        >
          {prefix}

          <TextInput
            ref={inputRef}
            value={value}
            style={[styles.input, { lineHeight: 0 }, inputStyle]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleChangeText}
            editable={editable}
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor={theme.colors.text.muted}
            {...props}
          />

          {label && (
            <Animated.Text
              style={[
                floatingLabelStyles.label,
                floatingLabelStyles.animatedLabel,
                labelStyle,
              ]}
              numberOfLines={1}
            >
              {label}
            </Animated.Text>
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
          <View style={styles.errorContainer}>
            <DeleteCircleFill size={16} color={styles.errorIcon.color} />
            <Text style={styles.errorText}>{errorMessage}</Text>
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
  hasLabel,
}: {
  hasError: boolean;
  isFocused: boolean;
  isEditable: boolean;
  hasLabel: boolean;
}) => {
  return LumenStyleSheet.useCreate(
    (t) => {
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
            height: t.sizes.full,
            width: t.sizes.full,
            color: t.colors.text.base,
            backgroundColor: t.colors.bg.muted,
            outlineWidth: 0,
            outlineColor: 'transparent',
            ...t.typographies.body1,
          },
          hasLabel && {
            paddingTop: t.spacings.s16,
            paddingBottom: t.spacings.s2,
            ...t.typographies.body2,
          },
          !isEditable && {
            backgroundColor: t.colors.bg.disabled,
            color: t.colors.text.disabled,
          },
        ),
        errorContainer: {
          marginTop: t.spacings.s8,
          flexDirection: 'row',
          alignItems: 'center',
          gap: t.spacings.s2,
        },
        errorIcon: {
          color: t.colors.text.error,
        },
        errorText: {
          color: t.colors.text.error,
          ...t.typographies.body3,
        },
      };
    },
    [hasError, isFocused, isEditable, hasLabel],
  );
};

const useFloatingLabelStyles = ({
  floatingAnimation,
  hasContent,
  showClearButton,
  hasError,
  isEditable,
}: {
  floatingAnimation: Animated.Value;
  hasContent: boolean;
  showClearButton: boolean;
  hasError: boolean;
  isEditable: boolean;
}) => {
  const { theme } = LumenStyleSheet.useTheme();

  const label = LumenStyleSheet.useCreate(
    (t) => ({
      label: mergeStyles(
        {
          position: 'absolute',
          left: t.spacings.s16,
          width: t.sizes.full,
          color: t.colors.text.muted,
        },
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
    }),
    [hasContent, showClearButton, hasError, isEditable],
  );

  const animatedLabel = {
    top: floatingAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.spacings.s14, theme.spacings.s8],
    }),
    fontSize: floatingAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        theme.typographies.body2.fontSize,
        theme.typographies.body4.fontSize,
      ],
    }),
  };

  return { label: label.label, animatedLabel };
};

BaseInput.displayName = 'BaseInput';
