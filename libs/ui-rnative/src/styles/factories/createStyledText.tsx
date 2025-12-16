import React, { forwardRef, memo } from 'react';
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
 * Creates a component that accepts token-constrained style props directly,
 * plus a `typography` prop for typography presets, resolving them to actual
 * values at runtime using the current theme.
 *
 * @param Component - The base Text-like component to wrap
 *
 * @example
 * ```tsx
 * import { Text } from 'react-native';
 * import { createStyledText } from '@ledgerhq/lumen-ui-rnative/styles';
 *
 * // Create a basic Text
 * const StyledText = createStyledText(Text);
 *
 * // Usage - token props and typography are resolved
 * <StyledText typography='body1'>Hello World</StyledText>
 * <StyledText typography='heading2SemiBold' marginTop='s8' color='muted'>
 *   Subtitle
 * </StyledText>
 *
 * // style prop for escape hatch
 * <StyledText typography='body1' style={{ letterSpacing: 2 }} />
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

        const finalStyle = style
          ? ([resolvedStyle, resolvedTypographyStyles, style] as TextStyle[])
          : ([resolvedStyle, resolvedTypographyStyles] as TextStyle[]);

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
