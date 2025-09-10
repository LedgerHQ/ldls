import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AmountInput } from './AmountInput';
import { Button } from '../Button/Button';
import { TransferVertical } from '../../Symbols/Icons/TransferVertical';

const meta = {
  title: 'Text Input/AmountInput/Overview',
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
    allowDecimals: true,
  },
};

export const WithRightCurrency: Story = {
  args: {
    placeholder: '0',
    currencyText: 'USD',
    currencyPosition: 'right',
    maxLength: 12,
    allowDecimals: true,
  },
};

export const WithValue: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    maxLength: 12,
    allowDecimals: true,
  },
};

export const Disabled: Story = {
  args: {
    value: '1234.56',
    currencyText: 'USD',
    currencyPosition: 'right',
    disabled: true,
    maxLength: 12,
    allowDecimals: true,
  },
};

export const Error: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    'aria-invalid': true,
    maxLength: 12,
    allowDecimals: true,
  },
};

export const IntegerOnly: Story = {
  args: {
    value: '1234',
    currencyText: '$',
    allowDecimals: false,
    maxLength: 8,
  },
};

export const CustomMaxLength: Story = {
  args: {
    value: '123',
    currencyText: '$',
    maxLength: 3, // Only allow 3 digits
    allowDecimals: true,
  },
};

export const LargeAmountDisplay: Story = {
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
      <div className="relative h-128 w-384 rounded-lg bg-canvas-sheet">
        {/* Large amount input */}
        <div className="flex-col items-center justify-center">
          <AmountInput
            value={value}
            placeholder="0"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            currencyText={currentCurrency}
            currencyPosition={isEth ? 'right' : 'left'}
            maxLength={6}
            aria-invalid={hasError}
          />
          <div className="text-center text-muted">{convertedValue}</div>

          {hasError ? (
            <div className="text-sm text-center text-error">{errorMessage}</div>
          ) : (
            <div className="text-center text-base">Label</div>
          )}
        </div>
        <Button
          icon={TransferVertical}
          size="sm"
          appearance="gray"
          aria-label="Toggle currency"
          className="absolute right-8 top-16"
          onClick={() => setIsEth(!isEth)}
        />
      </div>
    );
  },
};
