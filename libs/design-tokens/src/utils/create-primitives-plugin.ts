import plugin from 'tailwindcss/plugin.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';
import { createIconUtilities } from './create-icon-utilities.js';
import { primitivesTheme } from '../themes.js';

export function createPrimitivesPlugin() {
  const spacing = getThemeUtilsByPrefix(primitivesTheme, '--spacing-');
  const width = getThemeUtilsByPrefix(primitivesTheme, '--width-');
  const height = getThemeUtilsByPrefix(primitivesTheme, '--height-');
  const borderRadius = getThemeUtilsByPrefix(
    primitivesTheme,
    '--border-radius-'
  );
  const borderWidth = getThemeUtilsByPrefix(primitivesTheme, '--border-width-');
  const blur = getThemeUtilsByPrefix(primitivesTheme, '--blur-');
  const iconWidth = getThemeUtilsByPrefix(primitivesTheme, '--icon-width-');
  const iconHeight = getThemeUtilsByPrefix(primitivesTheme, '--icon-height-');
  const iconStrokeWidth = getThemeUtilsByPrefix(
    primitivesTheme,
    '--icon-border-width-'
  );

  const fontSize = getThemeUtilsByPrefix(primitivesTheme, '--font-size-');
  const fontWeight = getThemeUtilsByPrefix(primitivesTheme, '--font-weight-');
  const lineHeight = getThemeUtilsByPrefix(primitivesTheme, '--line-height-');
  const letterSpacing = getThemeUtilsByPrefix(
    primitivesTheme,
    '--letter-spacing-'
  );
  const fontFamily = getThemeUtilsByPrefix(primitivesTheme, '--font-family-');
  const fontStyle = getThemeUtilsByPrefix(primitivesTheme, '--font-style-');

  return plugin(
    function ({ addBase, theme, addUtilities }) {
      addBase(primitivesTheme);
      addUtilities(createIconUtilities(theme));
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
        blur: {
          ...blur,
        },
        iconWidth,
        iconHeight,
        iconStrokeWidth,
        fontSize: {
          ...fontSize,
        },
        fontWeight: {
          ...fontWeight,
        },
        lineHeight: {
          ...lineHeight,
        },
        letterSpacing: {
          ...letterSpacing,
        },
        fontFamily: {
          ...fontFamily,
        },
        fontStyle: {
          ...fontStyle,
        },
      },
    }
  );
}
