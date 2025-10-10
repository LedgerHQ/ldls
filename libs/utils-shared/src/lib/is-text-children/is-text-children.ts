import { ReactNode } from 'react';

export const isTextChildren = (element: ReactNode) => {
  const isAllowedText =
    typeof element === 'string' || typeof element === 'number';
  return isAllowedText;
};
