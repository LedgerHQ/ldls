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

export function createTypographyPlugin() {
  return plugin(function ({ addUtilities }) {
    const displayStyles = {
      '.display-1': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-display-1-size)',
        'font-weight': 'var(--font-style-display-1-weight)',
        'line-height': 'var(--font-style-display-1-line-height)',
        'letter-spacing': 'var(--font-style-display-1-letter-spacing)',
      },
      '.display-2': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-display-2-size)',
        'font-weight': 'var(--font-style-display-2-weight)',
        'line-height': 'var(--font-style-display-2-line-height)',
        'letter-spacing': 'var(--font-style-display-2-letter-spacing)',
      },
      '.display-3': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-display-3-size)',
        'font-weight': 'var(--font-style-display-3-weight)',
        'line-height': 'var(--font-style-display-3-line-height)',
        'letter-spacing': 'var(--font-style-display-3-letter-spacing)',
      },
      '.display-4': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-display-4-size)',
        'font-weight': 'var(--font-style-display-4-weight)',
        'line-height': 'var(--font-style-display-4-line-height)',
        'letter-spacing': 'var(--font-style-display-4-letter-spacing)',
      },
    };

    const headingStyles = {
      '.heading-1': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-1-size)',
        'font-weight': 'var(--font-style-heading-1-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-1-line-height)',
        'letter-spacing': 'var(--font-style-heading-1-letter-spacing)',
      },
      '.heading-1-medium': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-1-size)',
        'font-weight': 'var(--font-style-heading-1-weight-medium)',
        'line-height': 'var(--font-style-heading-1-line-height)',
        'letter-spacing': 'var(--font-style-heading-1-letter-spacing)',
      },
      '.heading-2': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-2-size)',
        'font-weight': 'var(--font-style-heading-2-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-2-line-height)',
        'letter-spacing': 'var(--font-style-heading-2-letter-spacing)',
      },
      '.heading-2-medium': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-2-size)',
        'font-weight': 'var(--font-style-heading-2-weight-medium)',
        'line-height': 'var(--font-style-heading-2-line-height)',
        'letter-spacing': 'var(--font-style-heading-2-letter-spacing)',
      },
      '.heading-3': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-3-size)',
        'font-weight': 'var(--font-style-heading-3-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-3-line-height)',
        'letter-spacing': 'var(--font-style-heading-3-letter-spacing)',
      },
      '.heading-3-medium': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-3-size)',
        'font-weight': 'var(--font-style-heading-3-weight-medium)',
        'line-height': 'var(--font-style-heading-3-line-height)',
        'letter-spacing': 'var(--font-style-heading-3-letter-spacing)',
      },
      '.heading-4': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-4-size)',
        'font-weight': 'var(--font-style-heading-4-weight-semi-bold)',
        'line-height': 'var(--font-style-heading-4-line-height)',
        'letter-spacing': 'var(--font-style-heading-4-letter-spacing)',
      },
      '.heading-4-medium': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-heading-4-size)',
        'font-weight': 'var(--font-style-heading-4-weight-medium)',
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
      '.caption': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-3-size)',
        'font-weight': 'var(--font-style-body-3-weight-medium)',
        'line-height': 'var(--font-style-body-3-line-height)',
        'letter-spacing': 'var(--font-style-body-3-letter-spacing)',
      },
      '.small-caption': {
        'font-family': 'var(--font-family-font)',
        'font-size': 'var(--font-style-body-4-size)',
        'font-weight': 'var(--font-style-body-4-weight-medium)',
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
    [`.gradient-${crypto}`]: {
      'background-image': `linear-gradient(161deg, var(--color-crypto-${crypto}) 0%, var(--color-crypto-${crypto}-0) 100%)`,
    },
    [`.gradient-${crypto}-0`]: {
      'background-image': `linear-gradient(161deg, var(--color-crypto-${crypto}-0) 0%, var(--color-crypto-${crypto}-0) 100%)`,
    },
  };
}

function extractCryptoNames(
  brandTheme: Record<string, Record<string, string>>
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
  brandTheme?: Record<string, Record<string, string>>
) {
  return plugin(function ({ addUtilities }) {
    const gradientStyles = {
      '.gradient-top': {
        'background-image':
          'linear-gradient(180deg, var(--background-gradient-80) 0%, var(--background-gradient-70) 60%, var(--background-gradient-0) 100%)',
      },
      '.gradient-bottom': {
        'background-image':
          'linear-gradient(180deg, var(--background-gradient-0) 0%, var(--background-gradient-70) 40%, var(--background-gradient-80) 100%)',
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
      '.drop-shadow-4': {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-8': {
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-16': {
        boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-24': {
        boxShadow: '0px 6px 24px 0px rgba(0, 0, 0, 0.16)',
      },
      '.drop-shadow-32': {
        boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.16)',
      },
    };

    addUtilities(dropShadowStyles);
  });
}
