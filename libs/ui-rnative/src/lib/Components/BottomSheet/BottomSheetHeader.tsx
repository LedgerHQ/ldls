import { useBottomSheet } from '@gorhom/bottom-sheet';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Text, View } from 'react-native';

import { ArrowLeft, Close } from 'src/lib/Symbols';
import { Button } from '../Button';
import { BottomSheetHeaderProps } from './BottomSheet.types';

const bottomSheetHeaderVariants = {
  root: cva('flex flex-row'),
};

export const BottomSheetHeader = forwardRef<
  React.ElementRef<typeof View>,
  BottomSheetHeaderProps
>(({ className, title, description, onBack, onClose, ...props }, ref) => {
  const methods = useBottomSheet();
  return (
    <View
      {...props}
      ref={ref}
      className={bottomSheetHeaderVariants.root({ className })}
    >
      <View>
        {title && <Text className='heading-3-semi-bold'>{title}</Text>}
        {description && (
          <Text className='text-muted body-2'>{description}</Text>
        )}
      </View>
      {onBack && (
        <Button onPress={onBack} icon={ArrowLeft} appearance='transparent' />
      )}
      {onClose && (
        <Button onPress={onClose} icon={Close} appearance='transparent' />
      )}
    </View>
  );
});
