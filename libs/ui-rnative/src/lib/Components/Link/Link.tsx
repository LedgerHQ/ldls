import { cn } from '@ledgerhq/ldls-utils-shared';
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
   * If true, adds target="_blank" and rel="noopener noreferrer" for external links.
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
   * If true, renders the child element directly with link styles instead of wrapping in an anchor element.
   * Useful for creating router links or other semantic elements with link appearance.
   * @default false
   */
  asChild?: boolean;
  /**
   * The link's content, typically text.
   */
  children: React.ReactNode;
};

/**
 * A customizable link component that supports base and accent color appearances, optional underline, sizes, icons, and external link handling.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the link's core appearance (colors, padding, etc). Use the `appearance` and `underline` props instead.
 *
 * @example
 * import { Link } from '@ledgerhq/ldls-ui-react';
 *
 * // Default link with underline and inherited appearance and size
 * <Link href="/page">
 *   Go to Page
 * </Link>
 *
 * // Accent link with icon
 * import { ArrowRight } from '@ledgerhq/ldls-ui-react/symbols';
 *
 * <Link appearance="accent" size="sm" href="https://example.com" isExternal icon={ArrowRight}>
 *   External Site
 * </Link>
 *
 * // Link with inherited styles
 * <Link appearance="inherit" size="inherit" href="/page">
 *   Inherit Styles
 * </Link>
 *
 * // Link as a router link (asChild pattern)
 * import { Link as RouterLink } from 'react-router-dom';
 *
 * <Link asChild>
 *   <RouterLink to="/dashboard">Dashboard</RouterLink>
 * </Link>
 *
 * // Note: When using asChild, the child element is responsible for its own content.
 * // Icons and other Link props like 'icon' are ignored when asChild is true - handle these in the child if needed.
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
      asChild,
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
        try {
          await Linking.openURL(href);
        } catch (err) {
          console.error('Failed to open URL:', err);
        }
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        {...props}
        style={({ pressed }) => pressed && { opacity: 0.6 }}
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
                className={linkTextVariants({
                  appearance,
                  size,
                  underline,
                  pressed,
                })}
                size={calculatedIconSize}
              />
            )}
            <Text
              className={cn(
                linkTextVariants({ appearance, size, underline, pressed }),
              )}
            >
              {children}
            </Text>
            {isExternal && (
              <ExternalLink
                size={calculatedIconSize}
                className={linkTextVariants({
                  appearance,
                  size,
                  underline,
                  pressed,
                })}
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
