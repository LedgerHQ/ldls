import { cn } from '@ledgerhq/ldls-utils-shared';
import { cloneElement, isValidElement, memo, PropsWithChildren } from 'react';

function _InjectStylesIntoChildren({
  styles,
  children,
}: PropsWithChildren<{ styles: string }>) {
  if (!isValidElement(children)) {
    return children;
  }
  return cloneElement(children, {
    className: cn((children.props as { className?: string }).className, styles),
  } as Partial<{ className: string }>);
}

export const InjectStylesIntoChildren = memo(_InjectStylesIntoChildren);
