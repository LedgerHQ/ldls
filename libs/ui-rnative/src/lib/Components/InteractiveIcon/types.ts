import { PropsWithChildren } from 'react';
import { StyledPressableProps } from '../../../styles';

export type InteractiveIconProps = {
  /**
   * The visual style of the icon button.
   * Choose 'filled' for icons with solid backgrounds or 'stroked' for outlined icons.
   */
  iconType: 'filled' | 'stroked';
} & PropsWithChildren &
  Omit<StyledPressableProps, 'children'>;
