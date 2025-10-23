import GorghomBottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export const useBottomSheetRef = () => {
  const bottomSheetRef = useRef<GorghomBottomSheet>(null);

  return bottomSheetRef;
};
