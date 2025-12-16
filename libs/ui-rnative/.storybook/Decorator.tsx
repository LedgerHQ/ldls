import {
  enterpriseThemes,
  ledgerLiveThemes,
  websitesThemes,
} from '@ledgerhq/lumen-design-core';
import type { Decorator } from '@storybook/react-native-web-vite';

import { ColorSchemeName } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '../src/lib/Components';

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
  'ledger-live': ledgerLiveThemes,
  enterprise: enterpriseThemes,
  websites: websitesThemes,
} as any;

export const withProvidersDecorator: Decorator = (Story, context) => {
  const mode = context.globals.mode as ColorSchemeName;
  const currentTheme = mappingThemes[context.globals.brand];

  return (
    <ThemeProvider colorScheme={mode} themes={currentTheme}>
      <GestureHandlerRootView
        style={{ flex: 1, width: '100%', alignItems: 'flex-start' }}
      >
        <Story />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
