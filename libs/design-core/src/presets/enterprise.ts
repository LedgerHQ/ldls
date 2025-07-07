import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes/index.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

export const enterprisePreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(enterpriseTheme),
    createTypographyPlugin(),
    createGradientPlugin(enterpriseTheme),
    createDropShadowPlugin(),
  ],
  darkMode: 'class',
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
  },
} satisfies Config;
