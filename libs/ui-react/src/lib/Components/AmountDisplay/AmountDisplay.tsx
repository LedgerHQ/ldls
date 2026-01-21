import { AmountDisplayProps } from './types';

export const AmountDisplay = ({
  value,
  formatter,
  className,
  ...props
}: AmountDisplayProps): JSX.Element => {
  const parts = formatter(value);

  return (
    <div className={className}>
      <span className='heading-1-semi-bold text-base' {...props}>
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
};
