import type { Meta, StoryObj } from '@storybook/react-vite';
import { View, Text } from 'react-native';
import { Button } from '../Button';
import { BottomSheet } from './BottomSheet';
import { BottomSheetHeader } from './BottomSheetHeader';
import { BottomSheetScrollView, BottomSheetView } from './Scrollables';
import { useBottomSheetRef } from './useBottomSheetRef';

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: 'Containment/BottomSheet',
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
type Story = StoryObj<typeof BottomSheet>;

export const Base: Story = {
  args: {
    size: 'sm',
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    closeable: false,
    onBack: () => null,
    onClose: () => null,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-[calc(100vh-40px)] w-full items-center justify-center'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetView>
            <BottomSheetHeader title='Title' description='Description' />
          </BottomSheetView>
          <BottomSheetScrollView>
            {Array.from({ length: 100 }).map((_, index) => (
              <Text key={index}>azeazea</Text>
            ))}
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<BottomSheet
  appearance="info"
  title="Information BottomSheet"
  onClose={() => console.log('Closed')}
  description="This is additional information about the banner."
/>
`,
      },
    },
  },
};
