import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '../utils/create-theme-plugin';

export const preset = {
  content: [],
  plugins: [createThemePlugin(ledgerLiveTheme)],
  darkMode: 'class',
} satisfies Config;
