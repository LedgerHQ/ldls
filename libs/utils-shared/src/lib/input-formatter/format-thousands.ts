/**
 * Formats a number string with space-separated thousands.
 * e.g., '1000000' -> '1 000 000'
 *
 * @returns Formatted string with space-separated thousands
 *
 * @example
 * formatThousands('1000') // '1 000'
 * formatThousands('1000000') // '1 000 000'
 * formatThousands('1234.5678') // '1 234.5678'
 * formatThousands('1234.5678', false) // '1 235'
 */
export function formatThousands(
  /** The value to format */
  value: string,
  /** Whether to preserve decimal places */
  preserveDecimals = true,
): string {
  if (!value) return '';

  const hasDecimalPoint = value.includes('.');
  const [integerPart, decimalPart] = value.split('.');

  // Add space separator every 3 digits
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (hasDecimalPoint && preserveDecimals) {
    return decimalPart
      ? `${formattedInteger}.${decimalPart}`
      : `${formattedInteger}.`;
  }

  return formattedInteger;
}
