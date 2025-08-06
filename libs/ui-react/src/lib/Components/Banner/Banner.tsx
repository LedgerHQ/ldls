import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@ldls/utils-shared';
import {
  InformationFill,
  CheckmarkCircleFill,
  WarningFill,
  DeleteCircleFill,
  Close,
} from '../../Symbols';
import { Button } from '../Button';

const iconMap = {
  info: <InformationFill className="text-base" />,
  success: <CheckmarkCircleFill className="text-success" />,
  warning: <WarningFill className="text-warning" />,
  error: <DeleteCircleFill className="text-error" />,
};

const bannerVariants = cva(
  'align-start flex w-fit max-w-full gap-8 rounded-md p-16 text-base',
  {
    variants: {
      appearance: {
        info: 'bg-muted',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
      },
      isFull: {
        true: 'w-full',
      },
    },
  },
);

export type BannerAppearance = NonNullable<
  VariantProps<typeof bannerVariants>['appearance']
>;

export type BannerAction = {
  label: string;
  onClick: () => void;
};

export type BannerCloseAction = {
  onClick: () => void;
  ariaLabel?: string;
};

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof bannerVariants>, 'appearance'> {
  appearance?: BannerAppearance;
  title: string;
  description?: string;
  isFull?: boolean;
  primaryAction?: BannerAction;
  secondaryAction?: BannerAction;
  closeAction?: BannerCloseAction;
}

/**
 * A banner component for displaying informational, success, warning, or error messages with optional description, action buttons, and close button.
 *
 * The appearance determines the color scheme and icon used.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-banner-react--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-banner-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'info' | 'success' | 'warning' | 'error'} [appearance='info'] - The type of banner which affects color and icon.
 * @param {string} title - The main title of the banner.
 * @param {string} [description] - Optional descriptive text.
 * @param {boolean} [isFull=false] - If true, the banner expands to full width of its container.
 * @param {BannerAction} [primaryAction] - Optional primary action with label and onClick handler.
 * @param {BannerAction} [secondaryAction] - Optional secondary action with label and onClick handler.
 * @param {BannerCloseAction} [closeAction] - Optional close action with onClick handler and optional ariaLabel. Controls the visibility of the close button.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {React.HTMLAttributes<HTMLDivElement>} [...] - Standard div props.
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the banner's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * import { Banner } from '@ldls/ui-react';
 *
 * // Basic info banner
 * <Banner title="Information" appearance="info" />
 *
 * // Banner with description and primary action
 * <Banner
 *   title="Success"
 *   appearance="success"
 *   description="Your action was successful."
 *   primaryAction={{ label: "Undo", onClick: () => console.log('Undo') }}
 * />
 *
 * // Full-width error banner with close
 * <Banner
 *   title="Error"
 *   appearance="error"
 *   isFull={true}
 *   closeAction={{ onClick: () => console.log('Close'), ariaLabel: 'Close banner' }}
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
      isFull,
      className,
      closeAction,
      ...props
    },
    ref,
  ) => {
    const icon = iconMap[appearance];

    return (
      <div
        ref={ref}
        className={cn(
          className,
          bannerVariants({
            appearance,
            isFull,
          }),
        )}
        {...props}
      >
        <div className="flex flex-shrink-0 items-start py-4">{icon}</div>
        <div className="mr-8 flex flex-1 flex-col gap-8 py-4">
          <div className="flex flex-col gap-4">
            <div className="line-clamp-2 body-1-semi-bold">{title}</div>
            {description && (
              <div className="line-clamp-5 body-2">{description}</div>
            )}
          </div>
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-4">
              {primaryAction && (
                <Button
                  appearance="transparent"
                  size="sm"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  appearance="no-background"
                  size="sm"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {closeAction && (
          <Button
            appearance="transparent"
            size="xs"
            icon={Close}
            onClick={closeAction.onClick}
            aria-label={closeAction.ariaLabel || 'Close'}
          />
        )}
      </div>
    );
  },
);
