import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
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
      root: {
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

    return (
      <Svg
        ref={ref}
        width={styles.root.width}
        height={styles.root.height}
        style={[styles.root, style]}
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
