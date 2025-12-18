import { getObjectPath } from '@ledgerhq/lumen-utils-shared';
import type { ViewStyle, TextStyle } from 'react-native';
import type {
  LumenStyleSheetTheme,
  LumenTextStyle,
  LumenViewStyle,
} from '../types';
import { VIEW_PROP_CONFIG, TEXT_PROP_CONFIG } from './resolveConfig';

/**
 * Unified style resolver
 * Config-driven: single loop resolves all props via provided config
 */
const resolveStyle = <T extends ViewStyle | TextStyle>(
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenViewStyle | LumenTextStyle,
  config: typeof VIEW_PROP_CONFIG | typeof TEXT_PROP_CONFIG,
): T => {
  const resolved: Record<string, unknown> = {};

  for (const [prop, value] of Object.entries(lumenStyle)) {
    const propConfig = config[prop as keyof typeof config];
    if (!propConfig) continue;

    // Passthrough (no path)
    if (!propConfig.path) {
      resolved[prop] = value;
      continue;
    }

    // Token lookup
    const resolvedValue = getObjectPath(theme, [
      ...propConfig.path,
      value as string,
    ]);

    // Spread props (like typography) merge into resolved styles
    if (propConfig.spread && resolvedValue) {
      Object.assign(resolved, resolvedValue);
    } else {
      resolved[prop] = resolvedValue;
    }
  }

  return resolved as T;
};

/**
 * Transform lx props to StyleSheet style object for View
 */
export const resolveViewStyle = (
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenViewStyle,
): ViewStyle => resolveStyle<ViewStyle>(theme, lumenStyle, VIEW_PROP_CONFIG);

/**
 * Transform lx props to StyleSheet style object for Text
 */
export const resolveTextStyle = (
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenTextStyle,
): TextStyle => resolveStyle<TextStyle>(theme, lumenStyle, TEXT_PROP_CONFIG);
