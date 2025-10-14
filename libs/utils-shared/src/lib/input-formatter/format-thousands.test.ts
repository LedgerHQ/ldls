import { describe, it, expect } from 'vitest';
import { formatThousands } from './format-thousands';

describe('formatThousands', () => {
  it('should format thousands with spaces', () => {
    expect(formatThousands('1000')).toBe('1 000');
    expect(formatThousands('1000000')).toBe('1 000 000');
  });

  it('should preserve decimal places', () => {
    expect(formatThousands('1234.5678')).toBe('1 234.5678');
    expect(formatThousands('1000000.123')).toBe('1 000 000.123');
  });

  it('should handle trailing decimal point', () => {
    expect(formatThousands('1000.')).toBe('1 000.');
  });

  it('should return empty string for empty input', () => {
    expect(formatThousands('')).toBe('');
  });

  it('should handle numbers without thousands', () => {
    expect(formatThousands('123')).toBe('123');
    expect(formatThousands('99')).toBe('99');
  });

  it('should format with preserveDecimals=false', () => {
    expect(formatThousands('1234.5678', false)).toBe('1 234');
  });

  it('should handle large numbers', () => {
    expect(formatThousands('123456789')).toBe('123 456 789');
    expect(formatThousands('1234567890123')).toBe('1 234 567 890 123');
  });
});
