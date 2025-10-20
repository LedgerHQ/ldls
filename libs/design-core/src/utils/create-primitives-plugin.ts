import plugin from 'tailwindcss/plugin.js';
import { CSSRuleObject } from 'tailwindcss/types/config.js';
import { primitivesTheme } from '../themes/index.js';
import { createIconUtilities } from './create-icon-utilities.js';
import { createSpotUtilities } from './create-spot-utilities.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';

export function createPrimitivesPlugin() {
  const spacing = getThemeUtilsByPrefix(primitivesTheme, '--spacing-');
  const size = getThemeUtilsByPrefix(primitivesTheme, '--size-');
  const borderRadius = getThemeUtilsByPrefix(
    primitivesTheme,
    '--border-radius-',
  );

  const blur = getThemeUtilsByPrefix(primitivesTheme, '--blur-');
  const iconWidth = getThemeUtilsByPrefix(primitivesTheme, '--icon-width-');
  const iconHeight = getThemeUtilsByPrefix(primitivesTheme, '--icon-height-');
  const spotWidth = getThemeUtilsByPrefix(primitivesTheme, '--spot-width-');
  const spotHeight = getThemeUtilsByPrefix(primitivesTheme, '--spot-height-');
  const iconStrokeWidth = getThemeUtilsByPrefix(
    primitivesTheme,
    '--icon-border-width-',
  );

  const zIndex = {
    'dialog-overlay': '90',
    'dialog-content': '100',
    select: '120',
    tooltip: '200',
  };

  return plugin(
    function ({ addBase, theme, addUtilities }) {
      // TODO: Remove type cast after exporting all values as strings from Figma
      addBase(primitivesTheme as CSSRuleObject);
      addUtilities(createIconUtilities(theme));
      addUtilities(createSpotUtilities(theme));
    },
    {
      theme: {
        spacing,
        borderRadius,
        blur,
        iconWidth,
        iconHeight,
        spotWidth,
        spotHeight,
        iconStrokeWidth,
        zIndex,
        extend: {
          height: size,
          width: size,
          size,
          maxHeight: size,
          maxWidth: size,
          minHeight: size,
          minWidth: size,
        },
      },
    },
  );
}
