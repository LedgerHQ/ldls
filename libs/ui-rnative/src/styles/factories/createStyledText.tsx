import React, { forwardRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import type { Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '../Provider/useTheme';
import { resolveTextStyle } from '../resolveStyle/resolveStyle';
import type { LumenStyleSheetTheme, LumenTextStyleLX } from '../types';
import { areLxPropsEqual } from './areLxPropsEqual';

type TextRef = React.ElementRef<typeof Text>;
export type StyledTextProps = LumenTextStyleLX &
  TextProps & {
    /**
     * Typography preset
     */
    typography?: keyof LumenStyleSheetTheme['typographies'];
  };

/**
 * Factory function to create a styled Text component.
 *
 * ```tsx
 * // Create a basic Text
 * const StyledText = createStyledText(Text);
 * ```
 */
export const createStyledText = (Component: typeof Text) => {
  const StyledComponent = memo(
    forwardRef<TextRef, StyledTextProps>(
      ({ typography = 'body3', lx = {}, style, ...props }, ref) => {
        const { theme } = useTheme();
        const resolvedStyle = resolveTextStyle(theme, lx);
        const resolvedTypographyStyles = theme.typographies[
          typography
        ] as TextStyle;

        const finalStyle = StyleSheet.flatten([
          resolvedStyle,
          resolvedTypographyStyles,
          style,
        ]);

        return <Component ref={ref} {...props} style={finalStyle} />;
      },
    ),
    areLxPropsEqual,
  );

  // Set display name for debugging
  const componentName =
    (Component as { displayName?: string }).displayName ||
    (Component as { name?: string }).name ||
    'Component';
  StyledComponent.displayName = `StyledText(${componentName})`;

  return StyledComponent;
};
