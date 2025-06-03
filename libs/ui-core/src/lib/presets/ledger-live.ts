import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '../utils';

export const ledgerLivePreset = {
  content: [],
  plugins: [createThemePlugin(ledgerLiveTheme)],
  darkMode: 'class',
} satisfies Config;
