import { createSafeContext } from '@ledgerhq/ldls-utils-shared';
import { FC } from 'react';

import { I18nProvider } from '../../../i18n';
import { LumenStyleSheetProvider } from '../../../styles';

import { GlobalSelectProvider } from '../Select/GlobalSelectContext';
import { GlobalTooltipProvider } from '../Tooltip/GlobalTooltipContext';
import { ThemeProviderProps } from './ThemeProvider.types';

const [ThemeContextProvider] = createSafeContext('ThemeProvider');

const ThemeProvider: FC<ThemeProviderProps> = ({
  colorScheme,
  themes,
  children,
  locale,
}) => {
  return (
    <ThemeContextProvider value={{}}>
      <LumenStyleSheetProvider colorScheme={colorScheme} themes={themes}>
        <I18nProvider locale={locale}>
          <GlobalSelectProvider>
            <GlobalTooltipProvider>{children}</GlobalTooltipProvider>
          </GlobalSelectProvider>
        </I18nProvider>
      </LumenStyleSheetProvider>
    </ThemeContextProvider>
  );
};

export { ThemeProvider };
