import { SvgProps } from 'react-native-svg';
import { LumenTextStyle } from 'src/styles';
import { TextProps } from '../Utility';

export type IconSize = 12 | 16 | 20 | 24 | 40 | 48 | 56;

export type IconProps = {
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * The color of the icon.
   */
  color?: LumenTextStyle['color'];
  /**
   * The children of the icon.
   */
  children?: React.ReactNode;
} & TextProps &
  Omit<SvgProps, 'style'>;
