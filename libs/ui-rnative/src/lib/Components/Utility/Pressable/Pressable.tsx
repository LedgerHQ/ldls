import { Pressable as RNPressable } from 'react-native';
import { createStyledPressable } from '../../../../styles';

/**
 * Pressable - An interactive layout primitive with token-constrained style props.
 *
 * Pressable is a wrapper around React Native's Pressable that accepts design
 * token-based style props directly, providing type-safe styling with autocomplete
 * for spacing, sizes, colors, etc. Supports function-based styles for pressed states.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/utility-pressable--docs Storybook}
 *
 * @example
 * ```tsx
 * import { Pressable } from '@ledgerhq/lumen-ui-rnative';
 *
 * // Basic usage with token props
 * <Pressable
 *   lx={{ width: 's400', marginTop: 's4', gap: 's12', alignItems: 'center' }}
 *   onPress={handlePress}
 * >
 *   <Text>Content</Text>
 * </Pressable>
 *
 *  // With function-based style for pressed state
 * <Pressable
 *   lx={({ pressed }) => ({ padding: 's16', backgroundColor: pressed ? 'surface' : 'surfacePressed' })}
 *   style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
 * >
 *   <Text>Press me</Text>
 * </Pressable>
 * ```
 */
export const Pressable = createStyledPressable(RNPressable);
