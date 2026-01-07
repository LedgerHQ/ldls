import { cn } from '@ledgerhq/lumen-utils-shared';
import React from 'react';
import {
  SubheaderActionProps,
  SubheaderCountProps,
  SubheaderDescriptionProps,
  SubheaderHintProps,
  SubheaderProps,
  SubheaderRowProps,
  SubheaderTitleProps,
} from './types';

/**
 * Title component for the Subheader. Required element that displays the main heading.
 */
const SubheaderTitle = ({ children }: SubheaderTitleProps) => {
  return <h2 className='min-w-0 truncate heading-4-semi-bold'>{children}</h2>;
};

/**
 * Row component for the Subheader. Layout component to align title, count, hint, and action.
 */
const SubheaderRow = ({ children }: SubheaderRowProps) => {
  const childrenArray = React.Children.toArray(children);
  const titleSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderTitle,
  );
  const countSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderCount,
  );
  const hintSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderHint,
  );
  const actionSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderAction,
  );

  if (!titleSlot) {
    throw new Error('SubheaderRow requires a SubheaderTitle child');
  }

  return (
    <div className='flex items-center justify-between gap-8'>
      <div className='flex min-w-0 items-center gap-4'>
        {titleSlot}
        {countSlot}
        {hintSlot}
      </div>
      {actionSlot}
    </div>
  );
};

/**
 * Count component for the Subheader. Displays a number in parentheses.
 */
const SubheaderCount = ({ children }: SubheaderCountProps) => {
  return (
    <span className='shrink-0 text-muted heading-4-semi-bold'>
      ({children})
    </span>
  );
};

/**
 * Hint component for the Subheader. Used to display additional information, like tooltips.
 */
const SubheaderHint = ({ children }: SubheaderHintProps) => {
  return <div className='flex shrink-0 items-center'>{children}</div>;
};

/**
 * Description component for the Subheader. Displays descriptive text below the title row.
 */
const SubheaderDescription = ({ children }: SubheaderDescriptionProps) => {
  return <p className='text-muted body-3'>{children}</p>;
};

/**
 * Action component for the Subheader. Used to display an action, like a link or button.
 */
const SubheaderAction = ({ children }: SubheaderActionProps) => {
  return <div className='flex shrink-0 items-center'>{children}</div>;
};

/**
 * A subheader component for displaying section titles with optional count, hints, descriptions, and action elements.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the subheader's core appearance (colors, padding, etc).
 *
 * @example
 * import { Subheader } from '@ledgerhq/lumen-ui-react';
 *
 * // Basic subheader with title only
 * <Subheader>
 *   <Subheader.Row>
 *     <Subheader.Title>Section Title</Subheader.Title>
 *   </Subheader.Row>
 * </Subheader>
 *
 * // Complete subheader with all features
 * <Subheader>
 *   <Subheader.Row>
 *     <Subheader.Title>Section Title</Subheader.Title>
 *     <Subheader.Count>30</Subheader.Count>
 *     <Subheader.Hint>
 *       <Tooltip>
 *         <TooltipTrigger asChild>
 *           <Information
 *             size={16}
 *             className="shrink-0 text-muted"
 *             aria-label="More information"
 *           />
 *         </TooltipTrigger>
 *         <TooltipContent>Additional information</TooltipContent>
 *       </Tooltip>
 *     </Subheader.Hint>
 *   </Subheader.Row>
 *   <Subheader.Description>
 *     This is a detailed description of the section.
 *   </Subheader.Description>
 *   <Subheader.Action>
 *     <Link href="/action" appearance="accent" size="sm">Action</Link>
 *   </Subheader.Action>
 * </Subheader>
 */
export const Subheader = ({
  className,
  children,
  ...props
}: SubheaderProps) => {
  const childrenArray = React.Children.toArray(children);
  const rowSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderRow,
  );
  const descriptionSlot = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === SubheaderDescription,
  );
  const actionSlot = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === SubheaderAction,
  );

  if (!rowSlot) {
    throw new Error('Subheader requires a SubheaderRow child');
  }

  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {rowSlot}
      {descriptionSlot}
      {actionSlot}
    </div>
  );
};

Subheader.Row = SubheaderRow;
Subheader.Title = SubheaderTitle;
Subheader.Count = SubheaderCount;
Subheader.Hint = SubheaderHint;
Subheader.Description = SubheaderDescription;
Subheader.Action = SubheaderAction;
