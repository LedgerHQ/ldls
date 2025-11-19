import { PropsWithChildren } from 'react';
import { type SupportedLocale } from '../../../i18n';

export type ThemeMode = 'dark' | 'light' | 'system';

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
