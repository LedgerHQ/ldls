import {
  BottomSheet,
  BottomSheetHeader,
  Button,
  BottomSheetFlatList,
} from '@ledgerhq/ldls-ui-rnative';
import { forwardRef } from 'react';
import { Text, View } from 'react-native';

export const BottomSheetsButton = ({ onPress }: any) => {
  return (
    <Button appearance='base' onPress={onPress}>
      Base
    </Button>
  );
};

export const BottomSheets = forwardRef<React.ElementRef<typeof BottomSheet>>(
  (props, ref) => {
    const data = Array.from({ length: 100 }, (_, i) => ({
      id: i.toString(),
      title: `Item ${i + 1}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }));

    return (
      <BottomSheet {...props} ref={ref} closeable>
        <BottomSheetHeader
          spacing
          title='Virtual List'
          appearance='compact'
          description='This bottom sheet contains a virtualized list'
        />
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item) => (item as any).id}
          renderItem={({ item }) => {
            const typedItem = item as any;
            return (
              <View className='flex flex-col gap-4 border-b border-base py-12'>
                <Text className='text-base body-2-semi-bold'>
                  {typedItem.title}
                </Text>
                <Text className='text-muted body-3'>
                  {typedItem.description}
                </Text>
              </View>
            );
          }}
        />
      </BottomSheet>
    );
  },
);
