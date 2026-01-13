import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { View } from 'react-native';
import { Settings, Plus, User, Apps, Home, Bell, Cart } from '../../Symbols';
import { TileButton } from './TileButton';

const iconOptions = {
  Settings,
  Plus,
  User,
  Apps,
  Home,
  Bell,
  Cart,
};

const meta: Meta<typeof TileButton> = {
  component: TileButton,
  title: 'Action/TileButton',
  argTypes: {
    icon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: 'select' },
    },
    onPress: {
      action: 'pressed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TileButton>;

export const Base: Story = {
  args: {
    icon: Settings,
    children: 'Settings',
  },
  parameters: {
    docs: {
      source: {
        code: `<TileButton icon={Settings}>Settings</TileButton>`,
      },
    },
  },
};

export const DisabledShowcase: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <TileButton icon={Settings}>Enabled</TileButton>
      <TileButton icon={Settings} disabled>
        Disabled
      </TileButton>
    </View>
  ),
};

export const IconsShowcase: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <TileButton icon={Settings}>Settings</TileButton>
      <TileButton icon={User}>Profile</TileButton>
      <TileButton icon={Plus}>Add</TileButton>
      <TileButton icon={Apps}>Apps</TileButton>
    </View>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <View style={{ width: 343, gap: 8 }}>
      {/* 2-button row */}
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>
          <TileButton icon={Plus} isFull>
            Buy
          </TileButton>
        </View>
        <View style={{ flex: 1 }}>
          <TileButton icon={Settings} isFull>
            Settings
          </TileButton>
        </View>
      </View>
      {/* 3-button row */}
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>
          <TileButton icon={User} isFull>
            Profile
          </TileButton>
        </View>
        <View style={{ flex: 1 }}>
          <TileButton icon={Apps} isFull>
            Apps
          </TileButton>
        </View>
        <View style={{ flex: 1 }}>
          <TileButton icon={Home} isFull>
            Home
          </TileButton>
        </View>
      </View>
    </View>
  ),
};

export const WidthShowcase: Story = {
  render: () => (
    <View
      style={{
        width: 320,
        gap: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <TileButton icon={Settings}>Default width</TileButton>
      <TileButton icon={Settings} isFull>
        Full width (isFull)
      </TileButton>
    </View>
  ),
};
