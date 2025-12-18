import { StyledViewProps } from '../../../styles';
import { IconSize } from '../Icon';

export type SpinnerProps = {
  /**
   * The size of the spinner icon in pixels.
   * @default 16
   */
  size?: IconSize;
  /**
   * The color of the spinner stroke.
   * @default text.base color.
   */
  color?: string;
} & Omit<StyledViewProps, 'children'>;
