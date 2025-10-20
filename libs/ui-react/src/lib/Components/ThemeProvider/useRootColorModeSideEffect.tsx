import { useEffect } from 'react';
import { ThemeMode } from './ThemeProvider.types';

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';
export const SYSTEM_MODE = 'system';

/**
 * Updates the root element className when the theme mode changes.
 * This allow the design-system theme config to be applied
 */
export const useRootColorModeSideEffect = ({ mode }: { mode: ThemeMode }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(LIGHT_MODE, DARK_MODE);

    if (mode === SYSTEM_MODE) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? DARK_MODE
        : LIGHT_MODE;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(mode);
  }, [mode]);
};
