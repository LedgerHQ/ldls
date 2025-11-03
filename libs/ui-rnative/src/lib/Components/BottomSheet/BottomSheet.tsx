import GorghomBottomSheet, { SNAP_POINT_TYPE } from '@gorhom/bottom-sheet';
import { createSafeContext, useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { cssInterop } from 'nativewind';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { CustomBackdrop } from './CustomBackdrop';
import { CustomHandle } from './CustomHandle';
import { BottomSheetProps } from './types';

const StyledGorghomBottomSheet = cssInterop(GorghomBottomSheet, {
  className: 'style',
  backgroundClassName: 'backgroundStyle',
});

const SNAP_POINTS = {
  full: ['95%'],
  half: ['50%'],
  quarter: ['25%'],
};

const bottomSheetVariants = {
  root: cva('w-full flex-1 rounded-t-xl bg-canvas-sheet', {
    variants: {
      shadow: {
        true: 'shadow-lg shadow-base',
        false: '',
      },
    },
  }),
  background: cva('bg-canvas-sheet'),
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
      onAnimate,
      closeable,
      children,
      enablePanDownToClose = true,
      enableDynamicSizing = false,
      enableBlurKeyboardOnGesture = true,
      enableHandlePanningGesture = true,
      maxDynamicContentSize = undefined,
      detached = false,
      hideBackdrop = false,
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
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Match the snap points to the preset or the custom snap points array
     */
    const computedSnapPoints = useMemo(() => {
      if (!snapPoints) {
        return undefined;
      }

      if (Array.isArray(snapPoints)) {
        return snapPoints;
      }

      return SNAP_POINTS[snapPoints as keyof typeof SNAP_POINTS];
    }, [snapPoints]);

    const renderBackdrop = useCallback(
      (backdropProps: React.ComponentProps<typeof CustomBackdrop>) => {
        return (
          <CustomBackdrop
            showBackdropPress={showBackdropPress}
            onPress={() => {
              backdropProps.onPress?.();
              onBackdropPress?.();
            }}
            {...backdropProps}
          />
        );
      },
      [showBackdropPress, onBackdropPress],
    );

    const handleChange: BottomSheetProps['onChange'] = useCallback(
      (index: number, position: number, type: SNAP_POINT_TYPE) => {
        console.log('onchange');
        if (index === -1 && onClose) {
          onClose();
        }
        if (index === 0 && onOpen) {
          onOpen();
        }
        setIsOpen(index === 0);
        onChange?.(index, position, type);
      },
      [onClose, onOpen, onChange],
    );

    const handleAnimate: BottomSheetProps['onAnimate'] = useCallback(
      (
        fromIndex: number,
        toIndex: number,
        fromPosition: number,
        toPosition: number,
      ) => {
        const newIsOpen = fromIndex === -1 && toIndex >= 0;
        if (newIsOpen !== isOpen) {
          setIsOpen(newIsOpen);
        }
        onAnimate?.(fromIndex, toIndex, fromPosition, toPosition);
      },
      [onAnimate],
    );

    console.log({ isOpen });

    console.log({ a: innerRef.current });

    // renders
    return (
      <BottomSheetProvider
        value={{ onBack, closeable: Boolean(onClose || closeable) }}
      >
        <StyledGorghomBottomSheet
          {...props}
          ref={mergedRefs}
          className={bottomSheetVariants.root({
            shadow: hideBackdrop && isOpen,
          })}
          backgroundClassName={bottomSheetVariants.background()}
          onChange={handleChange}
          onAnimate={handleAnimate}
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
          backdropComponent={hideBackdrop ? undefined : renderBackdrop}
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
