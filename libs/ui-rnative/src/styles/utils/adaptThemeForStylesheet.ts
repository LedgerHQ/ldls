import { LumenStyleSheetTheme, LumenTheme } from '../types';

/**
 * The theme JS object from design-core is not directly usable by the StyleSheet.
 * Instead we need to narrow or extends the theme to enable better theme context.
 */
export const adaptThemeForStylesheet = (
  theme: LumenTheme,
): LumenStyleSheetTheme => {
  return {
    ...theme,
    typographies: theme.typographies.sm,
  };
};
