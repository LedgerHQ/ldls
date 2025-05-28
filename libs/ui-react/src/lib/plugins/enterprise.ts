
import plugin from 'tailwindcss/plugin';
import  { enterpriseTheme }  from '@ldls/design-tokens';

// Helper function to extract crypto colors
const getCryptoColors = (themeObject: Record<string, any>, prefix: string) => {
  const cryptoColors: Record<string, string> = {};
  // Check one level deep for keys like ':root' or '.dark'
  for (const themeKey in themeObject) {
    if (typeof themeObject[themeKey] === 'object' && themeObject[themeKey] !== null) {
      for (const key in themeObject[themeKey]) {
        if (key.startsWith(prefix)) {
          const utilityName = key.substring(prefix.length).toLowerCase();
          cryptoColors[utilityName] = `var(${key})`;
        }
      }
    }
  }
  return cryptoColors;
};

const cryptoTextColors = getCryptoColors(enterpriseTheme, '--color-crypto');
const cryptoBackgroundColors = getCryptoColors(enterpriseTheme, '--color-crypto');

console.log('enterpriseTheme:', enterpriseTheme);
// console.log('DEBUG cryptoBackgroundColors:', cryptoBackgroundColors);

export const customPlugin = plugin(
  function ({ addBase }) {

    addBase({
      ...(enterpriseTheme || {}) 
    });
  },
  {
    theme: {
        backgroundColor: {
          base: 'var(--background-base)',
          'base-hover': 'var(--background-base-hover)',
          'base-pressed': 'var(--background-base-pressed)',
          'base-active': 'var(--background-active)',
          'base-disabled': 'var(--background-disabled)',
          accent: 'var(--background-accent)',
          'accent-hover': 'var(--background-accent-hover)',
          'accent-pressed': 'var(--background-accent-pressed)',
          canvas: 'var(--background-canvas)',
          'canvas-sheet': 'var(--background-canvas-sheet)',
          black: 'var(--background-black)',
          white: 'var(--background-white)',
          error: 'var(--background-error)',
          'error-plain': 'var(--background-error-plain)',
          warning: 'var(--background-warning)',
          'warning-plain': 'var(--background-warning-plain)',
          success: 'var(--background-success)',
          'success-plain': 'var(--background-success-plain)',
          transparent: 'var(--background-transparent)',
          'transparent-hover': 'var(--background-transparent-hover)',
          'transparent-pressed': 'var(--background-transparent-pressed)',
          'transparent-on-muted': 'var(--background-transparent-on-muted)',
          muted: 'var(--background-muted)',
          'muted-hover': 'var(--background-muted-hover)',
          'muted-pressed': 'var(--background-muted-pressed)',
          'transparent-muted': 'var(--background-transparent-muted)',
          'transparent-muted-hover': 'var(--background-transparent-muted-hover)',
          'transparent-muted-pressed': 'var(--background-transparent-muted-pressed)',
          'transparent-muted-disabled': 'var(--background-transparent-muted-disabled)',
          'muted-dark': 'var(--background-muted-dark)',
          'muted-dark-hover': 'var(--background-muted-dark-hover)',
          'muted-dark-pressed': 'var(--background-muted-dark-pressed)',
          'active-hover': 'var(--background-active-hover)',
          'active-pressed': 'var(--background-active-pressed)',
          'active-transparent': 'var(--background-active-transparent)',
          'error-transparent': 'var(--background-error-transparent)',
          'success-transparent': 'var(--background-success-transparent)',
          ...cryptoBackgroundColors, // Add crypto background colors
        },
        textColor: {
          base: 'var(--text-base)',
          'base-hover': 'var(--text-base-hover)',
          'base-pressed': 'var(--text-base-pressed)',
          'on-accent': 'var(--text-on-accent)',
          active: 'var(--text-active)',
          muted: 'var(--text-muted)',
          white: 'var(--text-white)',
          black: 'var(--text-black)',
          error: 'var(--text-error)',
          warning: 'var(--text-warning)',
          success: 'var(--text-success)',
          disabled: 'var(--text-disabled)',
          'muted-light': 'var(--text-muted-light)',
          ...cryptoTextColors, // Add crypto text colors
        },
        borderColor: {
          base: 'var(--border-base)',
          'base-hover': 'var(--border-base-hover)',
          'base-pressed': 'var(--border-base-pressed)',
          focus: 'var(--border-focus)',
          active: 'var(--border-active)',
          white: 'var(--border-white)',
          black: 'var(--border-black)',
          error: 'var(--border-error)',
          'error-hover': 'var(--border-error-hover)',
          'error-pressed': 'var(--border-error-pressed)',
          warning: 'var(--border-warning)',
          success: 'var(--border-success)',
          disabled: 'var(--border-disabled)',
          'muted-light': 'var(--border-muted-light)',
          'muted-light-hover': 'var(--border-muted-light-hover)',
          'muted-light-pressed': 'var(--border-muted-light-pressed)',
          muted: 'var(--border-muted)',
          'muted-hover': 'var(--border-muted-hover)',
          'active-hover': 'var(--border-active-hover)',
          'active-pressed': 'var(--border-active-pressed)',
        },
      },
    },
);
