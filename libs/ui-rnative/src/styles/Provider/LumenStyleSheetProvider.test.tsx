import { describe, expect, it, jest } from '@jest/globals';
import { render, userEvent } from '@testing-library/react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { LumenStyleSheetProvider } from './LumenStyleSheetProvider';
import { useTheme } from './useTheme';

// Test themes
const testThemes: any = {
  light: {
    colors: {
      bg: {
        base: '#FFFFFF',
        accent: '#007AFF',
      },
    },
    typographies: {
      sm: {
        body1: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
    },
  },
  dark: {
    colors: {
      bg: {
        base: '#000000',
        accent: '#0A84FF',
      },
    },
    typographies: {
      sm: {
        body1: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
    },
  },
};

// Test component that uses theme
const TestComponent = (): React.JSX.Element => {
  const { theme, colorScheme, setColorScheme } = useTheme();

  return (
    <View testID='container'>
      <Text testID='color-scheme'>{colorScheme}</Text>
      <Text testID='bg-color'>{theme.colors.bg.base}</Text>
      <Pressable
        testID='toggle-button'
        onPress={() => {
          return setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
        }}
      >
        <Text>Toggle</Text>
      </Pressable>
    </View>
  );
};

describe('LumenStyleSheetProvider', () => {
  it('provides dark theme by default', () => {
    const { getByTestId } = render(
      <LumenStyleSheetProvider themes={testThemes}>
        <TestComponent />
      </LumenStyleSheetProvider>,
    );

    expect(getByTestId('color-scheme').props.children).toBe('dark');
    expect(getByTestId('bg-color').props.children).toBe('#000000');
  });

  it('provides light theme when initialColorScheme is light', () => {
    const { getByTestId } = render(
      <LumenStyleSheetProvider themes={testThemes} colorScheme='light'>
        <TestComponent />
      </LumenStyleSheetProvider>,
    );

    expect(getByTestId('color-scheme').props.children).toBe('light');
    expect(getByTestId('bg-color').props.children).toBe('#FFFFFF');
  });

  it('switches theme when setColorScheme is called', async () => {
    const { getByTestId } = render(
      <LumenStyleSheetProvider themes={testThemes}>
        <TestComponent />
      </LumenStyleSheetProvider>,
    );

    // Initially dark
    expect(getByTestId('color-scheme').props.children).toBe('dark');
    expect(getByTestId('bg-color').props.children).toBe('#000000');

    // Toggle to light
    await userEvent.press(getByTestId('toggle-button'));
    expect(getByTestId('color-scheme').props.children).toBe('light');
    expect(getByTestId('bg-color').props.children).toBe('#FFFFFF');

    // Toggle back to dark
    await userEvent.press(getByTestId('toggle-button'));
    expect(getByTestId('color-scheme').props.children).toBe('dark');
    expect(getByTestId('bg-color').props.children).toBe('#000000');
  });

  it('throws error when useTheme is used outside provider', () => {
    // Suppress console.error for this test
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within LumenStyleSheetProvider');

    consoleErrorSpy.mockRestore();
  });
});
