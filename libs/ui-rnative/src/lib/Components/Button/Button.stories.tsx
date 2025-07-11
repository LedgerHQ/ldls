import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent } from '@storybook/testing-library';
import { View } from 'react-native';

import Button, { ButtonProps } from './Button';

const ButtonWrapper = (props: ButtonProps) => (
  <View style={{ padding: 20 }}>
    <Button {...props} />
  </View>
);

const meta: Meta<typeof ButtonWrapper> = {
  title: 'Components/Button/React Native',
  component: ButtonWrapper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'primary', 'secondary', 'secondary-transparent'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <View style={{ padding: 20, gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Button variant="accent">Accent</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-transparent">Secondary Transparent</Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Button variant="accent" size="small">
          Small
        </Button>
        <Button variant="accent" size="medium">
          Medium
        </Button>
        <Button variant="accent" size="large">
          Large
        </Button>
      </View>
    </View>
  ),
};

// Interaction Testing
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'accent',
    onPress: () => console.log('Button clicked'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click me');

    await step('Click on Button', async () => {
      await userEvent.click(button);
    });
  },
};
