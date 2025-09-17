import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spot, SpotAppearance } from './Spot';
import { Settings, Plus, Heart, Star } from '../../Symbols';
import { IconSize } from '../Icon/Icon';

const meta: Meta<typeof Spot> = {
  component: Spot,
  title: 'Media & Graphics/Spot',
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
      options: [
        'icon',
        'bluetooth',
        'check',
        'error',
        'warning',
        'info',
        'loader',
        'number',
      ],
      description: 'The visual appearance and behavior of the spot',
    },
    size: {
      control: 'select',
      options: [48, 56, 72],
      description: 'The size of the spot',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the spot looks disabled',
    },
    icon: {
      control: 'select',
      description: 'Icon component to display (required for icon appearance)',
      options: ['None', 'Settings', 'Plus', 'Heart', 'Star'],
      mapping: {
        None: undefined,
        Settings: Settings,
        Plus: Plus,
        Heart: Heart,
        Star: Star,
      },
    },
    number: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      description: 'Number to display (required for number appearance)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spot>;

export const Base: Story = {
  args: {
    appearance: 'icon',
    icon: Settings,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Spot
  appearance="icon"
  icon={Settings}
/>
`,
      },
    },
  },
};

export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{
      name: string;
      appearance: SpotAppearance;
      icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
      number?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }> = [
      { name: 'Icon', appearance: 'icon', icon: Settings },
      { name: 'Bluetooth', appearance: 'bluetooth' },
      { name: 'Check', appearance: 'check' },
      { name: 'Error', appearance: 'error' },
      { name: 'Warning', appearance: 'warning' },
      { name: 'Info', appearance: 'info' },
      { name: 'Loader', appearance: 'loader' },
      { name: 'Number', appearance: 'number', number: 3 },
    ];

    return (
      <div className="flex flex-wrap gap-16 p-8 text-base">
        {appearances.map(({ name, appearance, icon, number }) => (
          <div
            key={appearance}
            className="flex w-64 flex-col items-center gap-4"
          >
            <Spot
              appearance={appearance as any}
              icon={icon}
              number={number as any}
            />
            <span className="text-xs text-center text-muted">{name}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const IconVariants: Story = {
  render: () => {
    const icons = [
      { name: 'Settings', component: Settings },
      { name: 'Plus', component: Plus },
      { name: 'Heart', component: Heart },
      { name: 'Star', component: Star },
    ];

    return (
      <div className="flex gap-8 p-8">
        {icons.map(({ name, component: Icon }) => (
          <Spot key={name} appearance="number" number={'1' as any} />
        ))}
      </div>
    );
  },
};

export const NumberVariants: Story = {
  render: () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

    return (
      <div className="flex flex-wrap gap-8 p-8">
        {numbers.map((num) => (
          <Spot key={num} appearance="number" number={num} />
        ))}
      </div>
    );
  },
};

export const SizesShowcase: Story = {
  render: () => {
    const appearances: Array<{
      name: string;
      appearance: SpotAppearance;
      icon?: React.ComponentType<{ size?: IconSize; className?: string }>;
      number?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }> = [
      { name: 'Icon', appearance: 'icon', icon: Settings },
      { name: 'Bluetooth', appearance: 'bluetooth' },
      { name: 'Check', appearance: 'check' },
      { name: 'Error', appearance: 'error' },
      { name: 'Warning', appearance: 'warning' },
      { name: 'Info', appearance: 'info' },
      { name: 'Loader', appearance: 'loader' },
      { name: 'Number', appearance: 'number', number: 5 },
    ];

    const sizes = [48, 56, 72] as const;

    return (
      <div className="flex flex-col gap-16 p-8 text-base">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col gap-4">
            <h3>Size {size}px</h3>
            <div className="flex flex-wrap gap-16">
              {appearances.map(({ name, appearance, icon, number }) => (
                <div
                  key={`${appearance}-${size}`}
                  className="flex flex-col items-center gap-4"
                >
                  <Spot
                    appearance={appearance as any}
                    icon={icon}
                    number={number as any}
                    size={size}
                  />
                  <span className="text-xs text-center text-muted">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-16 text-base">
        <div className="flex flex-col gap-8">
          <div>Default</div>
          <div className="flex flex-wrap gap-16">
            <div className="flex w-64 flex-col items-center gap-4">
              <Spot appearance="icon" icon={Settings} />
            </div>
            <div className="flex w-64 flex-col items-center gap-4">
              <Spot appearance="bluetooth" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>Disabled</div>
          <div className="flex flex-wrap gap-16">
            <div className="flex w-64 flex-col items-center gap-4">
              <Spot appearance="icon" icon={Settings} disabled />
            </div>
            <div className="flex w-64 flex-col items-center gap-4">
              <Spot appearance="bluetooth" disabled />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
