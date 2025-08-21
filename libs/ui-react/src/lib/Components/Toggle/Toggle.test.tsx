import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle } from './Toggle';

describe('Toggle Component', () => {
  it('should render correctly in default state', () => {
    render(<Toggle />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toBeInTheDocument();
    expect(toggleElement).toHaveAttribute('aria-pressed', 'false');
  });

  it('should render with default selected state when defaultSelected is true', () => {
    render(<Toggle defaultSelected />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toHaveAttribute('aria-pressed', 'true');
  });

  it('should render with controlled selected state', () => {
    const { rerender } = render(<Toggle selected={false} />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toHaveAttribute('aria-pressed', 'false');

    rerender(<Toggle selected={true} />);
    expect(toggleElement).toHaveAttribute('aria-pressed', 'true');
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Toggle disabled />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toBeDisabled();
    expect(toggleElement).toHaveAttribute('data-disabled');
  });

  it('should call the onSelectedChange handler when clicked', () => {
    const handleSelectedChange = vi.fn();
    render(<Toggle onSelectedChange={handleSelectedChange} />);

    const toggleElement = screen.getByRole('button');
    fireEvent.click(toggleElement);

    expect(handleSelectedChange).toHaveBeenCalledTimes(1);
    expect(handleSelectedChange).toHaveBeenCalledWith(true);
  });

  it('should call onSelectedChange with false when toggling from selected state', () => {
    const handleSelectedChange = vi.fn();
    render(<Toggle selected={true} onSelectedChange={handleSelectedChange} />);

    const toggleElement = screen.getByRole('button');
    fireEvent.click(toggleElement);

    expect(handleSelectedChange).toHaveBeenCalledTimes(1);
    expect(handleSelectedChange).toHaveBeenCalledWith(false);
  });

  it('should not call the onSelectedChange handler when disabled', () => {
    const handleSelectedChange = vi.fn();
    render(<Toggle onSelectedChange={handleSelectedChange} disabled />);

    const toggleElement = screen.getByRole('button');
    fireEvent.click(toggleElement);

    expect(handleSelectedChange).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    render(<Toggle className="custom-test-class" />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toHaveClass('custom-test-class');
  });

  it('should forward ref correctly', () => {
    const ref = vi.fn();
    render(<Toggle ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('should have correct accessibility attributes', () => {
    render(<Toggle />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toHaveAttribute('aria-pressed');
    expect(toggleElement).toHaveAttribute('type', 'button');
  });

  it('should be focusable and have keyboard accessibility', () => {
    render(<Toggle />);
    const toggleElement = screen.getByRole('button');

    // Test that the element is focusable
    toggleElement.focus();
    expect(document.activeElement).toBe(toggleElement);

    // Test that it has the right tabIndex (should be 0 or undefined for focusable elements)
    expect(toggleElement.tabIndex).toBeGreaterThanOrEqual(0);
  });

  it('should handle uncontrolled usage correctly', () => {
    const handleSelectedChange = vi.fn();
    render(<Toggle onSelectedChange={handleSelectedChange} />);

    const toggleElement = screen.getByRole('button');

    // Initial state should be false
    expect(toggleElement).toHaveAttribute('aria-pressed', 'false');

    // Click to toggle
    fireEvent.click(toggleElement);
    expect(handleSelectedChange).toHaveBeenCalledWith(true);

    // Component should update its internal state
    expect(toggleElement).toHaveAttribute('aria-pressed', 'true');
  });

  it('should support additional HTML attributes', () => {
    render(<Toggle id="test-toggle" data-testid="toggle-component" />);
    const toggleElement = screen.getByRole('button');
    expect(toggleElement).toHaveAttribute('id', 'test-toggle');
    expect(toggleElement).toHaveAttribute('data-testid', 'toggle-component');
  });
});
