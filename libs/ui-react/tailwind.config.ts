import type { Config } from 'tailwindcss';
import { preset } from './src/lib/presets/ledger-live';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '.storybook/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.stories.{js,jsx,ts,tsx}',
  ],
  presets: [preset],
} satisfies Config;

export default config;
