/** @type {import('tailwindcss').Config} */
import { ledgerLivePreset } from '@ldls/design-tokens';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '.storybook/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.stories.{js,jsx,ts,tsx}',
  ],
  presets: [ledgerLivePreset],
};
