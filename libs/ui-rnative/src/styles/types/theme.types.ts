import {
  ledgerLiveDarkTheme,
  ledgerLiveLightTheme,
  TypographyTokens,
} from '@ledgerhq/ldls-design-core';

/**
 * Instead of exposing the full typography tokens by breakpoint, exposes only one set of typography tokens.
 */
type ThemeWithOneTypographyTokens<Theme> = Omit<Theme, 'typographies'> & {
  typographies: TypographyTokens;
};

export type LumenDarkTheme = typeof ledgerLiveDarkTheme;
export type LumenLightTheme = typeof ledgerLiveLightTheme;
export type LumenTheme = LumenDarkTheme | LumenLightTheme;
export type LumenStyleSheetTheme = ThemeWithOneTypographyTokens<LumenTheme>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface LumenStyleSheetThemes {
  light: LumenStyleSheetTheme;
  dark: LumenStyleSheetTheme;
}

export type LumenThemes = {
  light: LumenLightTheme;
  dark: LumenDarkTheme;
};
