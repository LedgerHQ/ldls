import type { Config } from 'tailwindcss';
import { ledgerLiveCSSTheme } from '../themes/css';
import { createAnimationsPlugin } from '../utils/createAnimationsPlugin.js';
import { createPrimitivesPlugin } from '../utils/createPrimitivesPlugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createShadowPlugin,
} from '../utils/index.js';

export const ledgerLivePreset: Config = {
  content: [],
  theme: {
    boxShadow: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
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
};
