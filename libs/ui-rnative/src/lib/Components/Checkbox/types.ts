import { SlottablePressableProps } from 'src/lib/types';

export type CheckboxProps = {
  /**
   * The controlled checked state of the checkbox.
   */
  disabled?: boolean;
  /**
   * The checked state of the checkbox.
   */
  checked?: boolean;
  /**
   * The callback function called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * The default checked state of the checkbox.
   */
  defaultChecked?: boolean;
} & SlottablePressableProps;
