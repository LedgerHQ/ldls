import type { Meta, StoryObj } from '@storybook/react-vite';
import { View } from 'react-native';
import { BottomSheet } from './BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: 'Communication/BottomSheet',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Base: Story = {
  args: {},
  render: (args) => (
    <View className='h-screen max-w-md'>
      <BottomSheet {...args} />
    </View>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<BottomSheet
  appearance="info"
  title="Information BottomSheet"
  onClose={() => console.log('Closed')}
  description="This is additional information about the banner."
/>
`,
      },
    },
  },
};
