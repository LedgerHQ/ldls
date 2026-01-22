import { render, screen } from '@testing-library/react-native';
import { describe, it, expect } from 'vitest';

import { AmountDisplay } from './AmountDisplay';
import { FormattedValue } from './types';

describe('AmountDisplay', () => {
  const createFormatter =
    (overrides: Partial<FormattedValue> = {}) =>
    (): FormattedValue => ({
      integerPart: '1234',
      decimalPart: '56',
      currencyText: 'USD',
      currencyPosition: 'start',
      decimalSeparator: '.',
      ...overrides,
    });

  it('renders with basic formatter', () => {
    const formatter = createFormatter();
    render(<AmountDisplay value={1234.56} formatter={formatter} />);

    expect(screen.getByText('USD')).toBeTruthy();
    expect(screen.getByText('1234')).toBeTruthy();
    expect(screen.getByText('.56')).toBeTruthy();
  });

  it('renders currency at start position', () => {
    const formatter = createFormatter({ currencyPosition: 'start' });
    const { root } = render(<AmountDisplay value={1234.56} formatter={formatter} />);

    expect(screen.getByText('USD')).toBeTruthy();
    expect(screen.getByText('1234')).toBeTruthy();
  });

  it('renders currency at end position', () => {
    const formatter = createFormatter({ currencyPosition: 'end' });
    render(<AmountDisplay value={1234.56} formatter={formatter} />);

    expect(screen.getByText('USD')).toBeTruthy();
    expect(screen.getByText('.56')).toBeTruthy();
  });

  it('renders without decimal part', () => {
    const formatter = createFormatter({ decimalPart: undefined });
    render(<AmountDisplay value={1234} formatter={formatter} />);

    expect(screen.getByText('1234')).toBeTruthy();
    expect(screen.queryByText(/\./)).toBeNull();
  });

  it('uses comma as decimal separator', () => {
    const formatter = createFormatter({ decimalSeparator: ',' });
    render(<AmountDisplay value={1234.56} formatter={formatter} />);

    expect(screen.getByText(',56')).toBeTruthy();
  });

  it('uses default dot separator when not specified', () => {
    const formatter = createFormatter({ decimalSeparator: undefined });
    render(<AmountDisplay value={1234.56} formatter={formatter} />);

    expect(screen.getByText('.56')).toBeTruthy();
  });

  it('forwards additional props', () => {
    const formatter = createFormatter();
    render(
      <AmountDisplay
        value={1234.56}
        formatter={formatter}
        testID='amount-display'
      />,
    );

    expect(screen.getByTestId('amount-display')).toBeTruthy();
  });

  it('handles zero value', () => {
    const formatter = createFormatter({
      integerPart: '0',
      decimalPart: '00',
    });
    render(<AmountDisplay value={0} formatter={formatter} />);

    expect(screen.getByText('0')).toBeTruthy();
    expect(screen.getByText('.00')).toBeTruthy();
  });

  it('handles large numbers', () => {
    const formatter = createFormatter({
      integerPart: '1,234,567',
      decimalPart: '89',
    });
    render(<AmountDisplay value={1234567.89} formatter={formatter} />);

    expect(screen.getByText('1,234,567')).toBeTruthy();
    expect(screen.getByText('.89')).toBeTruthy();
  });
});
