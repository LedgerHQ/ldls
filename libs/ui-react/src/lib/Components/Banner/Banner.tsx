import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@ldls/utils-shared';
import {
  InformationFill,
  CheckmarkCircleFill,
  WarningFill,
  DeleteCircleFill,
} from '../../Symbols';
import { getSlots } from '../../../utils/getSlots';

/**
 * PrimaryAction slot component for the Banner. Used to display the primary action button.
 */
const BannerPrimaryAction = ({ children }: { children: React.ReactNode }) => {
  return children;
};

BannerPrimaryAction.displayName = 'BannerPrimaryAction';

/**
 * SecondaryAction slot component for the Banner. Used to display the secondary action button.
 */
const BannerSecondaryAction = ({ children }: { children: React.ReactNode }) => {
  return children;
};
BannerSecondaryAction.displayName = 'BannerSecondaryAction';

/**
 * CloseAction slot component for the Banner. Used to display the close button.
 */
const BannerCloseAction = ({ children }: { children: React.ReactNode }) => {
  return children;
};
BannerCloseAction.displayName = 'BannerCloseAction';

const iconMap = {
  info: <InformationFill className="text-base" role="status" />,
  success: <CheckmarkCircleFill className="text-success" role="status" />,
  warning: <WarningFill className="text-warning" role="alert" />,
  error: <DeleteCircleFill className="text-error" role="alert" />,
};

const bannerVariants = cva('align-start flex gap-8 rounded-md p-16 text-base', {
  variants: {
    appearance: {
      info: 'bg-muted',
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-error',
    },
  },
});

export type BannerAppearance = NonNullable<
  VariantProps<typeof bannerVariants>['appearance']
>;

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof bannerVariants>, 'appearance'> {
  /**
   * The type of banner which affects color and icon.
   */
  appearance?: BannerAppearance;
  /**
   * The main title of the banner.
   */
  title: string;
  /**
   * Optional descriptive text.
   */
  description?: string;
  /**
   * The children of the banner, which can include Banner.PrimaryAction, Banner.SecondaryAction, and Banner.CloseAction slots.
   * Each slot expects a Button component as its child.
   */
  children?: React.ReactNode;
}

interface BannerComponent
  extends React.ForwardRefExoticComponent<
    BannerProps & React.RefAttributes<HTMLDivElement>
  > {
  PrimaryAction: typeof BannerPrimaryAction;
  SecondaryAction: typeof BannerSecondaryAction;
  CloseAction: typeof BannerCloseAction;
}

/**
 * A banner component for displaying informational, success, warning, or error messages with optional description, action buttons, and close button.
 *
 * The appearance determines the color scheme and icon used.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-banner-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-banner-implementation--docs#dos-and-donts Guidelines}
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
 * // Banner with description and primary action
 * <Banner
 *   title="Success"
 *   appearance="success"
 *   description="Your action was successful."
 * >
 *   <Banner.PrimaryAction>
 *     <Button appearance="transparent" size="sm" onClick={() => console.log('Undo')}>
 *       Undo
 *     </Button>
 *   </Banner.PrimaryAction>
 * </Banner>
 *
 * // Banner with multiple actions and close
 * <Banner
 *   title="Error"
 *   appearance="error"
 * >
 *   <Banner.PrimaryAction>
 *     <Button appearance="transparent" size="sm" onClick={() => console.log('Retry')}>
 *       Retry
 *     </Button>
 *   </Banner.PrimaryAction>
 *   <Banner.SecondaryAction>
 *     <Button appearance="no-background" size="sm" onClick={() => console.log('Dismiss')}>
 *       Dismiss
 *     </Button>
 *   </Banner.SecondaryAction>
 *   <Banner.CloseAction>
 *     <Button icon={Close} appearance="transparent" size="xs" onClick={() => console.log('Close')} aria-label="Close banner" />
 *   </Banner.CloseAction>
 * </Banner>
 */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    { appearance = 'info', title, description, className, children, ...props },
    ref,
  ) => {
    const icon = iconMap[appearance];

    const primaryActionSlots = getSlots(children, BannerPrimaryAction);
    const secondaryActionSlots = getSlots(children, BannerSecondaryAction);
    const closeActionSlots = getSlots(children, BannerCloseAction);

    if (primaryActionSlots.length > 1) {
      throw new Error('Banner can only have one PrimaryAction slot');
    }
    if (secondaryActionSlots.length > 1) {
      throw new Error('Banner can only have one SecondaryAction slot');
    }
    if (closeActionSlots.length > 1) {
      throw new Error('Banner can only have one CloseAction slot');
    }

    const primaryActionSlot = primaryActionSlots[0] ?? null;
    const secondaryActionSlot = secondaryActionSlots[0] ?? null;
    const closeActionSlot = closeActionSlots[0] ?? null;

    return (
      <div
        ref={ref}
        className={cn(className, bannerVariants({ appearance }))}
        {...props}
      >
        <div className="flex flex-shrink-0 items-start py-4">{icon}</div>
        <div className="mr-8 flex flex-1 flex-col gap-8 py-4">
          <div className="flex flex-col gap-4">
            <h3 className="line-clamp-2 body-1-semi-bold">{title}</h3>
            {description && (
              <div className="line-clamp-5 body-2">{description}</div>
            )}
          </div>
          {(primaryActionSlot || secondaryActionSlot) && (
            <div className="flex gap-4">
              {primaryActionSlot}
              {secondaryActionSlot}
            </div>
          )}
        </div>
        {closeActionSlot}
      </div>
    );
  },
) as BannerComponent;

Banner.PrimaryAction = BannerPrimaryAction;
Banner.SecondaryAction = BannerSecondaryAction;
Banner.CloseAction = BannerCloseAction;
