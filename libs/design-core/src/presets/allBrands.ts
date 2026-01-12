import type { Config } from 'tailwindcss';
import { allBrandsCSSTheme } from '../themes/css';
import { createAnimationsPlugin } from '../utils/createAnimationsPlugin.js';
import { createPrimitivesPlugin } from '../utils/createPrimitivesPlugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const allBrandsPreset: Config = {
  content: [],
  theme: {
    boxShadow: {},
    boxShadowColor: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    colors: {},
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
};
