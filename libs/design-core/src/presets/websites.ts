import type { Config } from 'tailwindcss';
import { websitesTheme } from '../themes/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';

export const websitesPreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(websitesTheme),
    createTypographyPlugin(),
    createGradientPlugin(websitesTheme),
    createDropShadowPlugin(),
  ],
  darkMode: 'class',
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
  },
} satisfies Config;
