import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { TextProps } from '../Utility';

export type IconSize = 12 | 16 | 20 | 24 | 40 | 48 | 56;

export type IconProps = {
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * Style object to apply to the icon (supports color via color property).
   */
  style?: StyleProp<ViewStyle & { color?: ColorValue }>;
  /**
   * The children of the icon.
   */
  children?: React.ReactNode;
} & TextProps &
  Omit<SvgProps, 'style'>;
