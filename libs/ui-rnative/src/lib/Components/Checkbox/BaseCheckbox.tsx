import * as Slot from '../Slot';
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

const baseCheckboxVariants = {
  trigger: cva(
    [
      'rounded-xs size-20 shrink-0 transition-colors',
      'focus-visible:ring-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
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

type BaseCheckboxIndicatorProps = ForceMountable & SlottableViewProps;
type BaseCheckboxRootProps = SlottablePressableProps & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
};

interface RootContext extends BaseCheckboxRootProps {
  nativeID?: string;
}

const BaseCheckboxContext = React.createContext<RootContext | null>(null);
const BaseCheckboxRoot = React.forwardRef<PressableRef, BaseCheckboxRootProps>(
  (
    { asChild, disabled = false, checked, onCheckedChange, nativeID, ...props },
    ref,
  ) => {
    return (
      <BaseCheckboxContext.Provider
        value={{
          disabled,
          checked,
          onCheckedChange,
          nativeID,
        }}
      >
        <BaseCheckboxTrigger ref={ref} {...props} />
      </BaseCheckboxContext.Provider>
    );
  },
);

BaseCheckboxRoot.displayName = 'BaseCheckboxRoot';

function useCheckboxContext() {
  const context = React.useContext(BaseCheckboxContext);
  if (!context) {
    throw new Error(
      'Checkbox compound components cannot be rendered outside the Checkbox component',
    );
  }
  return context;
}

const BaseCheckboxTrigger = React.forwardRef<
  PressableRef,
  SlottablePressableProps
>(({ asChild, onPress: onPressProp, className, ...props }, ref) => {
  const { disabled, checked, onCheckedChange, nativeID } = useCheckboxContext();

  const onPress = useCallback(
    (ev: GestureResponderEvent) => {
      if (disabled) return;
      const newValue = !checked;
      onCheckedChange?.(newValue);
      onPressProp?.(ev);
    },
    [disabled, checked, onCheckedChange, onPressProp],
  );

  const Component = asChild ? Slot.Pressable : Pressable;
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

BaseCheckboxTrigger.displayName = 'BaseCheckboxTrigger';

const BaseCheckboxIndicator = React.forwardRef<
  ViewRef,
  BaseCheckboxIndicatorProps
>(({ asChild, forceMount, className, ...props }, ref) => {
  const { checked, disabled } = useCheckboxContext();

  if (!forceMount) {
    if (!checked) {
      return null;
    }
  }

  const Component = asChild ? Slot.View : View;
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

BaseCheckboxIndicator.displayName = 'BaseCheckboxIndicator';

export { BaseCheckboxIndicator, BaseCheckboxRoot, type BaseCheckboxRootProps };
