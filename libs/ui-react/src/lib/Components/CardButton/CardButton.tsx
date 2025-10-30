import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';
import { ChevronRight } from '../../Symbols';
import { IconSize } from '../Icon/Icon';

const buttonVariants = cva(
  'focus-visible:outline-focus disabled:text-disabled inline-flex h-fit w-full items-center gap-12 rounded-sm p-12 transition-colors focus-visible:outline-2',
  {
    variants: {
      appearance: {
        base: 'bg-muted hover:bg-muted-hover active:bg-muted-pressed disabled:bg-disabled text-base',
        outline:
          'bg-base-transparent outline-muted-subtle hover:bg-base-transparent-hover hover:outline-muted-subtle-hover active:bg-base-transparent-pressed active:outline-muted-subtle-pressed disabled:bg-base-transparent disabled:outline-disabled text-base outline-dashed outline-1 focus-visible:outline-none focus-visible:outline-offset-0',
      },
    },
    defaultVariants: {
      appearance: 'base',
    },
  },
);

export type CardButtonProps = {
  /**
   * The visual style of the card button.
   * @default base
   */
  appearance?: 'base' | 'outline';
  /**
   * An optional icon component to render on the left side.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * The main title of the card button.
   * @required
   */
  title: string;
  /**
   * Optional descriptive text displayed below the title.
   */
  description?: string;
  /**
   * If true, hides the chevron arrow on the right side.
   * @default false
   */
  hideChevron?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

/**
 * A customizable card button component that displays an optional icon, a required title, an optional description, and an optional chevron arrow.
 *
 * It supports different appearances. takes full width by default. The chevron can be hidden if needed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/action-cardbutton--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/action-cardbutton--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the card button's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * // Basic card button
 * import { CardButton } from '@ledgerhq/ldls-ui-react';
 *
 * <CardButton title="Click Me" onClick={() => console.log('Clicked!')} />
 *
 * // Card button with icon and description
 * import { CardButton } from '@ledgerhq/ldls-ui-react';
 * import { Info } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <CardButton
 *   icon={Info}
 *   title="Information"
 *   description="Additional details here"
 *   appearance="outline"
 * />
 */
export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  (
    { className, appearance, icon, title, description, hideChevron, ...props },
    ref,
  ) => {
    const IconComponent = icon;

    return (
      <button
        ref={ref}
        className={cn(
          className,
          buttonVariants({
            appearance,
          }),
        )}
        disabled={props.disabled}
        {...props}
      >
        {IconComponent && <IconComponent size={24} className='shrink-0' />}
        <div className='flex min-w-0 flex-1 flex-col gap-4 text-left'>
          <div className='body-1-semi-bold min-w-0 truncate'>{title}</div>
          {description && (
            <div className='body-2 line-clamp-2 min-w-0'>{description}</div>
          )}
        </div>
        {!hideChevron && <ChevronRight size={24} className='shrink-0' />}
      </button>
    );
  },
);
CardButton.displayName = 'CardButton';
