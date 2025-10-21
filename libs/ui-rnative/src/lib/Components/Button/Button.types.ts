import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconSize } from '../Icon';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'disabled'> {
  /**
   * The visual style of the button.
   */
  appearance?:
    | 'base'
    | 'gray'
    | 'accent'
    | 'transparent'
    | 'no-background'
    | 'red';
  /**
   * The size variant of the button.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * If true, the button expands to full width of its container.
   */
  isFull?: boolean;
  /**
   * If true, shows a loading spinner and disables the button.
   */
  loading?: boolean;
  /**
   * An optional icon component to render inside the button.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * Additional custom CSS classes to apply.
   */
  className?: string;
}
