import React, { forwardRef, memo } from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '../Provider/useTheme';
import { resolveViewStyle } from '../resolveStyle/resolveStyle';
import type { LumenViewStyleLX } from '../types';
import { arePropsEqualLx } from './arePropsEqualLx';

type ViewRef = React.ElementRef<typeof View>;
export type StyledViewProps = LumenViewStyleLX & ViewProps;
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
 * import { createStyledView } from '@ledgerhq/lumen-ui-rnative/styles';
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
export const createStyledView = (Component: React.ComponentType<ViewProps>) => {
  const StyledComponent = memo(
    forwardRef<ViewRef, StyledViewProps>(
      ({ lx = {}, style, ...props }, ref) => {
        const { theme } = useTheme();
        const resolvedStyle = resolveViewStyle(theme, lx);

        const finalStyle = style
          ? ([resolvedStyle, style] as ViewStyle[])
          : ([resolvedStyle] as ViewStyle[]);

        return (
          <Component
            {...({ ...props, ref, style: finalStyle } as StyledViewProps & {
              ref: React.Ref<View>;
            })}
          />
        );
      },
    ),
    arePropsEqualLx,
  );

  // Set display name for debugging
  const componentName =
    (Component as { displayName?: string }).displayName ||
    (Component as { name?: string }).name ||
    'Component';
  StyledComponent.displayName = `Styled(${componentName})`;

  return StyledComponent;
};
