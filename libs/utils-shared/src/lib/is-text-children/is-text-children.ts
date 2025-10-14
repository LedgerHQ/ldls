import { ReactNode } from 'react';

const isStringOrNumber = (element: ReactNode) =>
  typeof element === 'string' || typeof element === 'number';

export const isTextChildren = (element: ReactNode) => {
  const isArray = Array.isArray(element);
  console.log({ isArray });
  return isArray ? element.every(isStringOrNumber) : isStringOrNumber(element);
};
