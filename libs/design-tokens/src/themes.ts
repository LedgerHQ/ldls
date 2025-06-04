import { themeTokens as enterpriseLightThemeTokens } from './lib/enterprise/theme.light.js';
import { themeTokens as enterpriseDarkThemeTokens } from './lib/enterprise/theme.dark.js';

import { themeTokens as ledgerLiveLightThemeTokens } from './lib/ledgerlive/theme.light.js';
import { themeTokens as ledgerLiveDarkThemeTokens } from './lib/ledgerlive/theme.dark.js';

import { themeTokens as websitesLightThemeTokens } from './lib/websites/theme.light.js';
import { themeTokens as websitesDarkThemeTokens } from './lib/websites/theme.dark.js';

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
