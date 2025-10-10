import { FC, PropsWithChildren, ReactNode } from 'react';

export type WrapProps = PropsWithChildren & {
  if: boolean;
  with: (children: ReactNode) => JSX.Element;
};

export const Wrap: FC<WrapProps> = ({
  if: condition,
  with: wrapper,
  children,
}) => {
  return condition ? wrapper(children) : children;
};
