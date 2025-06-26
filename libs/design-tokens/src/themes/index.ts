import { tokens as enterpriseLightThemeTokens } from './enterprise/theme.light.js';
import { tokens as enterpriseDarkThemeTokens } from './enterprise/theme.dark.js';

import { tokens as ledgerLiveLightThemeTokens } from './ledger-live/theme.light.js';
import { tokens as ledgerLiveDarkThemeTokens } from './ledger-live/theme.dark.js';

import { tokens as websitesLightThemeTokens } from './websites/theme.light.js';
import { tokens as websitesDarkThemeTokens } from './websites/theme.dark.js';

import { tokens as primitivesTokens } from './primitives.js';
import { tokens as typographyLgTokens } from './typography.lg.js';
import { tokens as typographyMdTokens } from './typography.md.js';
import { tokens as typographySmTokens } from './typography.sm.js';
import { tokens as typographyXlTokens } from './typography.xl.js';

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
