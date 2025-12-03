import {
  enterpriseDarkTheme,
  enterpriseLightTheme,
  ledgerLiveDarkTheme,
  ledgerLiveLightTheme,
  websitesDarkTheme,
  websitesLightTheme,
} from '@ledgerhq/ldls-design-core';
import type { Decorator } from '@storybook/react-native-web-vite';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeMode, ThemeProvider } from '../src/lib/Components';

const createThemeDecorator = (
  globalName: string,
  themeClasses: string[],
): Decorator => {
  return (Story, context) => {
    const selectedValue = context.globals[globalName] as string | undefined;
    const htmlElement = document.documentElement;

    htmlElement.classList.remove(...themeClasses);

    if (selectedValue) {
      htmlElement.classList.add(selectedValue);
    }

    return <Story />;
  };
};

export const withBrandDecorator = createThemeDecorator('brand', [
  'ledger-live',
  'enterprise',
  'websites',
]);

export const withModeDecorator = createThemeDecorator('mode', [
  'light',
  'dark',
]);

const mappingThemes = {
  'ledger-live': {
    dark: ledgerLiveDarkTheme,
    light: ledgerLiveLightTheme,
  },
  enterprise: {
    dark: enterpriseDarkTheme,
    light: enterpriseLightTheme,
  },
  websites: {
    dark: websitesDarkTheme,
    light: websitesLightTheme,
  },
};

export const withProvidersDecorator: Decorator = (Story, context) => {
  const mode = context.globals.mode as ThemeMode;
  const currentTheme =
    mappingThemes[context.globals.brand as keyof typeof mappingThemes];

  return (
    <ThemeProvider defaultMode={mode} themes={currentTheme}>
      <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
        <Story />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
