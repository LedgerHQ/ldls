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

        // Handle function-based style prop (Pressable supports (state) => style)
        const mergedStyle = (state: PressableStateCallbackType): ViewStyle => {
          const computeLx = typeof lx === 'function' ? lx(state) : lx;
          const resolvedStyle = resolveViewStyle(theme, computeLx);

          const computeStyle =
            typeof style === 'function' ? style(state) : style;
          return StyleSheet.flatten([resolvedStyle, computeStyle]);
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
