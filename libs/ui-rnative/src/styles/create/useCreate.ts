import { useCallback, useMemo } from 'react';
import { useTheme } from '../Provider/useTheme';
import type { LumenStyleSheet, LumenStyleSheetExtended } from '../types';
import { create } from './create';

export const useCreate = <S extends LumenStyleSheet>(
  styleCreator: LumenStyleSheetExtended<S>,
  deps: any[] = [],
): S => {
  const { theme } = useTheme();
  const styleCreatorMemo = useCallback(styleCreator as Function, deps);


  return useMemo(() => {
    return create(theme, styleCreator);
  }, [theme, styleCreatorMemo]);
};
