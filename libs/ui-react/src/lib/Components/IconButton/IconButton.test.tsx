import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IconButton } from './IconButton';
import { Settings, Plus } from '../../Symbols';

describe('IconButton Component', () => {
  it('should render correctly with children icon', () => {
    render(
      <IconButton iconType='filled' aria-label='Settings'>
        <Settings size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button', { name: /settings/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with filled iconType variant', () => {
    render(
      <IconButton iconType='filled' aria-label='Add item'>
        <Plus size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('inline-flex');
    expect(buttonElement).toHaveClass('rounded-full');
  });

  it('should render with stroked iconType variant', () => {
    render(
      <IconButton iconType='stroked' aria-label='Settings'>
        <Settings size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('bg-base-transparent');
    expect(buttonElement).toHaveClass('hover:bg-base-transparent-hover');
  });

  it('should have correct aria-label for accessibility', () => {
    render(
      <IconButton iconType='filled' aria-label='Open menu'>
        <Settings size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button', { name: /open menu/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(
      <IconButton iconType='filled' aria-label='Disabled button' disabled>
        <Settings size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        iconType='filled'
        aria-label='Clickable'
        onClick={handleClick}
      >
        <Plus size={20} />
      </IconButton>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        iconType='filled'
        aria-label='Disabled'
        onClick={handleClick}
        disabled
      >
        <Settings size={20} />
      </IconButton>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    render(
      <IconButton
        iconType='filled'
        aria-label='Custom'
        className='custom-test-class'
      >
        <Settings size={20} />
      </IconButton>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-test-class');
  });

  it('should forward ref correctly', () => {
    const ref = vi.fn();
    render(
      <IconButton iconType='stroked' aria-label='Ref test' ref={ref}>
        <Plus size={20} />
      </IconButton>,
    );
    expect(ref).toHaveBeenCalled();
  });
});
