import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes.js';
import {
  createDropShadowPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createGradientPlugin,
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
