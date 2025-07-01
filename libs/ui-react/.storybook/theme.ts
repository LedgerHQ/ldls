import { create } from '@storybook/theming/create';
import { ThemeVars } from '@storybook/theming';
import logoUrl from './genesis.svg';

const theme: ThemeVars = create({
  base: 'light',
  brandTarget: '_self',
  brandImage: logoUrl,
});

export default theme;
