import { useMemo } from 'react';
import { useTheme } from '../Provider/useTheme';
import type { LumenStyleSheet, LumenStyleSheetExtended } from '../types';
import { create } from './create';

export const useCreate = <S extends LumenStyleSheet>(
  styleCreator: LumenStyleSheetExtended<S>,
): S => {
  const { theme } = useTheme();

  return useMemo(() => {
    return create(theme, styleCreator);
  }, [theme, styleCreator]);
};
