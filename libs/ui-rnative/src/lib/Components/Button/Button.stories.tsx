import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent } from '@storybook/testing-library';
import { Text, View } from 'react-native';

import { Button, ButtonProps } from './Button';

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
    appearance: {
      control: 'select',
      options: [
        'accent',
        'base',
        'gray',
        'transparent',
        'no-background',
        'red',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
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
        <View className="flex-1">
          <Text className="text-warning">Warning</Text>
          <Text className="text-base">Base</Text>
        </View>
        <Button appearance="accent">Accent</Button>
        <Button appearance="base">Base</Button>
        <Button appearance="gray">Gray</Button>
        <Button appearance="transparent">Transparent</Button>
        <Button appearance="no-background">No Background</Button>
        <Button appearance="red">Red</Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Button appearance="accent" size="xs">
          Extra Small
        </Button>
        <Button appearance="accent" size="sm">
          Small
        </Button>
        <Button appearance="accent" size="md">
          Medium
        </Button>
        <Button appearance="accent" size="lg">
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
    appearance: 'accent',
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
