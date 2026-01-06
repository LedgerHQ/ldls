import {
  cn,
  createSafeContext,
  extractSlottable,
} from '@ledgerhq/lumen-utils-shared';
import { cva } from 'class-variance-authority';
import { MouseEventHandler, useCallback, useState } from 'react';
import { InteractiveIcon } from '../InteractiveIcon';
import { Spot } from '../Spot';
import {
  TileContentProps,
  TileContextValue,
  TileDescriptionProps,
  TileProps,
  TileSecondaryActionProps,
  TileSpotProps,
  TileTitleProps,
} from './types';

const [TileProvider, useTileContext] =
  createSafeContext<TileContextValue>('Tile');

const tileVariants = cva(
  [
    'group relative flex flex-col items-center text-base transition-colors',
    'focus-visible:outline-focus rounded-md focus-visible:outline-2',
    'gap-8 px-8 py-12',
  ],
  {
    variants: {
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
      appearance: 'no-background',
      isActive: false,
      disabled: false,
    },
  },
);

/**
 * A flexible tile component that uses a composite pattern for maximum customization.
 * Displays content in a vertical layout with support for spots, text, and custom content.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-implementation--docs#dos-and-donts Guidelines}
 *
 * @example
 * import {
 *   Tile,
 *   TileSpot,
 *   TileContent,
 *   TileTitle,
 *   TileSecondaryAction,
 *   Tag
 * } from '@ledgerhq/lumen-ui-react';
 * import { Bitcoin, MoreVertical } from '@ledgerhq/lumen-ui-react/symbols';
 *
 * <Tile appearance="card">
 *   <TileSecondaryAction icon={MoreVertical} onClick={() => console.log('More')} />
 *   <TileSpot appearance="icon" icon={Bitcoin} />
 *   <TileContent>
 *     <TileTitle>Bitcoin</TileTitle>
 *   </TileContent>
 *   <div>Custom content</div>
 * </Tile>
 */
export const Tile = ({
  className,
  onClick,
  appearance = 'no-background',
  disabled = false,
  'aria-label': ariaLabel,
  children,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  ...props
}: TileProps) => {
  const [isActive, setIsActive] = useState(false);

  // Extract secondary action from children by component type
  const { slotElement, remainingChildren } = extractSlottable(
    children,
    TileSecondaryAction,
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Only set parent as active if the click is not on the secondary action container
      if (
        !(event.target as HTMLElement).closest(
          '[data-secondary-button-container]',
        )
      ) {
        onMouseDown?.(event);
        setIsActive(true);
      }
    },
    [onMouseDown],
  );

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      setIsActive(false);
      onMouseUp?.(event);
    },
    [onMouseUp],
  );

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      setIsActive(false);
      onMouseLeave?.(event);
    },
    [onMouseLeave],
  );

  return (
    <TileProvider value={{ disabled }}>
      <div
        {...props}
        className={tileVariants({
          appearance,
          isActive,
          disabled,
          className,
        })}
        onMouseDown={
          disabled
            ? undefined
            : (e) => {
                handleMouseDown(e);
              }
        }
        onMouseUp={
          disabled
            ? undefined
            : (e) => {
                handleMouseUp(e);
              }
        }
        onMouseLeave={
          disabled
            ? undefined
            : (e) => {
                handleMouseLeave(e);
              }
        }
      >
        {slotElement}
        <button
          aria-label={ariaLabel}
          onClick={disabled ? undefined : onClick}
          disabled={disabled}
          data-disabled={disabled || undefined}
          className='focus-visible:outline-focus flex w-full flex-col items-center gap-8 rounded-md focus-visible:outline-2'
        >
          {remainingChildren}
        </button>
      </div>
    </TileProvider>
  );
};

/**
 * A spot adapter for use within Tile. Automatically inherits the disabled state from the parent Tile.
 * Always renders at a fixed size of 48.
 */
export const TileSpot = (props: TileSpotProps) => {
  const { disabled } = useTileContext({
    consumerName: 'TileSpot',
    contextRequired: true,
  });
  return <Spot {...props} size={48} disabled={disabled} />;
};

/**
 * A container for grouping TileTitle and TileDescription with consistent spacing.
 * Use this to wrap text content within a Tile.
 */
export const TileContent = ({
  children,
  className,
  ...props
}: TileContentProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-4 text-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * The primary text label for a Tile. Automatically inherits the disabled state from the parent Tile.
 * Text will truncate with ellipsis if it exceeds the available width.
 */
export const TileTitle = ({
  children,
  className,
  ...props
}: TileTitleProps) => {
  const { disabled } = useTileContext({
    consumerName: 'TileTitle',
    contextRequired: true,
  });
  return (
    <div
      className={cn(
        'body-2-semi-bold w-full truncate',
        disabled && 'text-disabled',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * The secondary text label for a Tile. Automatically inherits the disabled state from the parent Tile.
 * Text will truncate with ellipsis if it exceeds the available width.
 */
export const TileDescription = ({
  children,
  className,
  ...props
}: TileDescriptionProps) => {
  const { disabled } = useTileContext({
    consumerName: 'TileDescription',
    contextRequired: true,
  });
  return (
    <div
      className={cn(
        'body-3 w-full truncate',
        disabled ? 'text-disabled' : 'text-muted',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * A self-contained secondary action button for a Tile. Renders an InteractiveIcon that appears
 * in the top-right corner and is visible on hover/focus. Automatically hidden when the parent Tile is disabled.
 *
 * @example
 * import { MoreVertical } from '@ledgerhq/lumen-ui-react/symbols';
 *
 * <Tile>
 *   <TileSecondaryAction
 *     icon={MoreVertical}
 *     onClick={(e) => console.log('Secondary action clicked')}
 *   />
 *   <TileContent>
 *     <TileTitle>My Title</TileTitle>
 *   </TileContent>
 * </Tile>
 */
export const TileSecondaryAction = ({
  onClick,
  icon,
  className,
  'aria-label': ariaLabel,
  ...props
}: TileSecondaryActionProps) => {
  const { disabled } = useTileContext({
    consumerName: 'TileSecondaryAction',
    contextRequired: true,
  });

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onClick?.(e);
    },
    [onClick],
  );

  if (disabled) return null;

  const Icon = icon;

  return (
    <InteractiveIcon
      data-slot='tile-secondary-action'
      className={cn(
        'absolute right-4 top-4 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100',
        className,
      )}
      data-secondary-button-container
      iconType='stroked'
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon size={24} />
    </InteractiveIcon>
  );
};
