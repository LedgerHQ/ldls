import { PropsWithChildren, ReactNode } from 'react';

export type WrapProps = PropsWithChildren & {
  if: boolean;
  with: (children: ReactNode) => JSX.Element;
};
