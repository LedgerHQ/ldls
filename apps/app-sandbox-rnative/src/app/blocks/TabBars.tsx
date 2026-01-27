import { TabBar, TabBarItem } from '@ledgerhq/lumen-ui-rnative';
import {
  HomeFill,
  BasketPutIn,
  Settings,
} from '@ledgerhq/lumen-ui-rnative/symbols';

export function TabBars() {
  return (
    <TabBar active='home'>
      <TabBarItem value='home' label='Home' icon={<HomeFill />} />
      <TabBarItem value='shop' label='Shop' icon={<BasketPutIn />} />
      <TabBarItem value='settings' label='Settings' icon={<Settings />} />
    </TabBar>
  );
}
