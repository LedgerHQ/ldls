import { getObjectPath } from '@ledgerhq/ldls-utils-shared';
import type { ViewStyle, TextStyle, ViewProps, TextProps } from 'react-native';
import type {
  LumenStyleSheetTheme,
  LumenTextStyleProps,
  LumenTextInputProps,
  LumenViewInputProps,
  LumenViewStyleProps,
} from '../types';
import {
  VIEW_PROP_CONFIG,
  TEXT_PROP_CONFIG,
  LUMEN_VIEW_STYLE_PROPS,
  LUMEN_TEXT_STYLE_PROPS,
} from './resolveConfig';

/**
 * Unified style resolver
 * Config-driven: single loop resolves all props via provided config
 */
const resolveStyle = <T extends ViewStyle | TextStyle>(
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenViewStyleProps | LumenTextStyleProps,
  config: typeof VIEW_PROP_CONFIG | typeof TEXT_PROP_CONFIG,
): T => {
  const resolved: Record<string, unknown> = {};

  for (const [prop, value] of Object.entries(lumenStyle)) {
    const propConfig = config[prop];
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

    // Spread props (like typo) merge into resolved styles
    if (propConfig.spread && resolvedValue) {
      Object.assign(resolved, resolvedValue);
    } else {
      resolved[prop] = resolvedValue;
    }
  }

  return resolved as T;
};

/**
 * Resolve LumenViewStyleProps to React Native ViewStyle
 */
export const resolveViewStyle = (
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenViewStyleProps,
): ViewStyle => resolveStyle<ViewStyle>(theme, lumenStyle, VIEW_PROP_CONFIG);

/**
 * Resolve LumenTextStyleProps to React Native TextStyle
 */
export const resolveTextStyle = (
  theme: LumenStyleSheetTheme,
  lumenStyle: LumenTextStyleProps,
): TextStyle => resolveStyle<TextStyle>(theme, lumenStyle, TEXT_PROP_CONFIG);

/**
 * Unified style props extractor
 * Loops only through input props with O(1) Set lookup
 */
const extractStyleProps = <
  StyleProps,
  RestProps,
  ReturnType = {
    lumenStyle: StyleProps;
    rest: RestProps;
  },
>(
  props: Record<string, unknown>,
  stylePropsSet: Set<string>,
): ReturnType => {
  const lumenStyle: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const key of Object.keys(props)) {
    if (stylePropsSet.has(key)) {
      lumenStyle[key] = props[key];
    } else {
      rest[key] = props[key];
    }
  }

  return { lumenStyle, rest } as ReturnType;
};

/**
 * Extract styled view props from component props
 */
export const extractLumenViewStyleProps = (
  props: LumenViewInputProps,
): { lumenStyle: LumenViewStyleProps; rest: ViewProps } =>
  extractStyleProps(props as Record<string, unknown>, LUMEN_VIEW_STYLE_PROPS);

/**
 * Extract styled text props from component props
 */
export const extractLumenTextStyleProps = (
  props: LumenTextInputProps,
): { lumenStyle: LumenTextStyleProps; rest: TextProps } =>
  extractStyleProps(props as Record<string, unknown>, LUMEN_TEXT_STYLE_PROPS);
