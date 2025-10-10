import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import { Search } from './Search';

describe('Search', () => {
  it('renders with search icon', () => {
    render(<Search placeholder='Search' />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    // Check that the search icon is present (it should be in the DOM as an SVG)
    const searchIcon = document.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
  });

  it('displays placeholder correctly', () => {
    render(<Search placeholder='Search products' />);

    const input = screen.getByPlaceholderText('Search products');
    expect(input).toBeInTheDocument();
  });

  it('handles controlled input', () => {
    const handleChange = vi.fn();
    render(
      <Search
        placeholder='Search'
        value='test query'
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test query');

    fireEvent.change(input, { target: { value: 'new query' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows clear button when input has content', () => {
    render(<Search placeholder='Search' defaultValue='some text' />);

    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();
  });

  it('hides clear button when hideClearButton is true', () => {
    render(
      <Search
        placeholder='Search'
        defaultValue='some text'
        hideClearButton={true}
      />,
    );

    const clearButton = screen.queryByLabelText('Clear input');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(
      <Search
        placeholder='Search'
        defaultValue='test content'
        onClear={handleClear}
      />,
    );

    const clearButton = screen.getByLabelText('Clear input');
    fireEvent.click(clearButton);

    expect(handleClear).toHaveBeenCalled();
  });

  it('displays error message when provided', () => {
    render(
      <Search
        placeholder='Search'
        errorMessage='Search failed'
        aria-invalid={true}
      />,
    );

    const errorMessage = screen.getByText('Search failed');
    expect(errorMessage).toBeInTheDocument();

    // The role="alert" is on the error container, not the text span
    const errorContainer = screen.getByRole('alert');
    expect(errorContainer).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Search placeholder='Search' disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with fixed icon styling', () => {
    const { container } = render(<Search placeholder='Search' />);

    // The search icon should have fixed styling
    const searchIcon = container.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveClass('text-muted');
  });
});
