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
  React.HTMLAttributes<HTMLDivElement>,
  'children'
>;

export type SubheaderDescriptionProps = {
  /**
   * The description text to display below the title row.
   */
  children: React.ReactNode;
};

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
