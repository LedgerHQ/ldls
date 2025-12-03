import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { DialogHeader } from './DialogHeader';

describe('DialogHeader', () => {
  it('renders compact appearance with title and description', () => {
    render(
      <DialogHeader
        appearance='compact'
        title='Test Title'
        description='Test Desc'
        onClose={() => {
          console.log('close');
        }}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked in compact appearance', () => {
    const onClose = vi.fn();
    render(<DialogHeader appearance='compact' onClose={onClose} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
    fireEvent.click(buttons[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders back button and calls onBack when clicked in compact appearance', () => {
    const onBack = vi.fn();
    const onClose = vi.fn();
    render(
      <DialogHeader appearance='compact' onClose={onClose} onBack={onBack} />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(onBack).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders extended appearance with title and description', () => {
    render(
      <DialogHeader
        appearance='extended'
        title='Test Title'
        description='Test Desc'
        onClose={() => {
          console.log('close');
        }}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked in extended appearance', () => {
    const onClose = vi.fn();
    render(<DialogHeader appearance='extended' onClose={onClose} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
    fireEvent.click(buttons[0]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders back button and calls onBack when clicked in extended appearance', () => {
    const onBack = vi.fn();
    const onClose = vi.fn();
    render(
      <DialogHeader appearance='extended' onClose={onClose} onBack={onBack} />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(onBack).toHaveBeenCalledTimes(1);
    fireEvent.click(buttons[1]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
