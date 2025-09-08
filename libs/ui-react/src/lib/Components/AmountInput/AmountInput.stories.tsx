import type { Meta, StoryObj } from '@storybook/react';
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
    fiatText: '$',
  },
};

export const WithRightFiat: Story = {
  args: {
    placeholder: '0',
    fiatText: 'USD',
    fiatPosition: 'right',
  },
};

export const WithValue: Story = {
  args: {
    value: '1234.56',
    fiatText: '$',
  },
};

export const Disabled: Story = {
  args: {
    value: '1234.56',
    fiatText: 'USD',
    fiatPosition: 'right',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: '1234.56',
    fiatText: '$',
    'aria-invalid': true,
  },
};
