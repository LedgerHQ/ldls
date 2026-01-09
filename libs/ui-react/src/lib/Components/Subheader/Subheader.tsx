import { cn } from '@ledgerhq/lumen-utils-shared';
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
 * Title component for the Subheader. Displays the main heading.
 */
export const SubheaderTitle = ({ children }: SubheaderTitleProps) => {
  return <h2 className='heading-4-semi-bold min-w-0 truncate'>{children}</h2>;
};

/**
 * Row component for the Subheader. Layout container to horizontally align title, count, hint, and action.
 * Can optionally be interactive with an onClick handler.
 */
export const SubheaderRow = ({
  children,
  onClick,
  className,
  ...props
}: SubheaderRowProps) => {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={cn(
        'flex items-center gap-4',
        onClick && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Count component for the Subheader. Displays a formatted number.
 */
export const SubheaderCount = ({ value, format }: SubheaderCountProps) => {
  const formatted = format ? format(value) : `(${value})`;
  return <span className='text-muted body-2 shrink-0'>{formatted}</span>;
};

/**
 * Hint component for the Subheader. Used to display additional information, like tooltips.
 */
export const SubheaderHint = ({ content }: SubheaderHintProps) => {
  return <div className='flex shrink-0 items-center'>{content}</div>;
};

/**
 * Description component for the Subheader. Displays descriptive text below the title row.
 */
export const SubheaderDescription = ({
  children,
}: SubheaderDescriptionProps) => {
  return <p className='text-muted body-3'>{children}</p>;
};

/**
 * Action component for the Subheader. Displays an interactive text button.
 * Automatically positions itself at the end of the row using ml-auto.
 */
export const SubheaderAction = ({
  children,
  onClick,
  className,
  ...props
}: SubheaderActionProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn('text-interactive body-2 ml-auto shrink-0 pl-8', className)}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * A subheader component for displaying section titles with optional count, hints, descriptions, and action elements.
 * Uses a composable API where you explicitly nest sub-components to define the layout.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/misc-subheader-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the subheader's core appearance (colors, padding, etc).
 *
 * @example
 * // Simple subheader without row
 * <Subheader>
 *   <SubheaderTitle>Section Title</SubheaderTitle>
 *   <SubheaderDescription>Description text</SubheaderDescription>
 * </Subheader>
 *
 * @example
 * // Subheader with row for horizontal layout
 * <Subheader>
 *   <SubheaderRow>
 *     <SubheaderTitle>Section Title</SubheaderTitle>
 *     <SubheaderCount value={30} />
 *     <SubheaderHint content={<Tooltip>...</Tooltip>} />
 *   </SubheaderRow>
 *   <SubheaderDescription>Description text</SubheaderDescription>
 * </Subheader>
 *
 * @example
 * // Interactive row with action
 * <Subheader>
 *   <SubheaderRow onClick={handleClick}>
 *     <SubheaderTitle>Accounts</SubheaderTitle>
 *     <SubheaderCount value={12} />
 *   </SubheaderRow>
 * </Subheader>
 */
export const Subheader = ({
  className,
  children,
  ...props
}: SubheaderProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
    </div>
  );
};
