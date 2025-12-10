import React, { forwardRef, memo, MemoExoticComponent } from 'react';
import type { Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '../Provider/useTheme';
import {
  resolveTextStyle,
  extractLumenTextStyleProps,
} from '../resolveStyle/resolveStyle';
import type { LumenTextInputProps } from '../types';

type TextRef = React.ElementRef<typeof Text>;
type ReturnComponentType = MemoExoticComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LumenTextInputProps> & React.RefAttributes<TextRef>
  >
>;

/**
 * Factory function to create a styled Text component.
 *
 * Creates a component that accepts token-constrained style props directly,
 * plus a `typo` prop for typography presets, resolving them to actual
 * values at runtime using the current theme.
 *
 * @param Component - The base Text-like component to wrap
 *
 * @example
 * ```tsx
 * import { Text } from 'react-native';
 * import { createStyledText } from '@ledgerhq/ldls-ui-rnative/styles';
 *
 * // Create a basic Text
 * const StyledText = createStyledText(Text);
 *
 * // Usage - token props and typo are resolved
 * <StyledText typo='body1'>Hello World</StyledText>
 * <StyledText typo='heading2SemiBold' marginTop='s8' color='muted'>
 *   Subtitle
 * </StyledText>
 *
 * // style prop for escape hatch
 * <StyledText typo='body1' style={{ letterSpacing: 2 }} />
 * ```
 */
export const createStyledText = (
  Component: React.ComponentType<TextProps>,
): ReturnComponentType => {
  const StyledComponent = memo(
    forwardRef<TextRef, LumenTextInputProps>((props, ref) => {
      const { theme } = useTheme();
      const { lumenStyle, rest } = extractLumenTextStyleProps(props);
      const resolvedStyle = resolveTextStyle(theme, lumenStyle);

      const { style: propsStyle, ...componentProps } = rest;
      const finalStyle = propsStyle
        ? ([resolvedStyle, propsStyle] as TextStyle[])
        : resolvedStyle;

      return (
        <Component
          {...({ ...componentProps, ref, style: finalStyle } as TextProps & {
            ref: React.Ref<Text>;
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
  StyledComponent.displayName = `StyledText(${componentName})`;

  return StyledComponent;
};
