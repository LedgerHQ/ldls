import { PropsWithChildren } from 'react';
import { ColorSchemeName } from 'react-native';
import { LumenThemes } from '../types';

export const COLOR_SCHEMES = {
  light: 'light',
  dark: 'dark',
} as const;

export type LumenStyleSheetProviderProps = PropsWithChildren & {
  themes: LumenThemes;
  colorScheme?: ColorSchemeName;
  onColorSchemeChange?: (scheme: ColorSchemeName) => void;
};
