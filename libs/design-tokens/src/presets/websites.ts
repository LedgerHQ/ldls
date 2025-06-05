import type { Config } from 'tailwindcss';
import { websitesTheme } from '../themes.js';
import { createThemePlugin } from '../utils/index.js';

export const websitesPreset = {
  content: [],
  plugins: [createThemePlugin(websitesTheme)],
  darkMode: 'class',
} satisfies Config;
