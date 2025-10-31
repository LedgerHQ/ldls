import { BottomSheetBackdrop as GorhomBottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { cssInterop } from 'nativewind';
import React from 'react';

const StyledCustomBackdrop = cssInterop(GorhomBottomSheetBackdrop, {
  className: 'style',
});

type BackDropProps = React.ComponentProps<typeof GorhomBottomSheetBackdrop> & {
  showBackdropPress?: boolean;
  onPress?: () => void;
};

export const CustomBackdrop = ({
  showBackdropPress,
  onPress,
  ...props
}: BackDropProps) => (
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
CustomBackdrop.displayName = 'CustomBackdrop';
