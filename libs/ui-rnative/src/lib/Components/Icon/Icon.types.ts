import { SvgProps } from 'react-native-svg';

export type IconSize = 12 | 16 | 20 | 24 | 40 | 48 | 56;

export interface IconProps extends SvgProps {
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * Additional CSS classes to apply to the icon.
   */
  className?: string;
  /**
   * The children of the icon.
   */
  children: React.ReactNode;
}
