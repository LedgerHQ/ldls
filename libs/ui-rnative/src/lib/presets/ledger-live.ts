import type { Config } from 'tailwindcss';
import { ledgerLiveTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '@ldls/ui-core';

export const ledgerLivePreset = {
  content: [],
  plugins: [createThemePlugin(ledgerLiveTheme)],
  darkMode: 'class',
} satisfies Config;
