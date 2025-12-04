import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { useState } from 'react';
import { View } from 'react-native';
import { GlobalSelectBottomSheet } from './GlobalSelectBottomSheet';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  subcomponents: {
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectItemText,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
  },
  title: 'Input/Select',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple');

    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <View className='w-full max-w-320'>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger label='Choose a fruit'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='apple'>
                  <SelectItemText>Apple</SelectItemText>
                </SelectItem>
                <SelectItem value='banana'>
                  <SelectItemText>Banana</SelectItemText>
                </SelectItem>
                <SelectItem value='orange'>
                  <SelectItemText>Orange</SelectItemText>
                </SelectItem>
                <SelectItem value='grape'>
                  <SelectItemText>Grape</SelectItemText>
                </SelectItem>
                <SelectItem value='mango'>
                  <SelectItemText>Mango</SelectItemText>
                </SelectItem>
              </SelectContent>
            </Select>
          </View>
        </View>
        <GlobalSelectBottomSheet />
      </>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [value, setValue] = useState<string>('btc');

    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <View className='w-full max-w-320'>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger label='Select cryptocurrency'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Popular</SelectLabel>
                  <SelectItem value='btc'>
                    <SelectItemText>Bitcoin</SelectItemText>
                  </SelectItem>
                  <SelectItem value='eth'>
                    <SelectItemText>Ethereum</SelectItemText>
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Altcoins</SelectLabel>
                  <SelectItem value='ada'>
                    <SelectItemText>Cardano</SelectItemText>
                  </SelectItem>
                  <SelectItem value='dot'>
                    <SelectItemText>Polkadot</SelectItemText>
                  </SelectItem>
                  <SelectItem value='sol'>
                    <SelectItemText>Solana</SelectItemText>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        </View>
        <GlobalSelectBottomSheet />
      </>
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option1');

    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <View className='w-full max-w-320'>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger label='Select option'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='option1'>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2' disabled>
                  <SelectItemText>Option 2 (Disabled)</SelectItemText>
                </SelectItem>
                <SelectItem value='option3'>
                  <SelectItemText>Option 3</SelectItemText>
                </SelectItem>
                <SelectItem value='option4' disabled>
                  <SelectItemText>Option 4 (Disabled)</SelectItemText>
                </SelectItem>
                <SelectItem value='option5'>
                  <SelectItemText>Option 5</SelectItemText>
                </SelectItem>
              </SelectContent>
            </Select>
          </View>
        </View>
        <GlobalSelectBottomSheet />
      </>
    );
  },
};

export const DisabledSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string>('apple');

    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <View className='w-full max-w-320'>
            <Select value={value} onValueChange={setValue} disabled>
              <SelectTrigger label='Disabled select'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='apple'>
                  <SelectItemText>Apple</SelectItemText>
                </SelectItem>
                <SelectItem value='banana'>
                  <SelectItemText>Banana</SelectItemText>
                </SelectItem>
                <SelectItem value='orange'>
                  <SelectItemText>Orange</SelectItemText>
                </SelectItem>
              </SelectContent>
            </Select>
          </View>
        </View>
        <GlobalSelectBottomSheet />
      </>
    );
  },
};

export const WithChangeCallback: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option1');

    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <View className='w-full max-w-320'>
            <Select
              value={value}
              onValueChange={(newValue) => {
                setValue(newValue);
                alert(`Selected: ${newValue}`);
              }}
              onOpenChange={(open) => {
                alert(`Select ${open ? 'opened' : 'closed'}`);
              }}
            >
              <SelectTrigger label='Select with callbacks'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='option1'>
                  <SelectItemText>Option 1</SelectItemText>
                </SelectItem>
                <SelectItem value='option2'>
                  <SelectItemText>Option 2</SelectItemText>
                </SelectItem>
                <SelectItem value='option3'>
                  <SelectItemText>Option 3</SelectItemText>
                </SelectItem>
              </SelectContent>
            </Select>
          </View>
        </View>
        <GlobalSelectBottomSheet />
      </>
    );
  },
};
