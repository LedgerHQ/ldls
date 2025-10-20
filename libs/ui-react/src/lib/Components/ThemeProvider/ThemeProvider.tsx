import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC, useEffect, useMemo } from 'react';
import { Theme, ThemeProviderProps } from './ThemeProvider.types';

const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';
const SYSTEM_MODE = 'system';

type ThemeProviderState = {
  theme: Theme;
};

const [ThemeProviderContext] =
  createSafeContext<ThemeProviderState>('ThemeProvider');

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = SYSTEM_MODE,
  ...props
}) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(LIGHT_MODE, DARK_MODE);

    if (theme === SYSTEM_MODE) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? DARK_MODE
        : LIGHT_MODE;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
};

export { ThemeProvider };
