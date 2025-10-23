import GorghomBottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useMergedRef } from '@ledgerhq/ldls-utils-shared';
import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetProps } from './BottomSheet.types';

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

  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <GorghomBottomSheet
        ref={mergedRefs}
        enablePanDownToClose
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        index={-1}
      >
        {children}
      </GorghomBottomSheet>
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
