import { describe, expect, it } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import type { BoxShadowValue } from 'react-native';
import { createStylesheetTheme } from '../Provider/createStylesheetTheme';
import { resolveViewStyle, resolveTextStyle } from './resolveStyle';

/**
 * Use actual theme from design-core for type-safe testing
 */
const mockTheme = createStylesheetTheme(ledgerLiveThemes.dark);
const lightTheme = createStylesheetTheme(ledgerLiveThemes.light);

describe('resolve-style', () => {
  describe('resolveViewStyle', () => {
    describe('Spacing props', () => {
      it('should resolve spacing tokens to pixel values', () => {
        const result = resolveViewStyle(mockTheme, {
          padding: 's16',
          marginTop: 's8',
          gap: 's4',
        });

        expect(result.padding).toBe(16);
        expect(result.marginTop).toBe(8);
        expect(result.gap).toBe(4);
      });

      it('should handle all spacing props', () => {
        const result = resolveViewStyle(mockTheme, {
          padding: 's8',
          paddingTop: 's4',
          paddingBottom: 's4',
          paddingLeft: 's16',
          paddingRight: 's16',
          paddingHorizontal: 's24',
          paddingVertical: 's32',
          margin: 's8',
          marginTop: 's4',
          marginBottom: 's4',
          marginLeft: 's16',
          marginRight: 's16',
          marginHorizontal: 's24',
          marginVertical: 's32',
          gap: 's8',
          rowGap: 's4',
          columnGap: 's16',
        });

        expect(result.padding).toBe(8);
        expect(result.paddingTop).toBe(4);
        expect(result.paddingBottom).toBe(4);
        expect(result.paddingLeft).toBe(16);
        expect(result.paddingRight).toBe(16);
        expect(result.paddingHorizontal).toBe(24);
        expect(result.paddingVertical).toBe(32);
        expect(result.margin).toBe(8);
        expect(result.marginTop).toBe(4);
        expect(result.marginBottom).toBe(4);
        expect(result.marginLeft).toBe(16);
        expect(result.marginRight).toBe(16);
        expect(result.marginHorizontal).toBe(24);
        expect(result.marginVertical).toBe(32);
        expect(result.gap).toBe(8);
        expect(result.rowGap).toBe(4);
        expect(result.columnGap).toBe(16);
      });

      it('should handle RTL spacing props', () => {
        const result = resolveViewStyle(mockTheme, {
          paddingStart: 's8',
          paddingEnd: 's16',
          marginStart: 's4',
          marginEnd: 's24',
        });

        expect(result.paddingStart).toBe(8);
        expect(result.paddingEnd).toBe(16);
        expect(result.marginStart).toBe(4);
        expect(result.marginEnd).toBe(24);
      });
    });

    describe('Size props', () => {
      it('should resolve size tokens to pixel values', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 's192',
          height: 's96',
        });

        expect(result.width).toBe(192);
        expect(result.height).toBe(96);
      });

      it('should handle all size props', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 's208',
          height: 's96',
          minWidth: 's48',
          minHeight: 's24',
          maxWidth: 's400',
          maxHeight: 's192',
        });

        expect(result.width).toBe(208);
        expect(result.height).toBe(96);
        expect(result.minWidth).toBe(48);
        expect(result.minHeight).toBe(24);
        expect(result.maxWidth).toBe(400);
        expect(result.maxHeight).toBe(192);
      });

      it('should resolve full size token to 100%', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 'full',
        });

        expect(result.width).toBe('100%');
      });

      it('should handle full size for all size props', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 'full',
          height: 'full',
          minWidth: 'full',
          minHeight: 'full',
          maxWidth: 'full',
          maxHeight: 'full',
        });

        expect(result.width).toBe('100%');
        expect(result.height).toBe('100%');
        expect(result.minWidth).toBe('100%');
        expect(result.minHeight).toBe('100%');
        expect(result.maxWidth).toBe('100%');
        expect(result.maxHeight).toBe('100%');
      });

      it('should handle mix of full and numeric size tokens', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 'full',
          height: 's96',
          minWidth: 's48',
          maxWidth: 'full',
        });

        expect(result.width).toBe('100%');
        expect(result.height).toBe(96);
        expect(result.minWidth).toBe(48);
        expect(result.maxWidth).toBe('100%');
      });
    });

    describe('Background color props', () => {
      it('should resolve backgroundColor token to color value', () => {
        const result = resolveViewStyle(mockTheme, {
          backgroundColor: 'surface',
        });

        expect(result.backgroundColor).toBe(mockTheme.colors.bg.surface);
      });

      it('should resolve different background color tokens', () => {
        expect(
          resolveViewStyle(mockTheme, { backgroundColor: 'base' })
            .backgroundColor,
        ).toBe(mockTheme.colors.bg.base);
        expect(
          resolveViewStyle(mockTheme, { backgroundColor: 'accent' })
            .backgroundColor,
        ).toBe(mockTheme.colors.bg.accent);
        expect(
          resolveViewStyle(mockTheme, { backgroundColor: 'error' })
            .backgroundColor,
        ).toBe(mockTheme.colors.bg.error);
      });
    });

    describe('Border color props', () => {
      it('should resolve borderColor token to color value', () => {
        const result = resolveViewStyle(mockTheme, {
          borderColor: 'muted',
        });

        expect(result.borderColor).toBe(mockTheme.colors.border.muted);
      });

      it('should handle all border color props', () => {
        const result = resolveViewStyle(mockTheme, {
          borderColor: 'base',
          borderTopColor: 'muted',
          borderBottomColor: 'active',
          borderLeftColor: 'error',
          borderRightColor: 'muted',
        });

        expect(result.borderColor).toBe(mockTheme.colors.border.base);
        expect(result.borderTopColor).toBe(mockTheme.colors.border.muted);
        expect(result.borderBottomColor).toBe(mockTheme.colors.border.active);
        expect(result.borderLeftColor).toBe(mockTheme.colors.border.error);
        expect(result.borderRightColor).toBe(mockTheme.colors.border.muted);
      });

      it('should handle RTL border color props', () => {
        const result = resolveViewStyle(mockTheme, {
          borderStartColor: 'base',
          borderEndColor: 'muted',
        });

        expect(result.borderStartColor).toBe(mockTheme.colors.border.base);
        expect(result.borderEndColor).toBe(mockTheme.colors.border.muted);
      });
    });

    describe('Border radius props', () => {
      it('should resolve borderRadius token to pixel value', () => {
        const result = resolveViewStyle(mockTheme, {
          borderRadius: 'md',
        });

        expect(result.borderRadius).toBe(12);
      });

      it('should handle all border radius props', () => {
        const result = resolveViewStyle(mockTheme, {
          borderRadius: 'lg',
          borderTopLeftRadius: 'sm',
          borderTopRightRadius: 'md',
          borderBottomLeftRadius: 'xs',
          borderBottomRightRadius: 'xl',
        });

        expect(result.borderRadius).toBe(16);
        expect(result.borderTopLeftRadius).toBe(8);
        expect(result.borderTopRightRadius).toBe(12);
        expect(result.borderBottomLeftRadius).toBe(4);
        expect(result.borderBottomRightRadius).toBe(24);
      });
    });

    describe('Shadow props', () => {
      it('should resolve boxShadow token to boxShadow array', () => {
        const result = resolveViewStyle(mockTheme, {
          boxShadow: 'sm',
        });

        expect(result.boxShadow).toEqual(
          mockTheme.shadows.sm.map((def) => ({
            offsetX: def.offsetX,
            offsetY: def.offsetY,
            blurRadius: def.blurRadius,
            spreadDistance: def.spreadDistance,
            color: def.color,
          })),
        );
      });

      it('should handle different shadow tokens', () => {
        const lgShadow = resolveViewStyle(mockTheme, { boxShadow: 'lg' });
        const lgBoxShadow = lgShadow.boxShadow as BoxShadowValue[];
        expect(lgBoxShadow).toHaveLength(mockTheme.shadows.lg.length);
        expect(lgBoxShadow[0].blurRadius).toBe(
          mockTheme.shadows.lg[0].blurRadius,
        );

        const xlShadow = resolveViewStyle(mockTheme, { boxShadow: 'xl' });
        const xlBoxShadow = xlShadow.boxShadow as BoxShadowValue[];
        expect(xlBoxShadow).toHaveLength(mockTheme.shadows.xl.length);
        expect(xlBoxShadow[0].blurRadius).toBe(
          mockTheme.shadows.xl[0].blurRadius,
        );
      });
    });

    describe('Passthrough props', () => {
      it('should pass through flex props unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          alignContent: 'flex-start',
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: 'auto',
        });

        expect(result.flex).toBe(1);
        expect(result.flexDirection).toBe('row');
        expect(result.flexWrap).toBe('wrap');
        expect(result.justifyContent).toBe('center');
        expect(result.alignItems).toBe('center');
        expect(result.alignSelf).toBe('stretch');
        expect(result.alignContent).toBe('flex-start');
        expect(result.flexGrow).toBe(1);
        expect(result.flexShrink).toBe(0);
        expect(result.flexBasis).toBe('auto');
      });

      it('should pass through position props unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          position: 'absolute',
          top: 10,
          bottom: 20,
          left: 30,
          right: 40,
          zIndex: 100,
        });

        expect(result.position).toBe('absolute');
        expect(result.top).toBe(10);
        expect(result.bottom).toBe(20);
        expect(result.left).toBe(30);
        expect(result.right).toBe(40);
        expect(result.zIndex).toBe(100);
      });

      it('should pass through RTL position props unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          position: 'absolute',
          start: 10,
          end: 20,
        });

        expect(result.position).toBe('absolute');
        expect(result.start).toBe(10);
        expect(result.end).toBe(20);
      });

      it('should pass through aspectRatio unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          aspectRatio: 16 / 9,
        });

        expect(result.aspectRatio).toBeCloseTo(16 / 9);
      });

      it('should pass through transform unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          transform: [{ rotate: '45deg' }, { scale: 1.5 }],
        });

        expect(result.transform).toEqual([{ rotate: '45deg' }, { scale: 1.5 }]);
      });

      it('should pass through other props unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          overflow: 'hidden',
          display: 'flex',
          opacity: 0.5,
          borderWidth: 's2',
          borderStyle: 'solid',
        });

        expect(result.overflow).toBe('hidden');
        expect(result.display).toBe('flex');
        expect(result.opacity).toBe(0.5);
        expect(result.borderWidth).toBe(2);
        expect(result.borderStyle).toBe('solid');
      });
    });

    describe('Combined props', () => {
      it('should resolve a complex style object', () => {
        const result = resolveViewStyle(mockTheme, {
          width: 's192',
          padding: 's16',
          marginTop: 's8',
          backgroundColor: 'surface',
          borderRadius: 'md',
          borderColor: 'muted',
          borderWidth: 's2',
          boxShadow: 'sm',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        });

        expect(result.width).toBe(192);
        expect(result.padding).toBe(16);
        expect(result.marginTop).toBe(8);
        expect(result.backgroundColor).toBe(mockTheme.colors.bg.surface);
        expect(result.borderRadius).toBe(12);
        expect(result.borderColor).toBe(mockTheme.colors.border.muted);
        expect(result.borderWidth).toBe(2);
        expect(result.boxShadow).toBeDefined();
        expect((result.boxShadow as BoxShadowValue[])[0].color).toBe(
          mockTheme.shadows.sm[0].color,
        );
        expect(result.flex).toBe(1);
        expect(result.flexDirection).toBe('column');
        expect(result.alignItems).toBe('center');
      });
    });

    describe('Empty and undefined values', () => {
      it('should return empty object for empty style', () => {
        const result = resolveViewStyle(mockTheme, {});
        expect(result).toEqual({});
      });

      it('should not include undefined values in result', () => {
        const result = resolveViewStyle(mockTheme, {
          padding: 's16',
        });

        expect(result).toEqual({ padding: 16 });
        expect(Object.keys(result)).toHaveLength(1);
      });
    });

    describe('Theme consistency', () => {
      it('should resolve same tokens differently for different themes', () => {
        const darkResult = resolveViewStyle(mockTheme, {
          backgroundColor: 'base',
        });
        const lightResult = resolveViewStyle(lightTheme, {
          backgroundColor: 'base',
        });

        // Both should resolve, values may differ between themes
        expect(darkResult.backgroundColor).toBe(mockTheme.colors.bg.base);
        expect(lightResult.backgroundColor).toBe(lightTheme.colors.bg.base);
      });
    });
  });

  describe('resolveTextStyle', () => {
    it('should resolve text color token', () => {
      const result = resolveTextStyle(mockTheme, {
        color: 'muted',
      });

      expect(result.color).toBe(mockTheme.colors.text.muted);
    });

    it('should resolve typography typo', () => {
      const result = resolveTextStyle(mockTheme, { typo: 'body1' });

      expect(result.fontSize).toBe(mockTheme.typographies.body1.fontSize);
      expect(result.fontWeight).toBe(mockTheme.typographies.body1.fontWeight);
      expect(result.lineHeight).toBe(mockTheme.typographies.body1.lineHeight);
      expect(result.letterSpacing).toBe(
        mockTheme.typographies.body1.letterSpacing,
      );
    });

    it('should combine view style props with text-specific props', () => {
      const result = resolveTextStyle(mockTheme, {
        color: 'active',
        marginTop: 's8',
        padding: 's4',
        typo: 'heading1',
      });

      expect(result.color).toBe(mockTheme.colors.text.active);
      expect(result.marginTop).toBe(8);
      expect(result.padding).toBe(4);
      expect(result.fontSize).toBe(mockTheme.typographies.heading1.fontSize);
      expect(result.fontWeight).toBe(
        mockTheme.typographies.heading1.fontWeight,
      );
      expect(result.lineHeight).toBe(
        mockTheme.typographies.heading1.lineHeight,
      );
    });

    it('should handle text without typo', () => {
      const result = resolveTextStyle(mockTheme, {
        color: 'base',
        padding: 's8',
      });

      expect(result.color).toBe(mockTheme.colors.text.base);
      expect(result.padding).toBe(8);
      expect(result.fontSize).toBeUndefined();
    });

    it('should pass through textAlign unchanged', () => {
      const result = resolveTextStyle(mockTheme, {
        textAlign: 'center',
      });

      expect(result.textAlign).toBe('center');
    });

    it('should pass through textTransform unchanged', () => {
      const result = resolveTextStyle(mockTheme, {
        textTransform: 'uppercase',
      });

      expect(result.textTransform).toBe('uppercase');
    });

    it('should pass through textDecorationLine unchanged', () => {
      const result = resolveTextStyle(mockTheme, {
        textDecorationLine: 'underline',
      });

      expect(result.textDecorationLine).toBe('underline');
    });

    it('should combine all text style props', () => {
      const result = resolveTextStyle(mockTheme, {
        color: 'active',
        typo: 'body1',
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
      });

      expect(result.color).toBe(mockTheme.colors.text.active);
      expect(result.fontSize).toBe(mockTheme.typographies.body1.fontSize);
      expect(result.textAlign).toBe('center');
      expect(result.textTransform).toBe('uppercase');
      expect(result.textDecorationLine).toBe('underline');
    });
  });
});
