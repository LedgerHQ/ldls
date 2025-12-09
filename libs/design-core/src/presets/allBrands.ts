import type { Config } from 'tailwindcss';
import { allBrandsCSSTheme } from '../themes/css';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const allBrandsPreset = {
  content: [],
  theme: {
    boxShadow: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
  },
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(allBrandsCSSTheme),
    createTypographyPlugin(),
    createGradientPlugin(allBrandsCSSTheme),
    createShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
} satisfies Config;
