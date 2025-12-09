import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeCoreTokens } from '../types';
import { typographyTokens } from '../typographies';
import { enterpriseDarkColorTokens } from './theme.dark';
import { enterpriseLightColorTokens } from './theme.light';

export const enterpriseCoreTokens = {
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeCoreTokens;

export const enterpriseDarkTheme = {
  ...enterpriseCoreTokens,
  colors: enterpriseDarkColorTokens,
};

export const enterpriseLightTheme = {
  ...enterpriseCoreTokens,
  colors: enterpriseLightColorTokens,
};
