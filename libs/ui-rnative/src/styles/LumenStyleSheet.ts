import { StyleSheet as NativeStyleSheet } from 'react-native';
import type { StyleSheet as NativeStyleSheetType } from 'react-native';

import { useCreate } from './create/useCreate';
import { useTheme } from './Provider/useTheme';

export type LumenStyleSheetType = {
  absoluteFillObject: typeof NativeStyleSheetType.absoluteFillObject;
  absoluteFill: typeof NativeStyleSheetType.absoluteFill;
  compose: typeof NativeStyleSheetType.compose;
  flatten: typeof NativeStyleSheetType.flatten;
  useCreate: typeof useCreate;
  useTheme: typeof useTheme;
};

class HybridLumenStyleSheet {
  absoluteFillObject = NativeStyleSheet.absoluteFillObject;
  absoluteFill = NativeStyleSheet.absoluteFill;
  flatten = NativeStyleSheet.flatten;
  compose = NativeStyleSheet.compose;
  useCreate = useCreate;
  useTheme = useTheme;
}

export const LumenStyleSheet = new HybridLumenStyleSheet();
