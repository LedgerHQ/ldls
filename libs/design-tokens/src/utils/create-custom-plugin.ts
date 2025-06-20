import plugin from 'tailwindcss/plugin.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';

export function createThemePlugin(
  brandTheme: Record<string, Record<string, string>>
) {
  const cryptoColors = getThemeUtilsByPrefix(brandTheme, '--color-crypto-');
  const backgroundColors = getThemeUtilsByPrefix(brandTheme, '--background-');
  const textColors = getThemeUtilsByPrefix(brandTheme, '--text-');
  const borderColors = getThemeUtilsByPrefix(brandTheme, '--border-');

  return plugin(
    function ({ addBase }) {
      addBase(brandTheme);
    },
    {
      theme: {
        backgroundColor: {
          ...backgroundColors,
          ...cryptoColors,
        },
        textColor: {
          ...textColors,
          ...cryptoColors,
        },
        borderColor: {
          ...borderColors,
        },
      },
    }
  );
}
