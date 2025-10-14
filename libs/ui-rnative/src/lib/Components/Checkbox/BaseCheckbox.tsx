import { SlotPressable, SlotView } from '../Slot';
import React, { useCallback } from 'react';
import {
  ForceMountable,
  PressableRef,
  SlottablePressableProps,
  SlottableViewProps,
  ViewRef,
} from '../../types';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';
import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { CheckboxProps } from './types';

const ROOT_COMPONENT_NAME = 'BaseCheckbox';
const TRIGGER_COMPONENT_NAME = 'BaseCheckboxTrigger';
const INDICATOR_COMPONENT_NAME = 'BaseCheckboxIndicator';

const baseCheckboxVariants = {
  trigger: cva(
    [
      'size-20 shrink-0 rounded-xs transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
    ],
    {
      variants: {
        checked: { true: '', false: 'border' },
        disabled: { true: '', false: '' },
      },
      compoundVariants: [
        {
          checked: true,
          disabled: false,
          className:
            'bg-active text-on-accent hover:bg-active-hover active:bg-active-pressed',
        },
        {
          checked: false,
          disabled: false,
          className:
            'border-muted bg-base hover:bg-base-hover active:bg-base-pressed',
        },
        {
          checked: true,
          disabled: true,
          className: 'bg-disabled text-disabled',
        },
        {
          checked: false,
          disabled: true,
          className: 'border-disabled bg-base',
        },
      ],
      defaultVariants: {
        checked: false,
        disabled: false,
      },
    },
  ),
  indicator: cva(['flex size-full items-center justify-center']),
};

type BaseCheckboxRootProps = SlottablePressableProps & {
  checked?: CheckboxProps['checked'];
  onCheckedChange?: CheckboxProps['onCheckedChange'];
  disabled?: CheckboxProps['disabled'];
  nativeID?: CheckboxProps['nativeID'];
};

const [BaseCheckboxProvider, useBaseCheckboxContext] =
  createSafeContext<BaseCheckboxRootProps>(ROOT_COMPONENT_NAME);

const BaseCheckboxRoot = React.forwardRef<PressableRef, BaseCheckboxRootProps>(
  ({ disabled = false, checked, onCheckedChange, nativeID, ...props }, ref) => {
    return (
      <BaseCheckboxProvider
        value={{
          disabled,
          checked,
          onCheckedChange,
          nativeID,
        }}
      >
        <BaseCheckboxTrigger ref={ref} {...props} />
      </BaseCheckboxProvider>
    );
  },
);
BaseCheckboxRoot.displayName = ROOT_COMPONENT_NAME;

const BaseCheckboxTrigger = React.forwardRef<
  PressableRef,
  SlottablePressableProps
>(({ asChild, onPress: onPressProp, className, ...props }, ref) => {
  const { disabled, checked, onCheckedChange, nativeID } =
    useBaseCheckboxContext({
      consumerName: TRIGGER_COMPONENT_NAME,
      contextRequired: true,
    });

  const onPress = useCallback(
    (ev: GestureResponderEvent) => {
      if (disabled) return;
      const newValue = !checked;
      onCheckedChange?.(newValue);
      onPressProp?.(ev);
    },
    [disabled, checked, onCheckedChange, onPressProp],
  );

  const Component = asChild ? SlotPressable : Pressable;
  return (
    <Component
      ref={ref}
      nativeID={nativeID}
      aria-disabled={disabled}
      role='checkbox'
      aria-checked={checked}
      onPress={onPress}
      className={cn(
        baseCheckboxVariants.trigger({ checked, disabled }),
        className,
      )}
      accessibilityState={{
        checked,
        disabled,
      }}
      disabled={disabled}
      {...props}
    />
  );
});
BaseCheckboxTrigger.displayName = TRIGGER_COMPONENT_NAME;

type BaseCheckboxIndicatorProps = ForceMountable & SlottableViewProps;
const BaseCheckboxIndicator = React.forwardRef<
  ViewRef,
  BaseCheckboxIndicatorProps
>(({ asChild, forceMount, className, ...props }, ref) => {
  const { checked, disabled } = useBaseCheckboxContext({
    consumerName: INDICATOR_COMPONENT_NAME,
    contextRequired: true,
  });

  if (!forceMount) {
    if (!checked) {
      return null;
    }
  }

  const Component = asChild ? SlotView : View;
  return (
    <Component
      ref={ref}
      className={baseCheckboxVariants.indicator({ className })}
      aria-disabled={disabled}
      aria-hidden={!(forceMount || checked)}
      role={'presentation'}
      {...props}
    />
  );
});
BaseCheckboxIndicator.displayName = INDICATOR_COMPONENT_NAME;

export { BaseCheckboxIndicator, BaseCheckboxRoot, type BaseCheckboxRootProps };
