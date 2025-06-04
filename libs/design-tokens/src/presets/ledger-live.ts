import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '../themes.js';
import { createThemePlugin } from '../utils/index.js';

export const ledgerLivePreset = {
  content: [],
  plugins: [createThemePlugin(ledgerLiveTheme)],
  darkMode: 'class',
} satisfies Config;
