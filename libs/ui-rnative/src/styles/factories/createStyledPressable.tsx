import React, { forwardRef, memo, MemoExoticComponent } from 'react';
import type {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../Provider/useTheme';
import {
  resolveViewStyle,
  extractLumenViewStyleProps,
} from '../resolveStyle/resolveStyle';
import type { LumenPressableProps } from '../types';

type PressableRef = React.ElementRef<typeof Pressable>;
type ReturnComponentType = MemoExoticComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LumenPressableProps> &
      React.RefAttributes<PressableRef>
  >
>;

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
 * <Pressable width='s400' marginTop='s4' gap='s12' alignItems='center'>
 *   <Text>Content</Text>
 * </Pressable>
 *
 * // With function-based style for pressed state
 * <Pressable
 *   padding='s16'
 *   backgroundColor='surface'
 *   style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
 * >
 *   <Text>Press me</Text>
 * </Pressable>
 * ```
 */
export const createStyledPressable = (
  Component: React.ComponentType<PressableProps>,
): ReturnComponentType => {
  const StyledComponent = memo(
    forwardRef<PressableRef, LumenPressableProps>((props, ref) => {
      const { theme } = useTheme();

      const { lumenStyle, rest } = extractLumenViewStyleProps(props);
      const resolvedStyle = resolveViewStyle(theme, lumenStyle);

      const { style: propsStyle, ...componentProps } = rest as PressableProps;

      // Handle function-based style prop (Pressable supports (state) => style)
      const mergedStyle = (
        state: PressableStateCallbackType,
      ): StyleProp<ViewStyle> => {
        const userStyle =
          typeof propsStyle === 'function' ? propsStyle(state) : propsStyle;
        return [resolvedStyle, userStyle];
      };

      return (
        <Component
          {...({
            ...componentProps,
            ref,
            style: mergedStyle,
          } as PressableProps & {
            ref: React.Ref<View>;
          })}
        />
      );
    }),
  );

  // Set display name for debugging
  const componentName =
    (Component as { displayName?: string }).displayName ||
    (Component as { name?: string }).name ||
    'Component';
  StyledComponent.displayName = `StyledPressable(${componentName})`;

  return StyledComponent;
};
