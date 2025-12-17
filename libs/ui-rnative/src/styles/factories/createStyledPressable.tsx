import React, { forwardRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import type {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../Provider/useTheme';
import { resolveViewStyle } from '../resolveStyle/resolveStyle';
import { LumenPressableStyleLX } from '../types';
import { areLxPropsEqual } from './areLxPropsEqual';

type PressableRef = React.ElementRef<typeof Pressable>;
export type StyledPressableProps = LumenPressableStyleLX & PressableProps;

/**
 * Factory function to create a styled Pressable component.
 *
 * ```tsx
 * // Create a styled Pressable
 * const Pressable = createStyledPressable(RNPressable);
 * ```
 */
export const createStyledPressable = (Component: typeof Pressable) => {
  const StyledComponent = memo(
    forwardRef<PressableRef, StyledPressableProps>(
      ({ lx = {}, style, ...props }, ref) => {
        const { theme } = useTheme();

        const isLxFunction = typeof lx === 'function';
        const isStyleFunction = typeof style === 'function';
        const hasFunction = isLxFunction || isStyleFunction;

        if (!hasFunction) {
          const resolvedStyle = resolveViewStyle(theme, lx);
          const finalStyle = StyleSheet.flatten([resolvedStyle, style]);
          return <Component ref={ref} {...props} style={finalStyle} />;
        }

        const mergedStyle = (state: PressableStateCallbackType): ViewStyle => {
          const computedLx = isLxFunction ? lx(state) : lx;
          const resolvedStyle = resolveViewStyle(theme, computedLx);
          const computedStyle = isStyleFunction ? style(state) : style;

          return StyleSheet.flatten([resolvedStyle, computedStyle]);
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
