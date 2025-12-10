import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Utility/Text',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    typo: 'body1',
    color: 'base',
    children: 'Hello World',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Text typo='body1' color='base'>
  Hello World
</Text>
`,
      },
    },
  },
};
