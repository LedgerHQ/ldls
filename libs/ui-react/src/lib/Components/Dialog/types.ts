import * as DialogPrimitive from '@radix-ui/react-dialog';

export type DialogHeight = 'hug' | 'fixed';

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
  /**
   * The height behavior of the dialog.
   * - `hug`: Content-fit height up to max 560px (default)
   * - `fixed`: Always exactly 560px height
   * @default 'hug'
   */
  height?: DialogHeight;
} & React.ComponentProps<typeof DialogPrimitive.Root>;

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

export type DialogOverlayProps = {
  /**
   * Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance.
   */
  className?: string;
} & React.ComponentProps<typeof DialogPrimitive.Overlay>;

export type DialogHeaderProps = {
  /**
   * The appearance variant of the header.
   * @default 'compact'
   */
  appearance?: 'compact' | 'extended';
  /**
   * The main title to display in the header.
   */
  title?: string;
  /**
   * Optional description text to show below or beside the title.
   */
  description?: string;
  /**
   * Callback function to handle close action.
   */
  onClose: () => void;
  /**
   * Optional callback for back navigation.
   */
  onBack?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
