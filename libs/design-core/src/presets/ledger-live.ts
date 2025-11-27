import type { Config } from 'tailwindcss';
import { ledgerLiveCSSTheme } from '../themes/css';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const ledgerLivePreset = {
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
    createThemePlugin(ledgerLiveCSSTheme),
    createTypographyPlugin(),
    createGradientPlugin(ledgerLiveCSSTheme),
    createShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
} satisfies Config;
