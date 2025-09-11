import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import {
  Settings,
  PenEdit,
  DeleteCircleFill,
  MoreVertical,
} from '../../Symbols';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Action/IconButton',
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
    iconType: {
      control: 'select',
      options: ['filled', 'stroked'],
      description: 'The visual style of the icon button',
    },
    children: {
      control: 'select',
      description: 'The icon component to display inside the button',
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
type Story = StoryObj<typeof IconButton>;

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
<IconButton iconType="filled" aria-label="Delete">
  <DeleteCircleFill />
</IconButton>
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
<IconButton iconType="stroked" aria-label="More actions">
  <MoreVertical />
</IconButton>
`,
      },
    },
  },
};

export const IconTypeShowcase: Story = {
  render: () => {
    return (
      <div className="flex gap-16 p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Filled</span>
          <IconButton iconType="filled" aria-label="Delete">
            <DeleteCircleFill />
          </IconButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Stroked</span>
          <IconButton iconType="stroked" aria-label="More actions">
            <MoreVertical />
          </IconButton>
        </div>
      </div>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => {
    const iconSizes = [16, 20, 24, 40] as const;
    return (
      <div className="flex flex-col gap-16 p-8">
        {iconSizes.map((size) => (
          <div className="flex items-center gap-16" key={size}>
            <div className="flex w-56 justify-center">
              <IconButton key={size} iconType="stroked" aria-label="More">
                <MoreVertical size={size} />
              </IconButton>
            </div>
            <div>{size}px</div>
          </div>
        ))}
      </div>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => {
    return (
      <div className="flex gap-16 bg-base p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Filled enabled</span>
          <IconButton iconType="filled" aria-label="Delete">
            <DeleteCircleFill />
          </IconButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Stroked enabled</span>
          <IconButton iconType="stroked" aria-label="More actions">
            <MoreVertical />
          </IconButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Filled disabled</span>
          <IconButton iconType="filled" aria-label="Delete" disabled>
            <DeleteCircleFill />
          </IconButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-muted">Stroked disabled</span>
          <IconButton iconType="stroked" aria-label="More actions" disabled>
            <MoreVertical />
          </IconButton>
        </div>
      </div>
    );
  },
};
