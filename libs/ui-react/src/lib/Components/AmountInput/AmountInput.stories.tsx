import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { TransferVertical } from '../../Symbols/Icons/TransferVertical';
import { IconButton } from '../IconButton';
import { AmountInput } from './AmountInput';

const meta = {
  title: 'Input/AmountInput',
  component: AmountInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AmountInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '0',
    currencyText: '$',
    value: '',
    onChange: () => console.log('onChange triggered'),
  },
};

export const WithRightCurrency: Story = {
  args: {
    placeholder: '0',
    currencyText: 'ETH',
    currencyPosition: 'right',
    value: '',
    onChange: () => console.log('onChange triggered'),
  },
};

export const WithValue: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    onChange: () => console.log('onChange triggered'),
  },
};

export const Disabled: Story = {
  args: {
    value: '1234.56',
    currencyText: 'ETH',
    currencyPosition: 'right',
    disabled: true,
    onChange: () => console.log('onChange triggered'),
  },
};

export const Error: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    'aria-invalid': true,
    onChange: () => console.log('onChange triggered'),
  },
};

export const IntegerOnly: Story = {
  args: {
    value: '1234',
    currencyText: '$',
    allowDecimals: false, // Important: disables decimal input
    onChange: () => console.log('onChange triggered'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Integer-only input with allowDecimals set to false to prevent decimal values.',
      },
      source: {
        code: `<AmountInput
  value="1234"
  currencyText="$"
  allowDecimals={false} // Important: disables decimal input
  onChange={() => console.log('onChange triggered')}
/>`,
      },
    },
  },
};

export const CustomMaxLength: Story = {
  args: {
    value: '123',
    currencyText: '$',
    onChange: () => console.log('onChange triggered'),
  },
};

export const LargeAmountDisplay: Story = {
  args: {
    // This story uses its own state management, so we provide placeholder args
    value: '',
    onChange: () => console.log('onChange triggered'),
  },
  render: () => {
    const [isEth, setIsEth] = React.useState(true);
    const [value, setValue] = React.useState('');

    const currentCurrency = isEth ? 'ETH' : '$';
    const convertedValue = isEth ? '$0' : '0 ETH';

    // Check if value exceeds max length (6 digits)
    const digitCount = value.replace(/\D/g, '').length;
    const hasError = digitCount > 3;
    const errorMessage = hasError ? 'Insufficient balance' : '';

    return (
      <div className='h-128 relative w-[359px] rounded-lg'>
        {/* Large amount input */}
        <div className='flex-col items-center justify-center'>
          <AmountInput
            value={value}
            placeholder='0'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            currencyText={currentCurrency}
            currencyPosition={isEth ? 'right' : 'left'}
            aria-invalid={hasError}
          />
          <div className='text-muted body-2 mt-16 text-center'>
            {convertedValue}
          </div>

          {hasError && (
            <div className='text-error mt-8 text-center'>{errorMessage}</div>
          )}
        </div>
        <IconButton
          icon={TransferVertical}
          size='xs'
          appearance='gray'
          aria-label='Toggle currency'
          className='absolute right-8 top-12'
          onClick={() => setIsEth(!isEth)}
        />
      </div>
    );
  },
};
