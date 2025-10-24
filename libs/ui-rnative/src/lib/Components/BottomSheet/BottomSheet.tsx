import GorghomBottomSheet from '@gorhom/bottom-sheet';
import { createSafeContext, useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { forwardRef, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetProps } from './BottomSheet.types';
import { BottomSheetHeaderActions } from './BottomSheetActions';
import { HandleComponent } from './HandleComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

const bottomSheetSnapPoints = {
  full: ['100%'],
  half: ['50%'],
  quarter: ['25%'],
};

const [BottomSheetProvider, useBottomSheetContext] = createSafeContext<{
  size: BottomSheetProps['size'];
}>('BottomSheet');

const BottomSheet = forwardRef<
  React.ElementRef<typeof GorghomBottomSheet>,
  BottomSheetProps
>(
  (
    {
      onClose,
      onBack,
      closeable,
      children,
      enablePanDownToClose = true,
      enableHandlePanningGesture = true,
      detached = false,
      onChange,
      snapPoints = 'half',
      size = 'sm',
      ...props
    },
    ref,
  ) => {
    // ref
    const innerRef = useRef<GorghomBottomSheet>(null);
    const mergedRefs = useMergedRef<GorghomBottomSheet>(ref, innerRef);

    const computedSnapPoints = useMemo(() => {
      const isString = typeof snapPoints === 'string';

      return isString
        ? bottomSheetSnapPoints[
            snapPoints as keyof typeof bottomSheetSnapPoints
          ]
        : snapPoints;
    }, [snapPoints]);

    // renders
    return (
      <BottomSheetProvider value={{ size }}>
        <GorghomBottomSheet
          {...props}
          ref={mergedRefs}
          style={styles.container}
          overDragResistanceFactor={2.5}
          enableDynamicSizing={false}
          detached={detached}
          enableHandlePanningGesture={enableHandlePanningGesture}
          enablePanDownToClose={enablePanDownToClose}
          snapPoints={computedSnapPoints}
          onChange={onChange}
          handleComponent={HandleComponent}
          index={-1}
        >
          <BottomSheetHeaderActions
            onBack={onBack}
            onClose={onClose}
            closeable={closeable}
          />
          {children}
        </GorghomBottomSheet>
      </BottomSheetProvider>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';

export { BottomSheet, useBottomSheetContext };
