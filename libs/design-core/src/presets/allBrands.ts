import type { Config } from 'tailwindcss';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';
import { allBrandsTheme } from '../themes/index.js';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';

export const allBrandsPreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(allBrandsTheme),
    createTypographyPlugin(),
    createGradientPlugin(allBrandsTheme),
    createDropShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
  },
} satisfies Config;
