import React from 'react';
import { Linking, Text, View } from 'react-native';
import { LumenStyleSheet, mergeStyles } from '../../../styles';
import { ExternalLink } from '../../Symbols';
import { IconSize } from '../Icon';
import { Pressable } from '../Utility';
import { LinkProps } from './types';

type Appearance = NonNullable<LinkProps['appearance']>;
type Size = NonNullable<LinkProps['size']>;

type StyleParams = {
  appearance: Appearance;
  size: Size;
  underline: boolean;
  pressed: boolean;
};

const useStyles = ({ appearance, size, underline, pressed }: StyleParams) => {
  return LumenStyleSheet.useCreate(
    (t) => {
      const textColors: Record<Appearance, string> = {
        base: t.colors.text.base,
        accent: t.colors.text.interactive,
      };

      const pressedTextColors: Record<Appearance, string> = {
        base: t.colors.text.basePressed,
        accent: t.colors.text.interactivePressed,
      };

      const typography =
        size === 'sm'
          ? t.typographies.body2SemiBold
          : t.typographies.body1SemiBold;
      const gap = size === 'sm' ? t.spacings.s4 : t.spacings.s8;

      return {
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          gap,
        },
        textWrapper: {
          flexShrink: 1,
        },
        text: mergeStyles(typography, {
          color: pressed
            ? pressedTextColors[appearance]
            : textColors[appearance],
          textDecorationLine: underline ? 'underline' : 'none',
        }),
        icon: {
          flexShrink: 0,
          color: pressed
            ? pressedTextColors[appearance]
            : textColors[appearance],
        },
      };
    },
    [appearance, size, underline, pressed],
  );
};

/**
 * A customizable link component that supports base and accent color appearances, optional underline, sizes, icons, and external link handling.
 * Opens URLs using React Native's Linking API.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-link-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `lx` prop should only be used for layout adjustments like margins or positioning.
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
      lx,
      style,
      children,
      appearance = 'base',
      size = 'md',
      underline = true,
      icon,
      isExternal = false,
      href,
      onPress,
      ...props
    },
    ref,
  ) => {
    const iconSizeMap: Record<Size, IconSize> = {
      sm: 16,
      md: 20,
    };

    const calculatedIconSize = iconSizeMap[size];
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
        lx={{ flexShrink: 1, ...lx }}
        style={style}
        onPress={handlePress}
        accessibilityRole='link'
        {...props}
      >
        {({ pressed }) => (
          <LinkContent
            appearance={appearance}
            size={size}
            underline={underline}
            pressed={pressed}
            IconComponent={IconComponent}
            calculatedIconSize={calculatedIconSize}
            isExternal={isExternal}
          >
            {children}
          </LinkContent>
        )}
      </Pressable>
    );
  },
);

type LinkContentProps = {
  appearance: Appearance;
  size: Size;
  underline: boolean;
  pressed: boolean;
  IconComponent: LinkProps['icon'];
  calculatedIconSize: IconSize;
  isExternal: boolean;
  children: React.ReactNode;
};

const LinkContent: React.FC<LinkContentProps> = ({
  appearance,
  size,
  underline,
  pressed,
  IconComponent,
  calculatedIconSize,
  isExternal,
  children,
}) => {
  const styles = useStyles({ appearance, size, underline, pressed });

  return (
    <View style={styles.container} testID='link-content'>
      {IconComponent && (
        <IconComponent size={calculatedIconSize} style={styles.icon} />
      )}
      <View style={styles.textWrapper}>
        <Text style={styles.text} numberOfLines={1}>
          {children}
        </Text>
      </View>
      {isExternal && (
        <ExternalLink
          size={calculatedIconSize}
          style={styles.icon}
          accessible={false}
        />
      )}
    </View>
  );
};

Link.displayName = 'Link';
