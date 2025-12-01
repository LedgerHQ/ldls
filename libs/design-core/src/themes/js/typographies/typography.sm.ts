import { primitiveTypographyTokens } from '../primitives/primitive.typographies';
import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { TypographyBreakpoint } from '../types';

export const typographySmTokens = {
  /**
   * Responsive
   */
  responsiveDisplay1: {
    fontSize: primitiveTypographyTokens.fontSize['80'],
    fontWeight: primitiveTypographyTokens.fontWeight.bold,
    lineHeight: primitiveTypographyTokens.lineHeight['80'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['80'],
  },
  responsiveDisplay2: {
    fontSize: primitiveTypographyTokens.fontSize['64'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['64'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['64'],
  },
  responsiveDisplay3: {
    fontSize: primitiveTypographyTokens.fontSize['52'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['52'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['52'],
  },
  responsiveDisplay4: {
    fontSize: primitiveTypographyTokens.fontSize['40'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['40'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['40'],
  },
  heading0: {
    fontSize: primitiveTypographyTokens.fontSize['48'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['48'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['48'],
  },
  heading0SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['48'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['48'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['48'],
  },

  /**
   * Headings
   */
  heading1: {
    fontSize: primitiveTypographyTokens.fontSize['28'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['28'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['28'],
  },
  heading1SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['28'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['28'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['28'],
  },
  heading2: {
    fontSize: primitiveTypographyTokens.fontSize['24'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['24'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['24'],
  },
  heading2SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['24'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['24'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['24'],
  },
  heading3: {
    fontSize: primitiveTypographyTokens.fontSize['20'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['20'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['20'],
  },
  heading3SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['20'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['20'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['20'],
  },
  heading4: {
    fontSize: primitiveTypographyTokens.fontSize['18'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['18'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['18'],
  },
  heading4SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['18'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['18'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['18'],
  },

  /**
   * Body
   */
  body1: {
    fontSize: primitiveTypographyTokens.fontSize['16'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['16'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['16'],
  },
  body1SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['16'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['16'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['16'],
  },
  body2: {
    fontSize: primitiveTypographyTokens.fontSize['14'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['14'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['14'],
  },
  body2SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['14'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['14'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['14'],
  },
  body3: {
    fontSize: primitiveTypographyTokens.fontSize['12'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['12'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['12'],
  },
  body3SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['12'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['12'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['12'],
  },
  body4: {
    fontSize: primitiveTypographyTokens.fontSize['10'],
    fontWeight: primitiveTypographyTokens.fontWeight.medium,
    lineHeight: primitiveTypographyTokens.lineHeight['10'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['10'],
  },
  body4SemiBold: {
    fontSize: primitiveTypographyTokens.fontSize['10'],
    fontWeight: primitiveTypographyTokens.fontWeight.semiBold,
    lineHeight: primitiveTypographyTokens.lineHeight['10'],
    letterSpacing: primitiveTypographyTokens.letterSpacing['10'],
  },

  grid: {
    columnCount: 8,
    gutter: primitiveLayoutTokens.spacing.s24,
  },
} satisfies TypographyBreakpoint;
