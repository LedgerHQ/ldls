import plugin from 'tailwindcss/plugin.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';
import { createIconUtilities } from './create-icon-utilities.js';
import { primitivesTheme } from '../themes/index.js';
import { CSSRuleObject } from 'tailwindcss/types/config.js';

export function createPrimitivesPlugin() {
  const spacing = getThemeUtilsByPrefix(primitivesTheme, '--spacing-');
  const width = getThemeUtilsByPrefix(primitivesTheme, '--width-');
  const height = getThemeUtilsByPrefix(primitivesTheme, '--height-');
  const borderRadius = getThemeUtilsByPrefix(
    primitivesTheme,
    '--border-radius-',
  );
  const borderWidth = getThemeUtilsByPrefix(primitivesTheme, '--border-width-');
  const blur = getThemeUtilsByPrefix(primitivesTheme, '--blur-');
  const iconWidth = getThemeUtilsByPrefix(primitivesTheme, '--icon-width-');
  const iconHeight = getThemeUtilsByPrefix(primitivesTheme, '--icon-height-');
  const iconStrokeWidth = getThemeUtilsByPrefix(
    primitivesTheme,
    '--icon-border-width-',
  );

  return plugin(
    function ({ addBase, theme, addUtilities }) {
      // TODO: Remove type cast after exporting all values as strings from Figma
      addBase(primitivesTheme as CSSRuleObject);
      addUtilities(createIconUtilities(theme));
    },
    {
      theme: {
        spacing,
        width,
        height,
        // TODO: use --size instead of --width and --height
        size: {
          ...width,
          ...height,
        },
        borderRadius,
        borderWidth,
        blur,
        divideWidth: borderWidth,
        ringOffsetWidth: borderWidth,
        ringWidth: borderWidth,
        strokeWidth: iconStrokeWidth,
        outlineWidth: borderWidth,
        iconWidth,
        iconHeight,
        iconStrokeWidth,
      },
    },
  );
}
