import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import {
  SuggestionKeyboard,
  SuggestionKeyboardItem,
} from './SuggestionKeyboard';
import { View, ViewProps, Text } from 'react-native';
import { cn } from '../../utils';

const Container = ({
  className,
  ...props
}: ViewProps & { className?: string }) => (
  <View className={cn('w-[400px] bg-canvas', className)} {...props} />
);

const meta: Meta<typeof SuggestionKeyboard> = {
  component: SuggestionKeyboard,
  title: 'Action/SuggestionKeyboard',
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
    children: {
      control: false,
      description: 'SuggestionKeyboardItem components as children',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuggestionKeyboard>;

export const Base: Story = {
  render: (args) => (
    <Container>
      <SuggestionKeyboard {...args}>
        <SuggestionKeyboardItem onPress={() => console.log('25% pressed')}>
          25%
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem onPress={() => console.log('50% pressed')}>
          50%
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem onPress={() => console.log('75% pressed')}>
          75%
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem onPress={() => console.log('Max pressed')}>
          Max
        </SuggestionKeyboardItem>
      </SuggestionKeyboard>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('25% pressed')}>
    25%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('50% pressed')}>
    50%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('75% pressed')}>
    75%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('Max pressed')}>
    Max
  </SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const WithDisabledSuggestions: Story = {
  render: (args) => (
    <Container>
      <SuggestionKeyboard {...args}>
        <SuggestionKeyboardItem onPress={() => console.log('50$ pressed')}>
          50$
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem onPress={() => console.log('100$ pressed')}>
          100$
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem
          disabled
          onPress={() => console.log('250$ pressed')}
        >
          250$
        </SuggestionKeyboardItem>
        <SuggestionKeyboardItem
          disabled
          onPress={() => console.log('500$ pressed')}
        >
          500$
        </SuggestionKeyboardItem>
      </SuggestionKeyboard>
    </Container>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('50$ pressed')}>
    50$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('100$ pressed')}>
    100$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem disabled onPress={() => console.log('250$ pressed')}>
    250$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem disabled onPress={() => console.log('500$ pressed')}>
    500$
  </SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const ContentShowcase: Story = {
  render: () => (
    <View className="flex flex-col gap-24 p-16">
      <View>
        <Text className="text-lg font-semibold mb-8 text-base">
          2 Suggestions Layout
        </Text>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
              500$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem
              onPress={() => console.log('1000$ pressed')}
            >
              1000$
            </SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </View>

      <View>
        <Text className="text-lg font-semibold mb-8 text-base">
          3 Suggestions Layout
        </Text>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
              250$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
              500$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem
              onPress={() => console.log('1000$ pressed')}
            >
              1000$
            </SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </View>

      <View>
        <Text className="text-lg font-semibold mb-8 text-base">
          4 Suggestions Layout
        </Text>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem onPress={() => console.log('25% pressed')}>
              25%
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('50% pressed')}>
              50%
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('75% pressed')}>
              75%
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('Max pressed')}>
              Max
            </SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Showcase different numbers of SuggestionKeyboardItem children

// 2 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
    500$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('1000$ pressed')}>
    1000$
  </SuggestionKeyboardItem>
</SuggestionKeyboard>

// 3 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
    250$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
    500$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('1000$ pressed')}>
    1000$
  </SuggestionKeyboardItem>
</SuggestionKeyboard>

// 4 Suggestions
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('25% pressed')}>
    25%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('50% pressed')}>
    50%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('75% pressed')}>
    75%
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('Max pressed')}>
    Max
  </SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};

export const LayoutShowcase: Story = {
  render: () => (
    <View className="flex flex-col gap-24 p-16">
      <View>
        <Text className="text-lg font-semibold mb-8 text-base">
          Space Between (default)
        </Text>
        <Container>
          <SuggestionKeyboard>
            <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
              250$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
              500$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem
              onPress={() => console.log('1000$ pressed')}
            >
              1000$
            </SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </View>

      <View>
        <Text className="text-lg font-semibold mb-8 text-base">Centered</Text>
        <Container>
          <SuggestionKeyboard className="justify-center gap-24">
            <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
              250$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
              500$
            </SuggestionKeyboardItem>
            <SuggestionKeyboardItem
              onPress={() => console.log('1000$ pressed')}
            >
              1000$
            </SuggestionKeyboardItem>
          </SuggestionKeyboard>
        </Container>
      </View>
    </View>
  ),
  parameters: {
    docs: {
      source: {
        code: `
// Showcase different layouts of the SuggestionKeyboard

// Space Between (default)
<SuggestionKeyboard>
  <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
    250$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
    500$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('1000$ pressed')}>
    1000$
  </SuggestionKeyboardItem>
</SuggestionKeyboard>

// Centered
<SuggestionKeyboard className="justify-center gap-24">
  <SuggestionKeyboardItem onPress={() => console.log('250$ pressed')}>
    250$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('500$ pressed')}>
    500$
  </SuggestionKeyboardItem>
  <SuggestionKeyboardItem onPress={() => console.log('1000$ pressed')}>
    1000$
  </SuggestionKeyboardItem>
</SuggestionKeyboard>
`,
      },
    },
  },
};
