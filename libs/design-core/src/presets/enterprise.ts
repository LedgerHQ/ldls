import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes/index.js';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const enterprisePreset = {
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
    createThemePlugin(enterpriseTheme),
    createTypographyPlugin(),
    createGradientPlugin(enterpriseTheme),
    createShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
} satisfies Config;
