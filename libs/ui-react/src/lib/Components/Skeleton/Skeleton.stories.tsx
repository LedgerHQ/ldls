import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Communication/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic skeleton
export const Default: Story = {
  args: {
    className: 'h-16 w-256',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton className='h-40 w-56' />
      <Skeleton className='h-12 w-112' />
      <Skeleton className='h-128 w-256' />
    </div>
  ),
};

// Different shapes
export const Shapes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton className='h-40 w-256 rounded-none' />
      <Skeleton className='h-40 w-256 rounded-lg' />
      <Skeleton className='size-48 rounded-full' />
      <Skeleton className='size-48 rounded-md' />
    </div>
  ),
};

// List item skeleton
export const ListItem: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Skeleton className='size-48 rounded-full' />
      <div className='space-y-8'>
        <Skeleton className='h-16 w-160' />
        <Skeleton className='h-16 w-128' />
      </div>
    </div>
  ),
};

// Card skeleton
export const Card: Story = {
  render: () => (
    <div className='max-w-md rounded-lg border p-12'>
      <div className='space-y-4'>
        <Skeleton className='h-24 w-256' />
        <Skeleton className='h-16 w-full' />
        <Skeleton className='h-16 w-256' />
        <div className='flex space-x-2'>
          <Skeleton className='h-32 w-160' />
          <Skeleton className='h-32 w-128' />
        </div>
      </div>
    </div>
  ),
};

// Table skeleton
export const Table: Story = {
  render: () => (
    <div className='w-full'>
      <div className='space-y-4'>
        {/* Header */}
        <div className='flex space-x-4'>
          <Skeleton className='h-16 w-192' />
          <Skeleton className='h-16 w-256' />
          <Skeleton className='h-16 w-160' />
          <Skeleton className='h-16 w-224' />
        </div>
        {/* Rows */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='flex space-x-4'>
            <Skeleton className='h-16 w-192' />
            <Skeleton className='h-16 w-256' />
            <Skeleton className='h-16 w-160' />
            <Skeleton className='h-16 w-224' />
          </div>
        ))}
      </div>
    </div>
  ),
};
