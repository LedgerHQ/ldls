import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Banner } from './Banner';
import { Button } from '../Button';
import { Close } from '../../Symbols';

describe('Banner Component', () => {
  it('should render correctly with minimal props', () => {
    render(<Banner title="Basic Banner" />);
    const bannerElement = screen.getByText('Basic Banner');
    expect(bannerElement).toBeInTheDocument();
  });

  it('should render with title and description', () => {
    render(
      <Banner title="Banner Title" description="Banner description text" />,
    );

    expect(screen.getByText('Banner Title')).toBeInTheDocument();
    expect(screen.getByText('Banner description text')).toBeInTheDocument();
  });

  it('should render with different appearances', () => {
    const { container, rerender } = render(
      <Banner title="Info Banner" appearance="info" />,
    );
    expect(container.firstChild).toHaveClass('bg-muted');

    rerender(<Banner title="Success Banner" appearance="success" />);
    expect(container.firstChild).toHaveClass('bg-success');

    rerender(<Banner title="Warning Banner" appearance="warning" />);
    expect(container.firstChild).toHaveClass('bg-warning');

    rerender(<Banner title="Error Banner" appearance="error" />);
    expect(container.firstChild).toHaveClass('bg-error');
  });

  it('should render primary action button', () => {
    const handlePrimary = vi.fn();
    render(
      <Banner title="Banner with Primary">
        <Banner.PrimaryAction>
          <Button appearance="transparent" size="sm" onClick={handlePrimary}>
            Primary
          </Button>
        </Banner.PrimaryAction>
      </Banner>,
    );

    const primaryButton = screen.getByRole('button', { name: /primary/i });
    expect(primaryButton).toBeInTheDocument();
    fireEvent.click(primaryButton);
    expect(handlePrimary).toHaveBeenCalledTimes(1);
  });

  it('should render secondary action button', () => {
    const handleSecondary = vi.fn();
    render(
      <Banner title="Banner with Secondary">
        <Banner.SecondaryAction>
          <Button
            appearance="no-background"
            size="sm"
            onClick={handleSecondary}
          >
            Secondary
          </Button>
        </Banner.SecondaryAction>
      </Banner>,
    );

    const secondaryButton = screen.getByRole('button', { name: /secondary/i });
    expect(secondaryButton).toBeInTheDocument();
    fireEvent.click(secondaryButton);
    expect(handleSecondary).toHaveBeenCalledTimes(1);
  });

  it('should render both action buttons', () => {
    const handlePrimary = vi.fn();
    const handleSecondary = vi.fn();
    render(
      <Banner title="Banner with Both Actions">
        <Banner.PrimaryAction>
          <Button appearance="transparent" size="sm" onClick={handlePrimary}>
            Primary
          </Button>
        </Banner.PrimaryAction>
        <Banner.SecondaryAction>
          <Button
            appearance="no-background"
            size="sm"
            onClick={handleSecondary}
          >
            Secondary
          </Button>
        </Banner.SecondaryAction>
      </Banner>,
    );

    expect(
      screen.getByRole('button', { name: /primary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /secondary/i }),
    ).toBeInTheDocument();
  });

  it('should render close button and handle click', () => {
    const handleClose = vi.fn();
    render(
      <Banner title="Closable Banner">
        <Banner.CloseAction>
          <Button
            appearance="transparent"
            size="xs"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <Close />
          </Button>
        </Banner.CloseAction>
      </Banner>,
    );

    const closeButton = screen.getByRole('button', { name: 'Close banner' });
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Banner title="Custom Banner" className="mb-16" />,
    );
    expect(container.firstChild).toHaveClass('mb-16');
  });

  it('should handle long title text with line clamping', () => {
    const longTitle =
      'This is a very long title that should be clamped to 2 lines when it exceeds the available space';
    render(<Banner title={longTitle} />);

    const titleElement = screen.getByText(longTitle);
    expect(titleElement).toHaveClass('line-clamp-2');
  });

  it('should handle long description text with line clamping', () => {
    const longDescription =
      'This is a very long description that should be clamped to 5 lines when it exceeds the available space in the banner component';
    render(<Banner title="Title" description={longDescription} />);

    const descriptionElement = screen.getByText(longDescription);
    expect(descriptionElement).toHaveClass('line-clamp-5');
  });

  it('should forward ref correctly', () => {
    const ref = vi.fn();
    render(<Banner title="Ref Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('should not render close button if CloseAction slot is not provided', () => {
    render(<Banner title="Banner" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render close button when CloseAction slot is provided', () => {
    const handleClose = vi.fn();
    render(
      <Banner title="Banner">
        <Banner.CloseAction>
          <Button
            appearance="transparent"
            size="xs"
            onClick={handleClose}
            aria-label="Close"
          >
            <Close />
          </Button>
        </Banner.CloseAction>
      </Banner>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render close button with custom aria-label', () => {
    const handleClose = vi.fn();
    render(
      <Banner title="Banner">
        <Banner.CloseAction>
          <Button
            appearance="transparent"
            size="xs"
            onClick={handleClose}
            aria-label="Close notification"
          >
            <Close />
          </Button>
        </Banner.CloseAction>
      </Banner>,
    );
    const closeButton = screen.getByRole('button');
    expect(closeButton).toHaveAttribute('aria-label', 'Close notification');
  });

  it('should throw error when multiple PrimaryAction slots are provided', () => {
    expect(() => {
      render(
        <Banner title="Banner">
          <Banner.PrimaryAction>
            <Button appearance="transparent" size="sm">
              Primary 1
            </Button>
          </Banner.PrimaryAction>
          <Banner.PrimaryAction>
            <Button appearance="transparent" size="sm">
              Primary 2
            </Button>
          </Banner.PrimaryAction>
        </Banner>,
      );
    }).toThrow('Banner can only have one PrimaryAction slot');
  });

  it('should throw error when multiple SecondaryAction slots are provided', () => {
    expect(() => {
      render(
        <Banner title="Banner">
          <Banner.SecondaryAction>
            <Button appearance="no-background" size="sm">
              Secondary 1
            </Button>
          </Banner.SecondaryAction>
          <Banner.SecondaryAction>
            <Button appearance="no-background" size="sm">
              Secondary 2
            </Button>
          </Banner.SecondaryAction>
        </Banner>,
      );
    }).toThrow('Banner can only have one SecondaryAction slot');
  });

  it('should throw error when multiple CloseAction slots are provided', () => {
    expect(() => {
      render(
        <Banner title="Banner">
          <Banner.CloseAction>
            <Button appearance="transparent" size="xs" aria-label="Close 1">
              <Close />
            </Button>
          </Banner.CloseAction>
          <Banner.CloseAction>
            <Button appearance="transparent" size="xs" aria-label="Close 2">
              <Close />
            </Button>
          </Banner.CloseAction>
        </Banner>,
      );
    }).toThrow('Banner can only have one CloseAction slot');
  });
});
