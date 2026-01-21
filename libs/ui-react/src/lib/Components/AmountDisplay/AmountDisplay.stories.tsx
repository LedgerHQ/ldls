import type { Meta, StoryObj } from '@storybook/react-vite';
import { AmountDisplay } from './AmountDisplay';
import { type FormattedValue } from './types';

const usdFormatter = (value: number): FormattedValue => {
  const [integerPart, decimalPart] = value.toFixed(2).split(/\.|,/);

  return {
    integerPart,
    decimalPart,
    currencyText: '$',
    decimalSeparator: '.',
    currencyPosition: 'start',
  };
};

const eurFormatter = (value: number): FormattedValue => {
  const [integerPart, decimalPart] = value.toFixed(2).split(/\.|,/);

  return {
    integerPart,
    decimalPart,
    currencyText: '€',
    decimalSeparator: ',',
    currencyPosition: 'end',
  };
};

const btcFormatter = (value: number): FormattedValue => {
  const [integerPart, decimalPart] = value.toFixed(1).split(/\.|,/);

  return {
    integerPart,
    decimalPart,
    currencyText: 'BTC',
    decimalSeparator: '.',
    currencyPosition: 'end',
  };
};

const meta: Meta<typeof AmountDisplay> = {
  component: AmountDisplay,
  title: 'Components/AmountDisplay',
  args: {
    formatter: eurFormatter,
  },
  argTypes: {
    formatter: {
      options: ['EUR', 'USD', 'BTC'],
      mapping: {
        USD: usdFormatter,
        EUR: eurFormatter,
        BTC: btcFormatter,
      },
      control: {
        type: 'select',
      },
      description: 'Example formatter',
    },
  },
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
