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
 *
 * @param value - The input value to format
 * @param allowDecimals - Whether to allow decimal values (default: true)
 * @returns Formatted and cleaned numeric string
 *
 * @example
 * textFormatter('01') // '1'
 * textFormatter('.5') // '0.5'
 * textFormatter('1.2.3') // '1.23'
 * textFormatter('1,5') // '1.5'
 * textFormatter('abc123') // '123'
 */
export function textFormatter(value: string, allowDecimals = true): string {
  // Convert comma to dot and remove all characters except digits and dots
  let cleaned = value.replace(',', '.').replace(/[^\d.]/g, '');

  // Handle leading zeros
  // If number starts with 0 but is not a decimal (e.g., "01", "02", etc.)
  // Remove leading zeros. For "000" return "0"
  if (
    cleaned.startsWith('0') &&
    !cleaned.startsWith('0.') &&
    cleaned.length > 1
  ) {
    cleaned = cleaned.replace(/^0+/, '') || '0'; // edge case to display 0 when user types 0 multiple times
  }

  // For integer-only input
  if (!allowDecimals) {
    // Remove all non-digit characters if decimals are not allowed
    cleaned = cleaned.replace(/\D/g, '');
    return cleaned;
  }

  // Convert single decimal point to "0."
  // e.g., "." -> "0."
  if (cleaned === '.') {
    cleaned = '0.';
  }

  const firstDot = cleaned.indexOf('.');
  if (firstDot !== -1) {
    let integerPart = cleaned.slice(0, firstDot);
    let decimalPart = cleaned.slice(firstDot + 1).replace(/\./g, '');
    decimalPart = decimalPart.slice(0, 8); // allow 8 decimals

    // Handle cases where integer part is empty (e.g., ".5" -> "0.5")
    if (integerPart === '') {
      integerPart = '0';
    }

    cleaned = `${integerPart}.${decimalPart}`;
  }

  return cleaned;
}
