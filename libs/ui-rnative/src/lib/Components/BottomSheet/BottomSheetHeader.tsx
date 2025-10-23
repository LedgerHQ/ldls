import { BottomSheetView } from '@gorhom/bottom-sheet';
import { cva } from 'class-variance-authority';
import { tailwind } from 'nativewind';
import { FC, useState } from 'react';
import { Text, View } from 'react-native';

import { ArrowLeft, Close } from 'src/lib/Symbols';
import { Button } from '../Button';
import { BottomSheetHeaderProps } from './BottomSheet.types';

const bottomSheetHeaderVariants = {
  root: cva('flex flex-row justify-between p-16'),
};

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
  className,
  title,
  description,
  onBack,
  onClose,
  ...props
}) => {
  return (
    <BottomSheetView
      {...props}
      className={tailwind(bottomSheetHeaderVariants.root({ className }))}
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
        <Button
          size='xs'
          onPress={onClose}
          icon={Close}
          appearance='transparent'
        />
      )}
    </BottomSheetView>
  );
};
