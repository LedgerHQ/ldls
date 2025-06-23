import { create } from '@storybook/theming/create';
import { ThemeVars } from '@storybook/theming';

const theme: ThemeVars = create({
  base: 'dark',
  brandTitle: 'LDLS',
  brandTarget: '_self',
});

export default theme;
