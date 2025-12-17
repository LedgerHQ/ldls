import React, { forwardRef, memo } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { useTheme } from '../Provider/useTheme';
import { resolveViewStyle } from '../resolveStyle/resolveStyle';
import type { LumenViewStyleLX } from '../types';
import { areLxPropsEqual } from './areLxPropsEqual';

type ViewRef = React.ElementRef<typeof View>;
export type StyledViewProps = LumenViewStyleLX & ViewProps;

/**
 * Factory function to create a styled View component.
 *
 * ```tsx
 * // Create a basic View
 * const StyledView = createStyledView(View);
 * ```
 */
export const createStyledView = (Component: typeof View) => {
  const StyledComponent = memo(
    forwardRef<ViewRef, StyledViewProps>(
      ({ lx = {}, style, ...props }, ref) => {
        const { theme } = useTheme();
        const resolvedStyle = resolveViewStyle(theme, lx);

        const finalStyle = StyleSheet.flatten([resolvedStyle, style]);

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
  StyledComponent.displayName = `Styled(${componentName})`;

  return StyledComponent;
};
