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

    config.build = config.build || {};
    config.build.rollupOptions = {
      ...config.build.rollupOptions,
      treeshake: 'safest',
      plugins: [
        ...(Array.isArray(config.build.rollupOptions?.plugins)
          ? config.build.rollupOptions.plugins
          : []),
        {
          name: 'nativewind-fix',
          async transform(_, id) {
            if (
              id.includes('react-native-css-interop') &&
              id.includes('runtime/components.js')
            ) {
              return { moduleSideEffects: 'no-treeshake' };
            }
          },
        },
      ],
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
