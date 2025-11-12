import {
  BottomSheet,
  BottomSheetHeader,
  Button,
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetView,
} from '@ledgerhq/ldls-ui-rnative';
import { forwardRef } from 'react';
import { Text, View } from 'react-native';

export const BottomSheetsButton = ({ onPress }: any) => {
  return (
    <Button appearance='base' onPress={onPress}>
      Open
    </Button>
  );
};

export const BottomSheetFlatLists = forwardRef<
  React.ElementRef<typeof BottomSheet>
>((props, ref) => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: i.toString(),
    title: `Item ${i + 1}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  }));

  return (
    <BottomSheet
      {...props}
      ref={ref}
      backdropPressBehavior='close'
      snapPoints={['25%', '50%', '90%']}
    >
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
              <Text className='text-muted body-3'>{typedItem.description}</Text>
            </View>
          );
        }}
      />
    </BottomSheet>
  );
});

export const BottomSheetDynamicSize = forwardRef<
  React.ElementRef<typeof BottomSheet>
>((props, ref) => {
  const data = Array.from(
    new Array(20).fill(0).map((_, i) => ({
      id: i.toString(),
      title: `Item ${i}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    })),
  );

  return (
    <BottomSheet
      {...props}
      ref={ref}
      snapPoints={null}
      enableDynamicSizing
      maxDynamicContentSize='fullWithOffset'
      backdropPressBehavior='close'
    >
      <BottomSheetView>
        <BottomSheetHeader
          title='Dynamic Sizing'
          appearance='compact'
          description='This bottom sheet adapts to its content height'
        />
      </BottomSheetView>
      <BottomSheetScrollView className='flex flex-col gap-12'>
        {data.map((item) => (
          <View className='flex flex-col gap-4 border-b border-base py-12'>
            <Text className='text-base body-2-semi-bold'>{item.title}</Text>
            <Text className='text-muted body-3'>{item.description}</Text>
          </View>
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
  );
});
