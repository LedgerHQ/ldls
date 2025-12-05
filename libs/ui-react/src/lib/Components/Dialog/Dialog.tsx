import { cn } from '@ledgerhq/ldls-utils-shared';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

export type DialogProps = {
  /**
   * Callback function to handle open state change.
   * @param open - The new open state of the dialog.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the dialog.
   * @default false
   */
  open?: boolean;
  /**
   * The default open state of the dialog.
   * @default false
   */
  defaultOpen?: boolean;
} & React.ComponentProps<typeof DialogPrimitive.Root>;

/**
 * The root component that manages the dialog's open/closed state and contains the trigger and content.
 *
 * This component wraps the Radix UI Dialog Root. It manages the dialog's visibility
 * state and coordinates between the trigger and content components.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
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
export function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot='dialog' {...props} />;
}

export type DialogTriggerProps = {
  /**
   * The element that will trigger the dialog (e.g., button, icon, text).
   */
  children?: React.ReactNode;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof DialogPrimitive.Trigger>;

/**
 * The element that triggers the dialog to appear when interacted with.
 *
 * This component wraps any interactive element (button, link, icon, etc.) and makes it
 * the trigger for the dialog. When users click on this element, the
 * associated dialog content will be displayed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @example
 * import { DialogTrigger, Button } from '@ledgerhq/ldls-ui-react';
 *
 * <DialogTrigger asChild>
 *   <Button>Click me for a dialog</Button>
 * </DialogTrigger>
 */
export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
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
 * @example
 * // Used internally
 * <DialogPortal container={document.getElementById('portal-root')}>
 *   // content
 * </DialogPortal>
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />;
}

export type DialogOverlayProps = {
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof DialogPrimitive.Overlay>;

/**
 * The overlay that covers the background when the dialog is open.
 *
 * This component renders a semi-transparent overlay behind the dialog content
 * to dim the background and focus attention on the dialog. It also prevents
 * interaction with underlying elements.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @warning The `className` prop should only be used for layout adjustments.
 * Do not use it to modify the overlay's core appearance (colors, opacity, etc).
 *
 * @example
 * <DialogOverlay className="bg-opacity-50" />
 */
const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Overlay
        ref={ref}
        data-slot='dialog-overlay'
        className={cn(
          className,
          'fixed inset-0 z-dialog-overlay backdrop-blur-sm bg-canvas-overlay data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in',
        )}
        {...props}
      />
    );
  },
);

export type DialogContentProps = {
  /**
   * The content to display inside the dialog.
   */
  children?: React.ReactNode;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof DialogPrimitive.Content>;

/**
 * The content container that displays the dialog information.
 *
 * This component renders the actual dialog content with custom styling.
 * The content is automatically positioned in the center of the viewport.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
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
}: DialogContentProps) {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot='dialog-content'
        className={cn(
          'fixed left-[50%] top-[50%] z-dialog-content w-400 max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-2xl bg-canvas-sheet px-24 pb-24 pt-0 data-[state=closed]:animate-content-hide data-[state=open]:animate-content-show',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
