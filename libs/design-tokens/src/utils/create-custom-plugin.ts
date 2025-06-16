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

export function createGradientPlugin() {
  return plugin(function ({ addUtilities }) {
    const gradientStyles = {
      '.gradient-top': {
        'background-image':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 100%)',
      },
      '.gradient-bottom': {
        'background-image':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.8) 100%)',
      },
      '.gradient-btc': {
        'background-image':
          'linear-gradient(161deg, #f7931a 0%, rgba(247, 147, 26, 0) 100%)',
      },
      '.gradient-usdt': {
        'background-image':
          'linear-gradient(161deg, #00a478 0%, rgba(0, 164, 120, 0) 100%)',
      },
      '.gradient-sol': {
        'background-image':
          'linear-gradient(161deg, #9945ff 0%, rgba(153, 69, 255, 0) 100%)',
      },
      '.gradient-eth': {
        'background-image':
          'linear-gradient(161deg, #454a75 0%, rgba(69, 74, 117, 0) 100%)',
      },
      '.gradient-trx': {
        'background-image':
          'linear-gradient(161deg, #ff060a 0%, rgba(255, 6, 10, 0) 100%)',
      },
      '.gradient-doge': {
        'background-image':
          'linear-gradient(161deg, #c3a634 0%, rgba(195, 166, 52, 0) 100%)',
      },
    };

    addUtilities(gradientStyles);
  });
}
