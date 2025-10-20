import { useState } from 'react';
import { Theme } from './ThemeProvider.types';

/**
 * A hook to manage the theme state of the application.
 */
export const useThemeState = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
  };
};
