import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from './Input';

// Helper function to create controlled input props
const createControlledProps = (overrides = {}) => ({
  value: '',
  onChange: () => {},
  ...overrides,
});

describe('Input Component', () => {
  it('should render correctly with floating label', () => {
    render(<Input label="Username" {...createControlledProps()} />);
    const inputElement = screen.getByRole('textbox');
    const labelElement = screen.getByText('Username');
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', ' ');
  });

  it('should render with error state when aria-invalid is true', () => {
    render(
      <Input label="Email" {...createControlledProps()} aria-invalid={true} />,
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input label="Username" {...createControlledProps()} disabled />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });

  it('should handle onChange events', () => {
    const handleChange = vi.fn();
    render(
      <Input
        label="Username"
        {...createControlledProps({ onChange: handleChange })}
      />,
    );
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should render with different input types', () => {
    render(
      <Input label="Password" type="password" {...createControlledProps()} />,
    );
    const inputElement = screen.getByLabelText('Password');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('should forward ref correctly', () => {
    const ref = { current: null };
    render(<Input label="Username" {...createControlledProps()} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should set aria-describedby and show error message', () => {
    const errorMessage = 'This field is required';
    render(
      <Input
        label="Email"
        id="test-input"
        errorMessage={errorMessage}
        {...createControlledProps()}
      />,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      'test-input-error',
    );
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement.parentElement).toHaveAttribute(
      'id',
      'test-input-error',
    );
    expect(errorElement.parentElement).toHaveAttribute('role', 'alert');
  });

  it('should show error message with icon', () => {
    const errorMessage = 'This field is required';
    render(
      <Input
        label="Email"
        errorMessage={errorMessage}
        {...createControlledProps()}
      />,
    );

    const messageElement = screen.getByText(errorMessage);
    expect(messageElement).toBeInTheDocument();

    const errorIcon = document.querySelector('.text-error.flex-shrink-0');
    expect(errorIcon).toBeInTheDocument();
  });

  it('should accept all standard HTML input props', () => {
    render(
      <Input
        label="Username"
        maxLength={10}
        minLength={3}
        required
        autoComplete="username"
        {...createControlledProps()}
      />,
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('maxLength', '10');
    expect(inputElement).toHaveAttribute('minLength', '3');
    expect(inputElement).toHaveAttribute('required');
    expect(inputElement).toHaveAttribute('autoComplete', 'username');
  });

  it('should apply custom className', () => {
    render(
      <Input
        label="Username"
        className="custom-class"
        {...createControlledProps()}
      />,
    );
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('should render label with correct htmlFor attribute when id is provided', () => {
    render(
      <Input
        label="Username"
        id="username-input"
        {...createControlledProps()}
      />,
    );
    const labelElement = screen.getByText('Username');
    expect(labelElement).toHaveAttribute('for', 'username-input');
  });

  it('should handle focus and blur events correctly', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <Input
        label="Username"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...createControlledProps()}
      />,
    );
    const inputElement = screen.getByRole('textbox');

    fireEvent.focus(inputElement);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(inputElement);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('should show clear button when input has content and onClear is provided', () => {
    const handleClear = vi.fn();
    render(
      <Input
        label="Username"
        {...createControlledProps({ value: 'test content' })}
        onClear={handleClear}
      />,
    );
    const clearButton = screen.getByRole('button', { name: /clear input/i });
    expect(clearButton).toBeInTheDocument();
  });

  it('should not show clear button when input is empty', () => {
    const handleClear = vi.fn();
    render(
      <Input
        label="Username"
        {...createControlledProps()}
        onClear={handleClear}
      />,
    );
    const clearButton = screen.queryByRole('button', { name: /clear input/i });
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should not show clear button when input is disabled', () => {
    const handleClear = vi.fn();
    render(
      <Input
        label="Username"
        {...createControlledProps({ value: 'test content' })}
        onClear={handleClear}
        disabled
      />,
    );
    const clearButton = screen.queryByRole('button', { name: /clear input/i });
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should call onClear when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(
      <Input
        label="Username"
        {...createControlledProps({ value: 'test content' })}
        onClear={handleClear}
      />,
    );

    const clearButton = screen.getByRole('button', { name: /clear input/i });
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it('should render custom right element when provided', () => {
    const CustomElement = () => <div data-testid="custom-element">Custom</div>;
    render(
      <Input
        label="Username"
        {...createControlledProps()}
        renderRightElement={() => <CustomElement />}
      />,
    );
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
});
