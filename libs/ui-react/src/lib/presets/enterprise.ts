import type { Config } from 'tailwindcss';
import { createThemePlugin } from '../utils/create-custom-plugin';
import { enterpriseTheme } from '@ldls/design-tokens';

export const preset = {
  content: [],
  plugins: [createThemePlugin(enterpriseTheme)],
  darkMode: 'class',
} satisfies Config;
