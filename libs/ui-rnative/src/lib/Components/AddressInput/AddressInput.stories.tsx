import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { AddressInput, type AddressInputProps } from './AddressInput';

const meta: Meta<typeof AddressInput> = {
  component: AddressInput,
  title: 'Input/AddressInput',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty',
    },
    prefix: {
      control: 'text',
      description: 'Custom prefix text (default: "To:")',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below input',
    },
    editable: {
      control: 'boolean',
      description: 'Whether the input is editable',
    },
    hideClearButton: {
      control: 'boolean',
      description: 'Hide the clear button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddressInput>;

const AddressInputStory = (args: AddressInputProps) => {
  const [address, setAddress] = useState(args.value?.toString() ?? '');

  return (
    <View className='flex min-h-400 items-center justify-center p-24'>
      <View className='w-full max-w-320'>
        <AddressInput
          {...args}
          value={address}
          onChangeText={setAddress}
          onQrCodeClick={
            args.onQrCodeClick ?? (() => alert('QR code scanner opened'))
          }
        />
      </View>
    </View>
  );
};

export const Base: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    prefix: 'To:',
    editable: true,
    hideClearButton: false,
  },
};

export const WithContent: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    value: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27',
    prefix: 'To:',
    editable: true,
    hideClearButton: false,
  },
};

export const WithCustomPrefix: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter sender address',
    prefix: 'From:',
    editable: true,
    hideClearButton: false,
  },
};

const AddressInputWithoutQrStory = (args: AddressInputProps) => {
  const [address, setAddress] = useState(args.value?.toString() ?? '');

  return (
    <View className='flex min-h-400 items-center justify-center p-24'>
      <View className='w-full max-w-320'>
        <AddressInput
          {...args}
          value={address}
          onChangeText={setAddress}
          onQrCodeClick={undefined}
        />
      </View>
    </View>
  );
};

export const WithoutQrCode: Story = {
  render: (args) => <AddressInputWithoutQrStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    prefix: 'To:',
    editable: true,
    hideClearButton: false,
  },
};

export const WithError: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    value: 'invalid-address',
    errorMessage: 'Invalid address format',
    prefix: 'To:',
    editable: true,
    hideClearButton: false,
  },
};

export const DisabledAddressInput: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    value: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27',
    prefix: 'To:',
    editable: false,
    hideClearButton: false,
  },
};

export const WithHiddenClearButton: Story = {
  render: (args) => <AddressInputStory {...args} />,
  args: {
    placeholder: 'Enter address or ENS',
    value: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27',
    prefix: 'To:',
    editable: true,
    hideClearButton: true,
  },
};
