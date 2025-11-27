import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeTokens } from '../types';
import { typographyTokens } from '../typographies';
import { enterpriseDarkTheme } from './theme.dark';
import { enterpriseLightTheme } from './theme.light';

export const enterpriseTheme = {
  colors: {
    light: enterpriseLightTheme,
    dark: enterpriseDarkTheme,
  },
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeTokens;
