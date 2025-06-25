import { tokens as enterpriseLightThemeTokens } from './enterprise/theme.light.js';
import { tokens as enterpriseDarkThemeTokens } from './enterprise/theme.dark.js';

import { tokens as ledgerLiveLightThemeTokens } from './ledger-live/theme.light.js';
import { tokens as ledgerLiveDarkThemeTokens } from './ledger-live/theme.dark.js';

import { tokens as websitesLightThemeTokens } from './websites/theme.light.js';
import { tokens as websitesDarkThemeTokens } from './websites/theme.dark.js';

import { tokens as primitivesTokens } from './primitives.js';

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
