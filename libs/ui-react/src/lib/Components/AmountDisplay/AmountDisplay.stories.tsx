import type { Meta, StoryObj } from '@storybook/react-vite';
import { AmountDisplay } from './AmountDisplay';

const meta: Meta<typeof AmountDisplay> = {
  component: AmountDisplay,
  title: 'Components/AmountDisplay',
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
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
type Story = StoryObj<typeof AmountDisplay>;

export const Base: Story = {
  args: {
    value: 1234.56,
    currencyText: 'EUR',
  },
  parameters: {
    docs: {
      source: {
        code: `
<AmountDisplay value={1234.56} />
        `.trim(),
      },
    },
  },
};
