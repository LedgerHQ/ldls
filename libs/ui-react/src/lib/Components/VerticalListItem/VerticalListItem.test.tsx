import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { VerticalListItem } from './VerticalListItem';
import { Spot } from '../Spot';
import { IconButton } from '../IconButton';
import { Settings } from '../../Symbols';

describe('VerticalListItem Component', () => {
  const mockSpot = <Spot appearance='icon' icon={Settings} />;
  const mockTitle = 'Test Item';

  it('should render correctly with required props', () => {
    render(<VerticalListItem spot={mockSpot} title={mockTitle} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('should render subtitle when provided', () => {
    const subtitle = 'Test Subtitle';
    render(
      <VerticalListItem
        spot={mockSpot}
        title={mockTitle}
        subtitle={subtitle}
      />,
    );
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('should render tag when provided', () => {
    const tagText = 'Test Tag';
    const mockTag = <div data-testid='mock-tag'>{tagText}</div>;
    render(
      <VerticalListItem spot={mockSpot} title={mockTitle} tag={mockTag} />,
    );
    expect(screen.getByTestId('mock-tag')).toBeInTheDocument();
    expect(screen.getByText(tagText)).toBeInTheDocument();
  });

  it('should render secondary action when provided', () => {
    const mockSecondaryAction = (
      <IconButton iconType='stroked' aria-label='Test Action'>
        <Settings />
      </IconButton>
    );
    render(
      <VerticalListItem
        spot={mockSpot}
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
      <VerticalListItem
        spot={mockSpot}
        title={mockTitle}
        onClick={handleClick}
      />,
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active state on mouse down', () => {
    render(<VerticalListItem spot={mockSpot} title={mockTitle} />);
    const containerElement = screen.getByRole('button').parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    fireEvent.mouseDown(containerElement);
    expect(containerElement).toHaveClass('bg-base-transparent-pressed');
  });

  it('should remove active state on mouse up', () => {
    render(<VerticalListItem spot={mockSpot} title={mockTitle} />);
    const containerElement = screen.getByRole('button').parentElement;

    if (!containerElement) {
      throw new Error('Container element not found');
    }

    fireEvent.mouseDown(containerElement);
    expect(containerElement).toHaveClass('bg-base-transparent-pressed');

    fireEvent.mouseUp(containerElement);
    expect(containerElement).not.toHaveClass('bg-base-transparent-pressed');
  });

  it('should remove active state on mouse leave', () => {
    render(<VerticalListItem spot={mockSpot} title={mockTitle} />);
    const containerElement = screen.getByRole('button').parentElement;

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
      <IconButton iconType='stroked' aria-label='Test Action'>
        <Settings />
      </IconButton>
    );

    render(
      <VerticalListItem
        spot={mockSpot}
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

    // Click on secondary action
    fireEvent.click(secondaryAction);

    // Parent should not be activated
    expect(containerElement).not.toHaveClass('bg-base-transparent-pressed');
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply custom className to container', () => {
    const customClass = 'custom-test-class';
    render(
      <VerticalListItem
        spot={mockSpot}
        title={mockTitle}
        className={customClass}
      />,
    );
    const containerElement = screen.getByRole('button').parentElement;
    expect(containerElement).toHaveClass(customClass);
  });

  it('should forward additional props to button element', () => {
    const testId = 'test-button';
    render(
      <VerticalListItem
        spot={mockSpot}
        title={mockTitle}
        data-testid={testId}
      />,
    );
    const buttonElement = screen.getByTestId(testId);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should have correct aria-label when provided', () => {
    const ariaLabel = 'Test aria label';
    render(
      <VerticalListItem
        spot={mockSpot}
        title={mockTitle}
        aria-label={ariaLabel}
      />,
    );
    const buttonElement = screen.getByRole('button', { name: ariaLabel });
    expect(buttonElement).toBeInTheDocument();
  });
});
