import { LumenStyleSheetTheme } from '../types';
import type {
  LumenStyleSheet,
  LumenStyleSheetWithSuperPowers,
} from '../types/types';

export const create = <S extends LumenStyleSheet>(
  theme: LumenStyleSheetTheme,
  stylesheet: LumenStyleSheetWithSuperPowers<S>,
): S => {
  // If stylesheet is a function, call it with the theme to get the stylesheet object
  if (typeof stylesheet === 'function') {
    return stylesheet(theme);
  }

  // Otherwise, return the stylesheet as-is
  return stylesheet;
};
