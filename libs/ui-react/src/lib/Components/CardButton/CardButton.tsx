import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';
import { IconSize } from '../Icon/Icon';
import { ChevronRight } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-fit max-w-full cursor-pointer items-center gap-12 rounded-sm p-12 transition-colors focus-visible:outline-focus focus-visible:ring-2 disabled:pointer-events-none disabled:text-disabled',
  {
    variants: {
      appearance: {
        base: 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed disabled:bg-disabled',
        outline:
          'bg-base-transparent text-base outline-dashed outline-1 outline-muted-subtle hover:bg-base-transparent-hover hover:outline-muted-subtle-hover focus-visible:outline-none focus-visible:outline-offset-0 active:bg-base-transparent-pressed active:outline-muted-subtle-pressed disabled:bg-base-transparent disabled:outline-disabled',
      },
      isFull: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      appearance: 'base',
    },
  },
);

export interface CardButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  title: string;
  description?: string;
  hideChevron?: boolean;
  isFull?: boolean;
}

/**
 * A customizable card button component that displays an optional icon, a required title, an optional description, and an optional chevron arrow.
 *
 * It supports different appearances and can be set to full width. The chevron can be hidden if needed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-cardbutton-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-cardbutton-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'base' | 'outline'} [appearance='base'] - The visual style of the card button.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [icon] - An optional icon component to render on the left side.
 *   The icon styles are defined by the card button. Please do not override them.
 * @param {string} title - The main title of the card button.
 * @param {string} [description] - Optional descriptive text displayed below the title.
 * @param {boolean} [hideChevron=false] - If true, hides the chevron arrow on the right side.
 * @param {boolean} [isFull=false] - If true, the card button expands to the full width of its container.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>} [...] - All standard button props except children (e.g., `disabled`, `onClick`, `type`).
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the card button's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * // Basic card button
 * import { CardButton } from '@ldls/ui-react';
 *
 * <CardButton title="Click Me" onClick={() => console.log('Clicked!')} />
 *
 * // Card button with icon and description
 * import { CardButton } from '@ldls/ui-react';
 * import { Info } from '@ldls/ui-react/symbols';
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
    {
      className,
      appearance,
      icon,
      title,
      description,
      hideChevron,
      isFull,
      ...props
    },
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
            isFull,
          }),
        )}
        disabled={props.disabled}
        {...props}
      >
        {IconComponent && <IconComponent size={24} className="flex-shrink-0" />}
        <div className="flex min-w-0 flex-1 flex-col gap-4 text-left">
          <div className="min-w-0 truncate body-1-semi-bold">{title}</div>
          {description && (
            <div className="line-clamp-2 min-w-0 body-2">{description}</div>
          )}
        </div>
        {!hideChevron && <ChevronRight size={24} className="flex-shrink-0" />}
      </button>
    );
  },
);
CardButton.displayName = 'CardButton';
