import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC, useMemo } from 'react';
import { ColorSchemeName } from 'react-native';
import { useControllableState } from '../../lib/utils/use-controllable-state/use-controllable-state';

import { type LumenStyleSheetTheme } from '../types';
import { adaptThemeForStylesheet } from '../utils/adaptThemeForStylesheet';
import { LumenStyleSheetProviderProps } from './LumenStyleSheetProvider.types';

const DEFAULT_COLOR_SCHEME = 'dark';

export type LumenStyleSheetContextValue = {
  theme: LumenStyleSheetTheme;
  colorScheme: ColorSchemeName;
  setColorScheme: (scheme: ColorSchemeName) => void;
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
  const [colorSchemeState, setColorScheme] =
    useControllableState<ColorSchemeName>({
      defaultProp: colorScheme ?? DEFAULT_COLOR_SCHEME,
      prop: colorScheme,
      onChange: onColorSchemeChange,
    });

  const contextValue = useMemo(() => {
    const currentTheme = themes[colorSchemeState || DEFAULT_COLOR_SCHEME];
    return {
      theme: adaptThemeForStylesheet(currentTheme),
      colorScheme: colorSchemeState,
      setColorScheme,
    };
  }, [themes, colorSchemeState, setColorScheme]);

  return (
    <LumenStyleSheetContextProvider value={contextValue}>
      {children}
    </LumenStyleSheetContextProvider>
  );
};
