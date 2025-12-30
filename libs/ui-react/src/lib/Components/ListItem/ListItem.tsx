import { cn } from '@ledgerhq/lumen-utils-shared';
import React from 'react';
import { ListItemProps } from './types';

/**
 * A flexible list item component that displays a required title and optional description (with possible tag), leading and trailing content.
 * It functions as a clickable button with hover and active states.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-listitem--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-listitem--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic item
 * import { ListItem } from '@ledgerhq/lumen-ui-react';
 *
 * <ListItem
 *   title="Basic Item"
 *   description="Optional description"
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // Icon trailing content with leading Spot
 * import { ListItem, Spot } from '@ledgerhq/lumen-ui-react';
 * import { Wallet, Settings } from '@ledgerhq/lumen-ui-react/symbols';
 *
 * <ListItem
 *   title="Balance"
 *   leadingContent={<Spot appearance="icon" icon={Wallet} />}
 *   trailingContent={<Settings />}
 * />
 *
 * // Chevron trailing content
 * import { ListItem } from '@ledgerhq/lumen-ui-react';
 * import { ChevronRight } from '@ledgerhq/lumen-ui-react/symbols';
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
      leadingContent,
      descriptionTag,
      trailingContent,
      className,
      ...buttonProps
    } = props;

    return (
      <button
        ref={ref}
        type='button'
        className={cn(
          'flex h-64 w-full cursor-pointer items-center gap-16 rounded-md bg-base-transparent px-8 py-12 text-base transition-colors',
          'hover:bg-base-transparent-hover focus-visible:outline-2 focus-visible:outline-focus active:bg-base-transparent-pressed',
          'disabled:cursor-default disabled:bg-base-transparent disabled:text-disabled',
          className,
        )}
        {...buttonProps}
      >
        <div className='flex min-w-0 flex-1 items-center gap-12'>
          {leadingContent}
          <div className='flex min-w-0 flex-1 flex-col gap-4 text-left'>
            <div className='truncate body-2-semi-bold'>{title}</div>
            {description && (
              <div className='flex items-center gap-4'>
                <div
                  className={cn(
                    'truncate text-muted body-3',
                    props.disabled && 'text-disabled',
                  )}
                >
                  {description}
                </div>
                {descriptionTag && (
                  <div className='flex h-16 shrink-0 items-center'>
                    {descriptionTag}
                  </div>
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
