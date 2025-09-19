import * as React from 'react';

/**
 * Recursively unwraps a component type through memo layers to get its displayName.
 * Handles nested wrappers elegantly.
 * Falls back to function.name if no displayName is set (though we require displayName for slots).
 */
function getInnermostDisplayName(type: any): string | undefined {
  if (typeof type === 'string') return type; // Built-in elements like 'div'
  if (!type) return undefined;

  // If it has displayName, return it (base case)
  if (type.displayName) return type.displayName;

  // Handle memo: recurse on the inner type
  if (type.$$typeof === Symbol.for('react.memo')) {
    return getInnermostDisplayName(type.type);
  }

  // Fallback for plain functions
  if (typeof type === 'function' && type.name) return type.name;

  return undefined;
}

/**
 * Helper to find a specific slot components among children, handling component wrappers like React.memo.
 * It identifies slots by their `displayName`.
 * @param children The children to search through.
 * @param slotComponent The slot component to look for. It must have a displayName.
 * @returns The found slot elements.
 */
export function getSlots(
  children: React.ReactNode,
  slotComponent: React.ElementType & { displayName: string },
): React.ReactElement[] {
  const childrenArray = React.Children.toArray(children);
  const slotDisplayName = slotComponent.displayName;

  if (!slotDisplayName) {
    // displayName is required for robust identification.
    throw new Error(
      `The slot component must have a displayName for robust identification.`,
    );
  }

  const slots = childrenArray.filter((child): child is React.ReactElement => {
    if (!React.isValidElement(child)) {
      return false;
    }

    const innermostDisplayName = getInnermostDisplayName(child.type);
    return innermostDisplayName === slotDisplayName;
  });

  return slots;
}
