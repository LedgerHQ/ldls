import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Banner } from '../Banner';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Input/Select',
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
type Story = StoryObj<typeof Select>;

export const WebPreviewWarning: Story = {
  render: () => (
    <Banner
      appearance='warning'
      title='Unsupported previews on web'
      description='For this component, previewing stories is currently only supported on mobile. Reanimated causes compatibility issues with the web preview, so for now, please test on-device. We plan to add screenshots or embed Expo Snack in the future.'
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          '⚠️ This component requires testing on a physical device or emulator due to Reanimated compatibility issues with web previews.',
      },
    },
  },
};
