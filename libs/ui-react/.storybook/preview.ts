import type { Preview } from '@storybook/react-vite';
import { withBrandDecorator, withModeDecorator } from './Decorator';
import '../src/styles.css';
import './font.css';

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
          ['Welcome'],
          'Tailwind',
          ['Introduction', 'Setup guide', 'Configuration'],
          'Foundations',
          [
            'Docs',
            'Colors',
            ['Docs', 'Background', 'Text', 'Border'],
            'Border',
            'Dimensions',
            ['Spacing', 'Size', 'Height', 'Width'],
          ],
          'Symbols',
          ['Interface Icons', ['Implementation', 'Docs', '*']],
          'Action',
          [
            'Button',
            ['Implementation', '*'],
            'CardButton',
            ['Implementation', '*'],
            'IconButton',
            ['Implementation', '*'],
            'Link',
            ['Implementation', '*'],
            ['Implementation', 'Docs', '*'],
            'Input',
            ['Implementation', 'Docs', '*'],
            'Search',
            ['Implementation', 'Docs', '*'],
          ],
          'Communication',
          [
            'Banner',
            ['Implementation', '*'],
            'Tag',
            ['Implementation', '*'],
            'Tooltip',
            ['Implementation', '*'],
          ],
          'Containment',
          [
            'Dialog',
            ['Implementation', '*'],
            'ListItem',
            ['Implementation', '*'],
            'SheetBar',
            ['Implementation', '*'],
            'VerticalListItem',
            ['Implementation', '*'],
          ],
          'Navigation and Search',
          [],
          'Selection',
          [
            'Checkbox',
            ['Implementation', '*'],
            'Switch',
            ['Implementation', '*'],
          ],
          'Text Input',
          ['Input', ['Implementation', '*']],
          'Media & Graphics',
          ['Spot', ['Implementation', '*']],
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
