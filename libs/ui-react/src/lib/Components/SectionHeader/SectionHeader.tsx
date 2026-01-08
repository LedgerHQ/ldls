import { cn } from '@ledgerhq/lumen-utils-shared';
import React from 'react';
import {
  SectionHeaderActionProps,
  SectionHeaderCountProps,
  SectionHeaderDescriptionProps,
  SectionHeaderHintProps,
  SectionHeaderProps,
  SectionHeaderRowProps,
  SectionHeaderTitleProps,
} from './types';

/**
 * Container for the SectionHeader row that aligns title, count, hint, and action.
 */
export const SectionHeaderRow = React.forwardRef<
  HTMLDivElement,
  SectionHeaderRowProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-between gap-8', className)}
      {...props}
    >
      <div className='flex min-w-0 flex-1 items-center gap-6'>{children}</div>
    </div>
  );
});

SectionHeaderRow.displayName = 'SectionHeaderRow';

/**
 * The main title of the SectionHeader.
 */
export const SectionHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  SectionHeaderTitleProps
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('heading-4-semi-bold min-w-0 truncate', className)}
      {...props}
    >
      {children}
    </h2>
  );
});

SectionHeaderTitle.displayName = 'SectionHeaderTitle';

/**
 * Optional count indicator, typically displayed next to the title.
 * Example: "(30)"
 */
export const SectionHeaderCount = React.forwardRef<
  HTMLSpanElement,
  SectionHeaderCountProps
>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('text-muted heading-4-semi-bold shrink-0', className)}
      {...props}
    >
      {children}
    </span>
  );
});

SectionHeaderCount.displayName = 'SectionHeaderCount';

/**
 * Optional hint element, typically used for tooltip triggers.
 * Example: Information icon
 */
export const SectionHeaderHint = React.forwardRef<
  HTMLDivElement,
  SectionHeaderHintProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex shrink-0 items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
});

SectionHeaderHint.displayName = 'SectionHeaderHint';

/**
 * Optional description text below the title row.
 */
export const SectionHeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  SectionHeaderDescriptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn('text-muted body-3 mt-4', className)} {...props}>
      {children}
    </p>
  );
});

SectionHeaderDescription.displayName = 'SectionHeaderDescription';

/**
 * Container for action elements (buttons, links, etc.) on the right side.
 */
export const SectionHeaderAction = React.forwardRef<
  HTMLDivElement,
  SectionHeaderActionProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('ml-auto flex shrink-0 items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
});

SectionHeaderAction.displayName = 'SectionHeaderAction';

/**
 * A flexible SectionHeader component that provides a composable structure for section headers
 * with title, count, hint, description, and action elements.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/communication-sectionheader--docs Storybook}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the SectionHeader's core appearance (colors, padding, etc).
 *
 * @example
 * import {
 *   SectionHeader,
 *   SectionHeaderRow,
 *   SectionHeaderTitle,
 *   SectionHeaderCount,
 *   SectionHeaderHint,
 *   SectionHeaderDescription,
 *   SectionHeaderAction
 * } from '@ledgerhq/lumen-ui-react';
 *
 * // Basic SectionHeader with title only
 * <SectionHeader>
 *   <SectionHeaderRow>
 *     <SectionHeaderTitle>Section Title</SectionHeaderTitle>
 *   </SectionHeaderRow>
 * </SectionHeader>
 *
 * // Complete SectionHeader with all features
 * <SectionHeader>
 *   <SectionHeaderRow>
 *     <SectionHeaderTitle>Section Title</SectionHeaderTitle>
 *     <SectionHeaderCount>(30)</SectionHeaderCount>
 *     <SectionHeaderHint>
 *       <Tooltip>
 *         <TooltipTrigger asChild>
 *           <Information size={12} className="text-muted" />
 *         </TooltipTrigger>
 *         <TooltipContent>Additional information</TooltipContent>
 *       </Tooltip>
 *     </SectionHeaderHint>
 *     <SectionHeaderAction>
 *       <Link href="/action" appearance="accent" size="sm">View All</Link>
 *     </SectionHeaderAction>
 *   </SectionHeaderRow>
 *   <SectionHeaderDescription>
 *     This is a description of the section
 *   </SectionHeaderDescription>
 * </SectionHeader>
 */
export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('flex flex-col', className)} {...props}>
      {children}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';
