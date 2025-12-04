import { describe, expect, it } from '@jest/globals';
import { ledgerLiveCoreTokens } from '@ledgerhq/ldls-design-core';
import { create } from './create';

// Custom theme for testing - simpler structure than full LumenStyleSheetTheme

const customTheme = {
  colors: {
    bg: '#FFFFFF',
    bgMuted: '#F5F5F5',
    bgAccent: '#007AFF',
    text: '#000000',
    textMuted: '#666666',
    border: '#E0E0E0',
  },
  shadows: {
    sm: ledgerLiveCoreTokens.shadows.sm,
  },
  spacing: {
    s8: 8,
    s16: 16,
    s24: 24,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

describe('create', () => {
  describe('Direct stylesheet objects', () => {
    it('should handle static style objects', () => {
      const styles = create(customTheme, {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });

      expect(styles).toEqual({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    });

    it('should handle dynamic style functions in plain object', () => {
      const styles = create(customTheme, {
        container: (align: 'center' | 'flex-start') => ({
          flex: 1,
          justifyContent: 'center',
          alignItems: align ? 'center' : 'flex-start',
        }),
      });

      expect(styles.container('center')).toEqual({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      });
    });
  });

  describe('stylesheet with theme object', () => {
    it('should handle static style objects', () => {
      const styles = create(customTheme, () => ({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }));

      expect(styles).toEqual({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    });

    it('should handle theme-based static styles', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: {
          backgroundColor: theme.colors.bg,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }));

      expect(styles).toEqual({
        container: {
          backgroundColor: customTheme.colors.bg,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    });

    it('should handle box shadow styles', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: {
          boxShadow: theme.shadows.sm,
        },
      }));

      expect(styles).toEqual({
        container: {
          boxShadow: customTheme.shadows.sm,
        },
      });
    });

    it('should handle multiple static style objects', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: {
          backgroundColor: theme.colors.bg,
          flex: 1,
        },
        textContainer: {
          flex: 1,
          marginTop: theme.spacings.s16,
        },
        button: {
          backgroundColor: theme.colors.bgAccent,
          padding: theme.spacings.s8,
        },
      }));

      expect(styles).toEqual({
        container: {
          backgroundColor: customTheme.colors.bg,
          flex: 1,
        },
        textContainer: {
          flex: 1,
          marginTop: customTheme.spacings.s16,
        },
        button: {
          backgroundColor: customTheme.colors.bgAccent,
          padding: customTheme.spacings.s8,
        },
      });
    });
  });

  describe('Dynamic function styles', () => {
    it('should handle dynamic function with single parameter', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: (maxWidth: number) => ({
          backgroundColor: theme.colors.bg,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth,
        }),
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((styles.container as any)(100)).toEqual({
        backgroundColor: customTheme.colors.bg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 100,
      });
    });

    it('should handle dynamic function with multiple parameters', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: (maxWidth: number, isOdd: boolean) => ({
          backgroundColor: theme.colors.bg,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth,
          borderBottomWidth: isOdd ? 1 : undefined,
        }),
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((styles.container as any)(100, true)).toEqual({
        backgroundColor: customTheme.colors.bg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 100,
        borderBottomWidth: 1,
      });
    });

    it('should handle dynamic function with conditional styling', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        container: (variant: 'primary' | 'secondary') => ({
          backgroundColor:
            variant === 'primary'
              ? theme.colors.bgAccent
              : theme.colors.bgMuted,
          flex: variant === 'primary' ? 1 : 2,
        }),
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((styles.container as any)('primary')).toEqual({
        backgroundColor: customTheme.colors.bgAccent,
        flex: 1,
      });
    });

    it('should handle mix of static and dynamic styles', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const styles = create(customTheme, (theme: any) => ({
        textContainer: {
          flex: 1,
          marginTop: theme.spacings.s16,
        },
        container: (maxWidth: number, isOdd: boolean) => ({
          backgroundColor: theme.colors.bg,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth,
          borderBottomWidth: isOdd ? 1 : undefined,
        }),
        staticBox: {
          padding: theme.spacings.s24,
          backgroundColor: theme.colors.bgAccent,
        },
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((styles.container as any)(100, true)).toEqual({
        backgroundColor: customTheme.colors.bg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 100,
        borderBottomWidth: 1,
      });

      expect(styles.textContainer).toEqual({
        flex: 1,
        marginTop: customTheme.spacings.s16,
      });

      expect(styles.staticBox).toEqual({
        padding: customTheme.spacings.s24,
        backgroundColor: customTheme.colors.bgAccent,
      });
    });
  });
});
