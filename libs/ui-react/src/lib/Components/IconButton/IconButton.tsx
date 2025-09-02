import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@ldls/utils-shared';

const buttonVariants = cva(
  'inline-flex h-fit w-fit items-center justify-center rounded-full text-muted transition-colors hover:text-muted-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:text-muted-pressed disabled:text-disabled',
  {
    variants: {
      iconType: {
        filled: '',
        stroked:
          'bg-base-transparent hover:bg-base-transparent-hover active:bg-base-transparent-pressed disabled:bg-disabled',
      },
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the icon button. Choose 'filled' for icons with solid backgrounds or 'stroked' for outlined icons. */
  iconType: 'filled' | 'stroked';
  /** The icon component to display inside the button. Should be a single icon element from the design system. */
  children: React.ReactNode;
}

/**
 * A specialized button component designed specifically for displaying icons.
 *
 * The IconButton provides two visual styles - 'filled' and 'stroked' - optimized for different icon types and use cases.
 * It ensures proper focus states, hover effects, and accessibility features while maintaining a minimal footprint.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-iconbutton-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-iconbutton-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 *
 * @warning Always provide an `aria-label` prop to ensure screen reader accessibility, as the button contains only an icon without visible text.
 * @warning The icon size should be controlled by the icon component itself, not through CSS. Use the appropriate size prop on the icon component (e.g., `size={20}`).
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning. Do not use it to modify the button's core appearance (colors, padding, etc).
 *
 * @example
 * import { IconButton } from '@ldls/ui-react';
 * import { DeleteCircleFill, Settings } from '@ldls/ui-react/symbols';
 *
 * // Filled icon button for destructive actions
 * <IconButton iconType="filled" aria-label="Delete item" onClick={handleDelete}>
 *   <DeleteCircleFill size={20} />
 * </IconButton>
 *
 * // Stroked icon button for secondary actions
 * <IconButton iconType="stroked" aria-label="Open settings" onClick={handleSettings}>
 *   <Settings size={20} />
 * </IconButton>
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, iconType, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(className, buttonVariants({ iconType }))}
        {...props}
      />
    );
  },
);
IconButton.displayName = 'IconButton';
