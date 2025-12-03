import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import ReactNative, { Text } from 'react-native';
import { ThemeProvider, useColorScheme } from './ThemeProvider';

// Mock styles module to avoid hook-at-module-level issue
jest.mock('../../../styles', () => ({
  LumenStyleSheetProvider: ({ children }: { children: React.ReactNode }) =>
    children,
}));

const themes: any = {
  light: {},
  dark: {},
};

// Mock isNative to be true so Appearance.setColorScheme is called
jest.mock('../../utils', () => ({
  ...(jest.requireActual('../../utils') as object),
  RuntimeConstants: {
    isNative: true,
    isBrowser: false,
    isServer: false,
    insetDimensions: { height: 800, width: 400 },
  },
}));

const setColorSchemeSpy = jest.spyOn(ReactNative.Appearance, 'setColorScheme');
const useColorSchemeSpy = jest.spyOn(ReactNative, 'useColorScheme');

beforeEach(() => {
  setColorSchemeSpy.mockClear();
  useColorSchemeSpy
    .mockReset()
    .mockReturnValue('light' as ReactNative.ColorSchemeName);
});

const Consumer = () => {
  const { mode } = useColorScheme();
  return <Text testID='mode-value'>{mode}</Text>;
};

describe('ThemeProvider (React Native)', () => {
  it('calls Appearance.setColorScheme with provided mode on mount (light)', () => {
    render(
      <ThemeProvider defaultMode='light' themes={themes}>
        <Consumer />
      </ThemeProvider>,
    );
    expect(setColorSchemeSpy).toHaveBeenCalledWith('light');
    expect(screen.getByTestId('mode-value')).toHaveTextContent('light');
  });

  it('calls Appearance.setColorScheme with provided mode on mount (dark)', () => {
    render(
      <ThemeProvider defaultMode='dark' themes={themes}>
        <Consumer />
      </ThemeProvider>,
    );
    expect(setColorSchemeSpy).toHaveBeenCalledWith('dark');
    expect(screen.getByTestId('mode-value')).toHaveTextContent('dark');
  });

  it('defaults to system color scheme when no defaultMode is provided', () => {
    useColorSchemeSpy.mockReturnValue('dark' as ReactNative.ColorSchemeName);
    render(
      <ThemeProvider themes={themes}>
        <Consumer />
      </ThemeProvider>,
    );
    expect(setColorSchemeSpy).toHaveBeenCalledWith('dark');
    expect(screen.getByTestId('mode-value')).toHaveTextContent('dark');
  });

  it('ignores defaultMode prop changes after mount', () => {
    const { rerender } = render(
      <ThemeProvider defaultMode='light' themes={themes}>
        <Consumer />
      </ThemeProvider>,
    );
    expect(setColorSchemeSpy).toHaveBeenLastCalledWith('light');
    expect(screen.getByTestId('mode-value')).toHaveTextContent('light');

    setColorSchemeSpy.mockClear();
    rerender(
      <ThemeProvider defaultMode='dark' themes={themes}>
        <Consumer />
      </ThemeProvider>,
    );
    expect(setColorSchemeSpy).not.toHaveBeenCalled();
    expect(screen.getByTestId('mode-value')).toHaveTextContent('light');
  });
});
