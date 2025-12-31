import { HTMLAttributes } from 'react';
import { DiscriminatedSpotProps } from '../Spot';

/**
 * Context value for passing state to sub-components
 */
export type ListItemContextValue = {
  disabled?: boolean;
};

/**
 * Props for the ListItem root component
 */
export type ListItemProps = {
  /**
   * The content of the list item (ListItemLeading, ListItemTrailing)
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

/**
 * Props for the ListItemLeading component
 */
export type ListItemLeadingProps = {
  /**
   * The content of the leading area (visual element + ListItemContent)
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the ListItemContent component
 */
export type ListItemContentProps = {
  /**
   * The content (ListItemTitle, ListItemDescription)
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
  /**
   * The alignment of the content, align on the end when used on ListItemTrailing.
   * @default 'start'
   */
  align?: 'start' | 'end';
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the ListItemTitle component
 */
export type ListItemTitleProps = {
  /**
   * The title text or content
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the ListItemDescription component
 */
export type ListItemDescriptionProps = {
  /**
   * The description text or content (can include inline Tag)
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the ListItemTrailing component
 */
export type ListItemTrailingProps = {
  /**
   * The trailing content (icons, switches, values, etc.)
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for ListItemSpot when appearance is 'icon'
 */
export type ListItemSpotProps = DiscriminatedSpotProps &
  HTMLAttributes<HTMLDivElement>;

/**
 * Props for the ListItemTruncate component
 */
export type ListItemTruncateProps = {
  /**
   * The content to truncate
   */
  children: React.ReactNode;
  /**
   * custom classname
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
