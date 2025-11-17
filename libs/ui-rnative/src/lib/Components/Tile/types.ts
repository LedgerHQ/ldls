import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export type TileProps = {
  /**
   * Custom content to display at the top (leading area) of the tile.
   * Accepts ReactNode such as <Spot appearance="icon" icon={Settings} />
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
   * Custom content to display at the bottom (trailing area) of the tile.
   * Accepts ReactNode such as <Tag label="New" appearance="base" />
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
