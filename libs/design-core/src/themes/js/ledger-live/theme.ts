import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeCoreTokens } from '../types';
import { typographyTokens } from '../typographies';

export const ledgerLiveCoreTokens = {
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeCoreTokens;

export { ledgerLiveDarkTheme } from './theme.dark';
export { ledgerLiveLightTheme } from './theme.light';
