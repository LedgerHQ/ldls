/**
 * Access a nested property in an object using an array path.
 *
 * @param obj - The object to access
 * @param path - Array of keys representing the path to the value
 * @returns The value at the path, or undefined if not found
 *
 * @example
 * ```ts
 * const theme = { colors: { bg: { surface: '#fff' } } };
 *
 * getObjectPath(theme, ['colors', 'bg', 'surface']); // '#fff'
 * getObjectPath(theme, ['colors', 'bg']); // { surface: '#fff' }
 * getObjectPath(theme, ['spacings']); // undefined
 * ```
 */
export const getObjectPath = <T = unknown>(
  obj: Record<string, unknown>,
  path: string[],
): T | undefined => {
  let current: unknown = obj;

  for (const key of path) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }

  return current as T | undefined;
};
