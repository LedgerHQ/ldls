import { createElement } from 'react';
import { describe, it, expect } from 'vitest';
import { extractSlottable } from './extractSlottable';

describe('extractSlottable', () => {
  it('should extract element with matching data-slot', () => {
    const children = [
      createElement('div', { 'data-slot': 'target', key: '1' }, 'Target'),
      createElement('div', { key: '2' }, 'Other 1'),
      createElement('div', { key: '3' }, 'Other 2'),
    ];

    const { slotElement, remainingChildren } = extractSlottable(
      children,
      'target',
    );

    expect(slotElement).toBeTruthy();
    expect(remainingChildren).toHaveLength(2);
  });

  it('should return null slotElement when no match found', () => {
    const children = [
      createElement('div', { key: '1' }, 'Child 1'),
      createElement('div', { key: '2' }, 'Child 2'),
    ];

    const { slotElement, remainingChildren } = extractSlottable(
      children,
      'non-existent',
    );

    expect(slotElement).toBeNull();
    expect(remainingChildren).toHaveLength(2);
  });

  it('should handle empty children', () => {
    const { slotElement, remainingChildren } = extractSlottable([], 'target');

    expect(slotElement).toBeNull();
    expect(remainingChildren).toHaveLength(0);
  });

  it('should handle single child', () => {
    const child = createElement(
      'div',
      { 'data-slot': 'target' },
      'Single Target',
    );

    const { slotElement, remainingChildren } = extractSlottable(
      child,
      'target',
    );

    expect(slotElement).toBeTruthy();
    expect(remainingChildren).toHaveLength(0);
  });

  it('should extract only first matching element', () => {
    const children = [
      createElement('div', { 'data-slot': 'target', key: '1' }, 'Target 1'),
      createElement('div', { key: '2' }, 'Other'),
      createElement('div', { 'data-slot': 'target', key: '3' }, 'Target 2'),
    ];

    const { slotElement, remainingChildren } = extractSlottable(
      children,
      'target',
    );

    expect(slotElement).toBeTruthy();
    // Remaining should include only the non-target element (second target is also filtered out)
    expect(remainingChildren).toHaveLength(1);
  });

  it('should preserve non-element children', () => {
    const children = [
      'Text node',
      createElement('div', { 'data-slot': 'target', key: '1' }, 'Target'),
      createElement('div', { key: '2' }, 'Element'),
      123,
      null,
      undefined,
    ];

    const { slotElement, remainingChildren } = extractSlottable(
      children,
      'target',
    );

    expect(slotElement).toBeTruthy();
    // React.Children.toArray() filters out null and undefined automatically
    // Should preserve text, number, and other element (3 items)
    expect(remainingChildren).toHaveLength(3);
  });
});
