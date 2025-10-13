import { ledgerLivePreset } from '@ledgerhq/ldls-design-core';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/*.{js,jsx,ts,tsx}',
    '../node_modules/@ledgerhq/ldls-ui-rnative/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset'), ledgerLivePreset],
  theme: {
    extend: {},
  },
  // important: 'html',
  plugins: [],
};
