import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Communication/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  argTypes: {
    component: {
      control: 'select',
      options: [undefined, 'list-item', 'tile'],
      description: 'Pre-built skeleton component variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic skeleton
export const Base: Story = {
  args: {
    className: 'h-16 w-256',
  },
};

// List item skeleton component
export const WithListItem: Story = {
  args: {
    component: 'list-item',
  },
};

// Tile skeleton component
export const WithTile: Story = {
  args: {
    component: 'tile',
  },
};

// Different sizes
export const SizeShowcase: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton className='h-40 w-56' />
      <Skeleton className='h-12 w-112' />
      <Skeleton className='h-128 w-256' />
    </div>
  ),
};

// Different shapes
export const ShapeShowcase: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton className='h-40 w-256 rounded-none' />
      <Skeleton className='h-40 w-256 rounded-lg' />
      <Skeleton className='size-48 rounded-full' />
      <Skeleton className='size-48 rounded-md' />
    </div>
  ),
};
