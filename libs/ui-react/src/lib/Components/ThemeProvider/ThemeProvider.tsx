import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC, useMemo, useState } from 'react';
import { ThemeMode, ThemeProviderProps } from './ThemeProvider.types';
import {
  DARK_MODE,
  LIGHT_MODE,
  SYSTEM_MODE,
  useRootColorModeSideEffect,
} from './useRootColorModeSideEffect';

type ThemeProviderState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const [ThemeProviderContext, useThemeContext] =
  createSafeContext<ThemeProviderState>('ThemeProvider');

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  mode = SYSTEM_MODE,
}) => {
  const [valueTheme, setValueTheme] = useState(mode);

  useRootColorModeSideEffect({ mode: valueTheme });

  const value = useMemo(
    () => ({
      mode: valueTheme,
      setMode: setValueTheme,
    }),
    [valueTheme, setValueTheme],
  );

  return <ThemeProviderContext value={value}>{children}</ThemeProviderContext>;
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
