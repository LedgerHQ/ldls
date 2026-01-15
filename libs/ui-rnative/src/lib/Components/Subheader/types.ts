import { ViewProps } from 'react-native';
import { LumenViewStyle } from '../../../styles/types/lx.types';

export type SubheaderProps = {
  /**
   * The children of the subheader, which should include SubheaderRow, SubheaderTitle, SubheaderDescription, etc.
   */
  children?: React.ReactNode;
  /**
   * Style props using design tokens
   */
  lx?: LumenViewStyle;
} & Omit<ViewProps, 'children'>;

export type SubheaderRowProps = {
  /**
   * The children of the subheader row.
   */
  children: React.ReactNode;
  /**
   * Optional press handler to make the row interactive.
   */
  onPress?: () => void;
  /**
   * Style props using design tokens
   */
  lx?: LumenViewStyle;
} & Omit<ViewProps, 'children'>;

export type SubheaderTitleProps = {
  /**
   * The title text of the subheader.
   */
  children: string;
};

export type SubheaderCountProps = {
  /**
   * The count value to display.
   */
  value: number;
  /**
   * Optional formatter function to customize the display.
   * Defaults to (n) => `(${n})`
   */
  format?: (value: number) => string;
};

export type SubheaderInfoProps = Omit<
  React.ComponentProps<typeof import('../InteractiveIcon').InteractiveIcon>,
  'children' | 'iconType'
> & {
  /**
   * The visual style of the icon button.
   * Defaults to 'stroked'.
   */
  iconType?: 'filled' | 'stroked';
};

export type SubheaderDescriptionProps = {
  /**
   * The description text to display below the title row.
   */
  children: React.ReactNode;
};

export type SubheaderActionProps = {
  /**
   * The action text to display.
   */
  children: React.ReactNode;
  /**
   * Press handler for the action.
   */
  onPress: () => void;
};

export type SubheaderShowMoreProps = Record<string, never>;
