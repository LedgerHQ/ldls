import { FC } from 'react';
import { WrapProps } from './types';

export const Wrap: FC<WrapProps> = ({
  if: condition,
  with: wrapper,
  children,
}) => {
  return condition ? wrapper(children) : children;
};
