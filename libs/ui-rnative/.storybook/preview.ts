import type { Preview } from '@storybook/react-native-web-vite';
import '../src/styles.css';
import './font.css';
import { withBrandDecorator, withModeDecorator } from './Decorator';

const preview: Preview = {
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Global brand theme for components',
      defaultValue: 'ledger-live',
      toolbar: {
        icon: 'paintbrush',
        title: 'Brand',
        items: ['ledger-live', 'enterprise', 'websites'],

        dynamicTitle: true,
      },
    },
    mode: {
      name: 'Mode',
      description: 'Color scheme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        title: 'Mode',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#191919' },
        light: { name: 'Light', value: '#fafafa' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'light' },
    },

    options: {
      storySort: {
        order: [
          'Getting Started',
          ['Introduction', 'Quick Start'],
          'Tailwind',
          ['Introduction', 'Setup guide', 'Configuration'],
          'Foundations',
          ['Docs', 'Colors', 'Border', 'Spacing', 'Size', 'Height', 'Width'],
          'Symbols',
          'Action',
          ['CardButton', 'InteractiveIcon', 'Link', 'Input', 'Search'],
          'Communication',
          'Containment',
          'Selection',
          'Text Input',
        ],
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

  decorators: [withBrandDecorator, withModeDecorator],
};

export default preview;
