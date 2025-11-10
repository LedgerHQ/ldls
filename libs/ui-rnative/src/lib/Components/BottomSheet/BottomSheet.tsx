import GorghomBottomSheet, { SNAP_POINT_TYPE } from '@gorhom/bottom-sheet';
import { createSafeContext, useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { cva } from 'class-variance-authority';
import { cssInterop } from 'nativewind';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { RuntimeConstants } from '../../utils';
import { CustomBackdrop } from './CustomBackdrop';
import { CustomHandle } from './CustomHandle';
import { BottomSheetProps } from './types';

const StyledGorghomBottomSheet = cssInterop(GorghomBottomSheet, {
  className: 'style',
  backgroundClassName: 'backgroundStyle',
});

const OFFSET_TOP = 25;
const FULL_HEIGHT = RuntimeConstants.insetDimensions.height;
const FULL_WITH_OFFSET = FULL_HEIGHT - OFFSET_TOP;

const SNAP_POINTS_MAP = {
  full: [FULL_HEIGHT],
  fullWithOffset: [FULL_WITH_OFFSET],
  medium: ['50%'],
  small: ['25%'],
};

const MAX_DYNAMIC_CONTENT_SIZE = {
  full: FULL_HEIGHT,
  fullWithOffset: FULL_WITH_OFFSET,
};

const bottomSheetVariants = {
  root: cva('mb-16 w-full flex-1 rounded-t-xl bg-canvas-sheet', {
    variants: {
      shadow: {
        true: 'shadow-lg shadow-base',
        false: '',
      },
    },
  }),
  background: cva('mb-16 bg-canvas-sheet'),
};

const [BottomSheetProvider, useBottomSheetContext] =
  createSafeContext<Pick<BottomSheetProps, 'onBack' | 'hideCloseButton'>>(
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
      children,
      hideCloseButton = false,
      enablePanDownToClose = true,
      enableDynamicSizing = false,
      enableBlurKeyboardOnGesture = true,
      enableHandlePanningGesture = true,
      maxDynamicContentSize = undefined,
      detached = false,
      hideBackdrop = false,
      backdropPressBehavior = 'close',
      onBackdropPress,
      onChange,
      snapPoints = 'fullWithOffset',
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

      return SNAP_POINTS_MAP[snapPoints as keyof typeof SNAP_POINTS_MAP];
    }, [snapPoints]);

    /**
     * Match the max dynamic content size to the preset or the custom max dynamic content size
     */
    const computedMaxDynamicContentSize = useMemo(() => {
      if (!maxDynamicContentSize) {
        return undefined;
      }

      return MAX_DYNAMIC_CONTENT_SIZE[
        maxDynamicContentSize as keyof typeof MAX_DYNAMIC_CONTENT_SIZE
      ];
    }, [maxDynamicContentSize]);

    const renderBackdrop = useCallback(
      (backdropProps: React.ComponentProps<typeof CustomBackdrop>) => {
        return (
          <CustomBackdrop
            backdropPressBehavior={backdropPressBehavior}
            onPress={onBackdropPress}
            {...backdropProps}
          />
        );
      },
      [backdropPressBehavior, onBackdropPress],
    );

    const handleChange: BottomSheetProps['onChange'] = useCallback(
      (index: number, position: number, type: SNAP_POINT_TYPE) => {
        if (index === -1 && onClose) {
          onClose();
        }
        if (index === 0 && onOpen) {
          onOpen();
        }
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

    console.log({
      computedSnapPoints,
      maxDynamicContentSize,
      enableDynamicSizing,
    });

    return (
      <BottomSheetProvider value={{ onBack, hideCloseButton }}>
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
          maxDynamicContentSize={computedMaxDynamicContentSize}
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
