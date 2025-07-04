import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';
import { Settings, Plus, ArrowRight as Loader } from '../../Symbols';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button/React',
  argTypes: {
    appearance: {
      control: 'select',
      options: ['base', 'gray', 'accent', 'transparent', 'no-background'],
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
      description: 'Optional icon element to display',
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
  | 'no-background';

// Appearance showcase
export const AppearanceShowcase: Story = {
  render: () => {
    const appearances: Array<{ name: string; appearance: ButtonAppearance }> = [
      { name: 'Accent', appearance: 'accent' },
      { name: 'Base', appearance: 'base' },
      { name: 'Gray', appearance: 'gray' },
      { name: 'Transparent', appearance: 'transparent' },
      { name: 'No Background', appearance: 'no-background' },
    ];

    return (
      <div className="flex gap-4 p-8">
        {appearances.map(({ name, appearance }) => (
          <Button key={appearance} appearance={appearance}>
            {name}
          </Button>
        ))}
      </div>
    );
  },
};

// Content types showcase
export const ContentTypesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button appearance="base">Text Only</Button>
      <Button appearance="base" icon={<Plus size={24} />}>
        With Icon
      </Button>
      <Button
        appearance="base"
        size="xs"
        icon={<Settings size={16} />}
        aria-label="Settings"
      />
    </div>
  ),
};

// Sizes showcase
export const SizesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        appearance="base"
        size="xs"
        icon={<Settings size={16} />}
        aria-label="Settings"
      />
      <Button appearance="base" size="s">
        Small
      </Button>
      <Button appearance="base" size="m">
        Medium
      </Button>
      <Button appearance="base" size="l">
        Large
      </Button>
    </div>
  ),
};

// States showcase
export const StatesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button appearance="base">Default</Button>
      <Button appearance="base" disabled>
        Disabled
      </Button>
      <Button
        appearance="base"
        loading
        icon={<Loader className="animate-spin" />}
      >
        Loading
      </Button>
    </div>
  ),
};

// Responsive Layout showcase
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <Button appearance="base" className="w-full bg-white lg:w-fit">
        Short
      </Button>
      <Button appearance="base">Medium length button</Button>
      <Button appearance="base">
        This is a longer button text to show dynamic width
      </Button>
    </div>
  ),
};

export const ResponsiveLayout2: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Button appearance="base">
          This is a very long button text that will be truncated to two lines
          maximum because it exceeds the maximum width of 384 pixels. You can
          see how it handles overflow elegantly.
        </Button>
      </div>
    </div>
  ),
};

// Individual examples for docs
export const Base: Story = {
  args: {
    appearance: 'base',
    children: 'Base Button',
  },
};

export const Gray: Story = {
  args: {
    appearance: 'gray',
    children: 'Gray Button',
  },
};

export const Accent: Story = {
  args: {
    appearance: 'accent',
    children: 'Accent Button',
  },
};

export const Transparent: Story = {
  args: {
    appearance: 'transparent',
    children: 'Transparent Button',
  },
};

export const NoBackground: Story = {
  args: {
    appearance: 'no-background',
    children: 'No Background Button',
  },
};

export const IconOnly: Story = {
  args: {
    appearance: 'base',
    icon: <Settings size={24} />,
    'aria-label': 'Settings',
  },
};

export const IconText: Story = {
  args: {
    appearance: 'base',
    children: 'Add Item',
    icon: <Plus size={24} />,
  },
};

// Interaction Testing
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
