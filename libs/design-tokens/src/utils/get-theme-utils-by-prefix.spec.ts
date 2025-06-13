import { describe, it, expect } from 'vitest';
import { getThemeUtilsByPrefix } from './get-theme-utils-by-prefix.js';

describe('getThemeUtilsByPrefix', () => {
  it('should extract utilities with matching prefix from theme object', () => {
    const realWorldTheme = {
      ':root': {
        '--color-background-canvas': 'var(--color-light-grey-050)',
        '--color-background-white': 'var(--color-light-constant-050)',
        '--color-background-base': 'var(--color-light-grey-050)',
        '--color-text-base': 'var(--color-light-grey-950)',
        '--color-text-muted': 'var(--color-light-grey-700)',
        '--spacing-xs': '4px',
        '--spacing-s': '8px',
        '--spacing-m': '16px',
      },
    };

    const backgroundColors = getThemeUtilsByPrefix(
      realWorldTheme,
      '--color-background-'
    );
    const textColors = getThemeUtilsByPrefix(realWorldTheme, '--color-text-');
    const spacing = getThemeUtilsByPrefix(realWorldTheme, '--spacing-');

    expect(backgroundColors).toEqual({
      canvas: 'var(--color-background-canvas)',
      white: 'var(--color-background-white)',
      base: 'var(--color-background-base)',
    });

    expect(textColors).toEqual({
      base: 'var(--color-text-base)',
      muted: 'var(--color-text-muted)',
    });

    expect(spacing).toEqual({
      xs: 'var(--spacing-xs)',
      s: 'var(--spacing-s)',
      m: 'var(--spacing-m)',
    });
  });
});
