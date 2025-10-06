import { TextProps } from 'react-native';

export type LabelProps = {
  /**
   * The disabled state of the label.
   */
  disabled?: boolean;
  /**
   * The required state of the checkbox.
   */
  required?: boolean;
} & TextProps;
