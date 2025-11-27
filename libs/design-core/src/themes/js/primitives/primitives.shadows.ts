import { PrimitiveShadowTokens } from '../types';
import { primitiveColorTokens } from './primitive.colors';

const defaultColor = primitiveColorTokens.light.grey['050-10'];
const darkerColor = primitiveColorTokens.light.grey['050-20'];

export const primitiveShadowTokens: PrimitiveShadowTokens = {
  sm: {
    primary: { x: 0, y: 1, blur: 2, spread: -1, color: defaultColor },
    secondary: { x: 0, y: 1, blur: 3, spread: 0, color: defaultColor },
  },
  md: {
    primary: { x: 0, y: 2, blur: 4, spread: -2, color: defaultColor },
    secondary: { x: 0, y: 4, blur: 6, spread: -1, color: defaultColor },
  },
  lg: {
    primary: { x: 0, y: 4, blur: 6, spread: -4, color: defaultColor },
    secondary: { x: 0, y: 10, blur: 15, spread: -3, color: defaultColor },
  },
  xl: {
    primary: { x: 0, y: 8, blur: 10, spread: -6, color: defaultColor },
    secondary: { x: 0, y: 20, blur: 25, spread: -5, color: defaultColor },
  },
  '2xl': {
    primary: { x: 0, y: 25, blur: 50, spread: -12, color: darkerColor },
  },
};
