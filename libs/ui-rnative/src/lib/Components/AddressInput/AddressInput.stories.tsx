import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { AddressInput } from './AddressInput';

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
};

export default meta;
type Story = StoryObj<typeof AddressInput>;

export const Base: Story = {
  render: () => {
    const [address, setAddress] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={setAddress}
            onQrCodeClick={() => alert('QR code scanner opened')}
          />
        </View>
      </View>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [address, setAddress] = useState(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27',
    );

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={setAddress}
            onQrCodeClick={() => alert('QR code scanner opened')}
          />
        </View>
      </View>
    );
  },
};

export const WithCustomPrefix: Story = {
  render: () => {
    const [address, setAddress] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            prefix='From:'
            placeholder='Enter sender address'
            value={address}
            onChangeText={setAddress}
            onQrCodeClick={() => alert('QR code scanner opened')}
          />
        </View>
      </View>
    );
  },
};

export const WithoutQrCode: Story = {
  render: () => {
    const [address, setAddress] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </View>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [address, setAddress] = useState('invalid-address');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={setAddress}
            errorMessage='Invalid address format'
            onQrCodeClick={() => alert('QR code scanner opened')}
          />
        </View>
      </View>
    );
  },
};

export const DisabledAddressInput: Story = {
  render: () => {
    const [address] = useState('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={() => {}}
            editable={false}
          />
        </View>
      </View>
    );
  },
};

export const WithHiddenClearButton: Story = {
  render: () => {
    const [address, setAddress] = useState(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb27',
    );

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <AddressInput
            placeholder='Enter address or ENS'
            value={address}
            onChangeText={setAddress}
            hideClearButton
            onQrCodeClick={() => alert('QR code scanner opened')}
          />
        </View>
      </View>
    );
  },
};
