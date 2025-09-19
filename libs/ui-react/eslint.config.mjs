// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
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
    ignores: [
      '**/*.figma.ts',
      '**/*.figma.tsx',
      '**/*.figma.js',
      '**/*.figma.jsx',
    ],
  },
  ...storybook.configs['flat/recommended'],
];
