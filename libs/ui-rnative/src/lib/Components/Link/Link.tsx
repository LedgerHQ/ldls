import { cn } from '@ledgerhq/lumen-utils-shared';
import { cva } from 'class-variance-authority';
import React from 'react';
import { Linking, Pressable, PressableProps, Text, View } from 'react-native';
import { ExternalLink } from '../../Symbols';
import { IconSize } from '../Icon';

const linkTextVariants = cva('', {
  variants: {
    appearance: {
      base: '',
      accent: '',
    },
    underline: {
      true: 'underline underline-offset-2',
      false: '',
    },
    size: {
      sm: 'body-2-semi-bold',
      md: 'body-1-semi-bold',
    },
    pressed: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      appearance: 'base',
      pressed: false,
      className: 'text-base',
    },
    {
      appearance: 'base',
      pressed: true,
      className: 'text-base-pressed',
    },
    {
      appearance: 'accent',
      pressed: false,
      className: 'text-interactive',
    },
    {
      appearance: 'accent',
      pressed: true,
      className: 'text-interactive-pressed',
    },
  ],
  defaultVariants: {
    appearance: 'base',
    size: 'md',
    underline: true,
    pressed: false,
  },
});

export type LinkProps = Omit<PressableProps, 'onPress' | 'children'> & {
  /**
   * The visual style of the link.
   * @default base
   */
  appearance?: 'base' | 'accent';
  /**
   * The size variant of the link.
   * @default md
   */
  size?: 'sm' | 'md';
  /**
   * Whether to underline the link text.
   * @default true
   */
  underline?: boolean;
  /**
   * An optional icon component to render inside the link.
   * The icon styles are defined by the link. Please do not override them.
   */
  icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
  /**
   * If true, displays an external link icon next to the link text.
   * @default false
   */
  isExternal?: boolean;
  /**
   * The URL to navigate to
   */
  href?: string;
  /**
   * Custom press handler (overrides default href navigation)
   */
  onPress?: () => void;
  /**
   * The link's content, typically text.
   */
  children: React.ReactNode;
};

/**
 * A customizable link component that supports base and accent color appearances, optional underline, sizes, icons, and external link handling.
 * Opens URLs using React Native's Linking API.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the link's core appearance (colors, padding, etc). Use the `appearance` and `underline` props instead.
 *
 * @example
 * import { Link } from '@ledgerhq/lumen-ui-rnative';
 *
 * // Default link with underline
 * <Link href="https://example.com">
 *   Go to Page
 * </Link>
 *
 * // Accent link with icon and external indicator
 * import { ArrowRight } from '@ledgerhq/lumen-ui-rnative/symbols';
 *
 * <Link appearance="accent" size="sm" href="https://example.com" isExternal icon={ArrowRight}>
 *   External Site
 * </Link>
 *
 * // Small base link without underline
 * <Link appearance="base" size="sm" underline={false} href="https://example.com">
 *   Simple Link
 * </Link>
 *
 * // Link with custom press handler
 * <Link onPress={() => navigation.navigate('Dashboard')}>
 *   Dashboard
 * </Link>
 */
export const Link = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  LinkProps
>(
  (
    {
      className,
      children,
      appearance,
      size,
      underline = true,
      icon,
      isExternal = false,
      href,
      onPress,
      ...props
    },
    ref,
  ) => {
    const iconSizeMap: { [key: string]: IconSize } = {
      sm: 16,
      md: 20,
    };

    const calculatedIconSize = size ? iconSizeMap[size] : 20;
    const IconComponent = icon;

    const handlePress = async () => {
      if (onPress) {
        onPress();
      } else if (href) {
        await Linking.openURL(href);
      }
    };

    return (
      <Pressable
        ref={ref}
        className={cn('shrink', className)}
        onPress={handlePress}
        accessibilityRole='link'
        {...props}
      >
        {({ pressed }) => (
          <View
            className={cn(
              'flex-row items-center gap-8',
              size === 'sm' && 'gap-4',
            )}
          >
            {IconComponent && (
              <IconComponent
                className={cn(
                  'flex-shrink-0',
                  linkTextVariants({
                    appearance,
                    size,
                    underline,
                    pressed,
                  }),
                )}
                size={calculatedIconSize}
              />
            )}
            <View className='shrink'>
              <Text
                numberOfLines={1}
                className={linkTextVariants({
                  appearance,
                  size,
                  underline,
                  pressed,
                })}
              >
                {children}
              </Text>
            </View>
            {isExternal && (
              <ExternalLink
                size={calculatedIconSize}
                className={cn(
                  'flex-shrink-0',
                  linkTextVariants({
                    appearance,
                    size,
                    underline,
                    pressed,
                  }),
                )}
                accessible={false}
              />
            )}
          </View>
        )}
      </Pressable>
    );
  },
);
Link.displayName = 'Link';
