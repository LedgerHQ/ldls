import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Text, View } from 'react-native';
import { Information } from '../../Symbols';
import { Button } from '../Button';
import { InteractiveIcon } from '../InteractiveIcon';
import { GlobalTooltipBottomSheet } from './GlobalTooltipBottomSheet';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  subcomponents: { TooltipTrigger, TooltipContent },
  title: 'Communication/Tooltip',
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Base: Story = {
  render: () => (
    <>
      <View className='flex min-h-400 items-center justify-center p-24'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Press me</Button>
          </TooltipTrigger>
          <TooltipContent
            title='My tooltip title'
            content={<Text>This is a helpful tooltip</Text>}
          />
        </Tooltip>
      </View>
      <GlobalTooltipBottomSheet />
    </>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <>
      <View className='flex min-h-400 items-center justify-center p-24'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Press me</Button>
          </TooltipTrigger>
          <TooltipContent
            title='My tooltip title'
            content={
              <View className='flex items-start gap-12'>
                <Text className='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Button size='xs' appearance='accent'>
                  Custom tooltip action
                </Button>
              </View>
            }
          />
        </Tooltip>
      </View>
      <GlobalTooltipBottomSheet />
    </>
  ),
};

export const WithMultipleTooltips: Story = {
  render: () => (
    <>
      <View className='flex min-h-400 flex-row items-center justify-center gap-16 p-24'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Tooltip 1</Button>
          </TooltipTrigger>
          <TooltipContent
            title='First'
            content={<Text>First tooltip content</Text>}
          />
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Tooltip 2</Button>
          </TooltipTrigger>
          <TooltipContent
            title='Second'
            content={<Text>Second tooltip content</Text>}
          />
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <InteractiveIcon iconType='filled' aria-label='Info'>
              <Information />
            </InteractiveIcon>
          </TooltipTrigger>
          <TooltipContent
            title='Third'
            content={<Text>Third tooltip content</Text>}
          />
        </Tooltip>
      </View>
      <GlobalTooltipBottomSheet />
    </>
  ),
};

export const WithChangeCallback: Story = {
  render: () => {
    return (
      <>
        <View className='flex min-h-400 items-center justify-center p-24'>
          <Tooltip
            onOpenChange={(newOpen) => alert(`Opened changes to: ${newOpen}`)}
          >
            <TooltipTrigger asChild>
              <Button>Press me</Button>
            </TooltipTrigger>
            <TooltipContent
              title='My tooltip title'
              content={<Text>This is a helpful tooltip</Text>}
            />
          </Tooltip>
        </View>
        <GlobalTooltipBottomSheet />
      </>
    );
  },
};
