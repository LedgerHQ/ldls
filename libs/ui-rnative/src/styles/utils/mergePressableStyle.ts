import {
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
} from 'react-native';

export const mergePressableStyle = (...styles: PressableProps['style'][]) => {
  return (state: PressableStateCallbackType) => {
    return StyleSheet.flatten(
      styles.map((style) =>
        typeof style === 'function' ? style(state) : style,
      ),
    );
  };
};
