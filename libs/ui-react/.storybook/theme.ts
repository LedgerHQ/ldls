import { create } from '@storybook/theming/create';
import { ThemeVars } from '@storybook/theming';
import logoUrl from './genesis.png';

const theme: ThemeVars = create({
  base: 'dark',
  brandTarget: '_self',
  brandImage: logoUrl,
});

export default theme;
