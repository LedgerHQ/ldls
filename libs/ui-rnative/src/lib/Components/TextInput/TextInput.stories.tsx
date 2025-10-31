import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
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
  render: (props) => <TextInput {...props} containerClassName='max-w-md' />,
};

export const WithContent: Story = {
  args: {
    label: 'Label',
  },
  render: (props) => (
    <TextInput
      defaultValue='Initial content'
      {...props}
      containerClassName='max-w-md'
    />
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    errorMessage: 'Please enter a valid email address',
  },
  render: (props) => (
    <TextInput
      defaultValue='invalid.email'
      {...props}
      containerClassName='max-w-md'
    />
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
      containerClassName='max-w-md'
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
        containerClassName='max-w-md'
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
        containerClassName='max-w-md'
      />
    );
  },
};

export const UncontrolledInput: Story = {
  args: {
    label: 'Uncontrolled Input',
  },
  render: (props) => {
    return (
      <TextInput
        defaultValue='Edit me'
        {...props}
        containerClassName='max-w-md'
      />
    );
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
        containerClassName='max-w-md'
      />
    );
  },
};
