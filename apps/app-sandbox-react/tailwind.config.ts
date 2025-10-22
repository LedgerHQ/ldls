import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';
import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,html}',
    '../../node_modules/@ledgerhq/ldls-ui-react/dist/**/**/*.{ts,js,tsx,jsx}',
  ],
  presets: [ledgerLivePreset],
} satisfies Config;
