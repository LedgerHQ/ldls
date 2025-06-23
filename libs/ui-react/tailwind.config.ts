import type { Config } from 'tailwindcss';
import { allBrandsPreset } from '@ldls/design-tokens';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '.storybook/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.stories.{js,jsx,ts,tsx}',
  ],
  presets: [allBrandsPreset],
} satisfies Config;

export default config;
