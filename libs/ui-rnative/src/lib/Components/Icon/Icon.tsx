import { forwardRef, useMemo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Svg } from 'react-native-svg';
import { LumenStyleSheet } from '../../../styles';
import { IconProps, IconSize } from './types';

const iconSizeMap = {
  12: 's12',
  16: 's16',
  20: 's20',
  24: 's24',
  40: 's40',
  48: 's48',
  56: 's56',
} as const;

const useStyles = (size: IconSize) => {
  return LumenStyleSheet.useCreate(
    (t) => ({
      dimensions: {
        width: t.icon.width[iconSizeMap[size]],
        height: t.icon.height[iconSizeMap[size]],
      },
      strokeWidth: {
        borderWidth: t.icon.borderWidth[iconSizeMap[size]],
      },
    }),
    [size],
  );
};

export const Icon = forwardRef<Svg, IconProps>(
  ({ size = 24, style, children, viewBox, ...props }, ref) => {
    const styles = useStyles(size);
    const flatStyle = StyleSheet.flatten(style);
    const color = flatStyle?.color;

    // Remove color from style to avoid applying it twice (once via color prop, once via style)
    const styleWithoutColor = useMemo(() => {
      if (!flatStyle || !('color' in flatStyle)) return style;
      const { color: _, ...rest } = flatStyle;
      return rest as ViewStyle;
    }, [flatStyle, style]);

    return (
      <Svg
        ref={ref}
        width={styles.dimensions.width}
        height={styles.dimensions.height}
        style={styleWithoutColor}
        viewBox={viewBox}
        fill='none'
        pointerEvents='none'
        color={color}
        strokeWidth={styles.strokeWidth.borderWidth}
        {...props}
      >
        {children}
      </Svg>
    );
  },
);

Icon.displayName = 'Icon';
