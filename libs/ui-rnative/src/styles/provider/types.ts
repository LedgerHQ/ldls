import { PropsWithChildren } from 'react';
import { ColorSchemeName } from 'react-native';
import { LumenThemes } from '../types';

export type LumenStyleSheetProviderProps = PropsWithChildren & {
  themes: LumenThemes;
  colorScheme?: ColorSchemeName;
  onColorSchemeChange?: (scheme: ColorSchemeName) => void;
};
