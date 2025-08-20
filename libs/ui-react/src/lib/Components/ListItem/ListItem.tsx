import React from 'react';
import { cn } from '@ldls/utils-shared';
import { ChevronRight } from '../../Symbols/Icons/ChevronRight'; // Assuming this is your caret icon
import { IconSize } from '../Icon/Icon';
import { Tag, type TagProps } from '../Tag/Tag';

// Placeholder Toggle component (replace with real one later)
const Toggle: React.FC<{
  selected: boolean;
  onChange: (checked: boolean) => void;
}> = ({ selected, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!selected)}
      className={cn(
        'rounded h-20 w-20 border border-muted',
        selected ? 'bg-accent' : 'bg-base',
      )}
      aria-pressed={selected}
    >
      {selected ? '✓' : ''}
    </button>
  );
};

// Define the possible variants
export type ListItemVariant = 'caret' | 'toggle' | 'value' | 'tag' | 'icon';

// Common props shared across all variants
interface ListItemBaseProps {
  title: string;
  subtitle?: string;
  leftIcon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  onClick?: () => void;
  className?: string;
}

// Variant-specific props using discriminated union
export type ListItemProps =
  | ({
      variant: 'caret';
    } & ListItemBaseProps)
  | ({
      variant: 'toggle';
      selected: boolean;
      onToggleChange: (checked: boolean) => void;
    } & ListItemBaseProps)
  | ({
      variant: 'value';
      value: string;
      subValue?: string;
    } & ListItemBaseProps)
  | ({
      variant: 'tag';
      tagProps: TagProps;
    } & ListItemBaseProps)
  | ({
      variant: 'icon';
      rightIcon: React.ComponentType<{ size?: IconSize; className?: string }>;
    } & ListItemBaseProps);

/**
 * A flexible ListItem component with optional right-side content based on variant.
 * Supports caret, toggle, value/subvalue, tag, or custom icon on the right.
 * Left side includes optional icon, title, and subtitle.
 *
 * @example
 * <ListItem variant="caret" title="Item" onClick={() => {}} />
 * <ListItem variant="toggle" title="Toggle Item" selected={true} onToggleChange={(checked) => {}} />
 * <ListItem variant="value" title="Value Item" value="42" subValue="USD" />
 * <ListItem variant="tag" title="Tag Item" tagProps={{ label: 'New', appearance: 'accent' }} />
 * <ListItem variant="icon" title="Icon Item" rightIcon={SomeIcon} />
 */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const {
      variant,
      title,
      subtitle,
      leftIcon: LeftIcon,
      onClick,
      className,
    } = props;

    const handleClick = () => {
      if (onClick) onClick();
      // If variant is 'toggle', onClick could trigger toggle, but keeping separate for now
    };

    const renderRightContent = () => {
      switch (variant) {
        case 'caret':
          return <ChevronRight size={24} className="text-muted" />;
        case 'toggle':
          return (
            <Toggle selected={props.selected} onChange={props.onToggleChange} />
          );
        case 'value':
          return (
            <div className="text-right">
              <span className="body-2">{props.value}</span>
              {props.subValue && (
                <span className="block text-muted body-3">
                  {props.subValue}
                </span>
              )}
            </div>
          );
        case 'tag':
          return <Tag {...props.tagProps} />;
        case 'icon':
          return <props.rightIcon size={24} className="text-muted" />;
        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          'flex cursor-pointer items-center justify-between border-b border-muted p-16 hover:bg-muted-transparent',
          className,
        )}
      >
        <div className="flex items-center gap-16">
          {LeftIcon && <LeftIcon size={24} className="text-muted" />}
          <div>
            <span className="body-2">{title}</span>
            {subtitle && (
              <span className="block text-muted body-3">{subtitle}</span>
            )}
          </div>
        </div>
        {renderRightContent()}
      </div>
    );
  },
);

ListItem.displayName = 'ListItem';
