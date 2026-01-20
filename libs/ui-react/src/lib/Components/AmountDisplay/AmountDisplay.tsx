import { useTheme } from '../ThemeProvider';
import { AmountDisplayProps } from './types';

function parseIntlNumberParts(parts: Intl.NumberFormatPart[]) {
  return {
    sign: parts.find((p) => p.type === 'minusSign' || p.type === 'plusSign'),
    integer: parts
      .filter((p) => p.type === 'integer' || p.type === 'group')
      .map(({ value }) => value),
    decimal: parts.find((p) => p.type === 'decimal'),
    fraction: parts.find((p) => p.type === 'fraction'),
    currency: parts.find((p) => p.type === 'currency'),
  };
}

export const AmountDisplay = ({
  currencyText,
  className,
  value,
  ...props
}: AmountDisplayProps): JSX.Element => {
  const { locale } = useTheme();

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyText,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const rawParts = formatter.formatToParts(value);
  const parts = parseIntlNumberParts(rawParts);

  return (
    <div className={className}>
      <span className='heading-1-semi-bold text-base' {...props}>
        {rawParts[0].type === 'currency' && <span>{rawParts[0].value}</span>}
        <span>{parts.integer.join('')}</span>
      </span>
      <span className='heading-2-semi-bold text-muted'>
        {`${parts.decimal?.value}${parts.fraction?.value}`}
        {rawParts.at(-1)?.type === 'currency' && (
          <span>{parts.currency?.value}</span>
        )}
      </span>
    </div>
  );
};
