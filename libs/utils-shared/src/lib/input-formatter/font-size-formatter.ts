const MAX_FONT_SIZE = 48;
const MIN_FONT_SIZE = 17;
const SCALE_FACTOR = 2;

/**
 * Calculates the font size based on the number of digits in the input value.
 * Scales from 48px (max) to 17px (min) as digit count increases.
 */
export function getFontSize(value: string): number {
  const digits = value.replace(/\D/g, '').length;
  const fontSize = Math.max(
    MIN_FONT_SIZE,
    MAX_FONT_SIZE - digits * SCALE_FACTOR,
  );
  return fontSize;
}
