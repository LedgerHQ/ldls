import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text, View } from 'react-native';
import { Button } from '../Button';
import { BottomSheet } from './BottomSheet';
import { BottomSheetHeader } from './BottomSheetHeader';
import { useBottomSheetRef } from './useBottomSheetRef';

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  title: 'Communication/BottomSheet',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Base: Story = {
  args: {},
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='m-auto h-screen max-w-md items-center justify-center'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetHeader
            title='Title'
            description='Description'
            onClose={() => bottomSheetRef.current?.close()}
          />
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
