import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View, Text } from 'react-native';
import {
  Settings,
  PenEdit,
  DeleteCircleFill,
  MoreVertical,
} from '../../Symbols';
import { InteractiveIcon } from './InteractiveIcon';

const meta: Meta<typeof InteractiveIcon> = {
  component: InteractiveIcon,
  title: 'Action/InteractiveIcon',
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
    children: {
      control: 'select',
      options: ['Settings', 'PenEdit', 'DeleteCircleFill'],
      mapping: {
        Settings: <Settings />,
        PenEdit: <PenEdit />,
        DeleteCircleFill: <DeleteCircleFill />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveIcon>;

export const Filled: Story = {
  args: {
    iconType: 'filled',
    children: <DeleteCircleFill />,
    'aria-label': 'Delete',
  },
  parameters: {
    docs: {
      source: {
        code: `
<InteractiveIcon iconType="filled" aria-label="Delete">
  <DeleteCircleFill />
</InteractiveIcon>
`,
      },
    },
  },
};

export const Stroked: Story = {
  args: {
    iconType: 'stroked',
    children: <MoreVertical />,
    'aria-label': 'More actions',
  },
  parameters: {
    docs: {
      source: {
        code: `
<InteractiveIcon iconType="stroked" aria-label="More actions">
  <MoreVertical />
</InteractiveIcon>
`,
      },
    },
  },
};

export const IconTypeShowcase: Story = {
  render: () => {
    return (
      <View className='flex flex-row gap-16 p-8'>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Filled</Text>
          <InteractiveIcon iconType='filled' aria-label='Delete'>
            <DeleteCircleFill />
          </InteractiveIcon>
        </View>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Stroked</Text>
          <InteractiveIcon iconType='stroked' aria-label='More actions'>
            <MoreVertical />
          </InteractiveIcon>
        </View>
      </View>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => {
    const iconSizes = [16, 20, 24, 40] as const;
    return (
      <View className='flex flex-col gap-16 p-8'>
        {iconSizes.map((size) => (
          <View className='flex flex-row gap-16' key={size}>
            <View className='flex w-72 items-center justify-center'>
              <InteractiveIcon key={size} iconType='stroked' aria-label='More'>
                <MoreVertical size={size} />
              </InteractiveIcon>
            </View>
            <Text className='body-3'>{size}px</Text>
          </View>
        ))}
      </View>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => {
    return (
      <View className='flex flex-row gap-16 bg-base p-8'>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Filled enabled</Text>
          <InteractiveIcon iconType='filled' aria-label='Delete'>
            <DeleteCircleFill />
          </InteractiveIcon>
        </View>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Stroked enabled</Text>
          <InteractiveIcon iconType='stroked' aria-label='More actions'>
            <MoreVertical />
          </InteractiveIcon>
        </View>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Filled disabled</Text>
          <InteractiveIcon iconType='filled' aria-label='Delete' disabled>
            <DeleteCircleFill />
          </InteractiveIcon>
        </View>
        <View className='flex flex-col items-center gap-4'>
          <Text className='text-muted body-3'>Stroked disabled</Text>
          <InteractiveIcon
            iconType='stroked'
            aria-label='More actions'
            disabled
          >
            <MoreVertical />
          </InteractiveIcon>
        </View>
      </View>
    );
  },
};
