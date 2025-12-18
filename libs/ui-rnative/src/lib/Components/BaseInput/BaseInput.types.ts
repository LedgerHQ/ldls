import { type TextInputProps } from 'react-native';

export type BaseInputProps = TextInputProps & {
  /**
   *  The label text that floats above the input when focused or filled.
   */
  label?: string;
  /**
   *  Additional class names to apply to the container element.
   */
  className?: string;
  /**
   *  Additional class names to apply to the input element.
   */
  inputClassName?: string;
  /**
   *  Additional class names to apply to the label element.
   */
  labelClassName?: string;
  /**
   * An optional error message displayed below the input.
   */
  errorMessage?: string;
  /**
   * Custom content to render after the input (right side in LTR).
   * @example suffix={<Icon />}
   */
  suffix?: React.ReactNode;
  /**
   * Custom content to render before the input (left side in LTR).
   * @example prefix={<Icon />}
   */
  prefix?: React.ReactNode;
  /**
   * Optional function to extend the default clear behavior with custom logic.
   */
  onClear?: () => void;
  /**
   * Hide the clear button (shown by default when input has content).
   */
  hideClearButton?: boolean;
};
