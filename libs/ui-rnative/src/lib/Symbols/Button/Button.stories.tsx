import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { View } from 'react-native';

import Button from './Button'

const Example = () => (
  <View style={{ padding: 20 }}>
    <Button title="Button"/>
  </View>
);

const meta = {
  title: 'Example',
  component: Example,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

// Interaction Testing
export const WithInteraction: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    onClick: () => console.log('Button clicked'),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Button');
 
    await step('Click on Button', async () => {
      await userEvent.click(button);
    });
  },
};