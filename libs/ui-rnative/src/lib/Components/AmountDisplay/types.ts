import { ViewProps } from 'react-native';

export type FormattedValue = {
  /**
   * The whole number portion of the amount (e.g., "1234" from 1234.56)
   */
  integerPart: string;
  /**
   * The fractional portion of the amount without the separator (e.g., "56" from 1234.56)
   * @optional
   */
  decimalPart?: string;
  /**
   * The currency text or symbol (e.g., "$", "USD", "€", "BTC")
   */
  currencyText: string;
  /**
   * The character which separates integer and fractional parts.
   * @optional
   * @default '.'
   */
  decimalSeparator?: '.' | ',';
  /**
   * Position of the currency text relative to the amount.
   * @optional
   * @default 'start'
   */
  currencyPosition?: 'start' | 'end';
};

/**
 * Props for the AmountDisplay component.
 */
export type AmountDisplayProps = ViewProps & {
  /**
   * The numeric value to display.
   * Pass the raw number value (e.g., 1234.56) - the formatter will handle conversion.
   */
  value: number;
  /**
   * Function that formats the numeric value into a FormattedValue object.
   */
  formatter: (value: number) => FormattedValue;
};
