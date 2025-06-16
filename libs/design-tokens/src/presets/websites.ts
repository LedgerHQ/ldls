import type { Config } from 'tailwindcss';
import { websitesTheme } from '../themes.js';
import { createThemePlugin } from '../utils/index.js';
import { createPrimitivesPlugin } from '../utils/create-primitives-plugin.js';

export const websitesPreset = {
  content: [],
  plugins: [createPrimitivesPlugin(), createThemePlugin(websitesTheme)],
  darkMode: 'class',
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
  },
} satisfies Config;
