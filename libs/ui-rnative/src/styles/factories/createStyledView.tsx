import React, { forwardRef, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useResolveViewStyle } from '../resolveStyle/resolveStyle';
import type { StyledViewProps } from '../types';
import { areLxPropsEqual } from './areLxPropsEqual';

type ViewRef = React.ElementRef<typeof View>;

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
        const resolvedStyle = useResolveViewStyle(lx);
        const finalStyle = StyleSheet.flatten([style, resolvedStyle]);

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
