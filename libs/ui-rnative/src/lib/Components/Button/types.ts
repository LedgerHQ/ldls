import { ComponentType, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyledPressableProps } from '../../../styles';
import { IconSize } from '../Icon';

export type BaseButtonProps = {
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
  icon?: ComponentType<{ size?: IconSize; style?: StyleProp<ViewStyle> }>;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * The content to display inside the button.
   */
  children?: ReactNode;
} & Omit<StyledPressableProps, 'children'>;

export type ButtonProps = {} & BaseButtonProps;
