import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { render } from '@testing-library/react-native';
// eslint-disable-next-line no-restricted-imports
import * as ReactNative from 'react-native';

import { ThemeProvider } from './ThemeProvider';

const setColorSchemeSpy = jest.spyOn(ReactNative.Appearance, 'setColorScheme');
const useColorSchemeSpy = jest.spyOn(ReactNative, 'useColorScheme');

beforeEach(() => {
  setColorSchemeSpy.mockClear();
  useColorSchemeSpy
    .mockReset()
    .mockReturnValue('light' as ReactNative.ColorSchemeName);
});

describe('ThemeProvider (React Native)', () => {
  it('calls Appearance.setColorScheme with provided mode on mount (light)', () => {
    const { getByTestId } = render(
      <ThemeProvider defaultMode='light' testID='root' />,
    );
    expect(setColorSchemeSpy).toHaveBeenCalledWith('light');
    expect(getByTestId('root').props.className).toContain('light');
  });

  it('calls Appearance.setColorScheme with provided mode on mount (dark)', () => {
    const { getByTestId } = render(
      <ThemeProvider defaultMode='dark' testID='root' />,
    );
    expect(setColorSchemeSpy).toHaveBeenCalledWith('dark');
    expect(getByTestId('root').props.className).toContain('dark');
  });

  it('defaults to system color scheme when no defaultMode is provided', () => {
    useColorSchemeSpy.mockReturnValue('dark' as ReactNative.ColorSchemeName);
    render(<ThemeProvider testID='root' />);
    expect(setColorSchemeSpy).toHaveBeenCalledWith('dark');
  });

  it('ignores defaultMode prop changes after mount', () => {
    const { rerender, getByTestId } = render(
      <ThemeProvider defaultMode='light' testID='root' />,
    );
    expect(setColorSchemeSpy).toHaveBeenLastCalledWith('light');

    setColorSchemeSpy.mockClear();
    rerender(<ThemeProvider defaultMode='dark' testID='root' />);
    expect(setColorSchemeSpy).not.toHaveBeenCalled();
    expect(getByTestId('root').props.className).toContain('light');
  });

  it('merges custom className with color scheme', () => {
    const { getByTestId } = render(
      <ThemeProvider defaultMode='dark' className='mt-12' testID='root' />,
    );
    const cls = getByTestId('root').props.className as string;
    expect(cls).toContain('dark');
    expect(cls).toContain('mt-12');
  });
});
