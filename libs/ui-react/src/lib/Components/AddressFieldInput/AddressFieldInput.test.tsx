import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AddressFieldInput } from './AddressFieldInput';

describe('AddressFieldInput', () => {
  it('renders with "To:" prefix label', () => {
    render(<AddressFieldInput placeholder="Enter address or ENS" />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    // Check that the "To:" prefix is present
    const prefixLabel = screen.getByText('To:');
    expect(prefixLabel).toBeInTheDocument();
  });

  it('renders with QR code icon when empty', () => {
    const { container } = render(
      <AddressFieldInput placeholder="Enter address or ENS" />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    // Check that the QR code button is present
    const qrButton = screen.getByLabelText('Scan QR code');
    expect(qrButton).toBeInTheDocument();

    // Check that the QR code icon is present (it should be in the DOM as an SVG)
    const qrIcon = container.querySelector('svg');
    expect(qrIcon).toBeInTheDocument();
  });

  it('displays placeholder correctly', () => {
    render(<AddressFieldInput placeholder="Enter address or ENS" />);

    const input = screen.getByPlaceholderText('Enter address or ENS');
    expect(input).toBeInTheDocument();
  });

  it('handles controlled input', () => {
    const handleChange = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        value="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434');

    fireEvent.change(input, { target: { value: '0x123456789abcdef' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows clear button when input has content', () => {
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        defaultValue="0x123456789"
      />,
    );

    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();
  });

  it('hides QR code icon when input has content', () => {
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
      />,
    );

    // When there's content, the QR code icon should be hidden
    // and the clear button should be visible instead
    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();

    // QR button should not be visible when there's content
    const qrButton = screen.queryByLabelText('Scan QR code');
    expect(qrButton).not.toBeInTheDocument();
  });

  it('hides clear button when hideClearButton is true', () => {
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
        hideClearButton={true}
      />,
    );

    const clearButton = screen.queryByLabelText('Clear input');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('clears input when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
        onClear={handleClear}
      />,
    );

    const clearButton = screen.getByLabelText('Clear input');
    fireEvent.click(clearButton);

    expect(handleClear).toHaveBeenCalled();
  });

  it('displays error message when provided', () => {
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        errorMessage="Invalid address format"
        aria-invalid={true}
      />,
    );

    const errorMessage = screen.getByText('Invalid address format');
    expect(errorMessage).toBeInTheDocument();

    // The role="alert" is on the error container, not the text span
    const errorContainer = screen.getByRole('alert');
    expect(errorContainer).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<AddressFieldInput placeholder="Enter address or ENS" disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('supports custom suffix', () => {
    const customSuffix = <span data-testid="custom-suffix">Custom</span>;
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        suffix={customSuffix}
      />,
    );

    const customElement = screen.getByTestId('custom-suffix');
    expect(customElement).toBeInTheDocument();
  });

  it('handles uncontrolled input changes', () => {
    const handleChange = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '0x123456789' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('handles QR code click when provided', () => {
    const handleQrClick = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        onQrCodeClick={handleQrClick}
      />,
    );

    const qrButton = screen.getByLabelText('Scan QR code');
    fireEvent.click(qrButton);

    expect(handleQrClick).toHaveBeenCalled();
  });

  it('disables QR code button when no click handler is provided', () => {
    render(<AddressFieldInput placeholder="Enter address or ENS" />);

    const qrButton = screen.getByLabelText('Scan QR code');
    expect(qrButton).toBeDisabled();
  });

  it('enables QR code button when click handler is provided', () => {
    const handleQrClick = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        onQrCodeClick={handleQrClick}
      />,
    );

    const qrButton = screen.getByLabelText('Scan QR code');
    expect(qrButton).not.toBeDisabled();
  });

  it('hides QR code button when input has content', () => {
    const handleQrClick = vi.fn();
    render(
      <AddressFieldInput
        placeholder="Enter address or ENS"
        defaultValue="0x742d35cc6234567c3c3c2f308bcfb8d6e80f3434"
        onQrCodeClick={handleQrClick}
      />,
    );

    // When there's content, the QR code button should be hidden
    const qrButton = screen.queryByLabelText('Scan QR code');
    expect(qrButton).not.toBeInTheDocument();

    // And the clear button should be visible instead
    const clearButton = screen.getByLabelText('Clear input');
    expect(clearButton).toBeInTheDocument();
  });
});
