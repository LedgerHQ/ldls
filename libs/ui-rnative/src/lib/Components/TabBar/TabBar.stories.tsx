import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { BasketPutIn, HomeFill, Settings } from '../../Symbols';
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
  render: () => (
    <TabBar active='home'>
      <TabBarItem value='home' label='Home' icon={<HomeFill />} />
      <TabBarItem value='shop' label='Shop' icon={<BasketPutIn />} />
      <TabBarItem value='settings' label='Settings' icon={<Settings />} />
    </TabBar>
  ),
};
