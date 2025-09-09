import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Subheader } from './Subheader';
import '@testing-library/jest-dom';

describe('Subheader', () => {
  it('renders the title', () => {
    render(<Subheader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the info tooltip icon when infoTooltip is provided', () => {
    const { container } = render(
      <Subheader title="Title" infoTooltip="Info" />,
    );
    expect(container.querySelector('.text-muted')).toBeInTheDocument();
  });

  it('does not render the info tooltip icon when infoTooltip is not provided', () => {
    const { container } = render(<Subheader title="Title" />);
    expect(container.querySelector('.text-muted')).not.toBeInTheDocument();
  });

  it('renders the action when provided', () => {
    render(<Subheader title="Title" action={<button>Action</button>} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('does not render the action when not provided', () => {
    const { container } = render(<Subheader title="Title" />);
    expect(container.querySelector('.shrink-0')).not.toBeInTheDocument();
  });
});
