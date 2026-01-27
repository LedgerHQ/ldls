import { Placeholder } from '@ledgerhq/lumen-ui-rnative/symbols';
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
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

  const Icon = icon ?? Placeholder;
  const ActiveIcon = activeIcon ?? Placeholder;

  return (
    <Pressable style={styles.item} onPress={() => onTabPress(value)}>
      {active === value ? <ActiveIcon size={20} /> : <Icon size={20} />}
      <Text style={styles.itemText}>{label ?? value}</Text>
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
    const index = React.Children.toArray(children).findIndex(
      (child: any) => child.props.value === value,
    );

    onTabPress?.(value);
    pillProgress.value = withTiming(index * itemWidth.value, {
      duration: 300,
    });
  }

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
      <View style={styles.container} onLayout={onLayout} {...props}>
        {children}
        <Animated.View style={[styles.pill, animatedPillStyle]} />
        <BlurView style={styles.blur} blurAmount={theme.blur.md} />
      </View>
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
        gap: t.spacings.s2,
      },
      itemText: {
        ...t.typographies.body4SemiBold,
        color: t.colors.text.base,
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
