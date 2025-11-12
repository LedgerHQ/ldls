import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { MouseEventHandler, useCallback, useState } from 'react';
import { TileProps } from './types';

const tileVariants = {
  root: cva(
    [
      'group relative flex w-full flex-col items-center gap-8 p-8 ',
      'rounded-sm bg-base-transparent text-base transition-colors focus-visible:outline-2 focus-visible:outline-focus',
    ],
    {
      variants: {
        isActive: {
          true: 'bg-base-transparent-pressed',
          false: 'hover:bg-base-transparent-hover',
        },
      },
    },
  ),
};

/**
 * A tile list item component that displays a spot icon at the top, title and optional description,
 * and optional trailing content at the bottom. It functions as a clickable button with hover and active states,
 * and can optionally display a secondary action that appears on hover or focus.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic tile item
 * import { Tile, Spot } from '@ledgerhq/ldls-ui-react';
 * import { Wallet } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tile
 *   title="My Wallet"
 *   spot={<Spot appearance="icon" icon={Wallet} />}
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // With subtitle and tag
 * import { Tile, Spot } from '@ledgerhq/ldls-ui-react';
 * import { Tag } from '@ledgerhq/ldls-ui-react';
 * import { Bitcoin } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tile
 *   title="Bitcoin"
 *   subtitle="BTC"
 *   spot={<Spot appearance="coin" icon="btc" />}
 *   tag={<Tag label="Active" appearance="success" size="sm" />}
 * />
 *
 * // With secondary action
 * import { Tile } from '@ledgerhq/ldls-ui-react';
 * import { InteractiveIcon } from '@ledgerhq/ldls-ui-react';
 * import { Settings, Ethereum, MoreVertical } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tile
 *   title="Ethereum"
 *   subtitle="ETH"
 *   spot={<Spot appearance="coin" icon="eth" />}
 *   secondaryAction={
 *     <InteractiveIcon
 *       iconType="stroked"
 *       onClick={() => console.log('More actions clicked!')}
 *     >
 *       <MoreVertical />
 *     </InteractiveIcon>
 *   }
 * />
 */
export const Tile = ({
  className,
  title,
  description,
  leadingContent,
  secondaryAction,
  trailingContent,
  onClick,
  'aria-label': ariaLabel,
  ...props
}: TileProps) => {
  const [isActive, setIsActive] = useState(false);

  const onSecondaryActionClickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.preventDefault();
    },
    [],
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Only set parent as active if the click is not on the secondary action container
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

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      setIsActive(false);
    }, []);

  return (
    <div
      {...props}
      className={tileVariants.root({ isActive, className })}
      onMouseDown={(e) => {
        props?.onMouseDown?.(e);
        handleMouseDown(e);
      }}
      onMouseUp={(e) => {
        props?.onMouseUp?.(e);
        handleMouseUp(e);
      }}
      onMouseLeave={(e) => {
        props?.onMouseLeave?.(e);
        handleMouseLeave(e);
      }}
    >
      <button
        aria-label={ariaLabel || title}
        onClick={onClick}
        className='flex w-full flex-col items-center gap-8 rounded-sm p-8 focus-visible:outline-2 focus-visible:outline-focus'
      >
        <div className='flex items-center justify-center'>{leadingContent}</div>
        <div className='flex w-full flex-col items-center gap-4'>
          <div className='flex w-full flex-col'>
            <div className='truncate body-3-semi-bold'>{title}</div>
            {description && (
              <div className='truncate text-muted body-3'>{description}</div>
            )}
          </div>
          {trailingContent}
        </div>
      </button>
      {secondaryAction && (
        <div
          className='absolute right-4 top-4 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100'
          data-secondary-button-container
        >
          <Slot onClick={onSecondaryActionClickHandler}>{secondaryAction}</Slot>
        </div>
      )}
    </div>
  );
};
