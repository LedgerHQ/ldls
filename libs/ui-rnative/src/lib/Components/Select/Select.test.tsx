import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { GlobalSelectBottomSheet } from './GlobalSelectBottomSheet';
import { GlobalSelectProvider } from './GlobalSelectContext';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
} from './Select';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalSelectProvider>
    {children}
    <GlobalSelectBottomSheet />
  </GlobalSelectProvider>
);

describe('Select', () => {
  it('renders and displays selected value', () => {
    const { getByText } = render(
      <TestWrapper>
        <Select value='option1'>
          <SelectTrigger label='Choose option'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
            <SelectItem value='option2'>
              <SelectItemText>Option 2</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </TestWrapper>,
    );

    expect(getByText('Choose option')).toBeTruthy();
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('opens and selects item on press', () => {
    const onValueChange = jest.fn();
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Select onValueChange={onValueChange}>
          <SelectTrigger testID='select-trigger'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
            <SelectItem value='option2'>
              <SelectItemText>Option 2</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </TestWrapper>,
    );

    fireEvent.press(getByTestId('select-trigger'));
    fireEvent.press(getByText('Option 2'));

    expect(onValueChange).toHaveBeenCalledWith('option2');
  });

  it('respects disabled state', () => {
    const onOpenChange = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Select disabled onOpenChange={onOpenChange}>
          <SelectTrigger testID='select-trigger'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
      </TestWrapper>,
    );

    fireEvent.press(getByTestId('select-trigger'));
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('requires GlobalSelectProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='option1'>
              <SelectItemText>Option 1</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>,
      );
    }).toThrow();

    console.error = originalError;
  });
});
