import { LumenViewStyleLX, LumenTextStyleLX } from '../types';

const shallowEqual = (
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): boolean => {
  const keysA = Object.keys(a);
  if (keysA.length !== Object.keys(b).length) return false;
  return keysA.every((k) => a[k] === b[k]);
};

export const arePropsEqualLx = (
  prevProps: LumenViewStyleLX | LumenTextStyleLX,
  nextProps: LumenViewStyleLX | LumenTextStyleLX,
): boolean => {
  const { lx: prevLx = {}, ...prevRest } = prevProps;
  const { lx: nextLx = {}, ...nextRest } = nextProps;

  return (
    shallowEqual(prevLx, nextLx) &&
    shallowEqual(
      prevRest as Record<string, unknown>,
      nextRest as Record<string, unknown>,
    )
  );
};
