import { PropsWithChildren } from 'react';

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = PropsWithChildren & {
  theme?: Theme;
};
