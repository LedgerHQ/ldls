import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@ldls/utils-shared';

/**
 * The root component that manages the dialog's open/closed state and contains the trigger and content.
 *
 * This component wraps the Radix UI Dialog Root. It manages the dialog's visibility
 * state and coordinates between the trigger and content components.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 * ```
 *
 * @component
 * @param {boolean} [defaultOpen] - The initial open state of the dialog when uncontrolled.
 * @param {boolean} [open] - Controls the open state of the dialog when used as a controlled component.
 * @param {function} [onOpenChange] - Callback fired when the dialog's open state changes.
 * @param {React.ComponentProps<typeof DialogPrimitive.Root>} [...] - All other props are passed to the underlying Radix UI Root.
 *
 * @example
 * import { Dialog, DialogTrigger, DialogContent, Button } from '@ledgerhq/ldls-ui-react';
 *
 * function MyComponent() {
 *   return (
 *     <Dialog>
 *       <DialogTrigger asChild>
 *         <Button>Open Dialog</Button>
 *       </DialogTrigger>
 *       <DialogContent>
 *         <p>This is a dialog!</p>
 *       </DialogContent>
 *     </Dialog>
 *   );
 * }
 */
export function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

/**
 * The element that triggers the dialog to appear when interacted with.
 *
 * This component wraps any interactive element (button, link, icon, etc.) and makes it
 * the trigger for the dialog. When users click on this element, the
 * associated dialog content will be displayed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {React.ReactNode} children - The element that will trigger the dialog (e.g., button, icon, text).
 * @param {boolean} [asChild=false] - Change the default rendered element for the one passed as a child, merging their props and behavior.
 * @param {string} [className] - Additional custom CSS classes to apply.
 * @param {React.ComponentProps<typeof DialogPrimitive.Trigger>} [...] - All other props are passed to the underlying Radix UI Trigger.
 *
 * @example
 * import { DialogTrigger, Button } from '@ledgerhq/ldls-ui-react';
 *
 * <DialogTrigger asChild>
 *   <Button>Click me for a dialog</Button>
 * </DialogTrigger>
 */
export function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

/**
 * A portal component that renders the dialog content into a new DOM context.
 *
 * This component is used internally by DialogContent to render the dialog
 * outside of the normal DOM hierarchy, typically at the body level to avoid
 * styling conflicts and ensure proper stacking context.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {React.ComponentProps<typeof DialogPrimitive.Portal>} [...] - All props are passed to the underlying Radix UI Portal.
 *
 * @example
 * // Used internally
 * <DialogPortal container={document.getElementById('portal-root')}>
 *   // content
 * </DialogPortal>
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

/**
 * The overlay that covers the background when the dialog is open.
 *
 * This component renders a semi-transparent overlay behind the dialog content
 * to dim the background and focus attention on the dialog. It also prevents
 * interaction with underlying elements.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
 * @param {React.ComponentProps<typeof DialogPrimitive.Overlay>} [...] - All other props are passed to the underlying Radix UI Overlay.
 *
 * @warning The `className` prop should only be used for layout adjustments.
 * Do not use it to modify the overlay's core appearance (colors, opacity, etc).
 *
 * @example
 * <DialogOverlay className="bg-opacity-50" />
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        className,
        'z-dialogOverlay fixed inset-0 bg-canvas-overlay transition-opacity data-[state=open]:animate-overlayShow',
      )}
      {...props}
    />
  );
}

/**
 * The content container that displays the dialog information.
 *
 * This component renders the actual dialog content with custom styling.
 * The content is automatically positioned in the center of the viewport.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {React.ReactNode} children - The content to display inside the dialog.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
 * @param {React.ComponentProps<typeof DialogPrimitive.Content>} [...] - All other props are passed to the underlying Radix UI Content.
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the dialog's core appearance (colors, padding, etc).
 *
 * @example
 * import { DialogContent } from '@ledgerhq/ldls-ui-react';
 *
 * <DialogContent>
 *   <p>This is a dialog!</p>
 * </DialogContent>
 *
 * // With custom styling for layout
 * <DialogContent className="max-w-md">
 *   <div className="space-y-4">
 *     <h4 className="heading-4-semi-bold">Dialog Title</h4>
 *     <p>Detailed content here.</p>
 *   </div>
 * </DialogContent>
 */
export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'z-dialogContent fixed left-[50%] top-[50%] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-2xl bg-canvas-sheet data-[state=open]:animate-contentShow',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
