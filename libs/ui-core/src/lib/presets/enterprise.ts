import type { Config } from 'tailwindcss';
import { enterpriseTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '../utils';

export const enterprisePreset = {
  content: [],
  plugins: [createThemePlugin(enterpriseTheme)],
  darkMode: 'class',
} satisfies Config;
