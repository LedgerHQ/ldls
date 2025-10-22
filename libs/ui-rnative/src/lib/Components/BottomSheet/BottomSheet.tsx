import GorghomBottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from '../Button';
import { BottomSheetProps } from './BottomSheet.types';

export const BottomSheet: FC<BottomSheetProps> = () => {
  // ref
  const bottomSheetRef = useRef<GorghomBottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <Button onPress={() => bottomSheetRef.current?.expand()}>Click</Button>
      <GorghomBottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </GorghomBottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    height: 120,
    alignItems: 'center',
  },
});
