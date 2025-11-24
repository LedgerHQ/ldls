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

export const withProvidersDecorator: Decorator = (Story, context) => {
  return (
    <ThemeProvider defaultMode={context.globals.mode as ThemeMode}>
      <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
        <Story />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
