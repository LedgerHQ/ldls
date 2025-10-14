import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@ledgerhq/ldls-utils-shared';
import { ArrowLeft, Close } from '../../Symbols';
import { IconButton } from '../IconButton';

const sheetBarVariants = cva('flex w-full bg-canvas-sheet text-base', {
  variants: {
    size: {
      sm: 'h-64 flex-row items-center gap-12',
      lg: 'flex-col gap-16 pb-12',
    },
  },
});

const BackButton = ({ onBack }: { onBack: () => void }) => {
  return (
    <IconButton
      appearance='no-background'
      size='sm'
      icon={ArrowLeft}
      onClick={onBack}
      className='shrink-0'
      aria-label='Go back'
    />
  );
};

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <IconButton
      appearance='gray'
      size='xs'
      icon={Close}
      onClick={onClose}
      className='shrink-0'
      aria-label='Close'
    />
  );
};

export interface SheetBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size variant of the sheet bar.
   */
  size: 'sm' | 'lg';
  /**
   * The main title to display in the sheet bar.
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
}

/**
 * A customizable sheet bar component that displays title, description, and navigation buttons for sheets/modals.
 *
 * This component is typically used as the header for sheet-like interfaces, providing
 * back and close functionality along with optional title and description.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-sheetbar-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/containment-sheetbar-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the sheet bar's core appearance (colors, padding, etc). Use the `size` prop instead.
 *
 * @example
 * import { SheetBar } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic small sheet bar with title and close
 * <SheetBar
 *   size="sm"
 *   title="Settings"
 *   onClose={() => console.log('Closed!')}
 * />
 *
 * // Large sheet bar with back button and description
 * <SheetBar
 *   size="lg"
 *   title="Account Details"
 *   description="View and edit your account information"
 *   onClose={() => handleClose()}
 *   onBack={() => handleBack()}
 * />
 */
export const SheetBar = ({
  className,
  size = 'sm',
  title,
  description,
  onClose,
  onBack,
  ...props
}: SheetBarProps) => {
  return (
    <div className={cn(className, sheetBarVariants({ size }))} {...props}>
      {size === 'sm' && (
        <>
          {onBack && <BackButton onBack={onBack} />}
          <div className='flex min-w-0 flex-1 flex-col'>
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
      {size === 'lg' && (
        <>
          <div className='flex flex-row justify-between'>
            <div>{onBack && <BackButton onBack={onBack} />}</div>
            <CloseButton onClose={onClose} />
          </div>
          {(title || description) && (
            <div className='flex flex-col gap-4'>
              {title && <div className='heading-2-semi-bold'>{title}</div>}
              {description && (
                <div className='text-muted body-1'>{description}</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
