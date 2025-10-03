import { useEffect, useLayoutEffect } from 'react';

export const isWeb = true;
export const isWindowDefined: boolean = typeof window !== 'undefined';
export const isServer: boolean = isWeb && !isWindowDefined;
export const isClient: boolean = isWeb && isWindowDefined;

export const useIsomorphicLayoutEffect: typeof useEffect = isServer
  ? useEffect
  : useLayoutEffect;
