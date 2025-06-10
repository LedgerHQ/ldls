import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'React/Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'primary', 'secondary', 'secondary-transparent'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

// Story Definition
export default meta;
type Story = StoryObj<typeof Button>;

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SecondaryTransparent: Story = {
  args: {
    children: 'Secondary Transparent',
    variant: 'secondary-transparent',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'accent',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'accent',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'accent',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'accent',
    disabled: true,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4 items-center">
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-transparent">Secondary Transparent</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="accent" size="small">
          Small
        </Button>
        <Button variant="accent" size="medium">
          Medium
        </Button>
        <Button variant="accent" size="large">
          Large
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="accent" disabled>
          Disabled
        </Button>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
      </div>
    </div>
  ),
};

// Interaction Testing
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'accent',
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
