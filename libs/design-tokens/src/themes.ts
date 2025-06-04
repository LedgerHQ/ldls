import { merge } from 'lodash';
import { tokens as enterpriseLightThemeTokens } from './lib/enterprise/theme.light.js';
import { tokens as enterpriseDarkThemeTokens } from './lib/enterprise/theme.dark.js';

import { tokens as ledgerLiveLightThemeTokens } from './lib/ledgerlive/theme.light.js';
import { tokens as ledgerLiveDarkThemeTokens } from './lib/ledgerlive/theme.dark.js';

import { tokens as websitesLightThemeTokens } from './lib/websites/theme.light.js';
import { tokens as websitesDarkThemeTokens } from './lib/websites/theme.dark.js';

import { tokens as primitivesTokens } from './lib/primitives.js';

export const enterpriseTheme = {
  ...merge(enterpriseLightThemeTokens, primitivesTokens),
  ...enterpriseDarkThemeTokens,
};

export const ledgerLiveTheme = {
  ...merge(ledgerLiveLightThemeTokens, primitivesTokens),
  ...ledgerLiveDarkThemeTokens,
};

export const websitesTheme = {
  ...merge(websitesLightThemeTokens, primitivesTokens),
  ...websitesDarkThemeTokens,
};
