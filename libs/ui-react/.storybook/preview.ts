import type { Preview } from '@storybook/react';
import '../src/styles.css';
import './font.css';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    order: {
      storySort: {
        order: ['Foundations', 'Symbols', 'Components'],
      },
    },
    darkMode: {
      stylePreview: true,
      classTarget: 'html',
      dark: {
        ...themes.dark,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
