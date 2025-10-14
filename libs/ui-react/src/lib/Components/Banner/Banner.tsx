import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '@ledgerhq/ldls-utils-shared';
import {
  InformationFill,
  CheckmarkCircleFill,
  WarningFill,
  DeleteCircleFill,
  Close,
} from '../../Symbols';
import { IconButton } from '../IconButton';
import { BannerProps } from './types';

const iconMap = {
  info: <InformationFill className='text-base' />,
  success: <CheckmarkCircleFill className='text-success' />,
  warning: <WarningFill className='text-warning' />,
  error: <DeleteCircleFill className='text-error' />,
};

const bannerVariants = {
  root: cva('flex w-full items-start gap-8 rounded-md p-16 text-base', {
    variants: {
      appearance: {
        info: 'bg-muted',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
      },
    },
  }),
};

/**
 * A banner component for displaying informational, success, warning, or error messages with optional description, action buttons, and close button.
 *
 * The appearance determines the color scheme and icon used.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/communication-banner-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/communication-banner-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the banner's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Banner } from '@ledgerhq/ldls-ui-react';
 *
 * // Basic info banner
 * <Banner title="Information" appearance="info" />
 *
 * // Banner with description and actions
 * <Banner
 *   title="Success"
 *   appearance="success"
 *   description="Your action was successful."
 *   primaryAction={<Button appearance="transparent" size="sm" onClick={() => {}}>Primary</Button>}
 *   secondaryAction={<Button appearance="no-background" size="sm" onClick={() => {}}>Secondary</Button>}
 * />
 *
 * // Error banner with close
 * <Banner
 *   title="Error"
 *   appearance="error"
 *   onClose={() => console.log('Close')}
 *   closeAriaLabel="Close banner"
 * />
 */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      appearance = 'info',
      title,
      description,
      primaryAction,
      secondaryAction,
      className,
      onClose,
      closeAriaLabel,
      ...props
    },
    ref,
  ) => {
    const icon = iconMap[appearance];

    return (
      <div
        ref={ref}
        className={cn(className, bannerVariants.root({ appearance }))}
        {...props}
      >
        <div className={'flex shrink-0 items-start py-4'}>{icon}</div>
        <div className={'mr-8 flex flex-1 flex-col gap-8 py-4'}>
          <div className={'flex flex-col gap-4'}>
            <h3 className={'body-1-semi-bold line-clamp-2'}>{title}</h3>
            {description && (
              <div className={'body-2 line-clamp-5'}>{description}</div>
            )}
          </div>
          {(primaryAction || secondaryAction) && (
            <div className='flex gap-4'>
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>
        {onClose && (
          <IconButton
            appearance='transparent'
            size='xs'
            icon={Close}
            onClick={() => onClose()}
            aria-label={closeAriaLabel || 'Close'}
          />
        )}
      </div>
    );
  },
);
