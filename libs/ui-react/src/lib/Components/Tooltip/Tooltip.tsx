import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@ldls/utils-shared';

/**
 * Provides context for all tooltip components within the application.
 *
 * This component should be placed at the root of your application or a high-level component
 * to enable tooltip functionality throughout the component tree. It manages global tooltip
 * state and configuration.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @component
 * @param {number} [delayDuration=0] - The delay in milliseconds before the tooltip appears.
 * @param {React.ComponentProps<typeof TooltipPrimitive.Provider>} [...] - All other props are passed to the underlying Radix UI Provider.
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
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

/**
 * The root component that manages the tooltip's open/closed state and contains the trigger and content.
 *
 * This component wraps the Radix UI Tooltip Root and automatically includes a TooltipProvider
 * if one is not already present in the component tree. It manages the tooltip's visibility
 * state and coordinates between the trigger and content components.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @component
 * @param {boolean} [defaultOpen] - The initial open state of the tooltip when uncontrolled.
 * @param {boolean} [open] - Controls the open state of the tooltip when used as a controlled component.
 * @param {function} [onOpenChange] - Callback fired when the tooltip's open state changes.
 * @param {React.ComponentProps<typeof TooltipPrimitive.Root>} [...] - All other props are passed to the underlying Radix UI Root.
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
export const Tooltip = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
};

/**
 * The element that triggers the tooltip to appear when interacted with.
 *
 * This component wraps any interactive element (button, link, icon, etc.) and makes it
 * the trigger for the tooltip. When users hover over or focus on this element, the
 * associated tooltip content will be displayed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-tooltip-overview--docs Storybook}
 *
 * @component
 * @param {React.ReactNode} children - The element that will trigger the tooltip (e.g., button, icon, text).
 * @param {string} [className] - Additional custom CSS classes to apply.
 * @param {React.ComponentProps<typeof TooltipPrimitive.Trigger>} [...] - All other props are passed to the underlying Radix UI Trigger.
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
 *   <IconButton icon={InfoIcon} size="sm" />
 * </TooltipTrigger>
 */
export const TooltipTrigger = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};

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
 * @component
 * @param {React.ReactNode} children - The content to display inside the tooltip.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
 * @param {number} [sideOffset=0] - The distance in pixels between the tooltip and the trigger element.
 * @param {React.ComponentProps<typeof TooltipPrimitive.Content>} [...] - All other props are passed to the underlying Radix UI Content.
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the tooltip's core appearance (colors, padding, etc).
 *
 * @example
 * import { TooltipContent } from '@ledgerhq/ldls-ui-react';
 *
 * <TooltipContent sideOffset={8}>
 *   <p className="text-sm">This tooltip provides helpful information</p>
 * </TooltipContent>
 *
 * // With custom styling for layout
 * <TooltipContent sideOffset={12} className="max-w-xs">
 *   <div className="space-y-2">
 *     <h4 className="font-semibold">Tip Title</h4>
 *     <p>Detailed explanation of the feature.</p>
 *   </div>
 * </TooltipContent>
 */
export const TooltipContent = ({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-fit select-none text-balance rounded-xs bg-interactive px-8 py-4 text-on-interactive body-3',
          className,
        )}
        {...props}
      >
        <TooltipPrimitive.Arrow className="z-40 size-10 translate-y-[calc(-50%_-_1px)] rotate-45 rounded-[1px] bg-interactive fill-interactive" />
        <div className="relative z-50">{children}</div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};
