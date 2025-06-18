import { create } from '@storybook/theming/create';
import { ThemeVars } from '@storybook/theming';
import logoUrl from './ledger-logo.png';

const theme: ThemeVars = create({
  base: 'dark',
  brandTitle: 'LDLS',
  brandTarget: '_self',
  brandImage: logoUrl,
});

export default theme;
