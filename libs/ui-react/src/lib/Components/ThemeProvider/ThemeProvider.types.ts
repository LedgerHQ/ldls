import { PropsWithChildren } from 'react';

export type ThemeMode = 'dark' | 'light' | 'system';

export type SupportedLocale = 'en' | 'fr';

export type ThemeProviderProps = PropsWithChildren & {
  /**
   * The default mode of the theme.
   * @default 'system'
   */
  defaultMode?: ThemeMode;
  /**
   * The locale to use for translations.
   * When changed, translations will be lazy-loaded automatically.
   * @default 'en'
   */
  locale?: SupportedLocale;
};
