import type { Preview } from '@storybook/react';
import { ModeDecorator } from './ModeDecorator';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    tags: ['autodocs'],
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ModeDecorator],
};

export default preview;
