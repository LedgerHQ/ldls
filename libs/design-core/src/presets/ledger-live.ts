import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '../themes/index.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

export const ledgerLivePreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(ledgerLiveTheme),
    createTypographyPlugin(),
    createGradientPlugin(ledgerLiveTheme),
    createDropShadowPlugin(),
  ],
  darkMode: 'class',
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
  },
} satisfies Config;
