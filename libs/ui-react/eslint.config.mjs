import storybook from 'eslint-plugin-storybook';

import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      storybook,
    },
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
    ignores: [
      '**/*.figma.ts',
      '**/*.figma.tsx',
      '**/*.figma.js',
      '**/*.figma.jsx',
    ],
  },
  ...storybook.configs['flat/recommended'],
];
