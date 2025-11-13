import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export type TileProps = {
  /**
   * The Leading content is used to display custom content.
   */
  leadingContent: ReactNode;
  /**
   * The title of the tile.
   */
  title: string;
  /**
   * The description of the tile.
   */
  description?: string;
  /**
   * The Trailing content is used to display custom content.
   */
  trailingContent?: ReactNode;
  /**
   * Callback function when the tile is pressed.
   */
  onPress?: PressableProps['onPress'];
  /**
   * Callback function when the tile is long pressed.
   * Can be used to perform secondary actions.
   */
  onLongPress?: PressableProps['onLongPress'];
} & Omit<PressableProps, 'onPress' | 'onLongPress'>;
