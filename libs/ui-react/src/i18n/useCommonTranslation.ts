import { useTranslation as useI18nextTranslation } from 'react-i18next';
import { I18N_DEFAULT_NAMESPACE } from './languages';

export const useCommonTranslation = () => {
  return useI18nextTranslation(I18N_DEFAULT_NAMESPACE);
};
