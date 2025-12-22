import React, { FC, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { LumenStyleSheet, mergeStyles } from '../../../styles';
import { Pressable } from '../Utility';
import { TileProps } from './types';

type Appearance = NonNullable<TileProps['appearance']>;

const useStyles = ({
  appearance,
  disabled,
  pressed,
}: {
  appearance: Appearance;
  disabled: boolean;
  pressed: boolean;
}) => {
  return LumenStyleSheet.useCreate(
    (t) => {
      const bgColors: Record<Appearance, string> = {
        'no-background': t.colors.bg.baseTransparent,
        card: t.colors.bg.surface,
      };

      const pressedBgColors: Record<Appearance, string> = {
        'no-background': t.colors.bg.baseTransparentPressed,
        card: t.colors.bg.surfacePressed,
      };

      return {
        container: mergeStyles(
          {
            position: 'relative',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            gap: t.spacings.s8,
            padding: t.spacings.s8,
            borderRadius: t.borderRadius.sm,
            backgroundColor: bgColors[appearance],
          },
          pressed &&
            !disabled && {
              backgroundColor: pressedBgColors[appearance],
            },
        ),
        contentWrapper: {
          width: t.sizes.full,
          alignItems: 'center',
          gap: t.spacings.s8,
        },
        leadingWrapper: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        textWrapper: {
          width: t.sizes.full,
          alignItems: 'center',
          gap: t.spacings.s4,
        },
        titleWrapper: {
          width: t.sizes.full,
          alignItems: 'center',
        },
        title: mergeStyles(t.typographies.body3SemiBold, {
          width: t.sizes.full,
          textAlign: 'center',
          color: disabled ? t.colors.text.disabled : t.colors.text.base,
        }),
        description: mergeStyles(t.typographies.body3, {
          width: t.sizes.full,
          textAlign: 'center',
          color: disabled ? t.colors.text.disabled : t.colors.text.muted,
        }),
      };
    },
    [appearance, disabled, pressed],
  );
};

type TileContentProps = {
  appearance: Appearance;
  disabled: boolean;
  pressed: boolean;
  leadingContent: TileProps['leadingContent'];
  title: string;
  description?: string;
  trailingContent?: TileProps['trailingContent'];
};

const TileContent: FC<TileContentProps> = ({
  appearance,
  disabled,
  pressed,
  leadingContent,
  title,
  description,
  trailingContent,
}) => {
  const styles = useStyles({ appearance, disabled, pressed });

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.leadingWrapper}>{leadingContent}</View>
        <View style={styles.textWrapper}>
          <View style={styles.titleWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {description && (
              <Text numberOfLines={1} style={styles.description}>
                {description}
              </Text>
            )}
          </View>
          {trailingContent}
        </View>
      </View>
    </View>
  );
};

/**
 * A tile list item component that displays a spot icon at the top, title and optional description,
 * and optional trailing content at the bottom. It functions as a pressable component with active states,
 * and supports long press actions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-implementation--docs#dos-and-donts Guidelines}
 *
 * @warning The `lx` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the tile's core appearance (colors, padding, etc). Use the `appearance` prop instead.
 *
 * @example
 * // Basic tile item
 * import { Tile, Spot } from '@ledgerhq/lumen-ui-rnative';
 * import { Wallet } from '@ledgerhq/lumen-ui-rnative/symbols';
 *
 * <Tile
 *   title="Ethereum"
 *   description="ETH"
 *   leadingContent={<Spot appearance="coin" icon={Wallet} />}
 *   onPress={() => console.log('Pressed!')}
 *   onLongPress={() => console.log('Long pressed!')}
 * />
 */
export const Tile = forwardRef<React.ElementRef<typeof Pressable>, TileProps>(
  (
    {
      lx,
      style,
      title,
      description,
      leadingContent,
      trailingContent,
      appearance = 'no-background',
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Pressable
        ref={ref}
        lx={lx}
        style={style}
        disabled={disabled}
        accessibilityRole='button'
        accessibilityState={{ disabled }}
        {...props}
      >
        {({ pressed }) => (
          <TileContent
            appearance={appearance}
            disabled={disabled}
            pressed={pressed}
            leadingContent={leadingContent}
            title={title}
            description={description}
            trailingContent={trailingContent}
          />
        )}
      </Pressable>
    );
  },
);

Tile.displayName = 'Tile';
