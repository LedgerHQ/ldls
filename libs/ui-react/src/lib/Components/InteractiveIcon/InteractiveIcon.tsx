import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex size-fit items-center justify-center rounded-full text-muted transition-colors hover:text-muted-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:text-muted-pressed disabled:text-disabled',
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

export interface InteractiveIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the icon button. Choose 'filled' for icons with solid backgrounds or 'stroked' for outlined icons. */
  iconType: 'filled' | 'stroked';
  /** The icon component to display inside the button. Should be a single icon element from the design system. */
  children: React.ReactNode;
}

/**
 * A specialized interactive component designed specifically for displaying clickable icons.
 *
 * The InteractiveIcon provides two visual styles - 'filled' and 'stroked' - optimized for different icon types and use cases.
 * It ensures proper focus states, hover effects, and accessibility features while maintaining a minimal footprint.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-interactiveicon-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-interactiveicon-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 *
 * @warning Always provide an `aria-label` prop to ensure screen reader accessibility, as the component contains only an icon without visible text.
 * @warning The icon size should be controlled by the icon component itself, not through CSS. Use the appropriate size prop on the icon component (e.g., `size={20}`).
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning. Do not use it to modify the component's core appearance (colors, padding, etc).
 *
 * @example
 * import { InteractiveIcon } from '@ledgerhq/ldls-ui-react';
 * import { DeleteCircleFill, Settings } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * // Filled interactive icon for destructive actions
 * <InteractiveIcon iconType="filled" aria-label="Delete item" onClick={handleDelete}>
 *   <DeleteCircleFill size={20} />
 * </InteractiveIcon>
 *
 * // Stroked interactive icon for secondary actions
 * <InteractiveIcon iconType="stroked" aria-label="Open settings" onClick={handleSettings}>
 *   <Settings size={20} />
 * </InteractiveIcon>
 */
export const InteractiveIcon = React.forwardRef<
  HTMLButtonElement,
  InteractiveIconProps
>(({ className, iconType, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(className, buttonVariants({ iconType }))}
      {...props}
    />
  );
});
InteractiveIcon.displayName = 'InteractiveIcon';
