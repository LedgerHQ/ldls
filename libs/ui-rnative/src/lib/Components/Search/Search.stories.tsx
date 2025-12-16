import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { Search } from './Search';

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
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Base: Story = {
  render: () => {
    const [query, setQuery] = useState('');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [query, setQuery] = useState('Search text');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [query, setQuery] = useState('Invalid search');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
            onChangeText={setQuery}
            errorMessage='Search term is invalid'
          />
        </View>
      </View>
    );
  },
};

export const DisabledSearch: Story = {
  render: () => {
    const [query] = useState('Disabled search');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
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
    const [query, setQuery] = useState('Search text');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
            onChangeText={setQuery}
            hideClearButton
          />
        </View>
      </View>
    );
  },
};

export const WithClearCallback: Story = {
  render: () => {
    const [query, setQuery] = useState('Click clear to see callback');

    return (
      <View className='flex min-h-400 items-center justify-center p-24'>
        <View className='w-full max-w-320'>
          <Search
            placeholder='Search products'
            value={query}
            onChangeText={setQuery}
            onClear={() => alert('Search cleared!')}
          />
        </View>
      </View>
    );
  },
};
