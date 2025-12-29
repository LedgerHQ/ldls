import { createSafeContext } from '@ledgerhq/lumen-utils-shared';
import { FC, useEffect, useMemo } from 'react';
import {
  Appearance,
  ColorSchemeName,
  useColorScheme as useReactNativeColorScheme,
} from 'react-native';
import { RuntimeConstants } from '../../lib/utils';
import { useControllableState } from '../../lib/utils/use-controllable-state/use-controllable-state';
import { createStylesheetTheme } from '../theme/createStylesheetTheme';
import { type LumenStyleSheetTheme } from '../types';
import { LumenStyleSheetProviderProps } from './types';

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_COLOR_SCHEME = DARK_MODE;

export type LumenStyleSheetContextValue = {
  theme: LumenStyleSheetTheme;
  colorScheme: ColorSchemeName;
  setColorScheme: (scheme: ColorSchemeName) => void;
  toggleColorScheme: () => void;
};

const [LumenStyleSheetContextProvider, _useLumenStyleSheetContext] =
  createSafeContext<LumenStyleSheetContextValue>('LumenStyleSheetProvider');

export const useLumenStyleSheetContext = _useLumenStyleSheetContext;

export const LumenStyleSheetProvider: FC<LumenStyleSheetProviderProps> = ({
  themes,
  colorScheme,
  onColorSchemeChange,
  children,
}) => {
  const nativeColorScheme = useReactNativeColorScheme();
  const initialColorScheme =
    colorScheme ?? nativeColorScheme ?? DEFAULT_COLOR_SCHEME;

  const [colorSchemeState, setColorScheme] =
    useControllableState<ColorSchemeName>({
      defaultProp: initialColorScheme,
      prop: colorScheme,
      onChange: onColorSchemeChange,
    });

  /**
   * Side-effect to update the color scheme of the app when the colorScheme changes.
   */
  useEffect(() => {
    if (
      colorSchemeState !== null &&
      colorSchemeState !== undefined &&
      RuntimeConstants.isNative
    ) {
      Appearance.setColorScheme(colorSchemeState as ColorSchemeName);
    }
  }, [colorSchemeState]);

  const contextValue = useMemo(() => {
    const currentTheme = themes[colorSchemeState as 'dark' | 'light'];
    return {
      theme: createStylesheetTheme(currentTheme),
      colorScheme: colorSchemeState,
      setColorScheme,
      toggleColorScheme: () => {
        setColorScheme(colorSchemeState === DARK_MODE ? LIGHT_MODE : DARK_MODE);
      },
    };
  }, [themes, colorSchemeState, setColorScheme]);

  return (
    <LumenStyleSheetContextProvider value={contextValue}>
      {children}
    </LumenStyleSheetContextProvider>
  );
};
