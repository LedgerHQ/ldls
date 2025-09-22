import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../utils';
import { IconSize } from '../Icon/Icon';
import { ChevronRight } from '../../Symbols';

const buttonVariants = cva(
  'inline-flex h-fit w-full flex-row items-center gap-12 rounded-sm p-12 transition-colors focus-visible:outline-2 focus-visible:outline-focus',
  {
    variants: {
      appearance: {
        base: '',
        outline:
          'outline-dashed outline-1 focus-visible:outline-none focus-visible:outline-offset-0',
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
        className: 'bg-muted hover:bg-muted-hover active:bg-muted-pressed',
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
          'bg-base-transparent outline-muted-subtle hover:bg-base-transparent-hover hover:outline-muted-subtle-hover active:bg-base-transparent-pressed active:outline-muted-subtle-pressed',
      },
    ],
    defaultVariants: {
      appearance: 'base',
      disabled: false,
    },
  },
);

export interface CardButtonProps
  extends Omit<TouchableOpacityProps, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  title: string;
  description?: string;
  hideChevron?: boolean;
}

/**
 * A customizable card button component that displays an optional icon, a required title, an optional description, and an optional chevron arrow.
 *
 * It supports different appearances. Takes only the necessary width based on content. The chevron can be hidden if needed.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-cardbutton-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-cardbutton-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 * @param {'base' | 'outline'} [appearance='base'] - The visual style of the card button.
 * @param {React.ComponentType<{ size?: IconSize; className?: string }>} [icon] - An optional icon component to render on the left side.
 *   The icon styles are defined by the card button. Please do not override them.
 * @param {string} title - The main title of the card button.
 * @param {string} [description] - Optional descriptive text displayed below the title.
 * @param {boolean} [hideChevron=false] - If true, hides the chevron arrow on the right side.
 * @param {string} [className] - Additional custom CSS classes to apply. Do not use this prop to modify the component's core appearance - use the `appearance` prop instead.
 * @param {TouchableOpacityProps} [...] - All standard TouchableOpacity props (e.g., `disabled`, `onPress`, etc.).
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
        {IconComponent && <IconComponent size={24} className="flex-shrink-0" />}
        <View className="flex min-w-0 flex-1 flex-col gap-4 text-left body-1-semi-bold">
          <Text
            className="min-w-0 body-1-semi-bold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          {description && (
            <Text
              className="min-w-0 body-2"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </Text>
          )}
        </View>
        {!hideChevron && <ChevronRight size={24} className="flex-shrink-0" />}
      </TouchableOpacity>
    );
  },
);
CardButton.displayName = 'CardButton';
