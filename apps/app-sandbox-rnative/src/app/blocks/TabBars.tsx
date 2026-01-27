import { TabBar, TabBarItem } from '@ledgerhq/lumen-ui-rnative';
import {
  Home,
  HomeFill,
  CreditCard,
  CreditCardFill,
  UserCircle,
} from '@ledgerhq/lumen-ui-rnative/symbols';
import { useState } from 'react';

export function TabBars() {
  const [active, setActive] = useState('home');

  return (
    <TabBar active={active} onTabPress={setActive}>
      <TabBarItem
        value='home'
        label='Home'
        icon={<Home />}
        activeIcon={<HomeFill />}
      />
      <TabBarItem
        value='pay'
        label='Pay'
        icon={<CreditCard />}
        activeIcon={<CreditCardFill />}
      />
      <TabBarItem value='profile' label='Me' icon={<UserCircle />} />
    </TabBar>
  );
}
