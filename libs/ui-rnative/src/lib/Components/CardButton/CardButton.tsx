import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../utils';
import { IconSize } from '../Icon/Icon';
import { ChevronRight } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-full flex-row items-center gap-12 rounded-sm p-12 transition-colors',
  {
    variants: {
      appearance: {
        base: '',
        outline: 'outline-dashed outline-1',
      },
      disabled: {
        true: 'text-disabled',
        false: 'text-base',
      },
    },
    compoundVariants: [
      {
        appearance: 'base',
        disabled: true,
        className: 'bg-disabled',
      },
      {
        appearance: 'base',
        disabled: false,
        className: 'bg-muted active:bg-muted-pressed',
      },
      {
        appearance: 'outline',
        disabled: true,
        className: 'bg-base-transparent outline-disabled',
      },
      {
        appearance: 'outline',
        disabled: false,
        className:
          'bg-base-transparent outline-muted-subtle active:bg-base-transparent-pressed active:outline-muted-subtle-pressed',
      },
    ],
    defaultVariants: {
      appearance: 'base',
      disabled: false,
    },
  },
);

export interface CardButtonProps
  extends Omit<TouchableOpacityProps, 'disabled'> {
  /**
   * The visual style of the card button.
   */
  appearance?: 'base' | 'outline';
  /**
   * Whether the card button is disabled.
   */
  disabled?: boolean;
  /**
   * An optional icon component to render on the left side.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * The main title of the card button.
   */
  title: string;
  /**
   * Optional descriptive text displayed below the title.
   */
  description?: string;
  /**
   * If true, hides the chevron arrow on the right side.
   */
  hideChevron?: boolean;
}

/**
 * A customizable card button component that displays an optional icon, a required title, an optional description, and an optional chevron arrow.
 *
 * It supports different appearances. Takes only the necessary width based on content. The chevron can be hidden if needed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-cardbutton--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_action-cardbutton--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the card button's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * // Basic card button
 * import { CardButton } from '@ledgerhq/ldls-ui-rnative';
 *
 * <CardButton title="Click Me" onPress={() => console.log('Clicked!')} />
 *
 * // Card button with icon and description
 * import { CardButton } from '@ledgerhq/ldls-ui-rnative';
 * import { Info } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <CardButton
 *   icon={Info}
 *   title="Information"
 *   description="Additional details here"
 *   appearance="outline"
 * />
 */
export const CardButton = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  CardButtonProps
>(
  (
    {
      className,
      appearance,
      icon,
      title,
      description,
      hideChevron,
      disabled,
      ...props
    },
    ref,
  ) => {
    const IconComponent = icon;

    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          className,
          buttonVariants({
            appearance,
            disabled,
          }),
        )}
        disabled={disabled ?? false}
        activeOpacity={1}
        {...props}
      >
        {IconComponent && <IconComponent size={24} className='shrink-0' />}
        <View className='flex min-w-0 flex-1 flex-col gap-4 text-left body-1-semi-bold'>
          <Text
            className='min-w-0 body-1-semi-bold'
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {title}
          </Text>
          {description && (
            <Text
              className='min-w-0 body-2'
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {description}
            </Text>
          )}
        </View>
        {!hideChevron && <ChevronRight size={24} className='shrink-0' />}
      </TouchableOpacity>
    );
  },
);
CardButton.displayName = 'CardButton';
