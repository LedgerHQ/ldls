import { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  BottomSheet,
  BottomSheetHeader,
  Button,
  BottomSheetScrollView,
} from '@ledgerhq/ldls-ui-rnative';
import { forwardRef } from 'react';
import { Text, TextInput } from 'react-native';

export const BottomSheetsButton = ({ onPress }: any) => {
  return (
    <Button appearance='base' onPress={onPress}>
      Base
    </Button>
  );
};

export const BottomSheets = forwardRef<React.ElementRef<typeof BottomSheet>>(
  (props, ref) => {
    return (
      <BottomSheet closeable snapPoints='half' ref={ref}>
        <BottomSheetView>
          <BottomSheetHeader
            title='Title'
            appearance='compact'
            description='Description'
          />
          {Array.from({ length: 2 }).map((_, index) => (
            <Text className='mb-24 text-base' key={index}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              excepturi odit, quis tenetur iste perspiciatis mollitia porro
              velit laborum quasi numquam reiciendis dolor! Et quia voluptates
              eum, sunt asperiores quod.
            </Text>
          ))}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);
