import { createAnimationsPlugin } from 'src/utils/create-animations-plugin.js';
import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import {
  createGradientPlugin,
  createThemePlugin,
  createTypographyPlugin,
  createDropShadowPlugin,
} from '../utils/index.js';

export const enterprisePreset = {
  content: [],
  plugins: [
    createPrimitivesPlugin(),
    createThemePlugin(enterpriseTheme),
    createTypographyPlugin(),
    createGradientPlugin(enterpriseTheme),
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
