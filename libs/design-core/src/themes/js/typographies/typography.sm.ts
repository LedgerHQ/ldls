import { primitiveTypographyTokens } from '../primitives/primitive.typographies';
import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { TypographyBreakpoint } from '../types';

export const typographySmTokens = {
  responsiveDisplay: {
    '1': {
      size: primitiveTypographyTokens.fontSize['80'],
      weight: primitiveTypographyTokens.fontWeight.bold,
      lineHeight: primitiveTypographyTokens.fontLineHeight['80'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['80'],
    },
    '2': {
      size: primitiveTypographyTokens.fontSize['64'],
      weight: primitiveTypographyTokens.fontWeight.semiBold,
      lineHeight: primitiveTypographyTokens.fontLineHeight['64'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['64'],
    },
    '3': {
      size: primitiveTypographyTokens.fontSize['52'],
      weight: primitiveTypographyTokens.fontWeight.semiBold,
      lineHeight: primitiveTypographyTokens.fontLineHeight['52'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['52'],
    },
    '4': {
      size: primitiveTypographyTokens.fontSize['40'],
      weight: primitiveTypographyTokens.fontWeight.semiBold,
      lineHeight: primitiveTypographyTokens.fontLineHeight['40'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['40'],
    },
  },
  heading: {
    '0': {
      size: primitiveTypographyTokens.fontSize['48'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['48'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['48'],
    },
    '1': {
      size: primitiveTypographyTokens.fontSize['28'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['28'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['28'],
    },
    '2': {
      size: primitiveTypographyTokens.fontSize['24'],
      size2: primitiveTypographyTokens.fontSize['28'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['24'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['24'],
    },
    '3': {
      size: primitiveTypographyTokens.fontSize['20'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['20'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['20'],
    },
    '4': {
      size: primitiveTypographyTokens.fontSize['18'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['18'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['18'],
    },
  },
  body: {
    '1': {
      size: primitiveTypographyTokens.fontSize['16'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['16'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['16'],
    },
    '2': {
      size: primitiveTypographyTokens.fontSize['14'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['14'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['14'],
    },
    '3': {
      size: primitiveTypographyTokens.fontSize['12'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['12'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['12'],
    },
    '4': {
      size: primitiveTypographyTokens.fontSize['10'],
      weightSemiBold: primitiveTypographyTokens.fontWeight.semiBold,
      weightMedium: primitiveTypographyTokens.fontWeight.medium,
      lineHeight: primitiveTypographyTokens.fontLineHeight['10'],
      letterSpacing: primitiveTypographyTokens.fontLetterSpacing['10'],
    },
  },
  grid: {
    columnCount: 8,
    gutter: primitiveLayoutTokens.spacing['24'],
  },
} satisfies TypographyBreakpoint;
