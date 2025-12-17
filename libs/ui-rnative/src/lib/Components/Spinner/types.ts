import { StyledViewProps } from '../../../styles';
import { IconSize } from '../Icon';

export type SpinnerProps = Omit<StyledViewProps, 'children'> & {
  /**
   * The size of the spinner icon in pixels.
   * @default 16
   */
  size?: IconSize;
  /**
   * The color of the spinner stroke.
   * If not provided, defaults to the theme's text.base color.
   */
  color?: string;
};
