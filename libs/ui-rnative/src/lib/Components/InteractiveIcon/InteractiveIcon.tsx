import { cn } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { InjectStylesIntoChildren } from '../../utils';
import { InteractiveIconProps } from './types';

const buttonVariants = cva(
  'inline-flex size-fit items-center justify-center rounded-full',
  {
    variants: {
      iconType: {
        filled: '',
        stroked: 'bg-base-transparent',
      },
      pressed: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'bg-disabled',
        false: '',
      },
    },
    compoundVariants: [
      {
        iconType: 'stroked',
        pressed: true,
        className: 'bg-base-transparent-pressed',
      },
    ],
  },
);

/**
 * A specialized interactive component designed specifically for displaying pressable icons.
 *
 * The InteractiveIcon provides two visual styles - 'filled' and 'stroked' - optimized for different icon types and use cases.
 * It ensures proper pressed states and accessibility features while maintaining a minimal footprint.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-interactiveicon-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-interactiveicon-implementation--docs#dos-and-donts Guidelines}
 *
 * @component
 *
 * @warning Always provide an `aria-label` prop to ensure screen reader accessibility, as the component contains only an icon without visible text.
 * @warning The icon size should be controlled by the icon component itself, not through styles. Use the appropriate size prop on the icon component (e.g., `size={20}`).
 * @warning The `style` prop should only be used for layout adjustments like margins or positioning. Do not use it to modify the component's core appearance (colors, padding, etc).
 *
 * @example
 * import { InteractiveIcon } from '@ledgerhq/ldls-ui-rnative';
 * import { DeleteCircleFill, Settings } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * // Filled interactive icon for destructive actions
 * <InteractiveIcon iconType="filled" aria-label="Delete item" onPress={handleDelete}>
 *   <DeleteCircleFill size={20} />
 * </InteractiveIcon>
 *
 * // Stroked interactive icon for secondary actions
 * <InteractiveIcon iconType="stroked" aria-label="Open settings" onPress={handleSettings}>
 *   <Settings size={20} />
 * </InteractiveIcon>
 */
export const InteractiveIcon: FC<InteractiveIconProps> = ({
  iconType,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <Pressable
      accessibilityRole='button'
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      {...props}
    >
      {({ pressed }) => {
        const iconStyles = cn(
          pressed ? 'text-muted-pressed' : 'text-muted',
          disabled && 'text-disabled',
        );
        return (
          <View className={cn(buttonVariants({ iconType, pressed, disabled }))}>
            <InjectStylesIntoChildren styles={iconStyles}>
              {children}
            </InjectStylesIntoChildren>
          </View>
        );
      }}
    </Pressable>
  );
};
