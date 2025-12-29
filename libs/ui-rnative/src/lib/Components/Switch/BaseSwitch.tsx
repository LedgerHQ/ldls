import { createSafeContext } from '@ledgerhq/lumen-utils-shared';
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Pressable, type GestureResponderEvent } from 'react-native';
import { LumenStyleSheet, mergeStyles } from '../../../styles';

import {
  PressableRef,
  SlottablePressableProps,
  SlottableViewProps,
  ViewRef,
} from '../../types';
import { SlotPressable, SlotView } from '../Slot';

import { SwitchProps } from './types';

const ROOT_COMPONENT_NAME = 'BaseSwitch';
const THUMB_COMPONENT_NAME = 'BaseSwitchThumb';

type BaseSwitchRootProps = SlottablePressableProps & {
  checked: SwitchProps['checked'];
  onCheckedChange: SwitchProps['onCheckedChange'];
  disabled?: SwitchProps['disabled'];
  size?: SwitchProps['size'];
  onKeyDown?: (ev: React.KeyboardEvent) => void;
};

const [BaseSwitchProvider, useBaseSwitchContext] =
  createSafeContext<BaseSwitchRootProps>(ROOT_COMPONENT_NAME);

const BaseSwitchRoot = React.forwardRef<PressableRef, BaseSwitchRootProps>(
  (
    {
      asChild,
      checked,
      size = 'md',
      onCheckedChange,
      disabled = false,
      onPress: onPressProp,
      'aria-valuetext': ariaValueText,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles({
      checked: !!checked,
      disabled: !!disabled,
      size,
    });

    const onPress = useCallback(
      (ev: GestureResponderEvent) => {
        if (disabled) return;
        onCheckedChange?.(!checked);
        onPressProp?.(ev);
      },
      [disabled, checked, onCheckedChange, onPressProp],
    );

    const Component = asChild ? SlotPressable : Pressable;

    return (
      <BaseSwitchProvider
        value={{
          checked,
          onCheckedChange,
          disabled,
          size,
        }}
      >
        <Component
          style={styles.root}
          ref={ref}
          aria-disabled={disabled}
          role='switch'
          aria-checked={checked}
          onPress={onPress}
          accessibilityState={{
            checked,
            disabled,
          }}
          accessibilityValue={
            ariaValueText ? { text: ariaValueText } : undefined
          }
          disabled={disabled}
          {...props}
        />
      </BaseSwitchProvider>
    );
  },
);
BaseSwitchRoot.displayName = ROOT_COMPONENT_NAME;

const BaseSwitchThumb = React.forwardRef<ViewRef, SlottableViewProps>(
  ({ asChild, ...props }, ref) => {
    const { checked, disabled, size } = useBaseSwitchContext({
      consumerName: THUMB_COMPONENT_NAME,
      contextRequired: true,
    });

    const styles = useStyles({
      checked: !!checked,
      disabled: !!disabled,
      size: size || 'md',
    });

    const translateX = useRef(new Animated.Value(checked ? 1 : 0)).current;

    useEffect(() => {
      Animated.timing(translateX, {
        toValue: checked ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [checked, translateX]);

    const getTranslateDistance = (): number => {
      const sizeName = size || 'md';
      return sizeName === 'sm' ? 8 : 16;
    };

    const animatedStyle = {
      transform: [
        {
          translateX: translateX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, getTranslateDistance()],
          }),
        },
      ],
    };

    if (asChild) {
      const Component = SlotView;
      return (
        <Component
          ref={ref}
          role='presentation'
          style={styles.thumb}
          {...props}
        />
      );
    }

    return (
      <Animated.View
        ref={ref}
        role='presentation'
        style={[styles.thumbBase, animatedStyle]}
        {...props}
      />
    );
  },
);

type Size = NonNullable<SwitchProps['size']>;

const useStyles = ({
  checked,
  disabled,
  size,
}: {
  checked: boolean;
  disabled: boolean;
  size: Size;
}) => {
  return LumenStyleSheet.useCreate(
    (t) => {
      const sizes: Record<Size, { width: number; height: number }> = {
        sm: { width: t.sizes.s24, height: t.sizes.s16 },
        md: { width: t.sizes.s40, height: t.sizes.s24 },
      };

      const thumbSizes: Record<Size, { size: number }> = {
        sm: { size: t.sizes.s12 },
        md: { size: t.sizes.s20 },
      };

      const thumbTranslations: Record<Size, number> = {
        sm: t.spacings.s8,
        md: t.spacings.s16,
      };

      return {
        root: mergeStyles(
          {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: t.borderRadius.full,
            padding: t.spacings.s2,
            overflow: 'hidden',
            ...sizes[size],
            minWidth: sizes[size].width,
            maxWidth: sizes[size].width,
            minHeight: sizes[size].height,
            maxHeight: sizes[size].height,
          },
          !checked &&
            !disabled && {
              backgroundColor: t.colors.bg.mutedStrong,
            },
          checked &&
            !disabled && {
              backgroundColor: t.colors.bg.active,
            },
          disabled && {
            backgroundColor: t.colors.bg.disabled,
          },
        ),
        thumbBase: mergeStyles(
          {
            borderRadius: t.borderRadius.full,
            backgroundColor: 'white',
            width: thumbSizes[size].size,
            height: thumbSizes[size].size,
          },
          disabled && {
            backgroundColor: t.colors.bg.base,
          },
        ),
        thumb: mergeStyles(
          {
            borderRadius: t.borderRadius.full,
            backgroundColor: 'white',
            width: thumbSizes[size].size,
            height: thumbSizes[size].size,
            transform: [{ translateX: checked ? thumbTranslations[size] : 0 }],
          },
          disabled && {
            backgroundColor: t.colors.bg.base,
          },
        ),
      };
    },
    [checked, disabled, size],
  );
};

BaseSwitchThumb.displayName = THUMB_COMPONENT_NAME;

export { BaseSwitchRoot, BaseSwitchThumb };
