import type { Preview } from '@storybook/react';
import '../src/styles.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import './font.css';

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true,
      classTarget: 'html',
      dark: {
        ...themes.dark,
      },
    },
    tags: ['autodocs'],
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        'ledger-live': 'ledger-live',
        enterprise: 'enterprise',
        websites: 'websites',
      },
      defaultTheme: 'ledger-live',
      parentSelector: 'html',
    }),
  ],
};

export default preview;
