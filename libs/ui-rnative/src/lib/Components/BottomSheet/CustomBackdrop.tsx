import { BottomSheetBackdrop as GorhomBottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { cssInterop } from 'nativewind';
import React from 'react';
import { BottomSheetProps } from './types';

const StyledCustomBackdrop = cssInterop(GorhomBottomSheetBackdrop, {
  className: 'style',
});

type BackDropProps = React.ComponentProps<typeof GorhomBottomSheetBackdrop> & {
  showBackdropPress?: BottomSheetProps['showBackdropPress'];
  onPress?: () => void;
};

export const CustomBackdrop = ({
  showBackdropPress,
  onPress,
  ...props
}: BackDropProps) => {
  return (
    <StyledCustomBackdrop
      {...props}
      className='bg-canvas-overlay'
      opacity={1}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior={showBackdropPress ? 'none' : 'close'}
      onPress={onPress}
    />
  );
};
CustomBackdrop.displayName = 'CustomBackdrop';
