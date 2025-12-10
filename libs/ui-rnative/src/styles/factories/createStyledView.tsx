import React, { forwardRef, memo, MemoExoticComponent } from 'react';
import type { View, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '../Provider/useTheme';
import {
  resolveViewStyle,
  extractLumenViewStyleProps,
} from '../resolveStyle/resolveStyle';
import type { LumenViewInputProps } from '../types';

type ViewRef = React.ElementRef<typeof View>;
type ReturnComponentType = MemoExoticComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LumenViewInputProps> & React.RefAttributes<ViewRef>
  >
>;
/**
 * Factory function to create a styled View component.
 *
 * Creates a component that accepts token-constrained style props directly,
 * resolving them to actual values at runtime using the current theme.
 *
 * @param Component - The base View-like component to wrap
 *
 * @example
 * ```tsx
 * import { View } from 'react-native';
 * import { createStyledView } from '@ledgerhq/ldls-ui-rnative/styles';
 *
 * // Create a basic Box
 * const Box = createStyledView(View);
 *
 * // Usage - token props are resolved to actual values
 * <Box width='s400' marginTop='s4' gap='s12' alignItems='center' />
 * <Box padding='s16' backgroundColor='surface' borderRadius='md'>
 *   Content
 * </Box>
 *
 * // style prop for escape hatch
 * <Box marginTop='s4' style={{ width: 127 }} />
 * ```
 */
export const createStyledView = (
  Component: React.ComponentType<ViewProps>,
): ReturnComponentType => {
  const StyledComponent = memo(
    forwardRef<ViewRef, LumenViewInputProps>((props, ref) => {
      const { theme } = useTheme();

      const { lumenStyle, rest } = extractLumenViewStyleProps(props);
      const resolvedStyle = resolveViewStyle(theme, lumenStyle);

      const { style: propsStyle, ...componentProps } = rest;
      const style = propsStyle
        ? ([resolvedStyle, propsStyle] as ViewStyle[])
        : resolvedStyle;

      return (
        <Component
          {...({ ...componentProps, ref, style } as ViewProps & {
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
  StyledComponent.displayName = `Styled(${componentName})`;

  return StyledComponent;
};
