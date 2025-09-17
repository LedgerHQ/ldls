import { cn } from '@ldls/utils-shared';
import React from 'react';
import { getSlots } from '../../../utils/getSlots';

interface SubheaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The title of the subheader.
   */
  title: string;
  /**
   * The children of the subheader, which can include Subheader.Info and Subheader.Action slots.
   */
  children?: React.ReactNode;
}

/**
 * Info slot component for the Subheader. Used to display additional information, like tooltips.
 */
const SubheaderInfo = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex shrink-0 items-center" {...props} />;
};

SubheaderInfo.displayName = 'SubheaderInfo';

/**
 * Action slot component for the Subheader. Used to display an action, like a link or button.
 */
const SubheaderAction = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex shrink-0 items-center" {...props} />;
};

SubheaderAction.displayName = 'SubheaderAction';

/**
 * A subheader component for displaying section titles with optional informational tooltips and action elements.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the subheader's core appearance (colors, padding, etc).
 *
 * @example
 * import { Subheader } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic subheader with title only
 * <Subheader title="Section Title" />
 *
 * // Complete subheader with all features
 * <Subheader title="Section Title">
 *   <Subheader.Info>
 *     <Tooltip>
 *       <TooltipTrigger asChild>
 *         <Information
 *           size={12}
 *           className="shrink-0 text-muted"
 *           aria-label="More information"
 *         />
 *       </TooltipTrigger>
 *       <TooltipContent>Additional information</TooltipContent>
 *     </Tooltip>
 *   </Subheader.Info>
 *   <Subheader.Action>
 *     <Link href="/action" appearance="accent" size="sm">Action</Link>
 *   </Subheader.Action>
 * </Subheader>
 */
export const Subheader = ({
  className,
  title,
  children,
  ...props
}: SubheaderProps) => {
  const infoSlots = getSlots(children, SubheaderInfo);
  const actionSlots = getSlots(children, SubheaderAction);

  if (infoSlots.length > 1) {
    throw new Error('Subheader can only have one Info slot');
  }

  if (actionSlots.length > 1) {
    throw new Error('Subheader can only have one Action slot');
  }

  const infoSlot = infoSlots.length > 0 ? infoSlots[0] : null;
  const actionSlot = actionSlots.length > 0 ? actionSlots[0] : null;

  return (
    <div
      className={cn('flex items-center justify-between gap-8', className)}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-4">
        <h2 className="min-w-0 truncate heading-4-semi-bold">{title}</h2>
        {infoSlot}
      </div>
      {actionSlot}
    </div>
  );
};

Subheader.Info = SubheaderInfo;
Subheader.Action = SubheaderAction;
