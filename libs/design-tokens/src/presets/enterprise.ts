import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '../themes.js';
import { createThemePlugin } from '../utils/index.js';

export const enterprisePreset = {
  content: [],
  plugins: [createThemePlugin(enterpriseTheme)],
  darkMode: 'class',
} satisfies Config;
