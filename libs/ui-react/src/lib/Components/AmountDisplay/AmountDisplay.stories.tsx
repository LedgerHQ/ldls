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
    formatter: (value) => ({
      formattedValue: `${value.toFixed(2)}`,
      decimalSeparator: '.',
      currencyText: '€',
      currencyPosition: 'left',
    }),
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
