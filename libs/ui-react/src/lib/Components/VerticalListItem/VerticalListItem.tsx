import { useCallback, useState } from 'react';
import { cn } from '@ldls/utils-shared';
import { Slot } from '@radix-ui/react-slot';

export interface VerticalListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The Spot component to display on the top.
   */
  spot: React.ReactNode;
  /**
   * The title of the list item.
   */
  title: string;
  /**
   * The subtitle of the list item.
   */
  subtitle?: string;
  /**
   * The IconButton component to display on the top right side of the list item.
   * The button is rendered when the user hovers over the list item or navigates with the keyboard.
   */
  secondaryButton?: React.ReactNode;
  /**
   * The Tag component to display on the bottom of the list item.
   */
  tag?: React.ReactNode;
}

/**
 * A vertical list item component that displays a spot icon at the top, title and optional subtitle,
 * and optional tag at the bottom. It functions as a clickable button with hover and active states,
 * and can optionally display a secondary button that appears on hover or focus.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-verticallistitem-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-verticallistitem-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic vertical item
 * import { VerticalListItem, Spot } from '@ledgerhq/ldls-ui-react';
 * import { Wallet } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <VerticalListItem
 *   title="My Wallet"
 *   spot={<Spot appearance="icon" icon={Wallet} />}
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // With subtitle and tag
 * import { VerticalListItem, Spot } from '@ledgerhq/ldls-ui-react';
 * import { Tag } from '@ledgerhq/ldls-ui-react';
 * import { Bitcoin } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <VerticalListItem
 *   title="Bitcoin"
 *   subtitle="BTC"
 *   spot={<Spot appearance="icon" icon={Bitcoin} />}
 *   tag={<Tag label="Active" appearance="success" size="sm" />}
 * />
 *
 * // With secondary button
 * import { VerticalListItem } from '@ledgerhq/ldls-ui-react';
 * import { IconButton } from '@ledgerhq/ldls-ui-react';
 * import { Settings, Ethereum, MoreVertical } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <VerticalListItem
 *   title="Ethereum"
 *   subtitle="ETH"
 *   spot={<Spot appearance="icon" icon={Ethereum} />}
 *   secondaryButton={
 *     <IconButton
 *       iconType="stroked"
 *       onClick={() => console.log('More actions clicked!')}
 *     >
 *       <MoreVertical />
 *     </IconButton>
 *   }
 * />
 */
export const VerticalListItem = ({
  className,
  title,
  subtitle,
  spot,
  secondaryButton,
  tag,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  ...props
}: VerticalListItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const onSecondaryButtonClickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.preventDefault();
    },
    [],
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Only set parent as active if the click is not on the secondary button container
      if (
        !(event.target as HTMLElement).closest(
          '[data-secondary-button-container]',
        )
      ) {
        setIsActive(true);
      }
    },
    [],
  );

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      className={cn(
        'w-full', // Default styles that can be overridden by the className prop
        className,
        'group relative rounded-sm bg-base-transparent text-base',
        isActive && 'bg-base-transparent-pressed',
        !isActive && 'hover:bg-base-transparent-hover',
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex w-full flex-col items-center gap-8 rounded-sm p-8 focus-visible:outline-2 focus-visible:outline-focus"
        {...props}
      >
        <div className="flex items-center justify-center">{spot}</div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col">
            <div className="truncate body-3-semi-bold">{title}</div>
            {subtitle && (
              <div className="truncate text-muted body-3">{subtitle}</div>
            )}
          </div>
          {tag}
        </div>
      </button>
      {secondaryButton && (
        <div
          className="absolute right-4 top-4 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100"
          data-secondary-button-container
        >
          <Slot onClick={onSecondaryButtonClickHandler}>{secondaryButton}</Slot>
        </div>
      )}
    </div>
  );
};
