import { ledgerLiveDarkTheme } from '../ledger-live/theme.dark';
import { ledgerLiveLightTheme } from '../ledger-live/theme.light';
import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeTokens } from '../types';
import { typographyTokens } from '../typographies';

export const ledgerLiveTheme = {
  colors: {
    light: ledgerLiveLightTheme,
    dark: ledgerLiveDarkTheme,
  },
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeTokens;
