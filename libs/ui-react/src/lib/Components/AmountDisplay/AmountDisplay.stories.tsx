import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Eye, EyeCross } from '../../Symbols';
import { IconButton } from '../IconButton';
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

export const WithHideButton: Story = {
  render: () => {
    const [hidden, setHidden] = useState(false);

    const hiddenFormatter = (): FormattedValue => {
      return {
        integerPart: '••••',
        currencyText: '$',
        currencyPosition: 'start',
      };
    };

    return (
      <div className='flex flex-row place-items-center gap-12'>
        <AmountDisplay
          formatter={hidden ? hiddenFormatter : usdFormatter}
          value={1234.56}
        />
        <IconButton
          appearance='transparent'
          size='sm'
          icon={hidden ? EyeCross : Eye}
          aria-label={hidden ? 'Unhide amount' : 'Hide amount'}
          onClick={() => setHidden((v) => !v)}
        />
      </div>
    );
  },
};
