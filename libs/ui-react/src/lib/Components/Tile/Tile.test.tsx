import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { Settings } from '../../Symbols';
import { InteractiveIcon } from '../InteractiveIcon';
import { Spot } from '../Spot';
import { Tile } from './Tile';

describe('Tile Component', () => {
  const mockSpot = <Spot appearance='icon' icon={Settings} />;
  const mockTitle = 'Test Item';

  it('should render correctly with required props', () => {
    render(<Tile leadingContent={mockSpot} title={mockTitle} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('should render description when provided', () => {
    const description = 'Test description';
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        description={description}
      />,
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render tag when provided', () => {
    const tagText = 'Test Tag';
    const mockTag = <div data-testid='mock-tag'>{tagText}</div>;
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        trailingContent={mockTag}
      />,
    );
    expect(screen.getByTestId('mock-tag')).toBeInTheDocument();
    expect(screen.getByText(tagText)).toBeInTheDocument();
  });

  it('should render secondary action when provided', () => {
    const mockSecondaryAction = (
      <InteractiveIcon iconType='stroked' aria-label='Test Action'>
        <Settings />
      </InteractiveIcon>
    );
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        secondaryAction={mockSecondaryAction}
      />,
    );
    const secondaryAction = screen.getByLabelText(/test action/i);
    expect(secondaryAction).toBeInTheDocument();
  });

  it('should call onClick handler when main button is clicked', () => {
    const handleClick = vi.fn();
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        onClick={handleClick}
      />,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active state on mouse down', () => {
    render(<Tile leadingContent={mockSpot} title={mockTitle} />);
    const buttonElement = screen.getByRole('button');
    const containerElement = buttonElement.parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    fireEvent.mouseDown(containerElement);
    expect(containerElement).toHaveClass('bg-base-transparent-pressed');
  });

  it('should remove active state on mouse up', () => {
    render(<Tile leadingContent={mockSpot} title={mockTitle} />);
    const buttonElement = screen.getByRole('button');
    const containerElement = buttonElement.parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    fireEvent.mouseDown(containerElement);
    expect(containerElement).toHaveClass('bg-base-transparent-pressed');

    fireEvent.mouseUp(containerElement);
    expect(containerElement).not.toHaveClass('bg-base-transparent-pressed');
  });

  it('should remove active state on mouse leave', () => {
    render(<Tile leadingContent={mockSpot} title={mockTitle} />);
    const buttonElement = screen.getByRole('button');
    const containerElement = buttonElement.parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    fireEvent.mouseDown(containerElement);
    expect(containerElement).toHaveClass('bg-base-transparent-pressed');

    fireEvent.mouseLeave(containerElement);
    expect(containerElement).not.toHaveClass('bg-base-transparent-pressed');
  });

  it('should prevent parent activation when clicking secondary action', () => {
    const handleClick = vi.fn();
    const mockSecondaryAction = (
      <InteractiveIcon iconType='stroked' aria-label='Test Action'>
        <Settings />
      </InteractiveIcon>
    );

    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        onClick={handleClick}
        secondaryAction={mockSecondaryAction}
      />,
    );

    const secondaryAction = screen.getByLabelText(/test action/i);
    const mainButton = screen.getByText(mockTitle).closest('button');

    if (!mainButton) {
      throw new Error('Main button not found');
    }

    const containerElement = mainButton.parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    // Click on secondary action
    fireEvent.click(secondaryAction);

    // Container should not be activated
    expect(containerElement).not.toHaveClass('bg-base-transparent-pressed');
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply custom className to container', () => {
    const customClass = 'custom-test-class';
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        className={customClass}
      />,
    );
    const buttonElement = screen.getByRole('button');
    const containerElement = buttonElement.parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    expect(containerElement).toHaveClass(customClass);
  });

  it('should forward additional props to container element, not button', () => {
    const testId = 'test-container';
    render(
      <Tile leadingContent={mockSpot} title={mockTitle} data-testid={testId} />,
    );

    // Props should be on container
    const containerElement = screen.getByTestId(testId);
    expect(containerElement).toBeInTheDocument();

    // Props should NOT be on button
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toHaveAttribute('data-testid', testId);
  });

  it('should apply custom aria-label to button only, not container', () => {
    const customAriaLabel = 'Custom aria label';
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        aria-label={customAriaLabel}
      />,
    );

    // Button should have custom aria-label
    const buttonElement = screen.getByRole('button', { name: customAriaLabel });
    expect(buttonElement).toHaveAttribute('aria-label', customAriaLabel);

    // Container should NOT have aria-label (it was extracted before spreading props)
    const containerElement = buttonElement.parentElement;
    if (!containerElement) {
      throw new Error('Container element not found');
    }
    expect(containerElement).not.toHaveAttribute('aria-label');
  });

  it('should use title as button aria-label when no aria-label prop provided', () => {
    render(<Tile leadingContent={mockSpot} title={mockTitle} />);

    // Button should have aria-label={title} by default
    const buttonElement = screen.getByRole('button', { name: mockTitle });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('aria-label', mockTitle);

    // Container should NOT have aria-label when not provided
    const containerElement = buttonElement.parentElement;
    if (!containerElement) {
      throw new Error('Container element not found');
    }
    expect(containerElement).not.toHaveAttribute('aria-label');
  });

  it('should prioritize custom aria-label over title for button', () => {
    const customAriaLabel = 'Custom label';
    render(
      <Tile
        leadingContent={mockSpot}
        title={mockTitle}
        aria-label={customAriaLabel}
      />,
    );

    // Should be able to query button by custom aria-label
    const buttonByCustomLabel = screen.getByRole('button', {
      name: customAriaLabel,
    });
    expect(buttonByCustomLabel).toBeInTheDocument();

    // Should NOT be able to query button by title (since aria-label overrides it)
    const buttonByTitle = screen.queryByRole('button', { name: mockTitle });
    expect(buttonByTitle).toBeNull();
  });
});
