import { cva } from 'class-variance-authority';
import { FC } from 'react';
import { Text, View } from 'react-native';

import { useBottomSheetContext } from './BottomSheet';
import { BottomSheetHeaderProps } from './BottomSheet.types';

const bottomSheetHeaderVariants = {
  root: cva('sticky top-0 mx-64 flex'),
  textWrapper: cva(' mt-8 flex flex-1 flex-col text-center', {
    variants: {
      size: {
        sm: 'mt-10',
        lg: 'flex-col',
      },
    },
  }),
  title: cva('', {
    variants: {
      size: {
        sm: 'heading-4-semi-bold text-center',
        lg: 'heading-2-semi-bold',
      },
    },
  }),
  desc: cva('text-muted body-2', {
    variants: {
      size: {
        sm: 'text-center',
        lg: 'text-left',
      },
    },
  }),
};

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
  className,
  title,
  description,
  onBack,
  onClose,
  closeable,
  ...props
}) => {
  const { size } = useBottomSheetContext({
    consumerName: 'BottomSheetHeader',
    contextRequired: true,
  });

  return (
    <View {...props} className={bottomSheetHeaderVariants.root({ className })}>
      {title && (
        <Text className={bottomSheetHeaderVariants.title({ size })}>
          {title}
        </Text>
      )}
      {description && (
        <Text className={bottomSheetHeaderVariants.desc({ size })}>
          {description}
        </Text>
      )}
    </View>
  );
};
