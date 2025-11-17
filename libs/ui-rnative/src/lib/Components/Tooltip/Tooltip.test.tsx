import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { TooltipsBottomSheet } from './TooltipsBottomSheet';
import { TooltipsProvider } from './TooltipsBottomSheetContext';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipsProvider>
    {children}
    <TooltipsBottomSheet />
  </TooltipsProvider>
);

describe('Tooltip', () => {
  it('renders and triggers tooltip', () => {
    const { getByText } = render(
      <TestWrapper>
        <Tooltip>
          <TooltipTrigger>
            <View>
              <Text>Press me</Text>
            </View>
          </TooltipTrigger>
          <TooltipContent
            title='Help'
            content={<Text>Helpful information</Text>}
          />
        </Tooltip>
      </TestWrapper>,
    );

    expect(getByText('Press me')).toBeTruthy();

    fireEvent.press(getByText('Press me'));

    expect(getByText('Help')).toBeTruthy();
    expect(getByText('Helpful information')).toBeTruthy();
  });

  it('works in controlled mode', () => {
    const onOpenChange = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Tooltip onOpenChange={onOpenChange}>
          <TooltipTrigger>
            <View>
              <Text>Press me</Text>
            </View>
          </TooltipTrigger>
          <TooltipContent title='Help' content={<Text>Info</Text>} />
        </Tooltip>
      </TestWrapper>,
    );

    fireEvent.press(getByText('Press me'));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('requires TooltipsProvider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(
        <Tooltip>
          <TooltipTrigger>
            <Text>Trigger</Text>
          </TooltipTrigger>
          <TooltipContent title='Title' content={<Text>Content</Text>} />
        </Tooltip>,
      );
    }).toThrow();

    console.error = originalError;
  });
});
