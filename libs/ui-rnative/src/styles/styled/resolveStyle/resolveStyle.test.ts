import { describe, expect, it } from '@jest/globals';
import {
  ledgerLiveDarkTheme,
  ledgerLiveLightTheme,
} from '@ledgerhq/ldls-design-core';
import type { BoxShadowValue } from 'react-native';
import { adaptThemeForStylesheet } from '../../utils/adaptThemeForStylesheet';
import {
  resolveViewStyle,
  resolveTextStyle,
  extractLumenViewStyleProps,
  extractLumenTextStyleProps,
} from './resolveStyle';

/**
 * Use actual theme from design-core for type-safe testing
 */
const mockTheme = adaptThemeForStylesheet(ledgerLiveDarkTheme);
const lightTheme = adaptThemeForStylesheet(ledgerLiveLightTheme);

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

      it('should pass through other props unchanged', () => {
        const result = resolveViewStyle(mockTheme, {
          overflow: 'hidden',
          display: 'flex',
          opacity: 0.5,
          borderWidth: 2,
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
          borderWidth: 1,
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
        expect(result.borderWidth).toBe(1);
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

    it('should resolve typography variant', () => {
      const result = resolveTextStyle(mockTheme, { variant: 'body1' });

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
        variant: 'heading1',
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

    it('should handle text without variant', () => {
      const result = resolveTextStyle(mockTheme, {
        color: 'base',
        padding: 's8',
      });

      expect(result.color).toBe(mockTheme.colors.text.base);
      expect(result.padding).toBe(8);
      expect(result.fontSize).toBeUndefined();
    });
  });

  describe('extractLumenViewStyleProps', () => {
    it('should extract spacing props from mixed props', () => {
      const props = {
        padding: 's16',
        marginTop: 's8',
        customProp: 'test-value',
        callback: () => 'result',
      } as const;

      const { lumenStyle, rest } = extractLumenViewStyleProps(props);

      expect(lumenStyle.padding).toBe('s16');
      expect(lumenStyle.marginTop).toBe('s8');
      expect(rest).toEqual({
        customProp: 'test-value',
        callback: expect.any(Function),
      });
    });

    it('should extract all style props', () => {
      const props = {
        padding: 's16',
        width: 's192',
        backgroundColor: 'surface',
        borderColor: 'muted',
        borderRadius: 'md',
        boxShadow: 'sm',
        flex: 1,
        flexDirection: 'row',
        customProp: 'test',
      } as const;

      const { lumenStyle, rest } = extractLumenViewStyleProps(props);

      expect(lumenStyle).toEqual({
        padding: 's16',
        width: 's192',
        backgroundColor: 'surface',
        borderColor: 'muted',
        borderRadius: 'md',
        boxShadow: 'sm',
        flex: 1,
        flexDirection: 'row',
      });
      expect(rest).toEqual({ customProp: 'test' });
    });

    it('should handle empty props', () => {
      const { lumenStyle, rest } = extractLumenViewStyleProps({});

      expect(lumenStyle).toEqual({});
      expect(rest).toEqual({});
    });

    it('should handle props with no style props', () => {
      const props = {
        customProp: 'test',
        anotherProp: true,
        padding: undefined,
      };

      const { lumenStyle, rest } = extractLumenViewStyleProps(props);

      expect(lumenStyle).toEqual({});
      expect(rest).toEqual({
        customProp: 'test',
        anotherProp: true,
        padding: undefined,
      });
    });
  });

  describe('extractLumenTextStyleProps', () => {
    it('should extract color prop in addition to view style props', () => {
      const props = {
        color: 'muted',
        padding: 's8',
        customProp: 'test-text',
      } as const;

      const { lumenStyle, rest } = extractLumenTextStyleProps(props);

      expect(lumenStyle.color).toBe('muted');
      expect(lumenStyle.padding).toBe('s8');
      expect(rest).toEqual({ customProp: 'test-text' });
    });

    it('should extract variant prop', () => {
      const props = {
        variant: 'body1',
        color: 'muted',
        customProp: 'test',
      } as const;

      const { lumenStyle, rest } = extractLumenTextStyleProps(props);

      expect(lumenStyle.variant).toBe('body1');
      expect(lumenStyle.color).toBe('muted');
      expect(rest).toEqual({ customProp: 'test' });
    });

    it('should extract all text style props', () => {
      const props = {
        variant: 'heading1',
        color: 'active',
        padding: 's16',
        marginTop: 's8',
        backgroundColor: 'surface',
        customProp: 2,
      } as const;

      const { lumenStyle, rest } = extractLumenTextStyleProps(props);

      expect(lumenStyle).toEqual({
        variant: 'heading1',
        color: 'active',
        padding: 's16',
        marginTop: 's8',
        backgroundColor: 'surface',
      });
      expect(rest).toEqual({ customProp: 2 });
    });
  });
});
