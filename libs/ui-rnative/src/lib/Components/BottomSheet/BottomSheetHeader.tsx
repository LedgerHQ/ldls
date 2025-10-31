import { useBottomSheet } from '@gorhom/bottom-sheet';
import { cva } from 'class-variance-authority';
import { FC, useCallback } from 'react';
import { Text, View } from 'react-native';
import { ArrowLeft, Close } from '../../Symbols';
import { IconButton } from '../IconButton';
import { useBottomSheetContext } from './BottomSheet';
import { BottomSheetHeaderProps } from './types';

const bottomSheetHeaderVariants = {
  root: cva('sticky top-0 z-dialog-content bg-canvas-sheet pb-12', {
    variants: {
      spacing: {
        true: 'px-16',
        false: '',
      },
    },
  }),
  inner: cva('flex flex-row items-start justify-between gap-16', {
    variants: {
      appearance: {
        compact: '',
        expanded: 'mb-16',
      },
      noIcons: {
        true: 'hidden',
        false: '',
      },
    },
  }),
  textWrapper: cva('flex flex-1 text-center', {
    variants: {
      appearance: {
        compact: '',
        expanded: 'gap-8',
      },
    },
  }),
  title: cva('text-base', {
    variants: {
      appearance: {
        compact: 'text-center heading-4-semi-bold',
        expanded: 'heading-2-semi-bold',
      },
    },
  }),
  desc: cva('text-muted body-2', {
    variants: {
      appearance: {
        compact: 'text-center',
        expanded: 'text-left',
      },
    },
  }),
};

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
  className,
  title,
  description,
  appearance = 'compact',
  spacing = false,
  ...props
}) => {
  const methods = useBottomSheet();
  const { onBack, closeable } = useBottomSheetContext({
    consumerName: 'BottomSheetHeader',
    contextRequired: true,
  });

  const handleClose = useCallback(() => {
    methods.close();
  }, [methods]);

  if (!title && !description && !onBack && !closeable) {
    return null;
  }

  const titleComponent = (
    <View className={bottomSheetHeaderVariants.textWrapper({ appearance })}>
      {title && (
        <Text className={bottomSheetHeaderVariants.title({ appearance })}>
          {title}
        </Text>
      )}
      {description && (
        <Text className={bottomSheetHeaderVariants.desc({ appearance })}>
          {description}
        </Text>
      )}
    </View>
  );

  return (
    <View
      {...props}
      className={bottomSheetHeaderVariants.root({ className, spacing })}
    >
      <View
        className={bottomSheetHeaderVariants.inner({
          appearance,
          noIcons: !onBack && !closeable,
        })}
      >
        <View className='size-44'>
          {onBack && (
            <IconButton
              accessibilityLabel='Go back'
              size='sm'
              onPress={onBack}
              icon={ArrowLeft}
              appearance='transparent'
            />
          )}
        </View>
        {appearance === 'compact' && titleComponent}
        <View className='size-44'>
          {closeable && (
            <IconButton
              accessibilityLabel='Close'
              size='sm'
              onPress={handleClose}
              icon={Close}
              appearance='transparent'
            />
          )}
        </View>
      </View>
      {appearance === 'expanded' && titleComponent}
    </View>
  );
};
BottomSheetHeader.displayName = 'BottomSheetHeader';
