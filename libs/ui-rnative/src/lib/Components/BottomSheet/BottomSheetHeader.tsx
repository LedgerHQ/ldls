import { BottomSheetView as GorhomBottomSheetView } from '@gorhom/bottom-sheet';
import { cva } from 'class-variance-authority';
import { remapProps } from 'nativewind';
import { FC } from 'react';
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

/**
  ThirdPartyButton is a component with two "style" props, buttonStyle & labelStyle.
  We can use remapProps to create new props that accept Tailwind CSS's classNames.
 */
export const BottomSheetView = remapProps(GorhomBottomSheetView, {
  className: 'style',
});
