import { InteractiveIconProps } from '../InteractiveIcon';

export type SubheaderProps = {
  /**
   * The children of the subheader, which should include SubheaderRow, SubheaderTitle, SubheaderDescription, etc.
   */
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type SubheaderRowProps = {
  /**
   * The children of the subheader row.
   */
  children: React.ReactNode;
  /**
   * Optional click handler to make the row interactive.
   */
  onClick?: () => void;
} & Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'onClick'>;

export type SubheaderTitleProps = {
  /**
   * The title text of the subheader.
   */
  children: string;
  /**
   * The HTML element to render as.
   * Use this to control heading semantics and avoid multiple h2s on a page.
   * @default 'h2'
   */
  as?: keyof Pick<
    HTMLElementTagNameMap,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'
  >;
} & Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>;

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
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;

export type SubheaderInfoProps = Omit<
  InteractiveIconProps,
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
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'>;

export type SubheaderActionProps = {
  /**
   * The action element to display (e.g., button text).
   */
  children: React.ReactNode;
  /**
   * Click handler for the action.
   */
  onClick: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'>;

export type SubheaderShowMoreProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
>;
