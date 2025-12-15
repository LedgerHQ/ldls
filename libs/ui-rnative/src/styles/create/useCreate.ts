import { DependencyList, useMemo, useRef } from 'react';
import { useTheme } from '../Provider/useTheme';
import type { LumenStyleSheet, LumenStyleSheetExtended } from '../types';
import { create } from './create';

export const useCreate = <S extends LumenStyleSheet>(
  styleCreator: LumenStyleSheetExtended<S>,
  deps: DependencyList = [],
): S => {
  const { theme } = useTheme();
  const styleCreatorRef = useRef(styleCreator);
  styleCreatorRef.current = styleCreator;

  return useMemo(
    () => create(theme, styleCreatorRef.current),
    [theme, ...deps],
  );
};
