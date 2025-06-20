import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes.js';
import { createThemePlugin } from '../utils/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

export const enterprisePreset = {
  content: [],
  plugins: [createPrimitivesPlugin(), createThemePlugin(enterpriseTheme)],
  darkMode: 'class',
} satisfies Config;
