import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';
import { Information } from '../../Symbols';

const meta: Meta = {
  title: 'Components/Tooltip/Overview',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <div className="h-200 flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded border p-8">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>This is a basic tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Tooltip>
  <TooltipTrigger asChild>
    <button>Hover me</button>
  </TooltipTrigger>
  <TooltipContent>
    This is a basic tooltip
  </TooltipContent>
</Tooltip>
        `,
      },
    },
  },
};

export const PlacementsShowcase: Story = {
  render: () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const;
    return (
      <div className="grid grid-cols-2 gap-32 p-16">
        {placements.map((placement) => (
          <div key={placement} className="flex flex-col items-center gap-8">
            <p className="capitalize">{placement}</p>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="rounded border p-8">Hover</button>
              </TooltipTrigger>
              <TooltipContent side={placement}>
                Tooltip on {placement}
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    );
  },
};

export const WithIconTrigger: Story = {
  render: () => (
    <div className="h-200 flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button aria-label="Info">
            <Information size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>Additional information</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="h-200 flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded border p-8">Hover for details</button>
        </TooltipTrigger>
        <TooltipContent className="max-w-192">
          This is a longer tooltip content that spans multiple lines to
          demonstrate text wrapping and content handling in the tooltip
          component.
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="h-200 flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded border p-8">
            Hover (with 500ms delay)
          </button>
        </TooltipTrigger>
        <TooltipContent>Tooltip with delay</TooltipContent>
      </Tooltip>
    </div>
  ),
  decorators: [
    (Story) => <TooltipProvider delayDuration={500}>{Story()}</TooltipProvider>,
  ],
};
