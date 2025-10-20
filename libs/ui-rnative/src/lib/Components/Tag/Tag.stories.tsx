import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { Check } from '../../Symbols/Icons/Check';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Communication/Tag',
  argTypes: {
    appearance: {
      control: 'select',
      options: ['base', 'gray', 'accent', 'success', 'error', 'warning'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
    label: {
      control: 'text',
    },
    icon: {
      control: {
        type: 'boolean',
      },
      description: 'Show icon',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Label',
    appearance: 'accent',
    size: 'lg',
  },
  render: (args) => <Tag {...args} icon={args.icon ? Check : undefined} />,
};

export const Showcase: Story = {
  render: () => (
    <View className='flex flex-col gap-16'>
      <View className='flex flex-row gap-4'>
        <Tag appearance='base' label='Base' />
        <Tag appearance='gray' label='Gray' />
        <Tag appearance='accent' label='Accent' />
        <Tag appearance='success' label='Success' />
        <Tag appearance='error' label='Error' />
        <Tag appearance='warning' label='Warning' />
        <Tag appearance='disabled' label='Disabled' />
      </View>
      <View className='flex flex-row gap-4'>
        <Tag appearance='base' label='Base' icon={Check} />
        <Tag appearance='gray' label='Gray' icon={Check} />
        <Tag appearance='accent' label='Accent' icon={Check} />
        <Tag appearance='success' label='Success' icon={Check} />
        <Tag appearance='error' label='Error' icon={Check} />
        <Tag appearance='warning' label='Warning' icon={Check} />
        <Tag appearance='disabled' label='Disabled' icon={Check} />
      </View>
    </View>
  ),
};

export const SizesShowcase: Story = {
  render: () => (
    <View className='flex flex-row items-center gap-4'>
      <Tag size='lg' label='Large Tag' />
      <Tag size='sm' label='Small Tag' />
    </View>
  ),
};

export const ContentTypesShowcase: Story = {
  render: () => (
    <View className='flex flex-row items-center gap-4'>
      <Tag label='Label only' />
      <Tag icon={Check} label='Icon and Label' />
    </View>
  ),
};
