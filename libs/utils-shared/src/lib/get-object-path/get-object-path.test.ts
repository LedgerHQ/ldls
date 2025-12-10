import { describe, it, expect } from 'vitest';
import { getObjectPath } from './get-object-path';

describe('getObjectPath', () => {
  const testObj = {
    colors: {
      bg: {
        surface: '#ffffff',
        accent: '#0000ff',
      },
      text: {
        base: '#000000',
      },
    },
    spacings: {
      s4: 4,
      s8: 8,
      s16: 16,
    },
    nested: {
      deep: {
        value: 'found',
      },
    },
  };

  it('should access single level path', () => {
    expect(getObjectPath(testObj, ['spacings'])).toEqual({
      s4: 4,
      s8: 8,
      s16: 16,
    });
  });

  it('should access two level path', () => {
    expect(getObjectPath(testObj, ['colors', 'bg'])).toEqual({
      surface: '#ffffff',
      accent: '#0000ff',
    });
  });

  it('should access three level path', () => {
    expect(getObjectPath(testObj, ['colors', 'bg', 'surface'])).toBe('#ffffff');
  });

  it('should access deeply nested path', () => {
    expect(getObjectPath(testObj, ['nested', 'deep', 'value'])).toBe('found');
  });

  it('should return undefined for non-existent path', () => {
    expect(getObjectPath(testObj, ['nonexistent'])).toBeUndefined();
    expect(getObjectPath(testObj, ['colors', 'nonexistent'])).toBeUndefined();
    expect(
      getObjectPath(testObj, ['colors', 'bg', 'nonexistent']),
    ).toBeUndefined();
  });

  it('should return undefined for path through non-object', () => {
    expect(
      getObjectPath(testObj, ['spacings', 's4', 'invalid']),
    ).toBeUndefined();
  });

  it('should handle empty path', () => {
    expect(getObjectPath(testObj, [])).toEqual(testObj);
  });

  it('should work with type parameter', () => {
    const result = getObjectPath<string>(testObj, ['colors', 'bg', 'surface']);
    expect(result).toBe('#ffffff');
  });
});
