import React, { useMemo } from 'react';
import { cn } from '@ldls/utils-shared';
import { ChevronRight } from '../../Symbols/Icons/ChevronRight'; // Assuming this is your caret icon
import { IconSize } from '../Icon/Icon';
import { Tag, type TagProps } from '../Tag/Tag';
import { omit } from 'lodash';
import { Check, Close } from '../../Symbols';

// Placeholder Toggle component (replace with real one later)
const Toggle: React.FC<{
  selected: boolean;
  disabled?: boolean;
}> = ({ selected, disabled }) => {
  return selected ? (
    <Check className={disabled ? 'text-disabled' : 'text-accent'} />
  ) : (
    <Close className={disabled ? 'text-disabled' : 'text-base'} />
  );
};

export type ListItemTrailingContentVariant =
  | 'caret'
  | 'toggle'
  | 'value'
  | 'tag'
  | 'icon'
  | 'none';

interface ListItemBaseProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  title: string;
  description?: string;
  descriptionTagProps?: TagProps;
  leadingIcon?: React.ComponentType<{ size?: IconSize; className?: string }>;
}

export type ListItemProps =
  | ({
      trailingContentVariant: 'caret';
    } & ListItemBaseProps)
  | ({
      trailingContentVariant: 'toggle';
      selected: boolean;
    } & ListItemBaseProps)
  | ({
      trailingContentVariant: 'value';
      value: string;
      subValue?: string;
    } & ListItemBaseProps)
  | ({
      trailingContentVariant: 'tag';
      tagProps: TagProps;
    } & ListItemBaseProps)
  | ({
      trailingContentVariant: 'icon';
      trailingIcon: React.ComponentType<{
        size?: IconSize;
        className?: string;
      }>;
    } & ListItemBaseProps)
  | ({
      trailingContentVariant: 'none';
    } & ListItemBaseProps);

/**
 * A flexible list item component that displays a required title, optional description (with possible tag), optional leading icon,
 * and configurable trailing content. It functions as a clickable button with hover and active states.
 *
 * The trailing content is determined by the `trailingContentVariant` prop, supporting:
 * - 'caret': Shows a right chevron for navigation
 * - 'toggle': Displays a toggle switch (requires `selected` prop)
 * - 'value': Shows a value with optional subvalue (requires `value` and optional `subValue`)
 * - 'tag': Displays a tag (requires `tagProps`)
 * - 'icon': Shows a custom icon (requires `trailingIcon`)
 * - 'none': No trailing content
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-listitem-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-listitem-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'caret' | 'toggle' | 'value' | 'tag' | 'icon' | 'none'} trailingContentVariant - Determines the type of trailing content to display.
 * @param {string} title - The main title of the list item.
 * @param {string} [description] - Optional descriptive text below the title.
 * @param {TagProps} [descriptionTagProps] - Optional props for a tag displayed next to the description.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [leadingIcon] - Optional icon to display on the left.
 *   The icon styles are defined by the list item. Please do not override them.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [...] - All standard button props (e.g., `disabled`, `onClick`, etc.).
 *
 * // Variant-specific props:
 * @param {boolean} [selected] - Required for 'toggle' variant: Current state of the toggle.
 * @param {string} [value] - Required for 'value' variant: The primary value to display.
 * @param {string} [subValue] - Optional for 'value' variant: Secondary value displayed below the primary.
 * @param {TagProps} [tagProps] - Required for 'tag' variant: Props for the tag component.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [trailingIcon] - Required for 'icon' variant: Custom icon to display as trailing content.
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic item
 * import { ListItem } from '@ldls/ui-react';
 *
 * <ListItem
 *   trailingContentVariant="none"
 *   title="Basic Item"
 *   description="Optional description"
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // Toggle variant with description
 * import { ListItem } from '@ldls/ui-react';
 *
 * <ListItem
 *   trailingContentVariant="toggle"
 *   title="Toggle Option"
 *   description="Enable feature"
 *   selected={isEnabled}
 *   onClick={() => setEnabled(!isEnabled)}
 * />
 *
 * // Value variant with leading icon
 * import { ListItem } from '@ldls/ui-react';
 * import { Wallet } from '@ldls/ui-react/symbols';
 *
 * <ListItem
 *   trailingContentVariant="value"
 *   title="Balance"
 *   leadingIcon={Wallet}
 *   value="1,234.56"
 *   subValue="USD"
 * />
 *
 * // Tag variant with description tag
 * import { ListItem } from '@ldls/ui-react';
 *
 * <ListItem
 *   trailingContentVariant="tag"
 *   title="New Feature"
 *   description="Available now"
 *   descriptionTagProps={{ label: 'Beta', appearance: 'gray' }}
 *   tagProps={{ label: 'New', appearance: 'accent' }}
 * />
 *
 * // Icon variant
 * import { ListItem } from '@ldls/ui-react';
 * import { Settings } from '@ldls/ui-react/symbols';
 *
 * <ListItem
 *   trailingContentVariant="icon"
 *   title="Settings"
 *   trailingIcon={Settings}
 * />
 */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const {
      title,
      description,
      descriptionTagProps,
      leadingIcon: LeadingIcon,
      trailingContentVariant = 'none',
      className,
      ...rest
    } = props;

    const trailingContent = useMemo(() => {
      switch (trailingContentVariant) {
        case 'caret':
          return (
            <ChevronRight
              size={24}
              className={props.disabled ? 'text-disabled' : 'text-muted'}
            />
          );
        case 'toggle':
          return <Toggle selected={props.selected} disabled={props.disabled} />;
        case 'value':
          return (
            <div className="text-right">
              <span className="body-2">{props.value}</span>
              {props.subValue && (
                <span
                  className={cn(
                    'block text-muted body-3',
                    props.disabled && 'text-disabled',
                  )}
                >
                  {props.subValue}
                </span>
              )}
            </div>
          );
        case 'tag':
          return (
            <Tag
              {...props.tagProps}
              className={cn(
                props.tagProps.className,
                props.disabled && '!bg-muted-transparent !text-disabled',
              )}
            />
          );
        case 'icon':
          return <props.trailingIcon size={24} />;
        case 'none':
          return null;
        default:
          return null;
      }
    }, [props, trailingContentVariant]);

    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> =
      useMemo(() => {
        switch (trailingContentVariant) {
          case 'caret':
          case 'none':
            return rest;
          case 'toggle':
            return omit(rest, 'selected');
          case 'value':
            return omit(rest, 'value', 'subValue');
          case 'tag':
            return omit(rest, 'tagProps');
          case 'icon':
            return omit(rest, 'trailingIcon');
          default:
            return rest;
        }
      }, [trailingContentVariant, rest]);

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
                    className={cn(
                      descriptionTagProps.className,
                      '-my-2',
                      props.disabled && '!bg-muted-transparent !text-disabled',
                    )}
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
