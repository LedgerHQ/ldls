import type { Meta, StoryObj } from '@storybook/react';
import { ArrowUp } from '../../Symbols/Icons/ArrowUp';

const meta: Meta<typeof ArrowUp> = {
  title: 'Components/Icon/ArrowUp',
  component: ArrowUp,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Size of the icon in pixels',
      defaultValue: 16,
    },
    strokeWidth: {
      control: 'number',
      description: 'Width of the stroke',
      defaultValue: 1.3,
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArrowUp>;

export const Default: Story = {
  args: {
    size: 16,
    strokeWidth: 1.3,
  },
};

export const Large: Story = {
  args: {
    size: 32,
    strokeWidth: 1.3,
  },
};

export const Thick: Story = {
  args: {
    size: 16,
    strokeWidth: 2,
  },
};

export const CustomColor: Story = {
  args: {
    size: 16,
    strokeWidth: 1.3,
    className: 'text-blue-500',
  },
};
