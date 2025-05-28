/** @type {import('tailwindcss').Config} */
import { preset } from './src/lib/presets/enterprise';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '.storybook/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.stories.{js,jsx,ts,tsx}'
  ],
  presets: [preset],
};
