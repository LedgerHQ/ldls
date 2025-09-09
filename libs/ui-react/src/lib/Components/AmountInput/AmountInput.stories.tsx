import type { Meta, StoryObj } from '@storybook/react-vite';
import { AmountInput } from './AmountInput';

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
