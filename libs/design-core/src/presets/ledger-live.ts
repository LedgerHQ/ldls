import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '../themes/index.js';
import { createAnimationsPlugin } from '../utils/create-animations-plugin.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';

export const ledgerLivePreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(ledgerLiveTheme),
    createTypographyPlugin(),
    createGradientPlugin(ledgerLiveTheme),
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
