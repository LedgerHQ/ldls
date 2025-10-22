import { PropsWithChildren } from 'react';

export type ThemeMode = 'dark' | 'light' | 'system';

export type ThemeProviderProps = PropsWithChildren & {
  defaultMode?: ThemeMode;
};
