import { LumenStyleSheetTheme, LumenTheme } from '../types';

/**
 * The theme JS object from design-core is not directly usable by the StyleSheet.
 * Instead we need to transform and extend the theme to improve how theme is consumed with LumenStyleSheet.useCreate
 */
export const adaptThemeForStylesheet = (
  theme: LumenTheme,
): LumenStyleSheetTheme => {
  return {
    ...theme,
    typographies: theme.typographies.sm,
  };
};
