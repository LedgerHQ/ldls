import type { Config } from 'tailwindcss';
import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@ledgerhq/ldls-ui-rnative/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset'), ledgerLivePreset],
} satisfies Config;

export default config;
