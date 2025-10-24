import { useBottomSheet } from '@gorhom/bottom-sheet';
import { cva } from 'class-variance-authority';
import { FC, useCallback } from 'react';
import { View } from 'react-native';
import { ArrowLeft, Close } from 'src/lib/Symbols';
import { IconButton } from '../IconButton';
import { BottomSheetHeaderActionsProps } from './BottomSheet.types';

const bottomSheetHeaderVariants = {
  leftIcon: cva('absolute left-16'),
  rightIcon: cva('absolute right-16'),
};

export const BottomSheetHeaderActions: FC<BottomSheetHeaderActionsProps> = ({
  className,
  onBack,
  onClose,
  closeable,
  ...props
}) => {
  const methods = useBottomSheet();
  console.log({ closeable, onClose });
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      console.log('yo');
      methods.close();
    }
  }, [onClose, methods]);

  return (
    <View {...props} className='z-[1] h-44'>
      {onBack && (
        <IconButton
          className={bottomSheetHeaderVariants.leftIcon()}
          accessibilityLabel='Go back'
          size='sm'
          onPress={onBack}
          icon={ArrowLeft}
          appearance='transparent'
        />
      )}

      {(onClose || closeable) && (
        <IconButton
          className={bottomSheetHeaderVariants.rightIcon()}
          accessibilityLabel='Close'
          size='sm'
          onPress={handleClose}
          icon={Close}
          appearance='transparent'
        />
      )}
    </View>
  );
};
