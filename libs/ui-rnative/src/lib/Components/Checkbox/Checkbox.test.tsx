import { describe, it, expect, jest } from '@jest/globals';
import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Checkbox } from './Checkbox';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider themes={ledgerLiveThemes} colorScheme='dark' locale='en'>
    {children}
  </ThemeProvider>
);

describe('Checkbox', () => {
  it('uncontrolled: toggles on press and reflects checked state', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Checkbox defaultChecked={false} testID='checkbox' />
      </TestWrapper>,
    );

    expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
      false,
    );

    fireEvent.press(getByTestId('checkbox'));

    await waitFor(() =>
      expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('controlled: calls onCheckedChange but state is controlled by parent', async () => {
    const onChange = jest.fn();
    const { getByTestId, rerender } = render(
      <TestWrapper>
        <Checkbox checked={false} onCheckedChange={onChange} testID='checkbox' />
      </TestWrapper>,
    );

    expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
      false,
    );

    fireEvent.press(getByTestId('checkbox'));

    await waitFor(() => expect(onChange).toHaveBeenCalledWith(true));
    await waitFor(() =>
      expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
        false,
      ),
    );

    rerender(
      <TestWrapper>
        <Checkbox checked={true} onCheckedChange={onChange} testID='checkbox' />
      </TestWrapper>,
    );

    await waitFor(() =>
      expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('label: renders and toggles when pressed', async () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Checkbox
          defaultChecked={false}
          label='Accept'
          onCheckedChange={onChange}
          testID='checkbox'
        />
      </TestWrapper>,
    );

    fireEvent.press(getByText('Accept'));

    await waitFor(() => expect(onChange).toHaveBeenCalledWith(true));
    await waitFor(() =>
      expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('disabled: does not toggle on trigger or label press', async () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Checkbox
          disabled
          defaultChecked={false}
          label='Terms'
          onCheckedChange={onChange}
          testID='checkbox'
        />
      </TestWrapper>,
    );

    const trigger = getByTestId('checkbox');
    expect(trigger.props.accessibilityState?.disabled).toBe(true);

    fireEvent.press(trigger);
    fireEvent.press(getByText('Terms'));

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('passes through nativeID to trigger for a11y mapping', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Checkbox defaultChecked={false} nativeID='check-1' testID='checkbox' />
      </TestWrapper>,
    );

    expect(getByTestId('checkbox').props.nativeID).toBe('check-1');
  });
});
