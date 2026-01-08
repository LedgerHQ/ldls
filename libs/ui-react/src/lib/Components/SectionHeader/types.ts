import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the SectionHeader root component
 */
export type SectionHeaderProps = {
  /**
   * The content of the SectionHeader (SectionHeaderRow, SectionHeaderDescription)
   */
  children: ReactNode;
  /**
   * Custom className for layout adjustments
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the SectionHeaderRow component
 */
export type SectionHeaderRowProps = {
  /**
   * The content of the row (SectionHeaderTitle, SectionHeaderCount, SectionHeaderHint, SectionHeaderAction)
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the SectionHeaderTitle component
 */
export type SectionHeaderTitleProps = {
  /**
   * The title text
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

/**
 * Props for the SectionHeaderCount component
 */
export type SectionHeaderCountProps = {
  /**
   * The count value (e.g., "(30)")
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Props for the SectionHeaderHint component
 */
export type SectionHeaderHintProps = {
  /**
   * The hint content (typically a tooltip trigger)
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Props for the SectionHeaderDescription component
 */
export type SectionHeaderDescriptionProps = {
  /**
   * The description text
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

/**
 * Props for the SectionHeaderAction component
 */
export type SectionHeaderActionProps = {
  /**
   * The action content (button, link, etc.)
   */
  children: ReactNode;
  /**
   * Custom className
   */
  className?: string;
} & HTMLAttributes<HTMLDivElement>;
