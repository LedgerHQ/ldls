import { cn } from '@ledgerhq/lumen-utils-shared';
import { AmountDisplayProps } from './types';

export const AmountDisplay = ({
  className,
  value,
  ...props
}: AmountDisplayProps): JSX.Element => {
  return (
    <div className={cn('body-1', className)} {...props}>
      {value || 'AmountDisplay'}
    </div>
  );
};
