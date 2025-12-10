import { describe, it, expect } from '@jest/globals';
import { sva, VariantProps } from './styleVarianceAuthority';

describe('sva', () => {
  describe('base styles', () => {
    it('should return base styles when no variants', () => {
      const styles = sva({
        base: { padding: 16, borderRadius: 8 },
      });

      expect(styles()).toEqual({ padding: 16, borderRadius: 8 });
    });

    it('should return empty object when no config', () => {
      const styles = sva({});

      expect(styles()).toEqual({});
    });
  });

  describe('variants', () => {
    it('should apply single variant', () => {
      const styles = sva({
        base: { padding: 16 },
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
        },
      });

      expect(styles({ size: 'sm' })).toEqual({ padding: 8 });
      expect(styles({ size: 'lg' })).toEqual({ padding: 24 });
    });

    it('should apply multiple variants', () => {
      const styles = sva({
        base: { padding: 16 },
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
      });

      expect(styles({ size: 'lg', intent: 'danger' })).toEqual({
        padding: 24,
        backgroundColor: 'red',
      });
    });

    it('should merge base with variants', () => {
      const styles = sva({
        base: { borderRadius: 8, opacity: 1 },
        variants: {
          size: {
            sm: { padding: 8 },
          },
        },
      });

      expect(styles({ size: 'sm' })).toEqual({
        borderRadius: 8,
        opacity: 1,
        padding: 8,
      });
    });
  });

  describe('defaultVariants', () => {
    it('should apply default variants when no props provided', () => {
      const styles = sva({
        base: { borderRadius: 8 },
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
        },
        defaultVariants: {
          size: 'sm',
        },
      });

      expect(styles()).toEqual({ borderRadius: 8, padding: 8 });
    });

    it('should override defaults with provided props', () => {
      const styles = sva({
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
        },
        defaultVariants: {
          size: 'sm',
        },
      });

      expect(styles({ size: 'lg' })).toEqual({ padding: 24 });
    });

    it('should not let explicit undefined override defaults', () => {
      const styles = sva({
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
        defaultVariants: {
          size: 'sm',
          intent: 'primary',
        },
      });

      // Explicit undefined should fall back to defaults
      expect(styles({ size: undefined })).toEqual({
        padding: 8,
        backgroundColor: 'blue',
      });
      expect(styles({ size: undefined, intent: undefined })).toEqual({
        padding: 8,
        backgroundColor: 'blue',
      });
      // Partial override with explicit undefined on other
      expect(styles({ size: 'lg', intent: undefined })).toEqual({
        padding: 24,
        backgroundColor: 'blue',
      });
    });
  });

  describe('compoundVariants', () => {
    it('should apply compound variant when conditions match', () => {
      const styles = sva({
        base: { padding: 16 },
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
        compoundVariants: [
          { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
        ],
      });

      expect(styles({ size: 'lg', intent: 'danger' })).toEqual({
        padding: 24,
        backgroundColor: 'red',
        borderWidth: 2,
      });
    });

    it('should not apply compound variant when conditions do not match', () => {
      const styles = sva({
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
        compoundVariants: [
          { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
        ],
      });

      expect(styles({ size: 'lg', intent: 'primary' })).toEqual({
        padding: 24,
        backgroundColor: 'blue',
      });
    });

    it('should apply multiple compound variants', () => {
      const styles = sva({
        variants: {
          size: {
            sm: {},
            lg: {},
          },
          intent: {
            primary: {},
            danger: {},
          },
        },
        compoundVariants: [
          { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
          { size: 'lg', intent: 'primary', style: { borderWidth: 1 } },
        ],
      });

      expect(styles({ size: 'lg', intent: 'danger' })).toEqual({
        borderWidth: 2,
      });
      expect(styles({ size: 'lg', intent: 'primary' })).toEqual({
        borderWidth: 1,
      });
    });

    it('should apply compound variants with default variants only', () => {
      const styles = sva({
        base: { borderRadius: 8 },
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
        defaultVariants: {
          size: 'lg',
          intent: 'danger',
        },
        compoundVariants: [
          { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
        ],
      });

      // Calling without props should use defaults and trigger compound variant
      expect(styles()).toEqual({
        borderRadius: 8,
        padding: 24,
        backgroundColor: 'red',
        borderWidth: 2,
      });
    });

    it('should apply compound variants when defaults are partially overridden', () => {
      const styles = sva({
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
            danger: { backgroundColor: 'red' },
          },
        },
        defaultVariants: {
          size: 'sm',
          intent: 'danger',
        },
        compoundVariants: [
          { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
        ],
      });

      // Override size to lg, intent stays at default danger -> compound should match
      expect(styles({ size: 'lg' })).toEqual({
        padding: 24,
        backgroundColor: 'red',
        borderWidth: 2,
      });
    });
  });

  describe('VariantProps type', () => {
    it('should infer variant props type', () => {
      const styles = sva({
        variants: {
          size: {
            sm: { padding: 8 },
            lg: { padding: 24 },
          },
          intent: {
            primary: { backgroundColor: 'blue' },
          },
        },
      });

      // Type test - this should compile without errors
      type Props = VariantProps<typeof styles>;
      const props: Props = { size: 'sm', intent: 'primary' };

      expect(styles(props)).toEqual({ padding: 8, backgroundColor: 'blue' });
    });
  });
});
