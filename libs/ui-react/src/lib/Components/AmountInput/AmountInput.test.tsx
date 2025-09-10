import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AmountInput } from './AmountInput';

describe('AmountInput', () => {
  it('renders with default props', () => {
    render(<AmountInput placeholder="Enter amount" />);
    expect(screen.getByPlaceholderText('Enter amount')).toBeInTheDocument();
  });

  it('renders with currency text on the left by default', () => {
    render(<AmountInput currencyText="$" placeholder="0" />);
    const currencyElement = screen.getByText('$');
    const input = screen.getByRole('textbox');
    expect(currencyElement).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // Check if currency appears before input in document order
    expect(
      currencyElement.compareDocumentPosition(input) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('renders with currency text on the right when specified', () => {
    render(
      <AmountInput
        currencyText="USD"
        currencyPosition="right"
        placeholder="0"
      />,
    );
    const currencyElement = screen.getByText('USD');
    const input = screen.getByRole('textbox');
    expect(currencyElement).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // Check if input appears before currency in document order
    expect(
      input.compareDocumentPosition(currencyElement) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('handles numeric input correctly', async () => {
    const handleChange = vi.fn();
    render(<AmountInput onChange={handleChange} currencyText="$" />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '123.45');

    expect(input).toHaveValue('123.45');
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies error styles when aria-invalid is true', () => {
    render(<AmountInput currencyText="$" aria-invalid={true} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles disabled state correctly', () => {
    render(<AmountInput currencyText="$" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('forwards ref to input element', () => {
    const ref = { current: null };
    render(<AmountInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className to input element', () => {
    const customClass = 'custom-class';
    render(<AmountInput className={customClass} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(customClass);
  });

  it('updates currency text when prop changes', () => {
    const { rerender } = render(<AmountInput currencyText="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();

    rerender(<AmountInput currencyText="€" />);
    expect(screen.getByText('€')).toBeInTheDocument();
  });

  it('maintains input value when currency position changes', () => {
    const { rerender } = render(
      <AmountInput currencyText="$" currencyPosition="left" value="123.45" />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('123.45');

    rerender(
      <AmountInput currencyText="$" currencyPosition="right" value="123.45" />,
    );
    expect(input).toHaveValue('123.45');
  });
});
