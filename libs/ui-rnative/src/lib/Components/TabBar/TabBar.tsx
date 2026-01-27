import React from 'react';
import { LayoutChangeEvent, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStyleSheet } from '../../../styles';
import { Box, Pressable } from '../Utility';
import { TabBarContext, useTabBarContext } from './TabBarContext';
import { TabBarItemProps, TabBarProps } from './types';

const PILL_INSET = 4;

export function TabBarItem({ value, label, icon }: TabBarItemProps) {
  const styles = useStyles();

  const { active, onTabPress } = useTabBarContext();

  return (
    <Pressable style={styles.item} onPress={() => onTabPress(value)}>
      {icon}
      <Text style={styles.itemText}>{label}</Text>
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

  const pillProgress = useSharedValue(0);
  const itemWidth = useSharedValue(0);
  const itemHeight = useSharedValue(0);

  function onLayout(e: LayoutChangeEvent) {
    const { width, height } = e.nativeEvent.layout;

    const count = React.Children.count(children);
    const slotWidth = width / count;

    itemWidth.value = slotWidth;
    itemHeight.value = height;
  }

  function handleTabPress(value: string) {
    const index = React.Children.toArray(children).findIndex(
      (child: any) => child.props.value === value,
    );

    onTabPress?.(value);
    pillProgress.value = withTiming(index * itemWidth.value, {
      duration: 150,
    });
  }

  const animatedPillStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: pillProgress.value }],
      width: itemWidth.value - PILL_INSET * 2,
      height: itemHeight.value - PILL_INSET * 2,
    }),
    [],
  );

  return (
    <TabBarContext.Provider value={{ active, onTabPress: handleTabPress }}>
      <Box style={styles.container} onLayout={onLayout} {...props}>
        {children}
        <Animated.View style={[styles.pill, animatedPillStyle]} />
      </Box>
    </TabBarContext.Provider>
  );
}

const useStyles = () =>
  useStyleSheet(
    (t) => ({
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: t.spacings.s4,
        alignItems: 'center',
        minWidth: t.sizes.s320, // TODO: this needs checking
        borderRadius: t.borderRadius.full,
        backgroundColor: t.colors.bg.mutedTransparent,
      },
      item: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: t.spacings.s4,
        alignItems: 'center',
        gap: t.spacings.s4,
      },
      itemText: {
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
