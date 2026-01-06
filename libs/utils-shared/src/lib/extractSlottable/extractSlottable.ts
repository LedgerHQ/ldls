import { Children, ComponentType, isValidElement, ReactNode } from 'react';

/**
 * Extracts children with a specific data-slot attribute or component type from a React children collection.
 * Useful for separating specific components from general content in composite patterns.
 *
 * @param children - React children to process
 * @param slotNameOrType - The data-slot value to extract, or the component type to match
 * @returns An object containing the extracted slot element and remaining children
 *
 * @example
 * // Extract by data-slot attribute
 * const { slotElement, remainingChildren } = extractSlottable(children, 'secondary-action');
 *
 * @example
 * // Extract by component type
 * const { slotElement, remainingChildren } = extractSlottable(children, MyComponent);
 *
 * return (
 *   <div>
 *     {slotElement}
 *     <button>{remainingChildren}</button>
 *   </div>
 * );
 */
export function extractSlottable(
  children: ReactNode,
  slotNameOrType: string | ComponentType<any>,
): {
  slotElement: ReactNode;
  remainingChildren: ReactNode[];
} {
  const childArray = Children.toArray(children);

  const matcher =
    typeof slotNameOrType === 'string'
      ? (child: ReactNode) =>
          isValidElement(child) && child.props['data-slot'] === slotNameOrType
      : (child: ReactNode) =>
          isValidElement(child) && child.type === slotNameOrType;

  const slotElement = childArray.find(matcher);
  const remainingChildren = childArray.filter((child) => !matcher(child));

  return {
    slotElement: slotElement ?? null,
    remainingChildren,
  };
}
