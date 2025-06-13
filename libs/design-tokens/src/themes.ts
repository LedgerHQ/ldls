import { merge } from 'lodash';
import { tokens as enterpriseLightThemeTokens } from '../dist/lib/enterprise/theme.light.js';
import { tokens as enterpriseDarkThemeTokens } from '../dist/lib/enterprise/theme.dark.js';

import { tokens as ledgerLiveLightThemeTokens } from '../dist/lib/ledger-live/theme.light.js';
import { tokens as ledgerLiveDarkThemeTokens } from '../dist/lib/ledger-live/theme.dark.js';

import { tokens as websitesLightThemeTokens } from '../dist/lib/websites/theme.light.js';
import { tokens as websitesDarkThemeTokens } from '../dist/lib/websites/theme.dark.js';

import { tokens as primitivesTokens } from '../dist/lib/primitives.js';

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
