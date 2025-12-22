import { ReactNode } from 'react';
import { StyledPressableProps } from '../../../styles';

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
   * The visual style of the tile.
   * - `no-background`: Transparent background with pressed state
   * - `card`: Surface background with pressed state
   * @default 'no-background'
   */
  appearance?: 'no-background' | 'card';
  /**
   * Whether the tile is disabled.
   * When disabled, the tile will not respond to press events and will appear dimmed.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback function when the tile is pressed.
   */
  onPress?: StyledPressableProps['onPress'];
  /**
   * Callback function when the tile is long pressed.
   * Can be used to perform secondary actions.
   */
  onLongPress?: StyledPressableProps['onLongPress'];
} & Omit<StyledPressableProps, 'onPress' | 'onLongPress' | 'disabled'>;
