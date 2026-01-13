import { ComponentType, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyledPressableProps } from '../../../styles';
import { IconSize } from '../Icon';

export type TileButtonProps = {
  /**
   * The icon component to render above the label.
   * Will be rendered at 20px size.
   */
  icon: ComponentType<{ size?: IconSize; style?: StyleProp<ViewStyle> }>;
  /**
   * The content of the button (label text).
   */
  children: ReactNode;
  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If true, the button expands to full width of its container.
   * @default false
   */
  isFull?: boolean;
} & Omit<StyledPressableProps, 'children'>;
