import type { Decorator } from '@storybook/react-vite';
import { ThemeMode, ThemeProvider } from '../src/lib/Components/ThemeProvider';

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

    return (
      <ThemeProvider defaultMode={context.globals.mode as ThemeMode}>
        <Story />
      </ThemeProvider>
    );
  };
};

export const withBrandDecorator = createThemeDecorator('brand', [
  'ledger-live',
  'enterprise',
  'websites',
]);
