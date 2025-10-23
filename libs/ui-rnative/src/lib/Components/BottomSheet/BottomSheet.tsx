import GorghomBottomSheet from '@gorhom/bottom-sheet';
import { createSafeContext, useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetProps } from './BottomSheet.types';

const [BottomSheetProvider, useBottomSheetContext] =
  createSafeContext<BottomSheetProps>('BottomSheet');

export const BottomSheet = forwardRef<
  React.ElementRef<typeof GorghomBottomSheet>,
  BottomSheetProps
>(({ children, ...props }, ref) => {
  // ref
  const innerRef = useRef<GorghomBottomSheet>(null);
  const mergedRefs = useMergedRef<GorghomBottomSheet>(ref, innerRef);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    innerRef.current?.expand();
  }, []);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetProvider value={props}>
        <GorghomBottomSheet
          ref={mergedRefs}
          overDragResistanceFactor={2.5}
          enableHandlePanningGesture
          enablePanDownToClose
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          index={-1}
        >
          {children}
        </GorghomBottomSheet>
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    height: 120,
  },
});
