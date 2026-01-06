import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { Settings, MoreVertical } from '../../Symbols';
import {
  Tile,
  TileSpot,
  TileContent,
  TileTitle,
  TileDescription,
  TileSecondaryAction,
} from './Tile';

describe('Tile Component', () => {
  describe('Basic Rendering', () => {
    it('should render correctly with composite API', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should render description when provided', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
            <TileDescription>Test description</TileDescription>
          </TileContent>
        </Tile>,
      );
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('should render custom content', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
          <div data-testid='custom-content'>Custom Content</div>
        </Tile>,
      );
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });

    it('should render secondary action when provided', () => {
      render(
        <Tile>
          <TileSecondaryAction icon={MoreVertical} aria-label='More actions' />
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );
      const secondaryAction = screen.getByLabelText(/more actions/i);
      expect(secondaryAction).toBeInTheDocument();
    });
  });

  describe('Click Handlers', () => {
    it('should call onClick handler when tile is clicked', () => {
      const handleClick = vi.fn();
      render(
        <Tile onClick={handleClick}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      fireEvent.click(buttonElement);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should call secondary action onClick and stop propagation', () => {
      const handleTileClick = vi.fn();
      const handleSecondaryClick = vi.fn();

      render(
        <Tile onClick={handleTileClick}>
          <TileSecondaryAction
            icon={MoreVertical}
            onClick={handleSecondaryClick}
            aria-label='More actions'
          />
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const secondaryAction = screen.getByLabelText(/more actions/i);
      fireEvent.click(secondaryAction);

      expect(handleSecondaryClick).toHaveBeenCalledTimes(1);
      expect(handleTileClick).not.toHaveBeenCalled();
    });
  });

  describe('Active State', () => {
    it('should apply active state on mouse down', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );
      const buttonElement = screen.getByRole('button');
      const containerElement = buttonElement.parentElement;

      if (!containerElement) {
        throw new Error('Container element not found');
      }

      fireEvent.mouseDown(containerElement);
      expect(containerElement).toHaveClass('bg-base-transparent-pressed');
    });

    it('should remove active state on mouse up', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );
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
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );
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
  });

  describe('Context Propagation', () => {
    it('should propagate disabled state to TileSpot', () => {
      render(
        <Tile disabled>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
    });

    it('should propagate disabled state to TileTitle', () => {
      render(
        <Tile disabled>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const titleElement = screen.getByText('Test Title');
      expect(titleElement).toHaveClass('text-disabled');
    });

    it('should propagate disabled state to TileDescription', () => {
      render(
        <Tile disabled>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
            <TileDescription>Test Description</TileDescription>
          </TileContent>
        </Tile>,
      );

      const descriptionElement = screen.getByText('Test Description');
      expect(descriptionElement).toHaveClass('text-disabled');
    });

    it('should hide TileSecondaryAction when disabled', () => {
      render(
        <Tile disabled>
          <TileSecondaryAction icon={MoreVertical} aria-label='More actions' />
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const secondaryAction = screen.queryByLabelText(/more actions/i);
      expect(secondaryAction).not.toBeInTheDocument();
    });
  });

  describe('Appearance Variants', () => {
    it('should apply no-background appearance by default', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      const containerElement = buttonElement.parentElement;

      if (!containerElement) {
        throw new Error('Container element not found');
      }

      expect(containerElement).toHaveClass('bg-base-transparent');
    });

    it('should apply card appearance when specified', () => {
      render(
        <Tile appearance='card'>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      const containerElement = buttonElement.parentElement;

      if (!containerElement) {
        throw new Error('Container element not found');
      }

      expect(containerElement).toHaveClass('bg-surface');
    });
  });

  describe('Accessibility', () => {
    it('should use custom aria-label when provided', () => {
      const customAriaLabel = 'Custom label';
      render(
        <Tile aria-label={customAriaLabel}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button', {
        name: customAriaLabel,
      });
      expect(buttonElement).toHaveAttribute('aria-label', customAriaLabel);
    });

    it('should set disabled attribute on button when disabled', () => {
      render(
        <Tile disabled>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
      expect(buttonElement).toHaveAttribute('data-disabled');
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className to container', () => {
      const customClass = 'custom-test-class';
      render(
        <Tile className={customClass}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const buttonElement = screen.getByRole('button');
      const containerElement = buttonElement.parentElement;

      if (!containerElement) {
        throw new Error('Container element not found');
      }

      expect(containerElement).toHaveClass(customClass);
    });

    it('should forward additional props to container element', () => {
      const testId = 'test-container';
      render(
        <Tile data-testid={testId}>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Test Title</TileTitle>
          </TileContent>
        </Tile>,
      );

      const containerElement = screen.getByTestId(testId);
      expect(containerElement).toBeInTheDocument();
    });
  });

  describe('Truncation', () => {
    it('should apply truncate class to TileTitle', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Very long title that should truncate</TileTitle>
          </TileContent>
        </Tile>,
      );

      const titleElement = screen.getByText(
        'Very long title that should truncate',
      );
      expect(titleElement).toHaveClass('truncate');
    });

    it('should apply truncate class to TileDescription', () => {
      render(
        <Tile>
          <TileSpot appearance='icon' icon={Settings} />
          <TileContent>
            <TileTitle>Title</TileTitle>
            <TileDescription>
              Very long description that should truncate
            </TileDescription>
          </TileContent>
        </Tile>,
      );

      const descriptionElement = screen.getByText(
        'Very long description that should truncate',
      );
      expect(descriptionElement).toHaveClass('truncate');
    });
  });
});
