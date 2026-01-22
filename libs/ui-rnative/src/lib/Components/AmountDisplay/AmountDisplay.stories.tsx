import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
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
  title: 'Communication/AmountDisplay',
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
  render: (props) => {
    const [hidden, setHidden] = useState(false);

    const hiddenFormatter = (): FormattedValue => {
      return {
        integerPart: '••••',
        currencyText: '$',
        currencyPosition: 'start',
      };
    };

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <AmountDisplay
          formatter={hidden ? hiddenFormatter : props.formatter}
          value={1234.56}
        />
        <IconButton
          appearance='transparent'
          size='sm'
          icon={hidden ? EyeCross : Eye}
          accessibilityLabel={hidden ? 'Show amount' : 'Hide amount'}
          onPress={() => setHidden((v) => !v)}
        />
      </View>
    );
  },
};
