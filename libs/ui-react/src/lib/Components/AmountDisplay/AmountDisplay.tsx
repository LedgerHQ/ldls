import React from 'react';
import { AmountDisplayProps } from './types';

export const AmountDisplay = React.forwardRef<
  HTMLDivElement,
  AmountDisplayProps
>(({ value, formatter, className, ...props }, ref) => {
  const parts = formatter(value);

  return (
    <div ref={ref} className={className} {...props}>
      <span className='heading-1-semi-bold text-base'>
        {parts.currencyPosition === undefined ||
          (parts.currencyPosition === 'start' && (
            <span className='mr-4'>{parts.currencyText}</span>
          ))}
        <span>{parts.integerPart}</span>
      </span>
      <span className='heading-2-semi-bold text-muted'>
        {parts.decimalPart && (
          <span>{(parts.decimalSeparator || '.') + parts.decimalPart}</span>
        )}
        {parts.currencyPosition === 'end' && (
          <span className='ml-4'>{parts.currencyText}</span>
        )}
      </span>
    </div>
  );
});

AmountDisplay.displayName = 'AmountDisplay';
