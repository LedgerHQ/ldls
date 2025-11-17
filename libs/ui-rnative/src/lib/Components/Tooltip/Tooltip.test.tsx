import { describe, it, expect, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { TooltipsBottomSheet } from './TooltipsBottomSheet';
import { TooltipsProvider } from './TooltipsBottomSheetContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock('react-native-css-interop', () => {
  const mockReact = jest.requireActual<typeof import('react')>('react');
  return {
    cssInterop: (component: any) => component,
    createInteropElement: (component: any, ...args: any[]) =>
      mockReact.createElement(component, ...args),
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const mockReact = jest.requireActual<typeof import('react')>('react');
  const mockRN =
    jest.requireActual<typeof import('react-native')>('react-native');

  const mockRef = {
    expand: jest.fn(),
    close: jest.fn(),
    snapToIndex: jest.fn(),
  };

  return {
    __esModule: true,
    default: mockReact.forwardRef((props: any, ref: any) => {
      mockReact.useEffect(() => {
        if (ref) {
          if (typeof ref === 'function') ref(mockRef);
          else ref.current = mockRef;
        }
      }, [ref]);

      return mockReact.createElement(mockRN.View, {
        testID: props.testID,
        children: props.children,
      });
    }),
    BottomSheetScrollView: ({ children }: any) =>
      mockReact.createElement(mockRN.ScrollView, { children }),
    useBottomSheet: () => mockRef,
  };
});

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
        <Tooltip open={false} onOpenChange={onOpenChange}>
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
