import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { View } from 'react-native';

import Button, { ButtonProps } from './Button';

const ButtonWrapper = (props: ButtonProps) => (
  <View style={{ padding: 20 }}>
    <Button {...props} />
  </View>
);

const meta: Meta<typeof ButtonWrapper> = {
  title: 'Components/Button',
  component: ButtonWrapper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    onPress: () => console.log('Primary button clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    onPress: () => console.log('Secondary button clicked!'),
  },
};

// Interaction Testing
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
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
