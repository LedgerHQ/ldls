import type { Meta, StoryObj } from '@storybook/react-vite';
import { Close, Heart, Plus, Settings, Share } from '../../Symbols';
import { IconButton } from './IconButton';

const iconMap = {
  Heart,
  Plus,
  Settings,
  Share,
  Close,
} as const;

const meta: Meta<typeof IconButton> = {
  title: 'Action/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
      mapping: iconMap,
      control: {
        type: 'select',
        labels: {
          Heart: '❤️ Heart',
          Plus: '➕ Plus',
          Settings: '⚙️ Settings',
          Share: '📤 Share',
          Close: '✖️ Close',
        },
      },
    },
    'aria-label': {
      control: 'text',
      description:
        'Accessible label for screen readers and fallback tooltip text',
    },
    appearance: {
      control: 'select',
      options: [
        'base',
        'gray',
        'accent',
        'transparent',
        'no-background',
        'red',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Base: Story = {
  args: {
    'aria-label': 'Settings',
    icon: Settings,
    size: 'md',
    appearance: 'base',
  },
};

export const AppearanceShowcase: Story = {
  render: () => (
    <div className='flex gap-8'>
      <IconButton aria-label='Add' icon={Plus} appearance='accent' />
      <IconButton aria-label='Add' icon={Plus} appearance='base' />
      <IconButton aria-label='Add' icon={Plus} appearance='gray' />
      <IconButton aria-label='Add' icon={Plus} appearance='transparent' />
      <IconButton aria-label='Add' icon={Plus} appearance='no-background' />
      <IconButton aria-label='Add' icon={Plus} appearance='red' />
    </div>
  ),
};

export const SizesShowcase: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <IconButton aria-label='Add to favorites' icon={Heart} size='xs' />
      <IconButton aria-label='Add to favorites' icon={Heart} size='sm' />
      <IconButton aria-label='Add to favorites' icon={Heart} size='md' />
      <IconButton aria-label='Add to favorites' icon={Heart} size='lg' />
    </div>
  ),
};

export const StatesShowcase: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <IconButton aria-label='Settings' icon={Settings} disabled />
      <IconButton aria-label='Settings' icon={Settings} loading />
    </div>
  ),
};
