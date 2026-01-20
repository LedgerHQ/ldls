export type AmountDisplayProps = {
  /**
   * The controlled value of the amount display.
   * @required
   */
  value: number;
  /**
   * The currency (e.g. USD, EUR)
   */
  currencyText?: string;
  /**
   * Additional class names
   */
  className?: string;
};
