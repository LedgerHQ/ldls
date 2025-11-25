import { primitiveTokens } from './primitives';
import { ShadowTokens } from './types';

export const shadowTokens: ShadowTokens = {
  sm: {
    first: {
      x: 0,
      y: 1,
      blur: 2,
      spread: -1,
      color: primitiveTokens.colors.light.grey['050-10'],
    },
    second: { x: 0, y: 1, blur: 3, spread: 0, color: defaultColor },
  },
};
