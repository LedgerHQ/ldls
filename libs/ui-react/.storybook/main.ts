import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../ui-rnative/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (viteConfig) => {
    // Add react-native-web alias for React Native components
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      'react-native': 'react-native-web',
    };

    return mergeConfig(viteConfig, {
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
  docs: {
    autodocs: true,
  },
};

export default config;
