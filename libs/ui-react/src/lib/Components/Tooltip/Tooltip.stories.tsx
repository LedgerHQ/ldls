import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';
import { Information } from '../../Symbols';
import { Button } from '../Button';

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
    <div className="flex h-256 items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
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
    <Button>Hover me</Button>
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
                <Button>Hover</Button>
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
    <div className="flex h-256 items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Information size={20} />
        </TooltipTrigger>
        <TooltipContent>Additional information</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="flex h-256 items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover for details</Button>
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
    <div className="flex h-256 flex-col items-center justify-center gap-8">
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button>Hover (with 500ms delay)</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip with delay</TooltipContent>
      </Tooltip>
    </div>
  ),
};
