import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
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
  render: (props) => <TextInput {...props} />,
};

export const WithError: Story = {
  args: {
    label: 'Email',
    errorMessage: 'Please enter a valid email address',
  },
  render: (props) => <TextInput {...props} />,
};
