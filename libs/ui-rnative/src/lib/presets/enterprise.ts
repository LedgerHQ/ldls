import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '@ldls/ui-core';

export const enterprisePreset = {
  content: [],
  plugins: [createThemePlugin(enterpriseTheme)],
  darkMode: 'class',
} satisfies Config;
