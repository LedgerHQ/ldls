import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeCoreTokens } from '../types';
import { typographyTokens } from '../typographies';
import { ledgerLiveDarkColorTokens } from './theme.dark';
import { ledgerLiveLightColorTokens } from './theme.light';

export const ledgerLiveCoreTokens = {
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeCoreTokens;

export const ledgerLiveDarkTheme = {
  ...ledgerLiveCoreTokens,
  colors: ledgerLiveDarkColorTokens,
};

export const ledgerLiveLightTheme = {
  ...ledgerLiveCoreTokens,
  colors: ledgerLiveLightColorTokens,
};
