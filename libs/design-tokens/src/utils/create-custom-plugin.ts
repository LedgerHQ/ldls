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
  const iconWidth = getThemeUtilsByPrefix(brandTheme, '--icon-width-');
  const iconHeight = getThemeUtilsByPrefix(brandTheme, '--icon-height-');
  const iconStrokeWidth = getThemeUtilsByPrefix(
    brandTheme,
    '--icon-border-width-'
  );

  return plugin(
    function ({ addBase, theme, addUtilities }) {
      addBase(brandTheme);

      const newUtilities: Record<string, Record<string, string>> = {};
      const iconWidths = theme('iconWidth');
      const iconHeights = theme('iconHeight');
      const iconStrokeWidths = theme('iconStrokeWidth');

      for (const key in iconWidths) {
        if (Object.hasOwnProperty.call(iconWidths, key)) {
          const value = iconWidths[key];
          newUtilities[`.icon-w-${key}`] = { width: value };
        }
      }
      for (const key in iconHeights) {
        if (Object.hasOwnProperty.call(iconHeights, key)) {
          const value = iconHeights[key];
          newUtilities[`.icon-h-${key}`] = { height: value };
        }
      }
      for (const key in iconStrokeWidths) {
        if (Object.hasOwnProperty.call(iconStrokeWidths, key)) {
          const value = iconStrokeWidths[key];
          newUtilities[`.icon-stroke-${key}`] = { strokeWidth: value };
        }
      }
      addUtilities(newUtilities);
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
        iconWidth,
        iconHeight,
        iconStrokeWidth,
      },
    }
  );
}
