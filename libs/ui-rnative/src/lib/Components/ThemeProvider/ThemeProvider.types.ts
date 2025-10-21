import { ViewProps } from 'react-native';

export type ThemeMode = 'dark' | 'light' | 'system';

export type ThemeProviderProps = ViewProps & {
  /**
   * The default mode of the theme.
   * @default 'system'
   */
  defaultMode?: ThemeMode;
};
