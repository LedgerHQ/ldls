import { useEffect, useLayoutEffect } from 'react';

export const isServer: boolean =
  typeof process !== 'undefined' && process.release?.name === 'node';

export const isBrowser: boolean =
  typeof window !== 'undefined' && typeof document !== 'undefined';

export const isNative: boolean =
  !isBrowser &&
  typeof global?.navigator !== 'undefined' &&
  global.navigator.product === 'ReactNative';

export const useIsomorphicLayoutEffect: typeof useEffect = isServer
  ? useEffect
  : useLayoutEffect;
