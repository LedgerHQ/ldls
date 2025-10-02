import * as Slot from '@rn-primitives/slot';
import React from 'react';
import {
  ForceMountable,
  PressableRef,
  SlottablePressableProps,
  SlottableViewProps,
  ViewRef,
} from 'src/lib/types';
import { GestureResponderEvent, Pressable, View } from 'react-native';

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
>(({ asChild, onPress: onPressProp, ...props }, ref) => {
  const { disabled, checked, onCheckedChange, nativeID } = useCheckboxContext();

  function onPress(ev: GestureResponderEvent) {
    if (disabled) return;
    const newValue = !checked;
    onCheckedChange?.(newValue);
    onPressProp?.(ev);
  }

  const Component = asChild ? Slot.Pressable : Pressable;
  return (
    <Component
      ref={ref}
      nativeID={nativeID}
      aria-disabled={disabled}
      role='checkbox'
      aria-checked={checked}
      onPress={onPress}
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
>(({ asChild, forceMount, ...props }, ref) => {
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
      aria-disabled={disabled}
      aria-hidden={!(forceMount || checked)}
      role={'presentation'}
      {...props}
    />
  );
});

BaseCheckboxIndicator.displayName = 'BaseCheckboxIndicator';

export { BaseCheckboxIndicator, BaseCheckboxRoot, type BaseCheckboxRootProps };
