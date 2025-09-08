import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SheetBar } from './SheetBar';

describe('SheetBar', () => {
  it('renders small size with title and description', () => {
    render(
      <SheetBar
        size="sm"
        title="Test Title"
        description="Test Desc"
        onClose={() => {}}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked in small size', () => {
    const onClose = vi.fn();
    render(<SheetBar size="sm" onClose={onClose} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
    fireEvent.click(buttons[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders back button and calls onBack when clicked in small size', () => {
    const onBack = vi.fn();
    const onClose = vi.fn();
    render(<SheetBar size="sm" onClose={onClose} onBack={onBack} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(onBack).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders large size with title and description', () => {
    render(
      <SheetBar
        size="lg"
        title="Test Title"
        description="Test Desc"
        onClose={() => {}}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked in large size', () => {
    const onClose = vi.fn();
    render(<SheetBar size="lg" onClose={onClose} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
    fireEvent.click(buttons[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders back button and calls onBack when clicked in large size', () => {
    const onBack = vi.fn();
    const onClose = vi.fn();
    render(<SheetBar size="lg" onClose={onClose} onBack={onBack} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(onBack).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
