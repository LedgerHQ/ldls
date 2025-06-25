import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '../themes/index.js';
import { createThemePlugin } from '../utils/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

export const ledgerLivePreset = {
  content: [],
  plugins: [createPrimitivesPlugin(), createThemePlugin(ledgerLiveTheme)],
  darkMode: 'class',
} satisfies Config;
