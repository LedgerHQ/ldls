import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      plugins: [nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [
            (await import('tailwindcss')).default,
            (await import('autoprefixer')).default,
          ],
        },
      },
      optimizeDeps: {
        exclude: [
          '@storybook/blocks',
          '@storybook/addon-essentials',
          '@storybook/addon-interactions',
          '@storybook/addon-docs',
          '@storybook/react',
          '@storybook/react-vite',
        ],
      },
    }),
  core: {
    disableTelemetry: true,
  },
};

export default config;

