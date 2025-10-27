import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import type { StorybookConfig } from '@storybook/react-native-web-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../docs/**/*.@(mdx)',
  ],
  addons: ['@storybook/addon-themes', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        jsxImportSource: 'nativewind',
      },
    },
  },

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    };

    return mergeConfig(config, {
      plugins: [nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [
            (await import('tailwindcss')).default,
            (await import('autoprefixer')).default,
          ],
        },
      },
    });
  },

  core: {
    disableTelemetry: true,
  },
};

export default config;
