import type { Config } from 'tailwindcss';
import { websitesTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '@ldls/ui-core';

export const websitesPreset = {
  content: [],
  plugins: [createThemePlugin(websitesTheme)],
  darkMode: 'class',
} satisfies Config;
