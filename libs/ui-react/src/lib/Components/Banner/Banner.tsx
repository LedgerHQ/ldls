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
  'flex w-fit max-w-full gap-8 rounded-md p-16 text-base',
  {
    variants: {
      appearance: {
        info: 'bg-muted',
        success: 'bg-success',
        warning: 'bg-warning',
        error: 'bg-error',
      },
    },
  },
);

type BannerAppearance = NonNullable<
  VariantProps<typeof bannerVariants>['appearance']
>;

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof bannerVariants>, 'appearance'> {
  appearance?: BannerAppearance;
  title: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryActionClick?: () => void;
  onSecondaryActionClick?: () => void;
  onCloseClick?: () => void;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      appearance = 'info',
      title,
      description,
      primaryActionLabel,
      secondaryActionLabel,
      className,
      onPrimaryActionClick,
      onSecondaryActionClick,
      onCloseClick,
      ...props
    },
    ref,
  ) => {
    const icon = iconMap[appearance];
    const hasPrimaryAction = primaryActionLabel && onPrimaryActionClick;
    const hasSecondaryAction = secondaryActionLabel && onSecondaryActionClick;

    return (
      <div
        ref={ref}
        className={cn(
          className,
          bannerVariants({
            appearance,
          }),
        )}
        {...props}
      >
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="body-1-semi-bold">{title}</div>
            {description && <div className="body-2">{description}</div>}
          </div>
          {(hasPrimaryAction || hasSecondaryAction) && (
            <div className="flex gap-4">
              {hasSecondaryAction && (
                <Button
                  appearance="transparent"
                  size="sm"
                  onClick={onSecondaryActionClick}
                >
                  {secondaryActionLabel}
                </Button>
              )}
              {hasPrimaryAction && (
                <Button
                  appearance="no-background"
                  size="sm"
                  onClick={onPrimaryActionClick}
                >
                  {primaryActionLabel}
                </Button>
              )}
            </div>
          )}
        </div>
        {onCloseClick && (
          <Button
            appearance="transparent"
            size="xs"
            icon={Close}
            onClick={onCloseClick}
          />
        )}
      </div>
    );
  },
);
