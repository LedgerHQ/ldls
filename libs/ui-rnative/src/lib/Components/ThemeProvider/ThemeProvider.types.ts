import { ViewProps } from 'react-native';
import { SupportedLocale } from '../../../i18n/languages';

export type ThemeMode = 'dark' | 'light' | 'system';

export type ThemeProviderProps = ViewProps & {
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
