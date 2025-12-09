import { ledgerLivePreset } from '@ledgerhq/lumen-design-core';
import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,html}',
    '../../node_modules/@ledgerhq/lumen-ui-react/dist/**/**/*.{ts,js,tsx,jsx}',
  ],
  presets: [ledgerLivePreset],
} satisfies Config;
