import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { MouseEventHandler, useCallback, useState } from 'react';
import { TileProps } from './types';

const tileVariants = {
  root: cva(
    [
      'group relative flex flex-col items-center text-base transition-colors',
      'rounded-md focus-visible:outline-2 focus-visible:outline-focus',
    ],
    {
      variants: {
        size: {
          md: 'gap-8 px-8 py-16',
          sm: 'gap-8 p-8',
        },
        appearance: {
          'no-background': 'bg-base-transparent',
          card: 'bg-surface',
        },
        isActive: {
          true: '',
          false: '',
        },
        disabled: {
          true: '',
          false: '',
        },
      },
      compoundVariants: [
        {
          appearance: 'no-background',
          isActive: false,
          disabled: false,
          className: 'hover:bg-base-transparent-hover',
        },
        {
          appearance: 'no-background',
          isActive: true,
          disabled: false,
          className: 'bg-base-transparent-pressed',
        },
        {
          appearance: 'card',
          isActive: false,
          disabled: false,
          className: 'hover:bg-surface-hover',
        },
        {
          appearance: 'card',
          isActive: true,
          disabled: false,
          className: 'bg-surface-pressed',
        },
      ],
      defaultVariants: {
        size: 'md',
        appearance: 'no-background',
        isActive: false,
        disabled: false,
      },
    },
  ),
  title: cva('truncate', {
    variants: {
      size: {
        md: 'body-2-semi-bold',
        sm: 'body-3-semi-bold',
      },
      disabled: {
        true: 'text-disabled',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }),
  description: cva('truncate body-3', {
    variants: {
      disabled: {
        true: 'text-disabled',
        false: 'text-muted',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }),
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
 *   leadingContent={<Spot appearance="icon" icon={Wallet} />}
 *   onClick={() => console.log('Clicked!')}
 * />
 *
 * // With subtitle and trailing content
 * import { Tile, Spot } from '@ledgerhq/ldls-ui-react';
 * import { Tag } from '@ledgerhq/ldls-ui-react';
 * import { Bitcoin } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tile
 *   title="Bitcoin"
 *   description="BTC"
 *   leadingContent={<Spot appearance="coin" icon="btc" />}
 *   trailingContent={<Tag label="Active" appearance="success" size="sm" />}
 * />
 *
 * // With secondary action
 * import { Tile } from '@ledgerhq/ldls-ui-react';
 * import { InteractiveIcon } from '@ledgerhq/ldls-ui-react';
 * import { Settings, Ethereum, MoreVertical } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Tile
 *   title="Ethereum"
 *   description="ETH"
 *   leadingContent={<Spot appearance="coin" icon="eth" />}
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
  size = 'md',
  appearance = 'no-background',
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}: TileProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // If the tile is disabled, prevent the default action (e.g., navigation).
      if (disabled) {
        event.preventDefault();
        return;
      }
      // Otherwise, call the original onClick handler if it was provided.
      onClick?.(event);
    },
    [disabled, onClick],
  );

  const onSecondaryActionClickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.preventDefault();
    },
    [],
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      // Only set parent as active if the click is not on the secondary action container
      if (
        !(event.target as HTMLElement).closest(
          '[data-secondary-button-container]',
        )
      ) {
        setIsActive(true);
      }
    },
    [disabled],
  );

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    if (disabled) return;
    setIsActive(false);
  }, [disabled]);

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> =
    useCallback(() => {
      if (disabled) return;
      setIsActive(false);
    }, [disabled]);

  return (
    <div
      {...props}
      className={tileVariants.root({
        size,
        appearance,
        isActive,
        disabled,
        className,
      })}
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
        onClick={handleClick}
        disabled={disabled}
        data-disabled={disabled || undefined}
        className='flex w-full flex-col items-center gap-8 rounded-md focus-visible:outline-2 focus-visible:outline-focus'
      >
        <div className='flex items-center justify-center'>{leadingContent}</div>
        <div className='flex w-full flex-col items-center gap-4'>
          <div className='flex w-full flex-col text-center'>
            <div className={tileVariants.title({ size, disabled })}>
              {title}
            </div>
            {description && (
              <div className={tileVariants.description({ disabled })}>
                {description}
              </div>
            )}
          </div>
          {trailingContent}
        </div>
      </button>
      {secondaryAction && !disabled && (
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
