export type FormattedValue = {
  integerPart: string;
  decimalPart?: string;
  /**
   * The currency text (e.g. USD, EUR)
   */
  currencyText: string;
  /**
   * The character which separates integer and fractional parts.
   */
  decimalSeparator?: '.' | ',';
  /**
   * Position of the currency text.
   * @default 'start'
   */
  currencyPosition?: 'start' | 'end';
};

export type AmountDisplayProps = {
  /**
   * The controlled value of the amount display.
   * @required
   */
  value: number;
  /**
   *
   */
  formatter: (value: number) => FormattedValue;
  /**
   * Additional class names
   */
  className?: string;
};
