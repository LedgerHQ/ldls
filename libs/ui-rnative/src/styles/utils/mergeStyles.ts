import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type StyleValue = ViewStyle & TextStyle & ImageStyle;
type StyleInput = StyleValue | false | null | undefined;

/**
 * Merges multiple style objects, filtering out falsy values.
 * Use with conditional expressions for variant-based styling.
 *
 * @example
 * const style = mergeStyles(
 *   baseStyle,
 *   disabled && disabledStyle,
 * );
 */
export const mergeStyles = (...styles: StyleInput[]): StyleValue => {
  const result: StyleValue = {};
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    if (style) {
      Object.assign(result, style);
    }
  }
  return result;
};
