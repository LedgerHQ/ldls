import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type StyleValue = ViewStyle | TextStyle | ImageStyle;

type VariantsConfig = Record<string, Record<string, StyleValue>>;

type CompoundVariantConditions<V extends VariantsConfig> = {
  [K in keyof V]?: keyof V[K];
};

// Require at least one condition key to prevent empty compound variants that always match
type AtLeastOneCondition<V extends VariantsConfig> = {
  [K in keyof V]: Required<Pick<CompoundVariantConditions<V>, K>> &
    Partial<Omit<CompoundVariantConditions<V>, K>>;
}[keyof V];

type CompoundVariant<V extends VariantsConfig> = AtLeastOneCondition<V> & {
  style: StyleValue;
};

type VariantConfig<V extends VariantsConfig> = {
  base?: StyleValue;
  variants?: V;
  compoundVariants?: CompoundVariant<V>[];
  defaultVariants?: { [K in keyof V]?: keyof V[K] };
};

type VariantPropsInput<V extends VariantsConfig> = {
  [K in keyof V]?: keyof V[K];
};

/**
 * Extract variant props type from an sva instance
 */
export type VariantProps<T> = T extends (props?: infer P) => StyleValue
  ? P
  : never;

/**
 * Style Variance Authority - like CVA but for React Native styles
 *
 * @example
 * const buttonStyles = sva({
 *   base: { padding: 16, borderRadius: 8 },
 *   variants: {
 *     size: {
 *       sm: { padding: 8 },
 *       lg: { padding: 24 },
 *     },
 *     intent: {
 *       primary: { backgroundColor: 'blue' },
 *       danger: { backgroundColor: 'red' },
 *     },
 *   },
 *   compoundVariants: [
 *     { size: 'lg', intent: 'danger', style: { borderWidth: 2 } },
 *   ],
 *   defaultVariants: {
 *     size: 'sm',
 *     intent: 'primary',
 *   },
 * });
 *
 * const style = buttonStyles({ size: 'lg' });
 */
/**
 * Filters out undefined values from props to prevent them from overriding defaults
 */
const filterUndefinedProps = <T extends Record<string, unknown>>(
  props: T | undefined,
): Partial<T> | undefined => {
  if (!props) return undefined;

  const result: Partial<T> = {};
  const keys = Object.keys(props) as (keyof T)[];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (props[key] !== undefined) {
      result[key] = props[key];
    }
  }

  return Object.keys(result).length > 0 ? result : undefined;
};

export const sva = <V extends VariantsConfig>(config: VariantConfig<V>) => {
  const { base, variants, compoundVariants, defaultVariants } = config;

  // Cache variant keys once - they never change
  const variantKeys = variants ? Object.keys(variants) : [];

  return (props?: VariantPropsInput<V>): StyleValue => {
    // Start with base or empty object
    const result: StyleValue = base ? { ...base } : {};

    // No variants defined - return base
    if (!variants) {
      return result;
    }

    // Filter out undefined props to prevent them from overriding defaults
    const filteredProps = filterUndefinedProps(props);

    // Merge props with defaults
    const mergedProps = defaultVariants
      ? { ...defaultVariants, ...filteredProps }
      : filteredProps;

    // Apply variant styles
    if (mergedProps) {
      for (let i = 0; i < variantKeys.length; i++) {
        const variantKey = variantKeys[i];
        const variantValue =
          mergedProps[variantKey as keyof typeof mergedProps];
        if (variantValue !== undefined) {
          const variantStyle = variants[variantKey]?.[variantValue as string];
          if (variantStyle) {
            Object.assign(result, variantStyle);
          }
        }
      }
    }

    // Apply compound variants (early exit if none)
    if (compoundVariants && compoundVariants.length > 0 && mergedProps) {
      for (let i = 0; i < compoundVariants.length; i++) {
        const compound = compoundVariants[i];
        const { style, ...conditions } = compound;

        // Check if all conditions match
        let matches = true;
        const conditionKeys = Object.keys(conditions);

        for (let j = 0; j < conditionKeys.length; j++) {
          const conditionKey = conditionKeys[j];
          if (
            mergedProps[conditionKey as keyof typeof mergedProps] !==
            conditions[conditionKey as keyof typeof conditions]
          ) {
            matches = false;
            break;
          }
        }

        if (matches) {
          Object.assign(result, style);
        }
      }
    }

    return result;
  };
};
