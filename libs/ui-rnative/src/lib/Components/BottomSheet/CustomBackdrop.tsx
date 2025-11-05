import { BottomSheetBackdrop as GorhomBottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { cssInterop } from 'nativewind';
import React from 'react';
import { BottomSheetProps } from './types';

const StyledCustomBackdrop = cssInterop(GorhomBottomSheetBackdrop, {
  className: 'style',
});

type BackDropProps = React.ComponentProps<typeof GorhomBottomSheetBackdrop> & {
  backdropPressBehavior?: BottomSheetProps['backdropPressBehavior'];
  onPress?: () => void;
};

export const CustomBackdrop = ({
  backdropPressBehavior,
  onPress,
  ...props
}: BackDropProps) => {
  return (
    <StyledCustomBackdrop
      {...props}
      className='bg-canvas-overlay'
      opacity={1}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior={backdropPressBehavior}
      onPress={() => {
        console.log('onPress');
        onPress?.();
      }}
    />
  );
};
CustomBackdrop.displayName = 'CustomBackdrop';
