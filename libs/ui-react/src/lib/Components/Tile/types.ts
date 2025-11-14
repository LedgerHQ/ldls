import { ReactNode } from 'react';

export type TileProps = {
  /**
   * Custom content to display at the top (leading area) of the tile.
   * Accepts ReactNode such as <Spot appearance="icon" icon={Settings} />
   */
  leadingContent: ReactNode;
  /**
   * The title of the list item.
   */
  title: string;
  /**
   * The description of the list item.
   */
  description?: string;
  /**
   * The InteractiveIcon component to display on the top right side of the list item.
   * The button is rendered when the user hovers over the list item or navigates with the keyboard.
   */
  secondaryAction?: ReactNode;
  /**
   * Custom content to display at the bottom (trailing area) of the tile.
   * Accepts ReactNode such as <Tag label="New" appearance="base" />
   */
  trailingContent?: ReactNode;
  /**
   * The function to call when the tile is clicked.
   */
  onClick?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;
