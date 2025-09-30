import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Spot, SpotAppearance } from './Spot';
import { Settings, Plus, Heart, Star } from '../../Symbols';
import { IconSize } from '../Icon/Icon';
import { View, Text } from 'react-native';

const meta: Meta<typeof Spot> = {
  component: Spot,
  title: 'Media & Graphics/Spot',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: [
        'icon',
        'bluetooth',
        'check',
        'error',
        'warning',
        'info',
        'loader',
        'number',
      ],
      description: 'The visual appearance and behavior of the spot',
    },
    size: {
      control: 'select',
      options: [48, 56, 72],
      description: 'The size of the spot',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the spot looks disabled',
    },
    icon: {
      control: 'select',
      description: 'Icon component to display (required for icon appearance)',
      options: ['None', 'Settings', 'Plus', 'Heart', 'Star'],
      mapping: {
        None: undefined,
        Settings: Settings,
        Plus: Plus,
        Heart: Heart,
        Star: Star,
      },
    },
    number: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      description: 'Number to display (required for number appearance)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spot>;

export const Base: Story = {
  args: {
    appearance: 'icon',
    icon: Settings,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Spot
  appearance="icon"
  icon={Settings}
/>
`,
      },
    },
  },
};

export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{
      name: string;
      appearance: SpotAppearance;
      icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
      number?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }> = [
      { name: 'Icon', appearance: 'icon', icon: Settings },
      { name: 'Bluetooth', appearance: 'bluetooth' },
      { name: 'Check', appearance: 'check' },
      { name: 'Error', appearance: 'error' },
      { name: 'Warning', appearance: 'warning' },
      { name: 'Info', appearance: 'info' },
      { name: 'Loader', appearance: 'loader' },
      { name: 'Number', appearance: 'number', number: 3 },
    ];

    return (
      <View className='flex flex-row flex-wrap gap-16 p-8 text-base'>
        {appearances.map(({ name, appearance, icon, number }) => (
          <View
            key={appearance}
            className='flex w-64 flex-col items-center gap-4'
          >
            <Spot
              appearance={appearance as any}
              icon={icon}
              number={number as any}
            />
            <Text className='text-center text-muted'>{name}</Text>
          </View>
        ))}
      </View>
    );
  },
};

export const IconVariants: Story = {
  render: () => {
    const icons = [
      { name: 'Settings', component: Settings },
      { name: 'Plus', component: Plus },
      { name: 'Heart', component: Heart },
      { name: 'Star', component: Star },
    ];

    return (
      <View className='flex flex-row gap-8 p-8'>
        {icons.map(({ name, component: Icon }) => (
          <Spot key={name} appearance='icon' icon={Icon} />
        ))}
      </View>
    );
  },
};

export const NumberVariants: Story = {
  render: () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

    return (
      <View className='flex flex-row flex-wrap gap-8 p-8'>
        {numbers.map((num) => (
          <Spot key={num} appearance='number' number={num} />
        ))}
      </View>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => {
    const appearances: Array<{
      name: string;
      appearance: SpotAppearance;
      icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
      number?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }> = [
      { name: 'Icon', appearance: 'icon', icon: Settings },
      { name: 'Bluetooth', appearance: 'bluetooth' },
      { name: 'Check', appearance: 'check' },
      { name: 'Error', appearance: 'error' },
      { name: 'Warning', appearance: 'warning' },
      { name: 'Info', appearance: 'info' },
      { name: 'Loader', appearance: 'loader' },
      { name: 'Number', appearance: 'number', number: 5 },
    ];

    const sizes = [48, 56, 72] as const;

    return (
      <View className='flex flex-col gap-16 p-8 text-base'>
        {sizes.map((size) => (
          <View key={size} className='flex flex-col gap-4'>
            <Text>Size {size}px</Text>
            <View className='flex flex-row flex-wrap gap-16'>
              {appearances.map(({ name, appearance, icon, number }) => (
                <View
                  key={`${appearance}-${size}`}
                  className='flex flex-col items-center gap-4'
                >
                  <Spot
                    appearance={appearance as any}
                    icon={icon}
                    number={number as any}
                    size={size}
                  />
                  <Text className='text-center text-muted'>{name}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => {
    return (
      <View className='flex flex-col gap-16 text-base'>
        <View className='flex flex-col gap-8'>
          <Text>Default</Text>
          <View className='flex flex-row flex-wrap gap-16'>
            <View className='flex w-64 flex-col items-center gap-4'>
              <Spot appearance='icon' icon={Settings} />
            </View>
            <View className='flex w-64 flex-col items-center gap-4'>
              <Spot appearance='bluetooth' />
            </View>
          </View>
        </View>
        <View className='flex flex-col gap-8'>
          <Text>Disabled</Text>
          <View className='flex flex-row flex-wrap gap-16'>
            <View className='flex w-64 flex-col items-center gap-4'>
              <Spot appearance='icon' icon={Settings} disabled />
            </View>
            <View className='flex w-64 flex-col items-center gap-4'>
              <Spot appearance='bluetooth' disabled />
            </View>
          </View>
        </View>
      </View>
    );
  },
};
