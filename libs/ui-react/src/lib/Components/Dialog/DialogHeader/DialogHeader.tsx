import { cn } from '@ledgerhq/ldls-utils-shared';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import React, { FC } from 'react';
import { useCommonTranslation } from '../../../../i18n';
import { ArrowLeft, Close } from '../../../Symbols';
import { IconButton } from '../../IconButton';
import { DialogHeaderProps } from '../types';

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

const BackButton: FC<{ onBack: () => void }> = ({ onBack }) => {
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

const CloseButton: FC<{ onClose: () => void }> = ({ onClose }) => {
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

/**
 * Internal component for accessible dialog titles.
 *
 * @internal
 * This component is used internally by DialogHeader to provide proper
 * accessibility labeling. It ensures screen readers announce the dialog
 * correctly by providing a title element that Radix Dialog requires.
 */
const DialogTitle: FC<
  React.ComponentProps<typeof DialogPrimitive.Title> & { hidden?: boolean }
> = ({ hidden, className, ...props }) => {
  return (
    <DialogPrimitive.Title
      data-slot='dialog-title'
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
};

/**
 * Internal component for accessible dialog descriptions.
 *
 * @internal
 * This component is used internally by DialogHeader to provide optional
 * accessibility context. It works with DialogTitle to give screen readers
 * a complete understanding of the dialog's purpose.
 */
const DialogDescription: FC<
  React.ComponentProps<typeof DialogPrimitive.Description> & {
    hidden?: boolean;
  }
> = ({ hidden, className, ...props }) => {
  return (
    <DialogPrimitive.Description
      data-slot='dialog-description'
      className={cn(hidden && 'sr-only', className)}
      {...props}
    />
  );
};

const DialogHeaderComponent: FC<DialogHeaderProps> = ({
  className,
  appearance = 'compact',
  title,
  description,
  onClose,
  onBack,
  ...props
}) => {
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

export const DialogHeader: FC<DialogHeaderProps> = ({
  title = '',
  description,
  appearance = 'compact',
  ...props
}) => {
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
};
