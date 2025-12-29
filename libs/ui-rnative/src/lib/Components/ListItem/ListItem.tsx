import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LumenStyleSheet } from '../../../styles';
import { Pressable } from '../Utility';

import { ListItemProps } from './ListItem.types';

const useStyles = ({
  disabled,
  pressed,
}: {
  disabled: boolean;
  pressed: boolean;
}) => {
  return LumenStyleSheet.useCreate(
    (t) => {
      return {
        container: StyleSheet.flatten([
          {
            flexDirection: 'row',
            alignItems: 'center',
            height: t.sizes.s64,
            width: t.sizes.full,
            gap: t.spacings.s16,
            borderRadius: t.borderRadius.md,
            backgroundColor: 'transparent',
            paddingHorizontal: t.spacings.s8,
            paddingVertical: t.spacings.s12,
          },
          pressed && {
            backgroundColor: t.colors.bg.baseTransparentPressed,
          },
          disabled && {
            backgroundColor: 'transparent',
          },
        ]),
        contentWrapper: {
          flex: 1,
          minWidth: 0,
          flexDirection: 'row',
          alignItems: 'center',
          gap: t.spacings.s12,
        },
        textWrapper: {
          flex: 1,
          minWidth: 0,
          flexDirection: 'column',
          gap: t.spacings.s4,
        },
        title: StyleSheet.flatten([
          t.typographies.body2SemiBold,
          {
            color: disabled ? t.colors.text.disabled : t.colors.text.base,
          },
        ]),
        descriptionRow: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: t.spacings.s4,
        },
        descriptionTextWrapper: {
          minWidth: 0,
          flexShrink: 1,
        },
        description: StyleSheet.flatten([
          t.typographies.body3,
          {
            color: disabled ? t.colors.text.disabled : t.colors.text.muted,
            minWidth: 0,
            flexShrink: 1,
          },
        ]),
        descriptionTagWrapper: {
          height: t.sizes.s16,
          flexShrink: 0,
          flexDirection: 'row',
          alignItems: 'center',
        },
        trailingWrapper: {
          flexShrink: 0,
        },
      };
    },
    [disabled, pressed],
  );
};

/**
 * A flexible list item component that displays a required title and optional description (with possible tag), leading and trailing content.
 * It functions as a clickable button with hover and active states.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_containment-listitem--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_containment-listitem--docs#dos-and-donts Guidelines}
 *
 * @warning The `lx` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic item
 * import { ListItem } from '@ledgerhq/lumen-ui-rnative';
 *
 * <ListItem
 *   title="Basic Item"
 *   description="Optional description"
 *   onPress={() => console.log('Clicked!')}
 * />
 *
 * // Icon trailing content with leading Spot
 * import { ListItem, Spot } from '@ledgerhq/lumen-ui-rnative';
 * import { Wallet, Settings } from '@ledgerhq/lumen-ui-rnative/symbols';
 *
 * <ListItem
 *   title="Balance"
 *   leadingContent={<Spot appearance="icon" icon={Wallet} />}
 *   trailingContent={<Settings />}
 * />
 *
 * // Chevron trailing content
 * import { ListItem } from '@ledgerhq/lumen-ui-rnative';
 * import { ChevronRight } from '@ledgerhq/lumen-ui-rnative/symbols';
 *
 * <ListItem
 *   title="Settings"
 *   trailingContent={<ChevronRight size={24} />}
 * />
 */
export const ListItem = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ListItemProps
>(
  (
    {
      title,
      description,
      leadingContent,
      descriptionTag,
      trailingContent,
      lx = {},
      style,
      disabled = false,
      ...touchableProps
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
        {...touchableProps}
      >
        {({ pressed }) => (
          <ListItemContent
            disabled={disabled}
            pressed={pressed}
            title={title}
            description={description}
            leadingContent={leadingContent}
            descriptionTag={descriptionTag}
            trailingContent={trailingContent}
          />
        )}
      </Pressable>
    );
  },
);

type ListItemContentProps = {
  disabled: boolean;
  pressed: boolean;
  title: string;
  description?: string;
  leadingContent?: React.ReactNode;
  descriptionTag?: React.ReactNode;
  trailingContent?: React.ReactNode;
};

const ListItemContent: React.FC<ListItemContentProps> = ({
  disabled,
  pressed,
  title,
  description,
  leadingContent,
  descriptionTag,
  trailingContent,
}) => {
  const styles = useStyles({ disabled, pressed });

  return (
    <View style={styles.container} testID='list-item-content'>
      <View style={styles.contentWrapper}>
        {leadingContent}
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </Text>

          {description && (
            <View style={styles.descriptionRow}>
              <View style={styles.descriptionTextWrapper}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  style={styles.description}
                >
                  {description}
                </Text>
              </View>
              {descriptionTag && (
                <View style={styles.descriptionTagWrapper}>
                  {descriptionTag}
                </View>
              )}
            </View>
          )}
        </View>
      </View>
      {trailingContent && (
        <View style={styles.trailingWrapper}>{trailingContent}</View>
      )}
    </View>
  );
};

ListItem.displayName = 'ListItem';
