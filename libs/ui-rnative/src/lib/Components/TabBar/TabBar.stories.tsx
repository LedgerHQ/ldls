import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { TabBar } from './TabBar';

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
};
