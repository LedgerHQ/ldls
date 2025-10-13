import { describe, it, expect } from 'vitest';
import { toPascalCase, textFormatter } from './string-utils.js';

describe('toPascalCase', () => {
  it('should convert kebab-case to PascalCase', () => {
    expect(toPascalCase('arrow-up')).toBe('ArrowUp');
    expect(toPascalCase('chevron-down')).toBe('ChevronDown');
    expect(toPascalCase('external-link')).toBe('ExternalLink');
    expect(toPascalCase('settings-alt-2')).toBe('SettingsAlt2');
  });

  it('should convert snake_case to PascalCase', () => {
    expect(toPascalCase('arrow_up')).toBe('ArrowUp');
    expect(toPascalCase('chevron_down')).toBe('ChevronDown');
    expect(toPascalCase('external_link')).toBe('ExternalLink');
    expect(toPascalCase('settings_alt_2')).toBe('SettingsAlt2');
  });

  it('should convert space-separated words to PascalCase', () => {
    expect(toPascalCase('arrow up')).toBe('ArrowUp');
    expect(toPascalCase('chevron down')).toBe('ChevronDown');
    expect(toPascalCase('external link')).toBe('ExternalLink');
  });

  it('should handle mixed separators', () => {
    expect(toPascalCase('arrow-up_down')).toBe('ArrowUpDown');
    expect(toPascalCase('external_link-icon')).toBe('ExternalLinkIcon');
    expect(toPascalCase('settings alt-2_variant')).toBe('SettingsAlt2Variant');
  });

  it('should handle single words', () => {
    expect(toPascalCase('arrow')).toBe('Arrow');
    expect(toPascalCase('icon')).toBe('Icon');
    expect(toPascalCase('button')).toBe('Button');
  });

  it('should handle already PascalCase strings', () => {
    expect(toPascalCase('ArrowUp')).toBe('Arrowup');
    expect(toPascalCase('ExternalLink')).toBe('Externallink');
    // Note: This behavior converts already PascalCase to lowercase except first letter
    // because it treats the whole string as one word without separators
  });

  it('should handle empty string', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('should handle strings with numbers', () => {
    expect(toPascalCase('icon-24')).toBe('Icon24');
    expect(toPascalCase('chart_1')).toBe('Chart1');
    expect(toPascalCase('version 2')).toBe('Version2');
    expect(toPascalCase('api-v1-endpoint')).toBe('ApiV1Endpoint');
  });

  it('should handle multiple consecutive separators', () => {
    expect(toPascalCase('arrow--up')).toBe('ArrowUp');
    expect(toPascalCase('external__link')).toBe('ExternalLink');
    expect(toPascalCase('icon  button')).toBe('IconButton');
    expect(toPascalCase('mixed-_-separators')).toBe('MixedSeparators');
  });

  it('should handle separators at the beginning and end', () => {
    expect(toPascalCase('-arrow-up')).toBe('ArrowUp');
    expect(toPascalCase('_external-link_')).toBe('ExternalLink');
    expect(toPascalCase(' icon button ')).toBe('IconButton');
    expect(toPascalCase('--start-end--')).toBe('StartEnd');
  });

  it('should handle strings with special characters mixed with separators', () => {
    expect(toPascalCase('icon-24px')).toBe('Icon24px');
    expect(toPascalCase('api_v2.0')).toBe('ApiV2.0');
  });

  it('should handle case variations in input', () => {
    expect(toPascalCase('ARROW-UP')).toBe('ArrowUp');
    expect(toPascalCase('ExTerNaL-LiNk')).toBe('ExternalLink');
    expect(toPascalCase('mixed_CASE_string')).toBe('MixedCaseString');
  });

  it('should handle single character segments', () => {
    expect(toPascalCase('a-b-c')).toBe('ABC');
    expect(toPascalCase('x_y_z')).toBe('XYZ');
    expect(toPascalCase('i o s')).toBe('IOS');
  });
});

describe('textFormatter', () => {
  describe('decimal handling with allowDecimals=true (default)', () => {
    it('should convert single dot to "0."', () => {
      expect(textFormatter('.')).toBe('0.');
    });

    it('should prepend 0 to decimal starting with dot', () => {
      expect(textFormatter('.5')).toBe('0.5');
      expect(textFormatter('.123')).toBe('0.123');
    });

    it('should allow valid decimal numbers', () => {
      expect(textFormatter('1.5')).toBe('1.5');
      expect(textFormatter('123.456')).toBe('123.456');
      expect(textFormatter('0.5')).toBe('0.5');
    });

    it('should limit to 9 decimal places', () => {
      expect(textFormatter('1.1234567899')).toBe('1.123456789');
      expect(textFormatter('0.123456789012345')).toBe('0.123456789');
    });

    it('should remove multiple decimal points', () => {
      expect(textFormatter('1.2.3')).toBe('1.23');
      expect(textFormatter('1.2.3.4')).toBe('1.234');
      expect(textFormatter('...')).toBe('0.');
      expect(textFormatter('1..2')).toBe('1.2');
    });
  });

  describe('leading zero handling', () => {
    it('should remove leading zeros from integers', () => {
      expect(textFormatter('01')).toBe('1');
      expect(textFormatter('001')).toBe('1');
      expect(textFormatter('0123')).toBe('123');
    });

    it('should preserve single zero', () => {
      expect(textFormatter('0')).toBe('0');
      expect(textFormatter('000')).toBe('0');
    });

    it('should preserve zero in decimal format', () => {
      expect(textFormatter('0.5')).toBe('0.5');
      expect(textFormatter('0.0')).toBe('0.0');
      expect(textFormatter('0.123')).toBe('0.123');
    });

    it('should handle edge case of leading zero with decimal', () => {
      expect(textFormatter('01.5')).toBe('1.5');
      expect(textFormatter('001.23')).toBe('1.23');
    });
  });

  describe('comma to dot conversion', () => {
    it('should convert comma to dot', () => {
      expect(textFormatter('1,5')).toBe('1.5');
      expect(textFormatter('12,34')).toBe('12.34');
      expect(textFormatter(',5')).toBe('0.5');
    });

    it('should handle multiple commas', () => {
      expect(textFormatter('1,2,3')).toBe('1.23');
      expect(textFormatter(',,,')).toBe('0.');
    });
  });

  describe('non-numeric character removal', () => {
    it('should remove letters and special characters', () => {
      expect(textFormatter('abc123def')).toBe('123');
      expect(textFormatter('$100.50')).toBe('100.50');
      expect(textFormatter('1@2#3$')).toBe('123');
    });

    it('should preserve only digits and dots', () => {
      expect(textFormatter('1a2b.3c4d')).toBe('12.34');
      expect(textFormatter('!@#1.23$%^')).toBe('1.23');
    });
  });

  describe('integer-only mode with allowDecimals=false', () => {
    it('should remove decimal points when allowDecimals is false', () => {
      expect(textFormatter('1.5', false)).toBe('15');
      expect(textFormatter('123.456', false)).toBe('123 456');
      expect(textFormatter('.5', false)).toBe('5');
    });

    it('should remove all non-digit characters', () => {
      expect(textFormatter('abc123def', false)).toBe('123');
      expect(textFormatter('$100', false)).toBe('100');
      expect(textFormatter('1,2,3', false)).toBe('123');
    });

    it('should handle leading zeros in integer mode', () => {
      expect(textFormatter('01', false)).toBe('1');
      expect(textFormatter('001', false)).toBe('1');
      expect(textFormatter('000', false)).toBe('0');
    });
  });

  describe('edge cases and empty input', () => {
    it('should handle empty string', () => {
      expect(textFormatter('')).toBe('');
    });

    it('should handle strings with no digits', () => {
      expect(textFormatter('abc')).toBe('');
      expect(textFormatter('!@#$%^')).toBe('');
    });

    it('should handle whitespace', () => {
      expect(textFormatter(' 1 2 3 ')).toBe('123');
      expect(textFormatter(' 1.5 ')).toBe('1.5');
    });
  });

  describe('length limits with maxIntegerLength and maxDecimalLength', () => {
    describe('integer length limits', () => {
      it('should limit integer part to maxIntegerLength', () => {
        // Test with 5-digit limit
        expect(textFormatter('123456789', true, false, 5, 9)).toBe('12345');
        expect(textFormatter('987654321', true, false, 3, 9)).toBe('987');
        expect(textFormatter('1000000000', true, false, 9, 9)).toBe(
          '100000000',
        ); // Should truncate 10th digit
      });

      it('should allow exactly maxIntegerLength digits', () => {
        expect(textFormatter('123456789', true, false, 9, 9)).toBe('123456789');
        expect(textFormatter('12345', true, false, 5, 9)).toBe('12345');
      });

      it('should handle integer limits with thousands separator', () => {
        expect(textFormatter('123456789', true, true, 9, 9)).toBe(
          '123 456 789',
        );
        expect(textFormatter('1234567890', true, true, 9, 9)).toBe(
          '123 456 789',
        ); // Should truncate 10th digit
        expect(textFormatter('12345', true, true, 5, 9)).toBe('12 345');
      });
    });

    describe('decimal length limits', () => {
      it('should limit decimal part to maxDecimalLength', () => {
        expect(textFormatter('123.456789012', true, false, 9, 5)).toBe(
          '123.45678',
        );
        expect(textFormatter('1.123456789', true, false, 9, 3)).toBe('1.123');
        expect(textFormatter('0.987654321', true, false, 9, 2)).toBe('0.98');
      });

      it('should allow exactly maxDecimalLength digits', () => {
        expect(textFormatter('123.123456789', true, false, 9, 9)).toBe(
          '123.123456789',
        );
        expect(textFormatter('1.12345', true, false, 9, 5)).toBe('1.12345');
      });

      it('should handle decimal limits with thousands separator', () => {
        expect(textFormatter('123456.789012345', true, true, 9, 5)).toBe(
          '123 456.78901',
        );
        expect(textFormatter('1234567.123456789', true, true, 9, 9)).toBe(
          '1 234 567.123456789',
        );
      });
    });

    describe('combined length limits (18 total digits)', () => {
      it('should allow 9 integer + 9 decimal digits (18 total)', () => {
        const input = '123456789.987654321';
        const expected = '123456789.987654321';
        expect(textFormatter(input, true, false, 9, 9)).toBe(expected);
      });

      it('should allow 9 integer + 9 decimal with thousands separator', () => {
        const input = '123456789.987654321';
        const expected = '123 456 789.987654321';
        expect(textFormatter(input, true, true, 9, 9)).toBe(expected);
      });

      it('should truncate excess digits in integer part', () => {
        const input = '1234567890.123456789'; // 10 integer + 9 decimal
        const expected = '123456789.123456789'; // Should truncate to 9 integer + 9 decimal
        expect(textFormatter(input, true, false, 9, 9)).toBe(expected);
      });

      it('should truncate excess digits in decimal part', () => {
        const input = '123456789.9876543210'; // 9 integer + 10 decimal
        const expected = '123456789.987654321'; // Should truncate to 9 integer + 9 decimal
        expect(textFormatter(input, true, false, 9, 9)).toBe(expected);
      });

      it('should truncate excess digits in both parts', () => {
        const input = '12345678901.98765432109'; // 11 integer + 11 decimal
        const expected = '123456789.987654321'; // Should truncate to 9 integer + 9 decimal
        expect(textFormatter(input, true, false, 9, 9)).toBe(expected);
      });
    });

    describe('edge cases with length limits', () => {
      it('should handle trailing decimal point with length limits', () => {
        expect(textFormatter('123456789.', true, false, 9, 9)).toBe(
          '123456789.',
        );
        expect(textFormatter('1234567890.', true, false, 9, 9)).toBe(
          '123456789.',
        ); // Truncate integer
        expect(textFormatter('123.', true, false, 5, 5)).toBe('123.');
      });

      it('should handle leading zeros with length limits', () => {
        expect(textFormatter('000123456789', true, false, 9, 9)).toBe(
          '123456789',
        );
        expect(textFormatter('001234567890', true, false, 9, 9)).toBe(
          '123456789',
        ); // Should truncate
      });

      it('should handle decimal starting with dot', () => {
        expect(textFormatter('.123456789', true, false, 9, 9)).toBe(
          '0.123456789',
        );
        expect(textFormatter('.1234567890', true, false, 9, 9)).toBe(
          '0.123456789',
        ); // Truncate decimal
      });

      it('should preserve functionality when limits are not restrictive', () => {
        expect(textFormatter('123.45', true, false, 9, 9)).toBe('123.45');
        expect(textFormatter('1.2', true, true, 9, 9)).toBe('1.2');
      });
    });

    describe('backwards compatibility', () => {
      it('should work with undefined length parameters', () => {
        // When called without length params, should use default behavior
        expect(textFormatter('123456789.123456789')).toBe(
          '123 456 789.123456789',
        ); // Default 9 decimal limit
      });
    });
  });

  describe('complex scenarios', () => {
    it('should handle combination of all edge cases', () => {
      expect(textFormatter('$01,234.567890abc')).toBe('1.234567890');
    });

    it('should handle realistic user input scenarios', () => {
      expect(textFormatter('100')).toBe('100');
      expect(textFormatter('100.00')).toBe('100.00');
      expect(textFormatter('0100')).toBe('100');
      expect(textFormatter('€50.25')).toBe('50.25');
    });
  });
});
