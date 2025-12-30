export type SubheaderProps = {
  /**
   * The title of the subheader.
   */
  title: string;
  /**
   * The children of the subheader, which can include Subheader.Info and Subheader.Action slots.
   */
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type SubheaderInfoProps = {
  children: React.ReactNode;
};

export type SubheaderActionProps = {
  children: React.ReactNode;
};
