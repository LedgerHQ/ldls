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
  },
};

export const WithRightCurrency: Story = {
  args: {
    placeholder: '0',
    currencyText: 'USD',
    currencyPosition: 'right',
  },
};

export const WithValue: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
  },
};

export const Disabled: Story = {
  args: {
    value: '1234.56',
    currencyText: 'USD',
    currencyPosition: 'right',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: '1234.56',
    currencyText: '$',
    'aria-invalid': true,
  },
};
