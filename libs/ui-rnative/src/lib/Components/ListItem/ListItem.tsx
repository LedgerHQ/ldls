import { cva } from 'class-variance-authority';
import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { ListItemProps } from './ListItem.types';

const listItemVariants = {
  root: cva(
    [
      'flex h-64 w-full flex-row items-center gap-16 rounded-md bg-base-transparent px-8 py-12 transition-colors',
    ],
    {
      variants: {
        disabled: {
          true: 'cursor-default bg-base-transparent active:bg-base-transparent',
          false:
            'cursor-pointer bg-base-transparent active:bg-base-transparent-pressed',
        },
      },
    },
  ),
  title: cva('body-2-semi-bold', {
    variants: {
      disabled: {
        true: 'text-disabled',
        false: 'text-base',
      },
    },
  }),
  description: cva('min-w-0 shrink body-3', {
    variants: {
      disabled: {
        true: 'text-disabled',
        false: 'text-muted',
      },
    },
  }),
};

/**
 * A flexible list item component that displays a required title and optional description (with possible tag), leading and trailing content.
 * It functions as a clickable button with hover and active states.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_containment-listitem--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/react-native_containment-listitem--docs#dos-and-donts Guidelines}
 *
 * @warning The `className` prop should only be used for layout adjustments like margins or positioning.
 * Do not use it to modify the list item's core appearance (colors, padding, etc).
 *
 * @example
 * // Basic item
 * import { ListItem } from '@ledgerhq/ldls-ui-rnative';
 *
 * <ListItem
 *   title="Basic Item"
 *   description="Optional description"
 *   onPress={() => console.log('Clicked!')}
 * />
 *
 * // Icon trailing content with leading Spot
 * import { ListItem, Spot } from '@ledgerhq/ldls-ui-rnative';
 * import { Wallet, Settings } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ListItem
 *   title="Balance"
 *   leadingContent={<Spot appearance="icon" icon={Wallet} />}
 *   trailingContent={<Settings />}
 * />
 *
 * // Chevron trailing content
 * import { ListItem } from '@ledgerhq/ldls-ui-rnative';
 * import { ChevronRight } from '@ledgerhq/ldls-ui-rnative/symbols';
 *
 * <ListItem
 *   title="Settings"
 *   trailingContent={<ChevronRight size={24} />}
 * />
 */
export const ListItem = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ListItemProps
>((props, ref) => {
  const {
    title,
    description,
    leadingContent,
    descriptionTag,
    trailingContent,
    style,
    disabled = false,
    className,
    ...touchableProps
  } = props;

  return (
    <Pressable
      ref={ref}
      disabled={disabled}
      className={listItemVariants.root({ disabled, className })}
      style={style}
      {...touchableProps}
    >
      <View className='flex min-w-0 flex-1 flex-row items-center gap-12'>
        {leadingContent}
        <View className='flex min-w-0 flex-1 flex-col gap-4'>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            className={listItemVariants.title({ disabled })}
          >
            {title}
          </Text>

          {description && (
            <View className='flex flex-row items-center gap-4'>
              <View className='min-w-0 shrink'>
                <Text
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  className={listItemVariants.description({ disabled })}
                >
                  {description}
                </Text>
              </View>
              {descriptionTag && (
                <View className='flex h-16 shrink-0 flex-row items-center'>
                  {descriptionTag}
                </View>
              )}
            </View>
          )}
        </View>
      </View>
      {trailingContent && <View className='shrink-0'>{trailingContent}</View>}
    </Pressable>
  );
});

ListItem.displayName = 'ListItem';
