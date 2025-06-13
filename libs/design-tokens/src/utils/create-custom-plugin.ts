import plugin from 'tailwindcss/plugin.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';

export function createThemePlugin(
  brandTheme: Record<string, Record<string, string>>
) {
  const cryptoColors = getThemeUtilsByPrefix(brandTheme, '--color-crypto-');
  const backgroundColors = getThemeUtilsByPrefix(brandTheme, '--background-');
  const textColors = getThemeUtilsByPrefix(brandTheme, '--text-');
  const borderColors = getThemeUtilsByPrefix(brandTheme, '--border-');
  const spacing = getThemeUtilsByPrefix(brandTheme, '--spacing-');
  const width = getThemeUtilsByPrefix(brandTheme, '--width-');
  const height = getThemeUtilsByPrefix(brandTheme, '--height-');
  const borderRadius = getThemeUtilsByPrefix(brandTheme, '--border-radius-');
  const borderWidth = getThemeUtilsByPrefix(brandTheme, '--border-width-');
  const blur = getThemeUtilsByPrefix(brandTheme, '--blur-');

  return plugin(
    function ({ addBase }) {
      addBase(brandTheme);
    },
    {
      theme: {
        margin: {
          ...spacing,
        },
        padding: {
          ...spacing,
        },
        width: {
          ...width,
        },
        height: {
          ...height,
        },
        borderRadius: {
          ...borderRadius,
        },
        borderWidth: {
          ...borderWidth,
        },
        backgroundColor: {
          ...backgroundColors,
          ...cryptoColors,
        },
        blur: {
          ...blur,
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
