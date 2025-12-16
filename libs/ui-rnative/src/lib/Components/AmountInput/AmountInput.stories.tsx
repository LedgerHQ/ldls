import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { AmountInput } from './AmountInput';

const meta: Meta<typeof AmountInput> = {
  component: AmountInput,
  title: 'Input/AmountInput',
  parameters: {
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
type Story = StoryObj<typeof AmountInput>;

export const Base: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='USD'
          />
        </View>
      </View>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('1234.56');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='USD'
          />
        </View>
      </View>
    );
  },
};

export const CurrencyPositionLeft: Story = {
  render: () => {
    const [value, setValue] = useState('1000');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='$'
            currencyPosition='left'
          />
        </View>
      </View>
    );
  },
};

export const CurrencyPositionRight: Story = {
  render: () => {
    const [value, setValue] = useState('1000');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='ETH'
            currencyPosition='right'
          />
        </View>
      </View>
    );
  },
};

export const IntegerOnly: Story = {
  render: () => {
    const [value, setValue] = useState('1234');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='items'
            allowDecimals={false}
          />
        </View>
      </View>
    );
  },
};

export const WithThousandsSeparator: Story = {
  render: () => {
    const [value, setValue] = useState('1000000');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='USD'
            thousandsSeparator={true}
          />
        </View>
      </View>
    );
  },
};

export const WithoutThousandsSeparator: Story = {
  render: () => {
    const [value, setValue] = useState('1000000');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='USD'
            thousandsSeparator={false}
          />
        </View>
      </View>
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState('1234.56');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='USD'
            isInvalid={true}
          />
        </View>
      </View>
    );
  },
};

export const DisabledAmountInput: Story = {
  render: () => {
    const [value] = useState('1234.56');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={() => {}}
            currencyText='USD'
            editable={false}
          />
        </View>
      </View>
    );
  },
};

export const CustomLengthLimits: Story = {
  render: () => {
    const [value, setValue] = useState('123');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AmountInput
            value={value}
            onChangeText={setValue}
            currencyText='$'
            maxIntegerLength={6}
            maxDecimalLength={2}
          />
        </View>
      </View>
    );
  },
};
