import { ReactNode } from 'react';

export type TileProps = {
  /**
   * The Leading content is used to display custom content.
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
   * The Trailing content is used to display custom content.
   */
  trailingContent?: ReactNode;
  /**
   * The function to call when the tile is clicked.
   */
  onClick?: React.HTMLAttributes<HTMLButtonElement>['onClick'];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;
