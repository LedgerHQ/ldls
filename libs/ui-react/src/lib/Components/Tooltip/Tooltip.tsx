import { cn } from '@ledgerhq/ldls-utils-shared';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva } from 'class-variance-authority';
import React from 'react';

const tooltipContentVariants = cva(
  'z-tooltip w-fit select-none text-balance rounded-xs bg-interactive px-8 py-4 text-on-interactive body-3',
  {
    variants: {
      side: {
        top: 'animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-top',
        bottom:
          'animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-bottom',
        left: 'animate-slide-in-from-left data-[state=closed]:animate-slide-out-to-left',
        right:
          'animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right',
      },
    },
    defaultVariants: {
      side: 'top',
    },
  },
);

/**
 * Provides context for all tooltip components within the application.
 *
 * This component should be placed at the root of your application or a high-level component
 * to enable tooltip functionality throughout the component tree. It manages global tooltip
 * state and configuration.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @example
 * import { TooltipProvider } from '@ledgerhq/ldls-ui-react';
 *
 * function App() {
 *   return (
 *     <TooltipProvider delayDuration={300}>
 *       <MyAppComponents />
 *     </TooltipProvider>
 *   );
 * }
 */
export const TooltipProvider = ({
  /**
   * The delay in milliseconds before the tooltip appears.
   * @default 200
   */
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot='tooltip-provider'
      delayDuration={delayDuration}
      {...props}
    />
  );
};

export type TooltipProps = {
  /**
   * The delay in milliseconds before the tooltip appears.
   * @default 200
   */
  delayDuration?: number;
} & React.ComponentProps<typeof TooltipPrimitive.Root>;
/**
 * The root component that manages the tooltip's open/closed state and contains the trigger and content.
 *
 * This component wraps the Radix UI Tooltip Root and automatically includes a TooltipProvider
 * if one is not already present in the component tree. It manages the tooltip's visibility
 * state and coordinates between the trigger and content components.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @example
 * import { Tooltip, TooltipTrigger, TooltipContent } from '@ledgerhq/ldls-ui-react';
 *
 * function MyComponent() {
 *   return (
 *     <Tooltip>
 *       <TooltipTrigger>
 *         <button>Hover me</button>
 *       </TooltipTrigger>
 *       <TooltipContent>
 *         <p>This is a tooltip!</p>
 *       </TooltipContent>
 *     </Tooltip>
 *   );
 * }
 */
export const Tooltip = ({ delayDuration = 200, ...props }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive.Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  );
};

export type TooltipTriggerProps = {
  /**
   * The element that will trigger the tooltip (e.g., button, icon, text).
   */
  children?: React.ReactNode;
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof TooltipPrimitive.Trigger>;

/**
 * The element that triggers the tooltip to appear when interacted with.
 *
 * This component wraps any interactive element (button, link, icon, etc.) and makes it
 * the trigger for the tooltip. When users hover over or focus on this element, the
 * associated tooltip content will be displayed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @example
 * import { TooltipTrigger } from '@ledgerhq/ldls-ui-react';
 *
 * <TooltipTrigger>
 *   <button>Hover me for a tooltip</button>
 * </TooltipTrigger>
 *
 * // Works with any interactive element
 * <TooltipTrigger>
 *   <InteractiveIcon icon={InfoIcon} size="sm" />
 * </TooltipTrigger>
 */
export const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />;
};

export type TooltipContentProps = {
  /**
   * The content to display inside the tooltip.
   */
  children?: React.ReactNode;
  /**
   * The side of the trigger element to position the tooltip on.
   * @default top
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * The distance in pixels between the tooltip and the trigger element.
   * @default 0
   */
  sideOffset?: number;
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof TooltipPrimitive.Content>;

/**
 * The content container that displays the tooltip information.
 *
 * This component renders the actual tooltip content with custom styling and includes
 * an arrow pointer that points to the trigger element. The content is automatically
 * positioned relative to the trigger and handles collision detection to stay within
 * the viewport boundaries.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the tooltip's core appearance (colors, padding, etc).
 *
 * @example
 * import { TooltipContent } from '@ledgerhq/ldls-ui-react';
 *
 * <TooltipContent sideOffset={8}>
 *   <p className="text-accent">This tooltip provides helpful information</p>
 * </TooltipContent>
 *
 * // With custom styling for layout
 * <TooltipContent sideOffset={12} className="max-w-xs">
 *   <div className="space-y-2">
 *     <h4 className="heading-1">Tip Title</h4>
 *     <p>Detailed explanation of the feature.</p>
 *   </div>
 * </TooltipContent>
 */
export const TooltipContent = ({
  className,
  sideOffset = 0,
  side,
  children,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot='tooltip-content'
        side={side}
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ side }), className)}
        {...props}
      >
        <TooltipPrimitive.Arrow className='size-10 translate-y-[calc(-50%_-_1px)] rotate-45 rounded-[1px] bg-interactive fill-interactive' />
        <div className='relative'>{children}</div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};
