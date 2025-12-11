import { cva } from 'class-variance-authority';
import { FC, forwardRef } from 'react';
import { View, Pressable, Text } from 'react-native';
import { PressableRef } from '../../types';
import { TileProps } from './types';

const tileVariants = {
  root: cva(
    [
      'relative flex w-full items-center gap-8 p-8',
      'rounded-sm bg-base-transparent text-base transition-colors',
    ],
    {
      variants: {
        pressed: {
          true: 'bg-base-transparent-pressed',
          false: 'bg-base-transparent',
        },
      },
    },
  ),
};

/**
 * A tile list item component that displays a spot icon at the top, title and optional description,
 * and optional trailing content at the bottom. It functions as a pressable component with active states,
 * and supports long press actions.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-overview--docs Storybook}
 * @see {@link https://ldls.vercel.app/?path=/docs/components-Tile-implementation--docs#dos-and-donts Guidelines}
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
export const Tile: FC<TileProps> = forwardRef<PressableRef, TileProps>(
  (
    {
      title,
      description,
      leadingContent,
      trailingContent,
      onPress,
      onLongPress,
      ...props
    },
    ref,
  ) => {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        onLongPress={onLongPress}
        {...props}
      >
        {({ pressed }) => (
          <View className={tileVariants.root({ pressed })}>
            <View className='flex w-full items-center gap-8'>
              <View className='flex items-center justify-center'>
                {leadingContent}
              </View>
              <View className='flex w-full items-center gap-4'>
                <View className='flex w-full items-center'>
                  <Text
                    numberOfLines={1}
                    className='w-full truncate text-center text-base body-3-semi-bold'
                  >
                    {title}
                  </Text>
                  {description && (
                    <Text
                      numberOfLines={1}
                      className='w-full overflow-hidden truncate text-center text-muted body-3'
                    >
                      {description}
                    </Text>
                  )}
                </View>
                {trailingContent}
              </View>
            </View>
          </View>
        )}
      </Pressable>
    );
  },
);
