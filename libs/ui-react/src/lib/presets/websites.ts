import type { Config } from 'tailwindcss';
import { websitesTheme } from '@ldls/design-tokens';
import { createThemePlugin } from '../utils/create-theme-plugin';

export const preset = {
  content: [],
  plugins: [createThemePlugin(websitesTheme)],
  darkMode: 'class',
} satisfies Config;
