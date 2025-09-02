import type { Config } from 'tailwindcss';
import { allBrandsPreset } from '@ledgerhq/ldls-design-core';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset'), allBrandsPreset],
} satisfies Config;

export default config;
