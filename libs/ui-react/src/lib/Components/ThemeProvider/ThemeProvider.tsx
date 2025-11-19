import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC, useMemo, useState } from 'react';
import { I18nProvider } from '../../../i18n';
import { DEFAULT_LANGUAGE } from '../../../i18n/languages';
import {
  SupportedLocale,
  ThemeMode,
  ThemeProviderProps,
} from './ThemeProvider.types';
import {
  DARK_MODE,
  LIGHT_MODE,
  SYSTEM_MODE,
  useRootColorModeSideEffect,
} from './useRootColorModeSideEffect';

type ThemeProviderState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  locale: SupportedLocale;
};

const [ThemeProviderContext, useThemeContext] =
  createSafeContext<ThemeProviderState>('ThemeProvider');

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  defaultMode = SYSTEM_MODE,
  locale = DEFAULT_LANGUAGE,
}) => {
  const [mode, setMode] = useState(defaultMode);

  useRootColorModeSideEffect({ mode });

  const value = useMemo(
    () => ({
      mode,
      setMode,
      locale,
    }),
    [mode, locale],
  );

  return (
    <ThemeProviderContext value={value}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </ThemeProviderContext>
  );
};

const useTheme = () => {
  const context = useThemeContext({
    consumerName: 'useTheme',
    contextRequired: true,
  });
  return {
    ...context,
    toggleMode: () =>
      context.setMode(context.mode === DARK_MODE ? LIGHT_MODE : DARK_MODE),
  };
};

export { ThemeProvider, useTheme };
