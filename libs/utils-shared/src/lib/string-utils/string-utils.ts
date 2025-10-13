/**
 * Transforms a kebab-case or snake_case string into a PascalCase string.
 * e.g., 'arrow-up' -> 'ArrowUp'
 */
export function toPascalCase(str: string): string {
  if (!str) return '';
  return str
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Formats and validates numeric input text for amount inputs.
 * Handles decimal formatting, leading zeros, and prevents multiple decimal points.
 * Can optionally format with space-separated thousands.
 *
 * @param value - The input value to format
 * @param allowDecimals - Whether to allow decimal values (default: true)
 * @param useThousandsSeparator - Whether to format with space-separated thousands (default: false)
 * @param maxIntegerLength - Maximum length for integer part
 * @param maxDecimalLength - Maximum length for decimal part
 * @returns Formatted and cleaned numeric string
 *
 * @example
 * textFormatter('01') // '1'
 * textFormatter('.5') // '0.5'
 * textFormatter('1.2.3') // '1.23'
 * textFormatter('1,5') // '1.5'
 * textFormatter('abc123') // '123'
 * textFormatter('1000000', true, true) // '1 000 000'
 * textFormatter('1234.5678', true, true) // '1 234.5678'
 * textFormatter('123456789012', true, false, 9, 2) // '123456789'
 * textFormatter('123.123456', true, false, 9, 2) // '123.12'
 */
export function textFormatter(
  value: string,
  allowDecimals = true,
  useThousandsSeparator = true,
  maxIntegerLength = 9,
  maxDecimalLength = 9,
): string {
  // Normalize input: convert comma to dot, remove non-digit/non-dot characters
  const normalizedValue = value.replace(',', '.').replace(/[^\d.]/g, '');
  let cleaned = normalizedValue;

  // Remove leading zeros (except when followed by dot)
  cleaned = cleaned.replace(/^0+(?=\d)/, '');

  if (!allowDecimals) {
    // Integer-only: remove any non-digit and apply max length
    cleaned = cleaned.replace(/\D/g, '');
    if (maxIntegerLength && cleaned.length > maxIntegerLength) {
      cleaned = cleaned.slice(0, maxIntegerLength);
    }
    return useThousandsSeparator ? formatThousands(cleaned) : cleaned;
  }

  // Handle single dot input as "0."
  if (cleaned === '.') {
    cleaned = '0.';
  }

  const firstDot = cleaned.indexOf('.');
  if (firstDot !== -1) {
    // Split integer and decimal parts
    let integerPart = cleaned.slice(0, firstDot);
    let decimalPart = cleaned.slice(firstDot + 1).replace(/\./g, '');

    // Apply length limits
    if (maxIntegerLength && integerPart.length > maxIntegerLength) {
      integerPart = integerPart.slice(0, maxIntegerLength);
    }
    decimalPart = decimalPart.slice(0, maxDecimalLength);

    // Ensure integer part is not empty
    if (integerPart === '') integerPart = '0';

    // Preserve trailing dot if user is typing
    const hasTrailingDot =
      normalizedValue.endsWith('.') || cleaned.endsWith('.');
    cleaned =
      decimalPart.length > 0
        ? `${integerPart}.${decimalPart}`
        : hasTrailingDot
          ? `${integerPart}.`
          : integerPart;
  } else {
    // No decimal point, just apply integer length limit
    if (maxIntegerLength && cleaned.length > maxIntegerLength) {
      cleaned = cleaned.slice(0, maxIntegerLength);
    }
  }

  return useThousandsSeparator ? formatThousands(cleaned) : cleaned;
}

/**
 * Formats a number string with space-separated thousands.
 * e.g., '1000000' -> '1 000 000'
 *
 * @param value - The numeric string to format
 * @param preserveDecimals - Whether to preserve decimal places (default: true)
 * @returns Formatted string with space-separated thousands
 *
 * @example
 * formatThousands('1000') // '1 000'
 * formatThousands('1000000') // '1 000 000'
 * formatThousands('1234.5678') // '1 234.5678'
 * formatThousands('1234.5678', false) // '1 235'
 */
export function formatThousands(
  value: string,
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
