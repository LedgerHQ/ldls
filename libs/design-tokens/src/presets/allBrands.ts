import type { Config } from 'tailwindcss';
import { allBrandsTheme } from '../themes.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';
import { createThemePlugin } from '../utils/index.js';

export const allBrandsPreset = {
  content: [],
  plugins: [createPrimitivesPlugin(), createThemePlugin(allBrandsTheme)],
  darkMode: 'class',
} satisfies Config;
