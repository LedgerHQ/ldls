export type SubheaderProps = {
  /**
   * The children of the subheader, which should include SubheaderRow, SubheaderDescription, and SubheaderAction.
   */
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type SubheaderRowProps = {
  /**
   * The children of the subheader row, which should include SubheaderTitle, SubheaderCount, and SubheaderHint.
   */
  children: React.ReactNode;
};

export type SubheaderTitleProps = {
  /**
   * The title text of the subheader.
   */
  children: string;
};

export type SubheaderCountProps = {
  /**
   * The count value to display in parentheses.
   */
  children: number;
};

export type SubheaderHintProps = {
  /**
   * The hint content, typically an info icon with tooltip.
   */
  children: React.ReactNode;
};

export type SubheaderDescriptionProps = {
  /**
   * The description text to display below the title row.
   */
  children: React.ReactNode;
};

export type SubheaderActionProps = {
  /**
   * The action element to display, typically a button or link.
   */
  children: React.ReactNode;
};
