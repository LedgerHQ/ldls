import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeTokens } from '../types';
import { typographyTokens } from '../typographies';
import { websitesDarkTheme } from './theme.dark';
import { websitesLightTheme } from './theme.light';

export const websiteTheme = {
  colors: {
    light: websitesLightTheme,
    dark: websitesDarkTheme,
  },
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeTokens;
