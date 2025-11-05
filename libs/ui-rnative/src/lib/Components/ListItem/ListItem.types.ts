import { PressableProps } from 'react-native';

export type ListItemProps = {
  /**
   * The main title of the list item.
   */
  title: string;
  /**
   * Optional descriptive text below the title.
   */
  description?: string;
  /**
   * Optional content to display on the left, usually a Spot component.
   * @example leadingContent={<Spot appearance="icon" icon={Settings} />}
   */
  leadingContent?: React.ReactNode;
  /**
   * Optional Tag component displayed next to the description.
   * @example descriptionTag={<Tag label="New" appearance="accent" size="sm" />}
   */
  descriptionTag?: React.ReactNode;
  /**
   * Custom content to render on the right side of the list item.
   * @example trailingContent={<Icon />}
   */
  trailingContent?: React.ReactNode;
} & Omit<PressableProps, 'children'>;
