import type { Config } from 'tailwindcss';
import { websitesCSSTheme } from '../themes/css';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const websitesPreset = {
  content: [],
  theme: {
    extend: {
      boxShadow: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
    },
  },
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(websitesCSSTheme),
    createTypographyPlugin(),
    createGradientPlugin(websitesCSSTheme),
    createShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
} satisfies Config;
