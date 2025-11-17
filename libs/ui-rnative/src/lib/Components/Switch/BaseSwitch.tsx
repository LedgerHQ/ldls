import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React, { useCallback } from 'react';
import { Pressable, View, type GestureResponderEvent } from 'react-native';

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

const baseSwitchVariants = {
  root: cva(
    [
      'group flex justify-center rounded-full p-2 transition-colors duration-200 ease-in-out',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
    ],
    {
      variants: {
        checked: { true: '', false: '' },
        disabled: { true: '', false: '' },
        size: {
          sm: 'h-16 max-h-16 min-h-16 w-24 min-w-24 max-w-24',
          md: 'h-24 max-h-24 min-h-24 w-40 min-w-40 max-w-40',
        },
      },
      compoundVariants: [
        {
          checked: false,
          disabled: false,
          className: 'bg-muted-strong',
        },
        {
          checked: true,
          disabled: false,
          className: 'bg-active',
        },
        {
          checked: true,
          disabled: true,
          className: 'bg-disabled',
        },
        {
          checked: false,
          disabled: true,
          className: 'bg-disabled',
        },
      ],
    },
  ),
  thumb: cva(
    'translate-x-0 rounded-full bg-white transition-transform duration-200 ease-in-out',
    {
      variants: {
        size: { sm: 'size-12', md: 'size-20' },
        checked: { true: '', false: '' },
        disabled: { true: 'bg-base', false: '' },
      },
      compoundVariants: [
        {
          checked: true,
          size: 'sm',
          className: 'translate-x-8',
        },
        {
          checked: true,
          size: 'md',
          className: 'translate-x-16',
        },
      ],
    },
  ),
};

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
      className,
      onPress: onPressProp,
      'aria-valuetext': ariaValueText,
      ...props
    },
    ref,
  ) => {
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
          className={baseSwitchVariants.root({
            className,
            checked,
            disabled,
            size,
          })}
          ref={ref}
          aria-disabled={disabled}
          role='switch'
          aria-checked={checked}
          aria-valuetext={ariaValueText ?? (checked ? 'on' : 'off')}
          onPress={onPress}
          accessibilityState={{
            checked,
            disabled,
          }}
          disabled={disabled}
          {...props}
        />
      </BaseSwitchProvider>
    );
  },
);
BaseSwitchRoot.displayName = ROOT_COMPONENT_NAME;

const BaseSwitchThumb = React.forwardRef<ViewRef, SlottableViewProps>(
  ({ asChild, className, ...props }, ref) => {
    const { checked, disabled, size } = useBaseSwitchContext({
      consumerName: THUMB_COMPONENT_NAME,
      contextRequired: true,
    });

    const Component = asChild ? SlotView : View;
    return (
      <Component
        ref={ref}
        role='presentation'
        className={baseSwitchVariants.thumb({
          className,
          checked,
          disabled,
          size,
        })}
        {...props}
      />
    );
  },
);
BaseSwitchThumb.displayName = THUMB_COMPONENT_NAME;

export { BaseSwitchRoot, BaseSwitchThumb };
