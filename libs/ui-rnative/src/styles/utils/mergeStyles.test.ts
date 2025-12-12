import { describe, it, expect } from '@jest/globals';
import { match } from './match/match';
import { mergeStyles } from './mergeStyles';
import { when } from './when/when';

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

describe('mergeStyles + match integration', () => {
  it('should merge matched variant styles', () => {
    const size = 'lg' as const;
    const result = mergeStyles(
      { borderRadius: 8 },
      match(size, {
        sm: { padding: 8 },
        lg: { padding: 24 },
      }),
    );
    expect(result).toEqual({ borderRadius: 8, padding: 24 });
  });

  it('should filter out non-matching variants', () => {
    const size = 'md' as const;
    const result = mergeStyles(
      { borderRadius: 8 },
      match(size, {
        sm: { padding: 8 },
        lg: { padding: 24 },
      }),
    );
    expect(result).toEqual({ borderRadius: 8 });
  });
});

describe('mergeStyles + when integration', () => {
  it('should merge style when condition is true', () => {
    const result = mergeStyles(
      { padding: 16 },
      when({ condition: true, style: { opacity: 0.5 } }),
    );
    expect(result).toEqual({ padding: 16, opacity: 0.5 });
  });

  it('should filter out style when condition is false', () => {
    const result = mergeStyles(
      { padding: 16 },
      when({ condition: false, style: { opacity: 0.5 } }),
    );
    expect(result).toEqual({ padding: 16 });
  });
});

describe('mergeStyles + match + when integration', () => {
  it('should work together with correct override order', () => {
    const iconType = 'stroked' as const;
    const pressed = true;
    const disabled = true;

    const result = mergeStyles(
      { alignItems: 'center' },
      match(iconType, {
        filled: { backgroundColor: 'white' },
        stroked: { backgroundColor: 'transparent' },
      }),
      when({
        condition: iconType === 'stroked' && pressed,
        style: { backgroundColor: 'pressed-color' },
      }),
      when({
        condition: disabled,
        style: { backgroundColor: 'disabled-color' },
      }),
    );

    // disabled comes last, so it wins
    expect(result).toEqual({
      alignItems: 'center',
      backgroundColor: 'disabled-color',
    });
  });
});
