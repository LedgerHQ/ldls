import { Placeholder } from '@ledgerhq/lumen-ui-rnative/symbols';
import { BlurView } from '@react-native-community/blur';
import React, { useEffect } from 'react';
import { LayoutChangeEvent, StyleSheet, Text } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useStyleSheet, useTheme } from '../../../styles';
import { Box, Pressable } from '../Utility';
import { TabBarContext, useTabBarContext } from './TabBarContext';
import { TabBarItemProps, TabBarProps } from './types';

const PILL_INSET = 4;

export function TabBarItem({
  value,
  label,
  icon,
  activeIcon,
}: TabBarItemProps) {
  const styles = useStyles();
  const { active, onTabPress } = useTabBarContext();

  const isActive = active === value;
  const activeProgress = useSharedValue(isActive ? 1 : 0);
  const pressProgress = useSharedValue(1);

  const Icon = icon ?? Placeholder;
  const ActiveIcon = activeIcon ?? Icon;

  useEffect(() => {
    activeProgress.value = withTiming(isActive ? 1 : 0, {
      duration: 200,
      easing: Easing.bezier(0, 0, 0.2, 1),
    });
  }, [isActive, activeProgress]);

  function onPress() {
    pressProgress.value = withSequence(
      withTiming(0.8, { duration: 100, easing: Easing.bezier(0, 0, 0.2, 1) }),
      withTiming(1, { duration: 100, easing: Easing.bezier(0, 0, 0.2, 1) }),
    );
    onTabPress(value);
  }

  const scaleStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: pressProgress.value }],
    }),
    [],
  );

  const activeIconStyle = useAnimatedStyle(
    () => ({
      opacity: activeProgress.value,
    }),
    [],
  );

  const inactiveIconStyle = useAnimatedStyle(
    () => ({
      opacity: 1 - activeProgress.value,
    }),
    [],
  );

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Animated.View style={scaleStyle}>
        {isActive ? (
          <Animated.View style={activeIconStyle}>
            <ActiveIcon size={20} />
          </Animated.View>
        ) : (
          <Animated.View style={inactiveIconStyle}>
            <Icon size={20} />
          </Animated.View>
        )}
      </Animated.View>
      <Text style={[styles.itemText, isActive && styles.activeItemText]}>
        {label ?? value}
      </Text>
    </Pressable>
  );
}

TabBarItem.displayName = 'TabBarItem';

export function TabBar({
  active,
  onTabPress,
  children,
  ...props
}: TabBarProps): JSX.Element {
  const styles = useStyles();
  const { theme } = useTheme();

  const pillProgress = useSharedValue(0);
  const itemWidth = useSharedValue(0);
  const itemHeight = useSharedValue(0);

  function onLayout(e: LayoutChangeEvent) {
    const { width, height } = e.nativeEvent.layout;

    const count = React.Children.count(children);
    const slotWidth = (width - PILL_INSET * 2) / count;

    itemWidth.value = slotWidth;
    itemHeight.value = height;
  }

  function handleTabPress(value: string) {
    onTabPress?.(value);
  }

  useEffect(() => {
    const index = React.Children.toArray(children).findIndex(
      (child: any) => child.props.value === active,
    );

    if (index >= 0) {
      pillProgress.value = withTiming(index * itemWidth.value, {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });
    }
  }, [active, children, itemWidth.value, pillProgress]);

  const animatedPillStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: pillProgress.value }],
      width: itemWidth.value,
      height: itemHeight.value - PILL_INSET * 2,
    }),
    [],
  );

  return (
    <TabBarContext.Provider value={{ active, onTabPress: handleTabPress }}>
      <Box style={styles.container} onLayout={onLayout} {...props}>
        {children}
        <BlurView style={styles.blur} blurAmount={theme.blur.md} />
        <Animated.View style={[styles.pill, animatedPillStyle]} />
      </Box>
    </TabBarContext.Provider>
  );
}

const useStyles = () =>
  useStyleSheet(
    (t) => ({
      container: {
        width: t.sizes.full,
        minWidth: t.sizes.s256,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: t.spacings.s4,
        alignItems: 'center',
        borderRadius: t.borderRadius.full,
        backgroundColor: t.colors.bg.mutedTransparent,
        overflow: 'hidden',
      },
      blur: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
      },
      item: {
        flex: 1,
        paddingVertical: t.spacings.s4,
        alignItems: 'center',
        justifyContent: 'center',
        gap: t.spacings.s2,
      },
      itemText: {
        ...t.typographies.body4,
        color: t.colors.text.base,
      },
      activeItemText: {
        ...t.typographies.body4SemiBold,
      },
      pill: {
        position: 'absolute',
        top: PILL_INSET,
        left: PILL_INSET,
        borderRadius: t.borderRadius.full,
        backgroundColor: t.colors.bg.mutedTransparent,
      },
    }),
    [],
  );
