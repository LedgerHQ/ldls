import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useStyleSheet } from '../../../styles';
import { Box, Pressable } from '../Utility';
import { TabBarContext, useTabBarContext } from './TabBarContext';
import { TabBarItemProps, TabBarProps } from './types';

export function TabBarItem({ value, label, icon }: TabBarItemProps) {
  const styles = useStyles();
  const { active, onTabPress } = useTabBarContext();

  return (
    <Pressable style={styles.item} onPress={() => onTabPress(value)}>
      {icon}
      <Text>{label}</Text>
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

  const animatedPillStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: pillProgress.value }],
    }),
    [],
  );

  function handleTabPress(value: string) {
    onTabPress?.(value);
  }

  return (
    <TabBarContext.Provider value={{ active, onTabPress: handleTabPress }}>
      <Box style={styles.container} {...props}>
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
        minWidth: t.sizes.s320, // TODO: this might
        borderRadius: t.borderRadius.full,
        backgroundColor: t.colors.bg.mutedTransparent,
      },
      item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: t.spacings.s4,
      },
      pill: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        borderRadius: t.borderRadius.full,
        backgroundColor: 'red',
      },
    }),
    [],
  );
