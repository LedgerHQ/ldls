import { cn } from '@ldls/utils-shared';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';
import { Information } from '../../Symbols';

interface SubheaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The title of the subheader.
   */
  title: string;
  /**
   * The info tooltip of the subheader. When provided, an information icon will be displayed and a tooltip will be shown when hovering over it.
   */
  infoTooltip?: React.ReactNode;
  /**
   * The action of the subheader. It can be a link, a button, or any other action element.
   */
  action?: React.ReactNode;
}

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
 * <Subheader
 *   title="Section Title"
 *   infoTooltip="Additional information"
 *   action={<Link href="/action" appearance="accent" size="sm">Action</Link>}
 * />
 */
export const Subheader = ({
  className,
  title,
  infoTooltip,
  action,
  ...props
}: SubheaderProps) => {
  return (
    <div
      className={cn('flex items-center justify-between gap-8', className)}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-4">
        <h2 className="min-w-0 truncate heading-4-semi-bold">{title}</h2>
        {infoTooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Information
                size={12}
                className="shrink-0 text-muted"
                aria-label="More information"
              />
            </TooltipTrigger>
            <TooltipContent>{infoTooltip}</TooltipContent>
          </Tooltip>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
