import { describe, it, expect } from '@jest/globals';

import { mergeStyles } from './mergeStyles';

describe('mergeStyles', () => {
  it('should return empty object when no styles provided', () => {
    expect(mergeStyles()).toEqual({});
  });

  it('should merge multiple style objects', () => {
    expect(
      mergeStyles({ padding: 16 }, { margin: 8 }, { borderRadius: 4 }),
    ).toEqual({
      padding: 16,
      margin: 8,
      borderRadius: 4,
    });
  });

  it('should filter out falsy values', () => {
    expect(
      mergeStyles({ padding: 16 }, false, null, undefined, { margin: 8 }),
    ).toEqual({
      padding: 16,
      margin: 8,
    });
  });

  it('should override earlier styles with later ones', () => {
    expect(
      mergeStyles({ padding: 16, margin: 8 }, { padding: 24 }, { padding: 32 }),
    ).toEqual({
      padding: 32,
      margin: 8,
    });
  });

  it('should work with && conditional pattern', () => {
    const disabled = true;
    expect(mergeStyles({ padding: 16 }, disabled && { opacity: 0.5 })).toEqual({
      padding: 16,
      opacity: 0.5,
    });
  });
});
