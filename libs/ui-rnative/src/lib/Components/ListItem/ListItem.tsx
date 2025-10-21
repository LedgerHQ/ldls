import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { cn } from '../../utils';
import { ListItemProps } from './ListItem.types';

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
  React.ElementRef<typeof TouchableOpacity>,
  ListItemProps
>((props, ref) => {
  const {
    title,
    description,
    leadingContent,
    descriptionTag,
    trailingContent,
    style,
    disabled,
    className,
    ...touchableProps
  } = props;

  return (
    <TouchableOpacity
      ref={ref}
      disabled={disabled}
      className={cn(
        'flex h-64 w-full cursor-pointer flex-row items-center gap-16 rounded-md bg-base-transparent px-8 py-12 transition-colors',
        'active:bg-base-transparent-pressed',
        disabled &&
          'cursor-default bg-base-transparent active:bg-base-transparent',
        className,
      )}
      activeOpacity={1}
      style={style}
      {...touchableProps}
    >
      <View className='flex min-w-0 flex-1 flex-row items-center gap-12'>
        {leadingContent}
        <View className='flex min-w-0 flex-1 flex-col gap-4'>
          <View
            className={cn(
              'body-2-semi-bold',
              disabled ? 'text-disabled' : 'text-base',
            )}
          >
            <Text numberOfLines={1} ellipsizeMode='tail'>
              {title}
            </Text>
          </View>
          {description && (
            <View className='flex flex-row items-center gap-4'>
              <View
                className={cn(
                  'min-w-0 shrink body-3',
                  disabled ? 'text-disabled' : 'text-muted',
                )}
              >
                <Text numberOfLines={1} ellipsizeMode='tail'>
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
    </TouchableOpacity>
  );
});

ListItem.displayName = 'ListItem';
