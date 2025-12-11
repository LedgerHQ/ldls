import React from 'react';

import { useControllableState } from '../../utils';
import { BaseSwitchThumb, BaseSwitchRoot } from './BaseSwitch';

import { SwitchProps } from './types';

/**
 * The switch follows the design system tokens and supports checked, unchecked,
 * disabled, and focus states with proper active interactions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-switch--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_selection-switch--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the switch's core appearance.
 *
 * @example
 * import { Switch } from '@ledgerhq/lumen-ui-react';
 *
 * // Basic controlled switch
 * const [checked, setChecked] = useState(false);
 * <Switch
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * // Uncontrolled switch with default state
 * <Switch defaultChecked={true} onCheckedChange={handleChange} />
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof BaseSwitchRoot>,
  SwitchProps
>(
  (
    {
      className,
      checked: checkedProp,
      onCheckedChange: onCheckedChangeProp,
      defaultChecked = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [checked, onCheckedChange] = useControllableState({
      prop: checkedProp,
      onChange: onCheckedChangeProp,
      defaultProp: defaultChecked,
    });

    return (
      <BaseSwitchRoot
        ref={ref}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <BaseSwitchThumb />
      </BaseSwitchRoot>
    );
  },
);

Switch.displayName = 'Switch';
