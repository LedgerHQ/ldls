import GorghomBottomSheet from '@gorhom/bottom-sheet';
import { createSafeContext, useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { cssInterop } from 'nativewind';
import { forwardRef, useCallback, useMemo, useRef } from 'react';
import { CustomBackdrop } from './CustomBackdrop';
import { CustomHandle } from './CustomHandle';
import { BottomSheetProps } from './types';

const StyledGorghomBottomSheet = cssInterop(GorghomBottomSheet, {
  className: 'style',
  backgroundClassName: 'backgroundStyle',
});

const bottomSheetSnapPoints = {
  full: ['95%'],
  half: ['50%'],
  quarter: ['25%'],
};

const [BottomSheetProvider, useBottomSheetContext] =
  createSafeContext<Pick<BottomSheetProps, 'onBack' | 'closeable'>>(
    'BottomSheet',
  );

const BottomSheet = forwardRef<
  React.ElementRef<typeof GorghomBottomSheet>,
  BottomSheetProps
>(
  (
    {
      onOpen,
      onClose,
      onBack,
      closeable,
      children,
      enablePanDownToClose = true,
      enableDynamicSizing = false,
      enableBlurKeyboardOnGesture = true,
      enableHandlePanningGesture = true,
      maxDynamicContentSize = undefined,
      detached = false,
      showBackdropPress = false,
      onBackdropPress,
      onChange,
      snapPoints = 'half',
      ...props
    },
    ref,
  ) => {
    // ref
    const innerRef = useRef<GorghomBottomSheet>(null);
    const mergedRefs = useMergedRef<GorghomBottomSheet>(ref, innerRef);

    /**
     * Match the snap points to the preset snap points
     */
    const computedSnapPoints = useMemo(() => {
      if (!snapPoints) {
        return undefined;
      }

      if (Array.isArray(snapPoints)) {
        return snapPoints;
      }

      return bottomSheetSnapPoints[
        snapPoints as keyof typeof bottomSheetSnapPoints
      ];
    }, [snapPoints]);

    const renderBackdrop = useCallback(
      (backdropProps: React.ComponentProps<typeof CustomBackdrop>) => (
        <CustomBackdrop
          showBackdropPress={showBackdropPress}
          onPress={() => {
            backdropProps.onPress?.();
            onBackdropPress?.();
          }}
          {...backdropProps}
        />
      ),
      [showBackdropPress, onBackdropPress],
    );

    const handleChange: BottomSheetProps['onChange'] = (
      index: number,
      ...args
    ) => {
      if (index === -1 && onClose) {
        onClose();
      }
      if (index === 0 && onOpen) {
        onOpen();
      }
      onChange?.(index, ...args);
    };

    // renders
    return (
      <BottomSheetProvider
        value={{ onBack, closeable: Boolean(onClose || closeable) }}
      >
        <StyledGorghomBottomSheet
          {...props}
          ref={mergedRefs}
          className='w-full flex-1 rounded-t-xl bg-canvas-sheet'
          backgroundClassName='bg-canvas-sheet'
          onChange={handleChange}
          /**
           * Configuration
           */
          snapPoints={computedSnapPoints}
          enableDynamicSizing={enableDynamicSizing}
          detached={detached}
          enableHandlePanningGesture={enableHandlePanningGesture}
          overDragResistanceFactor={2.5}
          enablePanDownToClose={enablePanDownToClose}
          maxDynamicContentSize={maxDynamicContentSize}
          /**
           * Keyboard
           */
          enableBlurKeyboardOnGesture={enableBlurKeyboardOnGesture}
          keyboardBehavior='extend'
          /**
           * Components
           */
          handleComponent={CustomHandle}
          backdropComponent={renderBackdrop}
          index={-1}
        >
          {children}
        </StyledGorghomBottomSheet>
      </BottomSheetProvider>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';

export { BottomSheet, useBottomSheetContext };
