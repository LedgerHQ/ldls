import React from 'react';
import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { Tag, type TagProps } from '../Tag/Tag';

export interface ListItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  title: string;
  description?: string;
  descriptionTagProps?: TagProps;
  leadingIcon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  trailingContent?: React.ReactNode;
}

/**
 * A flexible list item component that displays a required title, optional description (with possible tag), optional leading icon,
 * and optional trailing content. It functions as a clickable button with hover and active states.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-listitem-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-listitem-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {string} title - The main title of the list item.
 * @param {string} [description] - Optional descriptive text below the title.
 * @param {TagProps} [descriptionTagProps] - Optional props for a tag displayed next to the description.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [leadingIcon] - Optional icon to display on the left.
 *   The icon styles are defined by the list item. Please do not override them.
 * @param {React.ReactNode} [trailingContent] - Optional trailing content to display on the right side of the list item.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [...] - All standard button props (e.g., `disabled`, `onClick`, etc.).
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic item
 * import { ListItem } from '@ldls/ui-react';
 *
 * <ListItem
 *   title="Basic Item"
 *   description="Optional description"
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // Value trailing content with leading icon
 * import { ListItem } from '@ldls/ui-react';
 * import { Wallet } from '@ldls/ui-react/symbols';
 *
 * <ListItem
 *   title="Balance"
 *   leadingIcon={Wallet}
 *   trailingContent={
 *     <div className="flex flex-col items-end gap-2">
 *       <div className="body-2-semi-bold">1,234.56</div>
 *       <div className="text-muted body-3">USD</div>
 *     </div>
 *   }
 * />
 *
 * // Chevron trailing content
 * import { ListItem } from '@ldls/ui-react';
 * import { ChevronRight } from '@ldls/ui-react/symbols';
 *
 * <ListItem
 *   title="Settings"
 *   trailingContent={<ChevronRight size={24} />}
 * />
 */
export const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(
  (props, ref) => {
    const {
      title,
      description,
      descriptionTagProps,
      leadingIcon: LeadingIcon,
      trailingContent,
      className,
      ...buttonProps
    } = props;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'flex h-64 w-full cursor-pointer items-center gap-16 rounded-md bg-base-transparent px-8 py-12 text-base',
          'hover:bg-base-transparent-hover focus-visible:outline-2 focus-visible:outline-focus active:bg-base-transparent-pressed',
          'disabled:cursor-default disabled:bg-base-transparent disabled:text-disabled',
          className,
        )}
        {...buttonProps}
      >
        <div className="flex min-w-0 flex-1 items-center gap-12">
          {LeadingIcon && <LeadingIcon size={48} className="shrink-0" />}
          <div className="flex min-w-0 flex-1 flex-col gap-4 text-left">
            <div className="truncate body-2-semi-bold">{title}</div>
            {description && (
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'truncate text-muted body-3',
                    props.disabled && 'text-disabled',
                  )}
                >
                  {description}
                </div>
                {descriptionTagProps && (
                  <Tag
                    {...descriptionTagProps}
                    appearance={
                      props.disabled
                        ? 'disabled'
                        : descriptionTagProps.appearance
                    }
                    className={cn(descriptionTagProps.className, '-my-2')}
                    size="sm"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {trailingContent}
      </button>
    );
  },
);

ListItem.displayName = 'ListItem';
