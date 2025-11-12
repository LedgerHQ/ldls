import { BottomSheetVariables } from '@gorhom/bottom-sheet/lib/typescript/types';
import { forwardRef } from 'react';
import { View } from 'react-native';

export const CustomHandle = forwardRef<
  React.ElementRef<typeof View>,
  BottomSheetVariables
>((props, ref) => {
  return (
    <View
      {...props}
      ref={ref}
      className='h-16 w-80 items-center justify-center self-center bg-canvas-sheet'
    >
      <View className='h-4 w-36 rounded-full bg-muted-pressed' />
    </View>
  );
});
CustomHandle.displayName = 'CustomHandle';
