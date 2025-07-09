import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';
import { Settings, Plus } from '../../Symbols';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button/React',
  argTypes: {
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
      description: 'The visual style appearance of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
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
    children: {
      control: 'text',
      description: 'The content to be displayed inside the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
type ButtonAppearance =
  | 'base'
  | 'gray'
  | 'accent'
  | 'transparent'
  | 'no-background'
  | 'red';

export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{ name: string; appearance: ButtonAppearance }> = [
      { name: 'Accent', appearance: 'accent' },
      { name: 'Base', appearance: 'base' },
      { name: 'Gray', appearance: 'gray' },
      { name: 'Transparent', appearance: 'transparent' },
      { name: 'No Background', appearance: 'no-background' },
      { name: 'Red', appearance: 'red' },
    ];

    return (
      <div className="flex gap-16 p-8">
        {appearances.map(({ name, appearance }) => (
          <Button key={appearance} appearance={appearance}>
            {name}
          </Button>
        ))}
      </div>
    );
  },
};

export const ContentTypesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button appearance="base">Text Only</Button>
      <Button appearance="base" icon={Plus}>
        With Icon
      </Button>
      <Button appearance="base" icon={Settings} aria-label="Settings" />
    </div>
  ),
};

export const SizesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        appearance="base"
        size="xs"
        icon={Settings}
        aria-label="Settings"
      />
      <Button appearance="base" size="s">
        Small
      </Button>
      <Button appearance="base" size="m">
        Medium
      </Button>
      <Button appearance="base" size="l" icon={Settings}>
        Large
      </Button>
    </div>
  ),
};

export const StatesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button appearance="base">Default</Button>
      <Button appearance="base" disabled>
        Disabled
      </Button>
      <Button appearance="base" loading>
        Loading
      </Button>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <Button appearance="base" className="w-full lg:w-fit">
        Short
      </Button>
      <Button appearance="base">Medium length button</Button>
      <Button appearance="base" icon={Plus}>
        This is a longer button text to show dynamic width
      </Button>
    </div>
  ),
};

export const ResponsiveLayout2: Story = {
  render: () => (
    <div className="w-224 bg-muted-pressed p-8">
      <Button icon={Plus}>
        This button has a fixed width container of 224px.
      </Button>
    </div>
  ),
};

export const Base: Story = {
  args: {
    appearance: 'base',
    children: 'Base Button',
  },
};

export const IconOnly: Story = {
  args: {
    appearance: 'base',
    icon: Settings,
    'aria-label': 'Settings',
  },
};

export const IconText: Story = {
  args: {
    appearance: 'base',
    children: 'Add Item',
    icon: Plus,
  },
};

export const Loading: Story = {
  args: {
    appearance: 'base',
    children: 'Loading...',
    loading: true,
  },
};

export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    appearance: 'accent',
    onClick: () => alert('Button clicked'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await step('Click on Button', async () => {
      await userEvent.click(button);
    });
  },
};

export const InteractiveLoadingStates: Story = {
  render: () => {
    const [states, setStates] = React.useState<
      Record<'text' | 'withIcon' | 'iconOnly', 'idle' | 'loading' | 'red'>
    >({
      text: 'idle',
      withIcon: 'idle',
      iconOnly: 'idle',
    });

    const handleClick = async (key: keyof typeof states) => {
      setStates((prev) => ({ ...prev, [key]: 'loading' }));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStates((prev) => ({ ...prev, [key]: 'red' }));
      setTimeout(() => setStates((prev) => ({ ...prev, [key]: 'idle' })), 2000);
    };

    return (
      <div className="flex items-center gap-4">
        <Button
          appearance="red"
          loading={states.text === 'loading'}
          onClick={() => handleClick('text')}
        >
          {states.text === 'red' ? 'Error!' : 'Text Only'}
        </Button>

        <Button
          appearance="base"
          loading={states.withIcon === 'loading'}
          onClick={() => handleClick('withIcon')}
          icon={Settings}
        >
          {states.withIcon === 'red' ? 'Settings Error!' : 'With Icon'}
        </Button>

        <Button
          appearance="accent"
          loading={states.iconOnly === 'loading'}
          onClick={() => handleClick('iconOnly')}
          icon={Settings}
          aria-label="Settings"
        />
      </div>
    );
  },
};
