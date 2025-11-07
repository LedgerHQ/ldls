import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '../themes/index.js';
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
    createThemePlugin(ledgerLiveTheme),
    createTypographyPlugin(),
    createGradientPlugin(ledgerLiveTheme),
    createShadowPlugin(),
    createAnimationsPlugin(),
  ],
  darkMode: 'class',
} satisfies Config;
