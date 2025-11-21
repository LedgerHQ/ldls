import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';
import { useCommonTranslation } from '../../../i18n';
import { ArrowLeft, Close } from '../../Symbols';
import { IconButton } from '../IconButton';

const sheetBarVariants = cva('flex bg-canvas-sheet text-base', {
  variants: {
    appearance: {
      compact: 'h-64 flex-row items-center gap-12',
      extended: 'flex-col gap-16 pb-12',
    },
  },
});

const BackButton = ({ onBack }: { onBack: () => void }) => {
  const { t } = useCommonTranslation();
  return (
    <IconButton
      appearance='no-background'
      size='sm'
      icon={ArrowLeft}
      onClick={onBack}
      className='shrink-0'
      aria-label={t('components.sheetBar.goBackAriaLabel')}
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
      aria-label={t('components.sheetBar.closeAriaLabel')}
    />
  );
};

export type SheetBarProps = {
  /**
   * The appearance variant of the sheet bar.
   * @default 'compact'
   */
  appearance?: 'compact' | 'extended';
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
} & React.HTMLAttributes<HTMLDivElement>;

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
 * Do not use it to modify the sheet bar's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { SheetBar } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic compact sheet bar with title and close
 * <SheetBar
 *   appearance="compact"
 *   title="Settings"
 *   onClose={() => console.log('Closed!')}
 * />
 *
 * // Extended sheet bar with back button and description
 * <SheetBar
 *   appearance="extended"
 *   title="Account Details"
 *   description="View and edit your account information"
 *   onClose={() => handleClose()}
 *   onBack={() => handleBack()}
 * />
 */
export const SheetBar = ({
  className,
  appearance = 'compact',
  title,
  description,
  onClose,
  onBack,
  ...props
}: SheetBarProps) => {
  return (
    <div className={cn(className, sheetBarVariants({ appearance }))} {...props}>
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
          <div className='flex flex-row items-center justify-between'>
            {onBack && <BackButton onBack={onBack} />}
            <CloseButton onClose={onClose} />
          </div>
          {(title || description) && (
            <div className='flex flex-col gap-4 ps-16'>
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
