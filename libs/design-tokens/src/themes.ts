import { tokens as enterpriseLightThemeTokens } from '../dist/lib/enterprise/theme.light.js';
import { tokens as enterpriseDarkThemeTokens } from '../dist/lib/enterprise/theme.dark.js';

import { tokens as ledgerLiveLightThemeTokens } from '../dist/lib/ledger-live/theme.light.js';
import { tokens as ledgerLiveDarkThemeTokens } from '../dist/lib/ledger-live/theme.dark.js';

import { tokens as websitesLightThemeTokens } from '../dist/lib/websites/theme.light.js';
import { tokens as websitesDarkThemeTokens } from '../dist/lib/websites/theme.dark.js';

import { tokens as primitivesTokens } from '../dist/lib/primitives.js';

export const primitivesTheme = primitivesTokens;

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
