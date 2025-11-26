import { primitiveTokens } from '../primitives';
import { TypographyBreakpoint } from '../types';

export const typographySmTokens = {
  responsiveDisplay: {
    '1': {
      size: primitiveTokens.fontSize['80'],
      weight: primitiveTokens.fontWeight.bold,
      lineHeight: primitiveTokens.fontLineHeight['80'],
      letterSpacing: primitiveTokens.fontLetterSpacing['80'],
    },
    '2': {
      size: primitiveTokens.fontSize['64'],
      weight: primitiveTokens.fontWeight.semiBold,
      lineHeight: primitiveTokens.fontLineHeight['64'],
      letterSpacing: primitiveTokens.fontLetterSpacing['64'],
    },
    '3': {
      size: primitiveTokens.fontSize['52'],
      weight: primitiveTokens.fontWeight.semiBold,
      lineHeight: primitiveTokens.fontLineHeight['52'],
      letterSpacing: primitiveTokens.fontLetterSpacing['52'],
    },
    '4': {
      size: primitiveTokens.fontSize['40'],
      weight: primitiveTokens.fontWeight.semiBold,
      lineHeight: primitiveTokens.fontLineHeight['40'],
      letterSpacing: primitiveTokens.fontLetterSpacing['40'],
    },
  },
  heading: {
    '0': {
      size: primitiveTokens.fontSize['48'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['48'],
      letterSpacing: primitiveTokens.fontLetterSpacing['48'],
    },
    '1': {
      size: primitiveTokens.fontSize['28'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['28'],
      letterSpacing: primitiveTokens.fontLetterSpacing['28'],
    },
    '2': {
      size: primitiveTokens.fontSize['24'],
      size2: primitiveTokens.fontSize['28'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['24'],
      letterSpacing: primitiveTokens.fontLetterSpacing['24'],
    },
    '3': {
      size: primitiveTokens.fontSize['20'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['20'],
      letterSpacing: primitiveTokens.fontLetterSpacing['20'],
    },
    '4': {
      size: primitiveTokens.fontSize['18'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['18'],
      letterSpacing: primitiveTokens.fontLetterSpacing['18'],
    },
  },
  body: {
    '1': {
      size: primitiveTokens.fontSize['16'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['16'],
      letterSpacing: primitiveTokens.fontLetterSpacing['16'],
    },
    '2': {
      size: primitiveTokens.fontSize['14'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['14'],
      letterSpacing: primitiveTokens.fontLetterSpacing['14'],
    },
    '3': {
      size: primitiveTokens.fontSize['12'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['12'],
      letterSpacing: primitiveTokens.fontLetterSpacing['12'],
    },
    '4': {
      size: primitiveTokens.fontSize['10'],
      weightSemiBold: primitiveTokens.fontWeight.semiBold,
      weightMedium: primitiveTokens.fontWeight.medium,
      lineHeight: primitiveTokens.fontLineHeight['10'],
      letterSpacing: primitiveTokens.fontLetterSpacing['10'],
    },
  },
  grid: {
    columnCount: 8,
    gutter: primitiveTokens.spacing['24'],
  },
} satisfies TypographyBreakpoint;
