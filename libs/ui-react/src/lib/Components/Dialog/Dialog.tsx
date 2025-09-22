import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@ldls/utils-shared';
import { SheetBar, SheetBarProps } from '../SheetBar';

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
const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      data-slot="dialog-overlay"
      className={cn(
        className,
        'fixed inset-0 z-dialogOverlay bg-canvas-overlay data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow',
      )}
      {...props}
    />
  );
});

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
          'fixed left-[50%] top-[50%] z-dialogContent w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-2xl bg-canvas-sheet data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

/**
 * A convenient wrapper that combines SheetBar with accessible DialogTitle and DialogDescription.
 *
 * This component provides a consistent header for dialogs by combining the visual SheetBar
 * component with the necessary accessibility components (DialogTitle and DialogDescription).
 * It automatically handles the accessibility requirements while maintaining the visual design.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {SheetBarProps} props - All props are passed to the underlying SheetBar component.
 * @param {string} props.title - The dialog title, used both visually and for accessibility.
 * @param {string} [props.description] - Optional description, used both visually and for accessibility.
 * @param {'sm' | 'lg'} [props.size='sm'] - The size variant of the header.
 * @param {function} [props.onClose] - Callback function to handle closing the dialog.
 * @param {function} [props.onBack] - Optional callback function to handle back navigation.
 *
 * @example
 * import { Dialog, DialogContent, DialogTrigger, DialogHeader } from '@ledgerhq/ldls-ui-react';
 *
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader
 *       title="Dialog Title"
 *       onClose={() => setOpen(false)}
 *     />
 *     <p>Dialog content here</p>
 *   </DialogContent>
 * </Dialog>
 *
 * @example
 * // With description and back button
 * <DialogHeader
 *   size="lg"
 *   title="Settings"
 *   description="Manage your account preferences"
 *   onBack={() => goToPreviousStep()}
 *   onClose={() => setOpen(false)}
 * />
 */
export function DialogHeader({
  title,
  description,
  ...props
}: SheetBarProps & { title: string }) {
  return (
    <>
      <SheetBar title={title} description={description} {...props} />
      <DialogTitle hidden>{title}</DialogTitle>
      {description && (
        <DialogDescription hidden>{description}</DialogDescription>
      )}
    </>
  );
}

/**
 * An accessible title to be announced when the dialog is opened.
 *
 * This component is essential for accessibility as it provides screen readers with
 * the dialog's purpose. Without a DialogTitle, the dialog will not be properly
 * announced to assistive technologies.
 *
 * The title can be visually hidden using the `hidden` prop while still being
 * available to screen readers. This is useful when you have visual headers
 * (like SheetBar) but still need proper accessibility.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {React.ReactNode} children - The title text content.
 * @param {boolean} [hidden=false] - Whether to visually hide the title while keeping it accessible to screen readers.
 * @param {string} [className] - Additional custom CSS classes to apply.
 * @param {React.ComponentProps<typeof DialogPrimitive.Title>} [...] - All other props are passed to the underlying Radix UI Title.
 *
 * @example
 * // Visible title
 * <DialogTitle>Account Settings</DialogTitle>
 *
 * @example
 * // Hidden title for accessibility only
 * <DialogTitle hidden>Transaction Details</DialogTitle>
 *
 * @example
 * // With custom styling
 * <DialogTitle className="text-lg font-semibold">Important Notice</DialogTitle>
 */
export function DialogTitle({
  hidden,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title> & { hidden?: boolean }) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
}

/**
 * An optional accessible description to be announced when the dialog is opened.
 *
 * This component provides additional context about the dialog's content or purpose,
 * enhancing the accessibility experience. It works in conjunction with DialogTitle
 * to give screen reader users a complete understanding of the dialog.
 *
 * The description can be visually hidden using the `hidden` prop while still being
 * available to screen readers. This is useful when you have visual content that
 * serves the same purpose but need proper accessibility.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
 *
 * @component
 * @param {React.ReactNode} children - The description text content.
 * @param {boolean} [hidden=false] - Whether to visually hide the description while keeping it accessible to screen readers.
 * @param {string} [className] - Additional custom CSS classes to apply.
 * @param {React.ComponentProps<typeof DialogPrimitive.Description>} [...] - All other props are passed to the underlying Radix UI Description.
 *
 * @example
 * // Visible description
 * <DialogDescription>
 *   This action cannot be undone. Please review your changes carefully.
 * </DialogDescription>
 *
 * @example
 * // Hidden description for accessibility only
 * <DialogDescription hidden>
 *   View detailed information about your transaction including amounts and fees.
 * </DialogDescription>
 *
 * @example
 * // With custom styling
 * <DialogDescription className="text-sm text-gray-600">
 *   Additional context about this dialog.
 * </DialogDescription>
 */
export function DialogDescription({
  hidden,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description> & {
  hidden?: boolean;
}) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
}
