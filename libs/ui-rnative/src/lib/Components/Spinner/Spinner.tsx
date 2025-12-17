import { forwardRef, useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCommonTranslation } from '../../../i18n';
import { LumenStyleSheet } from '../../../styles';
import { RuntimeConstants } from '../../utils';
import { Box } from '../Utility';
import { SpinnerProps } from './types';

/**
 * A basic spinner component for loading states.
 *
 * @example
 * <Spinner />
 *
 * @example
 * // With custom color
 * <Spinner color={theme.colors.text.base} />
 *
 * @example
 * // With lx props for layout
 * <Spinner lx={{ marginTop: 's8' }} />
 */
export const Spinner = forwardRef<View, SpinnerProps>(
  ({ lx, style, size = 16, color, ...props }, ref) => {
    const { t } = useCommonTranslation();
    const { theme } = LumenStyleSheet.useTheme();
    const spinValue = useRef(new Animated.Value(0)).current;
    const strokeColor = color ?? theme.colors.text.base;

    useEffect(() => {
      const animation = Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: RuntimeConstants.isNative,
        }),
      );
      animation.start();

      return () => animation.stop();
    }, [spinValue]);

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Box ref={ref} lx={{ flexShrink: 0, ...lx }} style={style} {...props}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Svg
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            accessibilityLabel={t('components.spinner.loadingAriaLabel')}
          >
            <Path
              d='M8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8'
              stroke={strokeColor}
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </Svg>
        </Animated.View>
      </Box>
    );
  },
);

Spinner.displayName = 'Spinner';
