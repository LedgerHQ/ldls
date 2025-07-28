import { ledgerLivePreset } from '@ldls/design-core';
import type { Config } from 'tailwindcss';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@ldls/ui-react/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [ledgerLivePreset],
} satisfies Config;

export default config;
