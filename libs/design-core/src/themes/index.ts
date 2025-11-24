import { tokens as enterpriseDarkThemeTokens } from './enterprise/theme.dark';
import { tokens as enterpriseLightThemeTokens } from './enterprise/theme.light';

import { tokens as ledgerLiveDarkThemeTokens } from './ledger-live/theme.dark';
import { tokens as ledgerLiveLightThemeTokens } from './ledger-live/theme.light';

import { tokens as primitivesTokens } from './primitives';
import { tokens as typographyLgTokens } from './typography.lg';
import { tokens as typographyMdTokens } from './typography.md';
import { tokens as typographySmTokens } from './typography.sm';
import { tokens as typographyXlTokens } from './typography.xl';
import { tokens as websitesDarkThemeTokens } from './websites/theme.dark';
import { tokens as websitesLightThemeTokens } from './websites/theme.light';

export const primitivesTheme = {
  ':root': {
    ...primitivesTokens[':root'],
    ...typographySmTokens[':root'],
    ...typographyLgTokens,
    ...typographyMdTokens,
    ...typographyXlTokens,
  },
};

export const enterpriseTheme = {
  ...enterpriseLightThemeTokens,
  ...enterpriseDarkThemeTokens,
};

export const ledgerLiveTheme = {
  ...ledgerLiveLightThemeTokens,
  ...ledgerLiveDarkThemeTokens,
};

export const websitesTheme = {
  ...websitesLightThemeTokens,
  ...websitesDarkThemeTokens,
};

export const allBrandsTheme = {
  '.ledger-live': ledgerLiveLightThemeTokens[':root'],
  '.ledger-live.dark': ledgerLiveDarkThemeTokens['.dark'],

  '.enterprise': enterpriseLightThemeTokens[':root'],
  '.enterprise.dark': enterpriseDarkThemeTokens['.dark'],

  '.websites': websitesLightThemeTokens[':root'],
  '.websites.dark': websitesDarkThemeTokens['.dark'],
};
