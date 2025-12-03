import {
  ledgerLiveDarkTheme,
  TypographyTokens,
} from '@ledgerhq/ldls-design-core';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type AllAvailableStyles = ViewStyle & TextStyle & ImageStyle;
type AllAvailableKeys = keyof (ViewStyle & TextStyle & ImageStyle);

type FlatLumensValues = {
  [propName in AllAvailableKeys]?: AllAvailableStyles[propName];
};

type LumensValues = FlatLumensValues;

export type LumenStyleSheet = {
  [styleName: string]:
    | LumensValues
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((...args: any) => LumensValues);
};

export type LumenStyleSheetWithSuperPowers<S extends LumenStyleSheet> =
  | ((theme: LumenStyleSheetTheme) => S)
  | S;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createFn = <S extends LumenStyleSheet>(
  _theme: LumenStyleSheetTheme,
  stylesheet: LumenStyleSheetWithSuperPowers<S>,
): S => stylesheet as S;

export type LumenCreateStyleSheet = typeof createFn;

/**
 * Instead of exposing the full typography tokens by breakpoint, we only expose one typography tokens.
 */
type ThemeWithOneTypographyTokens<Theme> = Omit<Theme, 'typographies'> & {
  typographies: TypographyTokens;
};

export type LumenTheme = typeof ledgerLiveDarkTheme;
export type LumenStyleSheetTheme = ThemeWithOneTypographyTokens<LumenTheme>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface LumenStyleSheetThemes {
  light: LumenStyleSheetTheme;
  dark: LumenStyleSheetTheme;
}

export type LumenThemes = {
  light: LumenTheme;
  dark: LumenTheme;
};
