import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Switch } from './Switch';

describe('Switch', () => {
  it('uncontrolled: toggles on press and reflects checked state', async () => {
    const { getByTestId } = render(
      <Switch defaultChecked={false} testID='switch' />,
    );

    expect(getByTestId('switch').props.accessibilityState?.checked).toBe(false);

    fireEvent.press(getByTestId('switch'));

    await waitFor(() =>
      expect(getByTestId('switch').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('controlled: calls onCheckedChange but state is controlled by parent', async () => {
    const onChange = vi.fn();
    const { getByTestId, rerender } = render(
      <Switch checked={false} onCheckedChange={onChange} testID='switch' />,
    );

    expect(getByTestId('switch').props.accessibilityState?.checked).toBe(false);

    fireEvent.press(getByTestId('switch'));

    await waitFor(() => expect(onChange).toHaveBeenCalledWith(true));
    await waitFor(() =>
      expect(getByTestId('switch').props.accessibilityState?.checked).toBe(
        false,
      ),
    );

    rerender(
      <Switch checked={true} onCheckedChange={onChange} testID='switch' />,
    );

    await waitFor(() =>
      expect(getByTestId('switch').props.accessibilityState?.checked).toBe(
        true,
      ),
    );
  });

  it('disabled: does not toggle on press', async () => {
    const onChange = vi.fn();
    const { getByTestId } = render(
      <Switch
        disabled
        defaultChecked={false}
        onCheckedChange={onChange}
        testID='switch'
      />,
    );

    const trigger = getByTestId('switch');
    expect(trigger.props.accessibilityState?.disabled).toBe(true);

    fireEvent.press(trigger);

    await waitFor(() => expect(onChange).not.toHaveBeenCalled());
    await waitFor(() =>
      expect(getByTestId('switch').props.accessibilityState?.checked).toBe(
        false,
      ),
    );
  });

  it('supports aria-valuetext on/off through checked state or custom value if defined', () => {
    const { getByTestId, rerender } = render(
      <Switch checked={false} testID='switch' />,
    );
    expect(getByTestId('switch').props['aria-valuetext']).toBe('off');

    rerender(
      <Switch checked={true} onCheckedChange={vi.fn()} testID='switch' />,
    );
    expect(getByTestId('switch').props['aria-valuetext']).toBe('on');

    rerender(<Switch testID='switch' aria-valuetext='custom' />);
    expect(getByTestId('switch').props['aria-valuetext']).toBe('custom');
  });

  it('supports custom aria-valuetext value', () => {
    const { getByTestId } = render(
      <Switch testID='switch' aria-valuetext='custom' />,
    );

    expect(getByTestId('switch').props['aria-valuetext']).toBe('custom');
  });
});
