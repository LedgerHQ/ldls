import { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';
import {
  LumenStyleSheet,
  LumenTextStyle,
  useResolveTextStyle,
} from '../../../styles';
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

const useStyles = (lx: LumenTextStyle, size: IconSize) => {
  const { theme } = LumenStyleSheet.useTheme();
  const resolvedStyle = useResolveTextStyle(lx);

  return useMemo(() => {
    return {
      ...resolvedStyle,
      width: theme.icon.width[iconSizeMap[size]],
      height: theme.icon.height[iconSizeMap[size]],
      strokeWidth: theme.icon.borderWidth[iconSizeMap[size]],
    };
  }, [size, theme, resolvedStyle]);
};

export const Icon = forwardRef<Svg, IconProps>(
  ({ size = 24, lx = {}, style, children, viewBox, ...props }, ref) => {
    const styles = useStyles(lx, size);
    const flatStyle = StyleSheet.flatten([styles, style]);

    return (
      <Svg
        ref={ref}
        width={styles.width}
        height={styles.height}
        strokeWidth={styles.strokeWidth}
        viewBox={viewBox}
        color={flatStyle?.color ?? 'currentColor'}
        fill='none'
        pointerEvents='none'
        {...props}
      >
        {children}
      </Svg>
    );
  },
);

Icon.displayName = 'Icon';
