import storybook from 'eslint-plugin-storybook';

import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      storybook,
    },
    // Override or add rules here
    rules: {
      'storybook/no-uninstalled-addons': [
        'error',
        {
          packageJsonLocation: '../../package.json',
        },
      ],
    },
  },
  {
    ignores: ['public', '.cache', 'node_modules'],
  },
  ...storybook.configs['flat/recommended'],
];
