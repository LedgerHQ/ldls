import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC, useEffect, useMemo, useState } from 'react';

import {
  Appearance,
  ColorSchemeName,
  useColorScheme as useReactNativeColorScheme,
} from 'react-native';
import { I18nProvider } from '../../../i18n';
import { LumenStyleSheetProvider } from '../../../styles';
import { RuntimeConstants } from '../../utils';

import { GlobalTooltipProvider } from '../Tooltip/GlobalTooltipContext';
import { ThemeProviderProps } from './ThemeProvider.types';

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const SYSTEM_MODE = 'system';

const [ThemeContextProvider, useThemeProviderContext] = createSafeContext<{
  mode: ColorSchemeName;
  setMode: (mode: ColorSchemeName) => void;
}>('ThemeProvider');

const ThemeProvider: FC<ThemeProviderProps> = ({
  defaultMode = SYSTEM_MODE,
  themes,
  children,
  locale,
}) => {
  const colorScheme = useReactNativeColorScheme();
  const initialMode = defaultMode === SYSTEM_MODE ? colorScheme : defaultMode;
  const [mode, setMode] = useState<ColorSchemeName>(initialMode);

  /**
   * Side-effect to update the color scheme of the app when the mode changes.
   */
  useEffect(() => {
    if (mode !== null && mode !== undefined && RuntimeConstants.isNative) {
      Appearance.setColorScheme(mode as ColorSchemeName);
    }
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  return (
    <ThemeContextProvider value={value}>
      <LumenStyleSheetProvider colorScheme={mode} themes={themes}>
        <I18nProvider locale={locale}>
          <GlobalTooltipProvider>{children}</GlobalTooltipProvider>
        </I18nProvider>
      </LumenStyleSheetProvider>
    </ThemeContextProvider>
  );
};

const useColorScheme = () => {
  const context = useThemeProviderContext({
    consumerName: 'useColorScheme',
    contextRequired: true,
  });

  return {
    mode: context.mode,
    setMode(mode: ColorSchemeName) {
      context.setMode(mode);
    },
    toggleMode() {
      const newMode = context.mode === DARK_MODE ? LIGHT_MODE : DARK_MODE;
      context.setMode(newMode);
    },
  };
};

export { ThemeProvider, useColorScheme };
