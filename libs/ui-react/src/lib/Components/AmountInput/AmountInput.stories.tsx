import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AmountInput } from './AmountInput';
import { IconButton } from '../IconButton';
import { TransferVertical } from '../../Symbols/Icons/TransferVertical';

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
    maxLength: 12,
    value: '',
    allowDecimals: true,
    onChange: () => console.log('onChange triggered'),
  },
};

export const WithRightCurrency: Story = {
  args: {
    placeholder: '0',
    currencyText: 'USD',
    currencyPosition: 'right',
    maxLength: 12,
    value: '',
    onChange: () => console.log('onChange triggered'),
  },
};

export const WithValue: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    maxLength: 12,
    onChange: () => console.log('onChange triggered'),
  },
};

export const Disabled: Story = {
  args: {
    value: '1234.56',
    currencyText: 'USD',
    currencyPosition: 'right',
    disabled: true,
    maxLength: 12,
    onChange: () => console.log('onChange triggered'),
  },
};

export const Error: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    'aria-invalid': true,
    maxLength: 12,
    onChange: () => console.log('onChange triggered'),
  },
};

export const IntegerOnly: Story = {
  args: {
    value: '1234',
    currencyText: '$',
    allowDecimals: false, // Important: disables decimal input
    maxLength: 8,
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
  maxLength={8}
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
    maxLength: 3, // Only allow 3 digits
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
      <div className='relative h-128 w-384 rounded-lg'>
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
            maxLength={6}
            aria-invalid={hasError}
          />
          <div className='mt-16 text-center text-muted body-2'>
            {convertedValue}
          </div>

          {hasError && (
            <div className='mt-8 text-center text-error'>{errorMessage}</div>
          )}
        </div>
        <IconButton
          icon={TransferVertical}
          size='sm'
          appearance='gray'
          aria-label='Toggle currency'
          className='absolute right-8 top-4'
          onClick={() => setIsEth(!isEth)}
        />
      </div>
    );
  },
};
