import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import {
  BasketPutIn,
  HomeFill,
  Settings,
  Placeholder,
  Chart1,
  Bell,
  CoinPercent,
} from '../../Symbols';
import { TabBar, TabBarItem } from './TabBar';

const meta = {
  title: 'Action/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <TabBar active={active} onTabPress={setActive}>
        <TabBarItem value='home' label='Home' icon={HomeFill} />
        <TabBarItem value='shop' label='Shop' icon={BasketPutIn} />
        <TabBarItem value='settings' label='Settings' icon={Settings} />
      </TabBar>
    );
  },
};

export const Complex: Story = {
  args: {},
  render: () => {
    const [active, setActive] = useState('portfolio');
    return (
      <TabBar active={active} onTabPress={setActive}>
        <TabBarItem value='market' label='Market' icon={Chart1} />
        <TabBarItem
          value='portfolio'
          label='Portfolio'
          icon={CoinPercent}
          activeIcon={CoinPercent}
        />
        <TabBarItem value='shop' label='Shop' icon={BasketPutIn} />
        <TabBarItem value='notifications' label='Alerts' icon={Bell} />
        <TabBarItem value='settings' label='Settings' icon={Settings} />
      </TabBar>
    );
  },
};

export const MissingLabel: Story = {
  args: {},
  render: () => {
    const [active, setActive] = useState('tab1');
    return (
      <TabBar active={active} onTabPress={setActive}>
        <TabBarItem value='tab1' />
        <TabBarItem value='tab2' label='Named Tab' icon={Placeholder} />
        <TabBarItem value='tab3' icon={HomeFill} />
      </TabBar>
    );
  },
};
