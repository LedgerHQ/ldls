/**
 * Mapping from languages to their respective infos.
 */
export const Languages = {
  en: {
    id: 'en',
  },
  fr: {
    id: 'fr',
  },
  es: {
    id: 'es',
  },
  de: {
    id: 'de',
  },
  ja: {
    id: 'ja',
  },
  ko: {
    id: 'ko',
  },
  pt: {
    id: 'pt',
  },
  ru: {
    id: 'ru',
  },
  tr: {
    id: 'tr',
  },
  zh: {
    id: 'zh',
  },
  th: {
    id: 'th',
  },
} as const satisfies {
  [key in SupportedLocale]: { id: SupportedLocale };
};

/**
 * Default loaded language
 */
export const DEFAULT_LANGUAGE = Languages.en.id;

/**
 * Supported locales type
 */
export type SupportedLocale =
  | 'en'
  | 'fr'
  | 'es'
  | 'de'
  | 'ja'
  | 'ko'
  | 'pt'
  | 'ru'
  | 'tr'
  | 'zh'
  | 'th';

/**
 * Default namespace for i18n
 * Currently there is only one namespace
 */
export const I18N_DEFAULT_NAMESPACE = 'common';
