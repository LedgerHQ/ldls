import { AmountDisplayProps } from './types';

export const AmountDisplay = ({
  value,
  formatter,
  className,
  ...props
}: AmountDisplayProps): JSX.Element => {
  const parts = formatter(value);

  const [integerPart, decimalPart] = parts.formattedValue.split(
    parts.decimalSeparator,
  );

  return (
    <div className={className}>
      <span className='heading-1-semi-bold text-base' {...props}>
        {parts.currencyPosition === 'left' && (
          <span className='mr-4'>{parts.currencyText}</span>
        )}
        <span>{integerPart}</span>
      </span>
      <span className='heading-2-semi-bold text-muted'>
        <span>{parts.decimalSeparator + decimalPart}</span>
        {parts.currencyPosition === 'right' && (
          <span className='ml-4'>{parts.currencyText}</span>
        )}
      </span>
    </div>
  );
};
