import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Input/TextInput',
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
  render: (props) => <TextInput {...props} className='max-w-md' />,
};

export const WithContent: Story = {
  args: {
    label: 'Label',
  },
  render: (props) => (
    <TextInput defaultValue='Initial content' {...props} className='max-w-md' />
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    errorMessage: 'Please enter a valid email address',
  },
  render: (props) => (
    <TextInput defaultValue='invalid.email' {...props} className='max-w-md' />
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Label',
  },
  render: (props) => (
    <TextInput
      defaultValue='Disabled content'
      editable={false}
      {...props}
      className='max-w-md'
    />
  ),
};

export const HiddenClearButton: Story = {
  args: {
    label: 'Hidden clear button',
  },
  render: (props) => {
    return (
      <TextInput
        defaultValue='Edit me'
        hideClearButton
        {...props}
        className='max-w-md'
      />
    );
  },
};

export const ControlledInput: Story = {
  args: {
    label: 'Controlled Input',
  },
  render: (props) => {
    const [value, setValue] = useState('Edit me');
    return (
      <TextInput
        value={value}
        onChangeText={setValue}
        {...props}
        className='max-w-md'
      />
    );
  },
};

export const UncontrolledInput: Story = {
  args: {
    label: 'Uncontrolled Input',
  },
  render: (props) => {
    return <TextInput defaultValue='Edit me' {...props} className='max-w-md' />;
  },
};

export const ExtendedClearBehavior: Story = {
  args: {
    label: 'Extended clear behavior',
  },
  render: (props) => {
    return (
      <TextInput
        defaultValue='Clear me'
        {...props}
        onClear={() => alert('Extended clear behavior')}
        className='max-w-md'
      />
    );
  },
};

export const Interactive: Story = {
  args: {},
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      if (!email || !password) {
        setError('Both fields are required');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      setError('');
      setSubmitted(true);
    };

    return (
      <View className='max-w-md gap-16'>
        <TextInput
          label='Email'
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError('');
            setSubmitted(false);
          }}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          label='Password'
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setError('');
            setSubmitted(false);
          }}
          secureTextEntry
          errorMessage={error}
        />
        <Pressable
          className='h-48 items-center justify-center rounded-sm bg-accent active:opacity-80'
          onPress={handleSubmit}
        >
          <Text className='text-on-accent body-2'>Submit</Text>
        </Pressable>
        {submitted && (
          <Text className='text-success body-2'>
            Form submitted successfully!
          </Text>
        )}
      </View>
    );
  },
};
