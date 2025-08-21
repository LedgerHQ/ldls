import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Components/Toggle/Overview',
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
      options: ['base', 'accent'],
      description: 'The visual style for checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `<Toggle />`,
      },
    },
  },
};

export const StatesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle selected={false} />
      <Toggle selected={true} />
      <Toggle disabled />
      <Toggle disabled selected={true} />
    </div>
  ),
};
