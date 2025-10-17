import plugin from 'tailwindcss/plugin.js';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';

const DEFAULT_COLOR_VALUES = {
  transparent: 'transparent',
  inherit: 'inherit',
  current: 'currentColor',
} as const;

function extendWithDefaultColors<T extends Record<string, string>>(colors: T) {
  return {
    ...colors,
    ...DEFAULT_COLOR_VALUES,
  };
}

export function createThemePlugin(
  brandTheme: Record<string, Record<string, string>>,
) {
  const cryptoColor = getThemeUtilsByPrefix(brandTheme, '--color-crypto-', {
    customPrefix: 'crypto-',
  });
  const discoveryColor = getThemeUtilsByPrefix(
    brandTheme,
    '--color-discover-',
    {
      customPrefix: 'discover-',
    },
  );
  const backgroundColor = getThemeUtilsByPrefix(brandTheme, '--background-');
  const textColor = getThemeUtilsByPrefix(brandTheme, '--text-');
  const borderColor = getThemeUtilsByPrefix(brandTheme, '--border-', {
    exclude: ['--border-width'],
  });

  const extendedBackgroundColor = {
    ...extendWithDefaultColors(backgroundColor),
    ...cryptoColor,
    ...discoveryColor,
  };

  return plugin(
    function ({ addBase }) {
      addBase(brandTheme);
    },
    {
      theme: {
        textColor: extendWithDefaultColors(textColor),
        borderColor: extendWithDefaultColors(borderColor),
        backgroundColor: extendedBackgroundColor,
        gradientColorStops: extendedBackgroundColor,
        accentColor: extendedBackgroundColor,
        selectionColor: extendedBackgroundColor,
        boxShadowColor: extendedBackgroundColor,
        fill: extendedBackgroundColor,
        stroke: extendWithDefaultColors(borderColor),
        caretColor: extendWithDefaultColors(textColor),
        placeholderColor: extendWithDefaultColors(textColor),
        ringColor: extendWithDefaultColors(borderColor),
        outlineColor: extendWithDefaultColors(borderColor),
        ringOffsetColor: extendWithDefaultColors(borderColor),
        textDecorationColor: extendWithDefaultColors(borderColor),
      },
    },
  );
}

export function createTypographyPlugin() {
  return plugin(function ({ addUtilities }) {
    const displayStyles = {
      '.responsive-display-1': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-responsive-display-1-size)',
        'font-weight': 'var(--font-style-responsive-display-1-weight)',
        'line-height': 'var(--font-style-responsive-display-1-line-height)',
        'letter-spacing':
          'var(--font-style-responsive-display-1-letter-spacing)',
      },
      '.responsive-display-2': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-responsive-display-2-size)',
        'font-weight': 'var(--font-style-responsive-display-2-weight)',
        'line-height': 'var(--font-style-responsive-display-2-line-height)',
        'letter-spacing':
          'var(--font-style-responsive-display-2-letter-spacing)',
      },
      '.responsive-display-3': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-responsive-display-3-size)',
        'font-weight': 'var(--font-style-responsive-display-3-weight)',
        'line-height': 'var(--font-style-responsive-display-3-line-height)',
        'letter-spacing':
          'var(--font-style-responsive-display-3-letter-spacing)',
      },
      '.responsive-display-4': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-responsive-display-4-size)',
        'font-weight': 'var(--font-style-responsive-display-4-weight)',
        'line-height': 'var(--font-style-responsive-display-4-line-height)',
        'letter-spacing':
          'var(--font-style-responsive-display-4-letter-spacing)',
      },
    };

    const headingStyles = {
      '.heading-0': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-0-size)',
        'font-weight': 'var(--font-style-heading-0-weight-medium)',
        'line-height': 'var(--font-style-heading-0-line-height)',
        'letter-spacing': 'var(--font-style-heading-0-letter-spacing)',
      },
      '.heading-0-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-0-size)',
        'font-weight': 'var(--font-style-heading-0-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-0-line-height)',
        'letter-spacing': 'var(--font-style-heading-0-letter-spacing)',
      },
      '.heading-1': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-1-size)',
        'font-weight': 'var(--font-style-heading-1-weight-medium)',
        'line-height': 'var(--font-style-heading-1-line-height)',
        'letter-spacing': 'var(--font-style-heading-1-letter-spacing)',
      },
      '.heading-1-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-1-size)',
        'font-weight': 'var(--font-style-heading-1-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-1-line-height)',
        'letter-spacing': 'var(--font-style-heading-1-letter-spacing)',
      },
      '.heading-2': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-2-size)',
        'font-weight': 'var(--font-style-heading-2-weight-medium)',
        'line-height': 'var(--font-style-heading-2-line-height)',
        'letter-spacing': 'var(--font-style-heading-2-letter-spacing)',
      },
      '.heading-2-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-2-size)',
        'font-weight': 'var(--font-style-heading-2-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-2-line-height)',
        'letter-spacing': 'var(--font-style-heading-2-letter-spacing)',
      },
      '.heading-3': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-3-size)',
        'font-weight': 'var(--font-style-heading-3-weight-medium)',
        'line-height': 'var(--font-style-heading-3-line-height)',
        'letter-spacing': 'var(--font-style-heading-3-letter-spacing)',
      },
      '.heading-3-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-3-size)',
        'font-weight': 'var(--font-style-heading-3-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-3-line-height)',
        'letter-spacing': 'var(--font-style-heading-3-letter-spacing)',
      },
      '.heading-4': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-4-size)',
        'font-weight': 'var(--font-style-heading-4-weight-medium)',
        'line-height': 'var(--font-style-heading-4-line-height)',
        'letter-spacing': 'var(--font-style-heading-4-letter-spacing)',
      },
      '.heading-4-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-4-size)',
        'font-weight': 'var(--font-style-heading-4-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-4-line-height)',
        'letter-spacing': 'var(--font-style-heading-4-letter-spacing)',
      },
    };

    const bodyStyles = {
      '.body-1': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-1-size)',
        'font-weight': 'var(--font-style-body-1-weight-medium)',
        'line-height': 'var(--font-style-body-1-line-height)',
        'letter-spacing': 'var(--font-style-body-1-letter-spacing)',
      },
      '.body-1-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-1-size)',
        'font-weight': 'var(--font-style-body-1-weight-semi-bold)',
        'line-height': 'var(--font-style-body-1-line-height)',
        'letter-spacing': 'var(--font-style-body-1-letter-spacing)',
      },
      '.body-2': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-2-size)',
        'font-weight': 'var(--font-style-body-2-weight-medium)',
        'line-height': 'var(--font-style-body-2-line-height)',
        'letter-spacing': 'var(--font-style-body-2-letter-spacing)',
      },
      '.body-2-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-2-size)',
        'font-weight': 'var(--font-style-body-2-weight-semi-bold)',
        'line-height': 'var(--font-style-body-2-line-height)',
        'letter-spacing': 'var(--font-style-body-2-letter-spacing)',
      },
      '.body-3': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-3-size)',
        'font-weight': 'var(--font-style-body-3-weight-medium)',
        'line-height': 'var(--font-style-body-3-line-height)',
        'letter-spacing': 'var(--font-style-body-3-letter-spacing)',
      },
      '.body-3-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-3-size)',
        'font-weight': 'var(--font-style-body-3-weight-semi-bold)',
        'line-height': 'var(--font-style-body-3-line-height)',
        'letter-spacing': 'var(--font-style-body-3-letter-spacing)',
      },
      '.body-4': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-4-size)',
        'font-weight': 'var(--font-style-body-4-weight-medium)',
        'line-height': 'var(--font-style-body-4-line-height)',
        'letter-spacing': 'var(--font-style-body-4-letter-spacing)',
      },
      '.body-4-semi-bold': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-4-size)',
        'font-weight': 'var(--font-style-body-4-weight-semi-bold)',
        'line-height': 'var(--font-style-body-4-line-height)',
        'letter-spacing': 'var(--font-style-body-4-letter-spacing)',
      },
    };

    addUtilities(displayStyles);
    addUtilities(headingStyles);
    addUtilities(bodyStyles);
  });
}

function cryptoGradientStyles(crypto: string) {
  return {
    [`.bg-gradient-${crypto}`]: {
      'background-image': `linear-gradient(161deg, var(--color-crypto-${crypto}) 0%, var(--color-crypto-${crypto}-0) 100%)`,
    },
  };
}

function extractCryptoNames(
  brandTheme: Record<string, Record<string, string>>,
): string[] {
  const cryptoNames = new Set<string>();

  for (const themeKey in brandTheme) {
    if (
      typeof brandTheme[themeKey] === 'object' &&
      brandTheme[themeKey] !== null
    ) {
      for (const key in brandTheme[themeKey]) {
        if (key.startsWith('--color-crypto-') && !key.endsWith('-0')) {
          const cryptoName = key.substring('--color-crypto-'.length);
          cryptoNames.add(cryptoName);
        }
      }
    }
  }

  return Array.from(cryptoNames).sort();
}

export function createGradientPlugin(
  brandTheme?: Record<string, Record<string, string>>,
) {
  return plugin(function ({ addUtilities }) {
    const gradientStyles = {
      '.bg-gradient-top': {
        'background-image':
          'linear-gradient(180deg, var(--background-gradient-80) 0%, var(--background-gradient-70) 60%, var(--background-gradient-0) 100%)',
      },
      '.bg-gradient-bottom': {
        'background-image':
          'linear-gradient(180deg, var(--background-gradient-0) 0%, var(--background-gradient-70) 40%, var(--background-gradient-80) 100%)',
      },
      '.bg-gradient-error': {
        background:
          'radial-gradient(43.56% 33.06% at 50.47% 0.14%, var(--background-error-strong) 0%, var(--background-error-transparent) 100%)',
        opacity: '0.3',
      },
      '.bg-gradient-success': {
        background:
          'radial-gradient(43.56% 33.06% at 50.47% 0.14%, var(--background-success-strong) 0%, var(--background-success-transparent) 100%)',
        opacity: '0.3',
      },
      '.bg-gradient-muted': {
        background:
          'radial-gradient(43.56% 33.06% at 50.47% 0.14%, var(--background-muted-strong) 0%, var(--background-muted-transparent) 100%)',
        opacity: '0.3',
      },
    };

    if (brandTheme) {
      const cryptoNames = extractCryptoNames(brandTheme);
      cryptoNames.forEach((cryptoName) => {
        Object.assign(gradientStyles, cryptoGradientStyles(cryptoName));
      });
    }

    addUtilities(gradientStyles);
  });
}

export function createDropShadowPlugin() {
  return plugin(function ({ addUtilities }) {
    const dropShadowStyles = {
      '.drop-shadow-sm': {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-md': {
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-lg': {
        boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-xl': {
        boxShadow: '0px 6px 24px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-2xl': {
        boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.16)',
      },
    };

    addUtilities(dropShadowStyles);
  });
}
