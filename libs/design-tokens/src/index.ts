import { converted as enterpriseLightThemeConverted } from './lib/enterprise/theme.light.js';
import { converted as enterpriseDarkThemeConverted } from './lib/enterprise/theme.dark.js';

import { converted as ledgerLiveLightThemeConverted } from './lib/ledgerlive/theme.light.js';
import { converted as ledgerLiveDarkThemeConverted } from './lib/ledgerlive/theme.dark.js';

import { converted as websitesLightThemeConverted } from './lib/websites/theme.light.js';
import { converted as websitesDarkThemeConverted } from './lib/websites/theme.dark.js';

const enterpriseTheme = {
  ...enterpriseLightThemeConverted,
  ...enterpriseDarkThemeConverted,
};

const ledgerLiveTheme = {
  ...ledgerLiveLightThemeConverted,
  ...ledgerLiveDarkThemeConverted,
};

const websitesTheme = {
  ...websitesLightThemeConverted,
  ...websitesDarkThemeConverted,
};

export { enterpriseTheme, ledgerLiveTheme, websitesTheme };
