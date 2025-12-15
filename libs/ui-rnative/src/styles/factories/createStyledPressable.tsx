import React, { forwardRef, memo } from 'react';
import type {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../Provider/useTheme';
import { resolveViewStyle } from '../resolveStyle/resolveStyle';
import { LumenViewStyleLX } from '../types';
import { areLxPropsEqual } from './areLxPropsEqual';

type PressableRef = React.ElementRef<typeof Pressable>;
export type StyledPressableProps = LumenViewStyleLX & PressableProps;

/**
 * Factory function to create a styled Pressable component.
 *
 * Creates a component that accepts token-constrained style props directly,
 * resolving them to actual values at runtime using the current theme.
 * Supports function-based style props for pressed/focused states.
 *
 * @param Component - The base Pressable-like component to wrap
 *
 * @example
 * ```tsx
 * import { Pressable as RNPressable } from 'react-native';
 * import { createStyledPressable } from '@ledgerhq/lumen-ui-rnative/styles';
 *
 * // Create a styled Pressable
 * const Pressable = createStyledPressable(RNPressable);
 *
 * // Usage - token props are resolved to actual values
 * <Pressable lx={{ width: 's400', marginTop: 's4', gap: 's12', alignItems: 'center' }}>
 *   <Text>Content</Text>
 * </Pressable>
 *
 * // With function-based style for pressed state
 * <Pressable
 *   lx={{ padding: 's16', backgroundColor: 'surface' }}
 *   style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
 * >
 *   <Text>Press me</Text>
 * </Pressable>
 * ```
 */
export const createStyledPressable = (Component: typeof Pressable) => {
  const StyledComponent = memo(
    forwardRef<PressableRef, StyledPressableProps>(
      ({ lx = {}, style, ...props }, ref) => {
        const { theme } = useTheme();
        const resolvedStyle = resolveViewStyle(theme, lx);

        // Handle function-based style prop (Pressable supports (state) => style)
        const mergedStyle = (
          state: PressableStateCallbackType,
        ): StyleProp<ViewStyle> => {
          const computeStyle =
            typeof style === 'function' ? style(state) : style;
          return [resolvedStyle, computeStyle];
        };

        return <Component ref={ref} {...props} style={mergedStyle} />;
      },
    ),
    areLxPropsEqual,
  );

  // Set display name for debugging
  const componentName =
    (Component as { displayName?: string }).displayName ||
    (Component as { name?: string }).name ||
    'Component';
  StyledComponent.displayName = `StyledPressable(${componentName})`;

  return StyledComponent;
};
