import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button';
import { Settings } from '../../Symbols';

describe('Button Component', () => {
  it('should render correctly with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with icon and text', () => {
    render(<Button icon={Settings}>Settings</Button>);
    const buttonElement = screen.getByRole('button', { name: /settings/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('should be disabled and show a loading indicator when loading prop is true', () => {
    render(<Button loading>Loading...</Button>);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Not Clickable
      </Button>,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply full-width class when isFull is true', () => {
    render(<Button isFull>Full Width</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('w-full');
  });
});
