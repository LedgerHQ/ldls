import { primitiveLayoutTokens } from '../primitives/primitives.others';
import { primitiveShadowTokens } from '../primitives/primitives.shadows';
import { ThemeCoreTokens } from '../types';
import { typographyTokens } from '../typographies';
import { websitesDarkColorTokens } from './theme.dark';
import { websitesLightColorTokens } from './theme.light';

export const websitesCoreTokens = {
  ...primitiveLayoutTokens,
  shadows: primitiveShadowTokens,
  typographies: typographyTokens,
} satisfies ThemeCoreTokens;

export const websitesDarkTheme = {
  ...websitesCoreTokens,
  colors: websitesDarkColorTokens,
};

export const websitesLightTheme = {
  ...websitesCoreTokens,
  colors: websitesLightColorTokens,
};
