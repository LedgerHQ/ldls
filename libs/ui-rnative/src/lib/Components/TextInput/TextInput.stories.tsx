import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Input/TextInput',
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
type Story = StoryObj<typeof TextInput>;

export const Base: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput label='Username' value={value} onChangeText={setValue} />
        </View>
      </View>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [value, setValue] = useState('johndoe');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput label='Username' value={value} onChangeText={setValue} />
        </View>
      </View>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('ab');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Username'
            value={value}
            onChangeText={setValue}
            errorMessage='Username must be at least 3 characters'
          />
        </View>
      </View>
    );
  },
};

export const DisabledTextInput: Story = {
  render: () => {
    const [value] = useState('johndoe');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Username'
            value={value}
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
    const [value, setValue] = useState('Content with hidden clear');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Label'
            value={value}
            onChangeText={setValue}
            hideClearButton
          />
        </View>
      </View>
    );
  },
};

export const WithClearCallback: Story = {
  render: () => {
    const [value, setValue] = useState('Click clear to see callback');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Label'
            value={value}
            onChangeText={setValue}
            onClear={() => alert('Input cleared!')}
          />
        </View>
      </View>
    );
  },
};

export const EmailKeyboard: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Email'
            value={value}
            onChangeText={setValue}
            keyboardType='email-address'
          />
        </View>
      </View>
    );
  },
};

export const PhoneKeyboard: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <TextInput
            label='Phone Number'
            value={value}
            onChangeText={setValue}
            keyboardType='phone-pad'
          />
        </View>
      </View>
    );
  },
};
