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
import { Button } from '../Button';
import { BannerProps } from './types';
import { Text, View } from 'react-native';
import { ViewRef } from '../../types';
import { Wrap } from '../Wrap';
import { isTextChildren } from '@ledgerhq/ldls-utils-shared';

const iconMap = {
  info: <InformationFill className='text-base' />,
  success: <CheckmarkCircleFill className='text-success' />,
  warning: <WarningFill className='text-warning' />,
  error: <DeleteCircleFill className='text-error' />,
};

const bannerVariants = {
  root: cva(
    'flex w-full flex-row items-start gap-8 rounded-md p-16 text-base',
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
  ),
  iconWrapper: cva('flex shrink-0 flex-row items-start py-4'),
  contentWrapper: cva('mr-8 flex flex-1 flex-col gap-8 py-4'),
  contentText: cva('flex flex-col gap-4'),
  title: cva('line-clamp-2 body-1-semi-bold'),
  description: cva('line-clamp-5 body-2'),
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
export const Banner = React.forwardRef<ViewRef, BannerProps>(
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
      <View
        ref={ref}
        className={cn(className, bannerVariants.root({ appearance }))}
        {...props}
      >
        <View className={bannerVariants.iconWrapper()}>{icon}</View>
        <View className={bannerVariants.contentWrapper()}>
          <View className={bannerVariants.contentText()}>
            <Text className={bannerVariants.title()}>{title}</Text>
            {description && (
              <View className={bannerVariants.description()}>
                <Wrap
                  if={isTextChildren(description)}
                  with={(children) => <Text>{children}</Text>}
                >
                  {description}
                </Wrap>
              </View>
            )}
          </View>
          {(primaryAction || secondaryAction) && (
            <View className='flex flex-row gap-4'>
              {primaryAction}
              {secondaryAction}
            </View>
          )}
        </View>
        {onClose && (
          <Button
            appearance='transparent'
            size='xs'
            icon={Close}
            onPress={() => onClose()}
            aria-label={closeAriaLabel || 'Close'}
          />
        )}
      </View>
    );
  },
);
