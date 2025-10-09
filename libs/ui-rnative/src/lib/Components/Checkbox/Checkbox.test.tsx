import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('uncontrolled: toggles on press and reflects checked state', async () => {
    const { getByTestId } = render(
      <Checkbox defaultChecked={false} testID='checkbox' />,
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
    const onChange = vi.fn();
    const { getByTestId, rerender } = render(
      <Checkbox checked={false} onCheckedChange={onChange} testID='checkbox' />,
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
      <Checkbox checked={true} onCheckedChange={onChange} testID='checkbox' />,
    );

    await waitFor(() =>
      expect(getByTestId('checkbox').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('label: renders and toggles when pressed', async () => {
    const onChange = vi.fn();
    const { getByText, getByTestId } = render(
      <Checkbox
        defaultChecked={false}
        label='Accept'
        onCheckedChange={onChange}
        testID='checkbox'
      />,
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
    const onChange = vi.fn();
    const { getByText, getByTestId } = render(
      <Checkbox
        disabled
        defaultChecked={false}
        label='Terms'
        onCheckedChange={onChange}
        testID='checkbox'
      />,
    );

    const trigger = getByTestId('checkbox');
    expect(trigger.props.accessibilityState?.disabled).toBe(true);

    fireEvent.press(trigger);
    fireEvent.press(getByText('Terms'));

    await waitFor(() => expect(onChange).toHaveBeenCalled());
  });

  it('passes through nativeID to trigger for a11y mapping', () => {
    const { getByTestId } = render(
      <Checkbox defaultChecked={false} nativeID='check-1' testID='checkbox' />,
    );

    expect(getByTestId('checkbox').props.nativeID).toBe('check-1');
  });
});
