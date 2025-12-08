import { cn } from '@ledgerhq/ldls-utils-shared';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import React from 'react';
import { useCommonTranslation } from '../../../i18n';
import { ArrowLeft, Close } from '../../Symbols';
import { IconButton } from '../IconButton';

const dialogHeaderVariants = cva(
  '-ml-14 -mr-8 flex bg-canvas-sheet text-base',
  {
    variants: {
      appearance: {
        compact: 'h-64 flex-row items-center gap-12',
        extended: 'flex-col gap-16 pb-12 pt-10',
      },
    },
  },
);

const BackButton = ({ onBack }: { onBack: () => void }) => {
  const { t } = useCommonTranslation();
  return (
    <IconButton
      appearance='no-background'
      size='sm'
      icon={ArrowLeft}
      onClick={onBack}
      className='shrink-0'
      aria-label={t('components.dialogHeader.goBackAriaLabel')}
    />
  );
};

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  const { t } = useCommonTranslation();
  return (
    <IconButton
      appearance='gray'
      size='xs'
      icon={Close}
      onClick={onClose}
      className='shrink-0'
      aria-label={t('components.dialogHeader.closeAriaLabel')}
    />
  );
};

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

/**
 * Internal component for accessible dialog titles.
 *
 * @internal
 * This component is used internally by DialogHeader to provide proper
 * accessibility labeling. It ensures screen readers announce the dialog
 * correctly by providing a title element that Radix Dialog requires.
 */
function DialogTitle({
  hidden,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title> & { hidden?: boolean }) {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
}

/**
 * Internal component for accessible dialog descriptions.
 *
 * @internal
 * This component is used internally by DialogHeader to provide optional
 * accessibility context. It works with DialogTitle to give screen readers
 * a complete understanding of the dialog's purpose.
 */
function DialogDescription({
  hidden,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description> & {
  hidden?: boolean;
}) {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
}

/**
 * A customizable Header component that displays title, description, and navigation buttons for sheets/dialogs.
 *
 * This component is typically used as the header for sheet-like interfaces, providing
 * back and close functionality along with optional title and description.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialogheader-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialogheader-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the dialog header's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { DialogHeader } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic compact dialog header with title and close
 * <DialogHeader
 *   appearance="compact"
 *   title="Settings"
 *   onClose={() => console.log('Closed!')}
 * />
 *
 * // Extended dialog header with back button and description
 * <DialogHeader
 *   appearance="extended"
 *   title="Account Details"
 *   description="View and edit your account information"
 *   onClose={() => handleClose()}
 *   onBack={() => handleBack()}
 * />
 */
const DialogHeaderComponent = ({
  className,
  appearance = 'compact',
  title,
  description,
  onClose,
  onBack,
  ...props
}: DialogHeaderProps) => {
  return (
    <div className={dialogHeaderVariants({ appearance, className })} {...props}>
      {appearance === 'compact' && (
        <>
          {onBack && <BackButton onBack={onBack} />}
          <div
            className={cn('flex min-w-0 flex-1 flex-col', {
              'pl-40': !onBack,
            })}
          >
            {title && (
              <div className='truncate text-center heading-4-semi-bold'>
                {title}
              </div>
            )}
            {description && (
              <div className='truncate text-center text-muted body-2'>
                {description}
              </div>
            )}
          </div>
          <CloseButton onClose={onClose} />
        </>
      )}
      {appearance === 'extended' && (
        <>
          <div className='flex h-40 flex-row items-center'>
            {onBack && <BackButton onBack={onBack} />}
            <div className='ml-auto'>
              <CloseButton onClose={onClose} />
            </div>
          </div>
          {(title || description) && (
            <div className='flex flex-col gap-4 ps-14'>
              {title && <div className='heading-2-semi-bold'>{title}</div>}
              {description && (
                <div className='text-muted body-2'>{description}</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

/**
 * A convenient wrapper that combines DialogHeader with accessible DialogTitle and DialogDescription.
 *
 * This component provides a consistent header for dialogs by combining the visual DialogHeader
 * component with the necessary accessibility components (DialogTitle and DialogDescription).
 * It automatically handles the accessibility requirements while maintaining the visual design.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-dialog-overview--docs Storybook}
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
 *   appearance="extended"
 *   title="Settings"
 *   description="Manage your account preferences"
 *   onBack={() => goToPreviousStep()}
 *   onClose={() => setOpen(false)}
 * />
 */
export function DialogHeader({
  title = '',
  description,
  appearance = 'compact',
  ...props
}: DialogHeaderProps & { title?: string }) {
  return (
    <>
      <DialogHeaderComponent
        title={title}
        description={description}
        appearance={appearance}
        {...props}
      />
      {/* Accessibility Note: Even though the visible header/description are
      rendered by DialogHeader, Radix Dialog still requires DialogTitle (and
      optionally DialogDescription) for proper labeling. These hidden elements
      ensure assistive technologies announce the dialog correctly without
      duplicating visible text. */}
      <DialogTitle hidden>{title}</DialogTitle>
      {description && (
        <DialogDescription hidden>{description}</DialogDescription>
      )}
    </>
  );
}
