import tailwind from 'eslint-plugin-tailwindcss';

import nx from '@nx/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  ...nx.configs['flat/base'],
  ...nx.configs['flat/react'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...tailwind.configs['flat/recommended'],
  {
    ignores: [
      '**/dist',
      '**/storybook-static',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,cjs,cts,mjs,mts}'],
    rules: {
      /**
       * tailwind
       */
      'tailwindcss/no-custom-classname': 'error',
      /**
       * nx
       */
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            {
              sourceTag: 'scope:react-native',
              onlyDependOnLibsWithTags: [
                'scope:shared',
                'scope:react-native',
                'scope:ui-shared',
              ],
            },
            {
              sourceTag: 'scope:react',
              onlyDependOnLibsWithTags: [
                'scope:shared',
                'scope:react',
                'scope:ui-shared',
              ],
            },
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
  globalIgnores(['**/out-tsc']),
);
