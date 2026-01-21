export type FormattedValue = {
  formattedValue: string;
  /**
   * The character which separates integer and fractional parts.
   */
  decimalSeparator: '.' | ',';
  /**
   * The currency text (e.g. USD, EUR)
   */
  currencyText: string;
  /**
   * Position of the currency text.
   * @default 'left'
   */
  currencyPosition?: 'left' | 'right';
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
