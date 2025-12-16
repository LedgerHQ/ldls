import {
  LumenViewStyleLX,
  LumenTextStyleLX,
  LumenPressableStyleLX,
} from '../types';

type UnknownFunction = (...args: any[]) => any;
type UnknownRecord = Record<string, unknown>;

/**
 * Shallow equal for lx property that can take object or function
 */
const shallowEqualFunction = (
  a: UnknownFunction | UnknownRecord,
  b: UnknownFunction | UnknownRecord,
): boolean => {
  if (typeof a === 'function' || typeof b === 'function') {
    return a === b;
  }
  return shallowEqual(a, b);
};

/**
 * Shallow equal for all props
 */
const shallowEqual = (a: UnknownRecord, b: UnknownRecord): boolean => {
  const keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) return false;
  return keysA.every((k) => a[k] === b[k]);
};

export const areLxPropsEqual = (
  prevProps: LumenViewStyleLX | LumenTextStyleLX | LumenPressableStyleLX,
  nextProps: LumenViewStyleLX | LumenTextStyleLX | LumenPressableStyleLX,
): boolean => {
  const { lx: prevLx = {}, ...prevRest } = prevProps;
  const { lx: nextLx = {}, ...nextRest } = nextProps;

  return (
    shallowEqualFunction(prevLx, nextLx) &&
    shallowEqual(
      prevRest as Record<string, unknown>,
      nextRest as Record<string, unknown>,
    )
  );
};
