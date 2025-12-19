import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { Search, type SearchProps } from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Input/Search',
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
type Story = StoryObj<typeof Search>;

const SearchStory = (args: SearchProps & { initialValue?: string }) => {
  const [query, setQuery] = useState(args.initialValue ?? '');

  return (
    <View className='flex min-h-96 items-center justify-center p-24'>
      <View className='w-full max-w-320'>
        <Search
          {...args}
          value={query}
          onChangeText={setQuery}
          onClear={args.onClear}
        />
      </View>
    </View>
  );
};

export const Base: Story = {
  render: (args) => <SearchStory {...args} />,
  args: {
    placeholder: 'Search products',
    editable: true,
    hideClearButton: false,
  },
};

export const WithContent: Story = {
  render: (args) => <SearchStory {...args} initialValue='Search text' />,
  args: {
    placeholder: 'Search products',
    editable: true,
    hideClearButton: false,
  },
};

export const WithError: Story = {
  render: (args) => <SearchStory {...args} initialValue='Invalid search' />,
  args: {
    placeholder: 'Search products',
    errorMessage: 'Search term is invalid',
    editable: true,
    hideClearButton: false,
  },
};

export const DisabledSearch: Story = {
  render: (args) => <SearchStory {...args} initialValue='Disabled search' />,
  args: {
    placeholder: 'Search products',
    editable: false,
    hideClearButton: false,
  },
};

export const WithHiddenClearButton: Story = {
  render: (args) => <SearchStory {...args} initialValue='Search text' />,
  args: {
    placeholder: 'Search products',
    editable: true,
    hideClearButton: true,
  },
};

export const WithClearCallback: Story = {
  render: (args) => (
    <SearchStory
      {...args}
      initialValue='Click clear to see callback'
      onClear={() => alert('Search cleared!')}
    />
  ),
  args: {
    placeholder: 'Search products',
    editable: true,
    hideClearButton: false,
  },
};
