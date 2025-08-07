import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardButton } from './CardButton';
import { Settings, Plus, Coins, CreditCard, Bank } from '../../Symbols';

const meta: Meta<typeof CardButton> = {
  component: CardButton,
  title: 'Components/CardButton/Overview',
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
      options: ['base', 'outline'],
      description: 'The visual style appearance of the card button',
    },
    title: {
      control: 'text',
      description: 'The main title text for the card button',
    },
    description: {
      control: 'text',
      description: 'Optional description text displayed below the title',
    },
    icon: {
      control: 'select',
      description: 'Optional icon component to display',
      options: ['None', 'Plus', 'Settings'],
      mapping: {
        None: undefined,
        Plus: Plus,
        Settings: Settings,
      },
    },
    hideChevron: {
      control: 'boolean',
      description: 'Whether to hide the chevron right icon on the right side',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardButton>;
type CardButtonAppearance = 'base' | 'outline';

export const Base: Story = {
  args: {
    appearance: 'base',
    title: 'Basic Card Button',
  },
  parameters: {
    docs: {
      source: {
        code: `
<CardButton
  appearance="base"
  title="Basic Card Button"
/>
`,
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    appearance: 'base',
    title: 'Settings',
    icon: Settings,
  },
  parameters: {
    docs: {
      source: {
        code: `
<CardButton
  appearance="base"
  title="Settings"
  icon={Settings}
/>
`,
      },
    },
  },
};

export const WithDescription: Story = {
  args: {
    appearance: 'base',
    title: 'Payment Method',
    description: 'Add or manage your payment options',
  },
  parameters: {
    docs: {
      source: {
        code: `
<CardButton
  appearance="base"
  title="Payment Method"
  description="Add or manage your payment options"
/>
`,
      },
    },
  },
};

export const WithoutChevron: Story = {
  args: {
    appearance: 'base',
    title: 'Navigate Forward',
    hideChevron: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<CardButton
  appearance="base"
  title="Navigate Forward"
  hideChevron
/>
`,
      },
    },
  },
};

export const FullFeatures: Story = {
  args: {
    appearance: 'base',
    title: 'Account Settings',
    description: 'Manage your account preferences and security',
    icon: Settings,
  },
  parameters: {
    docs: {
      source: {
        code: `
<CardButton
  appearance="base"
  title="Account Settings"
  description="Manage your account preferences and security"
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
      appearance: CardButtonAppearance;
    }> = [
      { name: 'Base', appearance: 'base' },
      { name: 'Outline', appearance: 'outline' },
    ];

    return (
      <div className="flex flex-col gap-16 p-8">
        {appearances.map(({ name, appearance }) => (
          <CardButton
            key={appearance}
            appearance={appearance}
            title={`${name} Appearance`}
            description="This demonstrates the appearance variation"
            icon={Coins}
          />
        ))}
      </div>
    );
  },
};

export const ContentVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-16 p-8">
      <CardButton
        appearance="base"
        title="With Description"
        description="This card has a description below the title"
        hideChevron
      />
      <CardButton
        appearance="base"
        title="Icon and Description"
        description="This card has both an icon and description"
        icon={Settings}
        hideChevron
      />
      <CardButton
        appearance="base"
        title="Description and Chevron"
        description="This card has description and chevron"
      />
      <CardButton
        appearance="base"
        title="Complete Card"
        description="This card has all optional features"
        icon={CreditCard}
      />
      <CardButton appearance="base" title="With Icon" icon={Plus} hideChevron />
      <CardButton appearance="base" title="With Chevron" />
    </div>
  ),
};

export const StatesShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-16 p-8">
      <CardButton
        appearance="base"
        title="Base Default"
        description="This is the normal interactive state"
        icon={Settings}
      />
      <CardButton
        appearance="base"
        title="Base Disabled"
        description="This card button is disabled"
        icon={Settings}
        disabled
      />
      <CardButton
        appearance="outline"
        title="Outline Default"
        description="This is the outline appearance"
        icon={Bank}
      />
      <CardButton
        appearance="outline"
        title="Outline Disabled"
        description="This is the disabled outline appearance"
        icon={Bank}
        disabled
      />
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="grid w-320 grid-cols-1 gap-16 bg-muted-pressed p-16">
      <div className="text-muted body-4-semi-bold">Container: 320px wide</div>
      <CardButton
        appearance="base"
        title="Short Title"
        description="Short description"
        icon={Plus}
      />
      <CardButton
        appearance="base"
        title="Full Width"
        description="Short description"
        icon={Plus}
        isFull
      />
      <CardButton
        appearance="base"
        title="Longer Title That Might Overflow When Container is Smaller"
        description="This is a longer description that demonstrates how the card handles longer content within its constraints"
        icon={Settings}
      />
    </div>
  ),
};
