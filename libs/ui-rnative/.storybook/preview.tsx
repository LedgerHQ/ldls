import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    tags: ['autodocs'],
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
