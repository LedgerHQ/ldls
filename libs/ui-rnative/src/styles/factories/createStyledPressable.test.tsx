import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { LumenStyleSheetProvider } from '../Provider/LumenStyleSheetProvider';
import { createStyledPressable } from './createStyledPressable';

const testThemes: any = {
  light: {
    spacings: { s8: 8, s16: 16 },
    sizes: { s48: 48, full: '100%' },
    colors: { bg: { surface: '#F0F0F0', accent: '#6B21A8' }, border: {} },
    borderRadius: { md: 12 },
    shadows: {},
    typographies: { sm: {} },
  },
  dark: {
    spacings: { s8: 8, s16: 16 },
    sizes: { s48: 48, full: '100%' },
    colors: { bg: { surface: '#1C1C1E', accent: '#A855F7' }, border: {} },
    borderRadius: { md: 12 },
    shadows: {},
    typographies: { sm: {} },
  },
};

const renderWithProvider = (children: React.ReactElement) =>
  render(
    <LumenStyleSheetProvider themes={testThemes}>
      {children}
    </LumenStyleSheetProvider>,
  );

describe('createStyledPressable', () => {
  const StyledPressable = createStyledPressable(Pressable);

  it('should have correct display name', () => {
    expect(StyledPressable.displayName).toBe('StyledPressable(Pressable)');
  });

  it('should resolve token props to styles', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={{
          padding: 's16',
          width: 's48',
          backgroundColor: 'surface',
          borderRadius: 'md',
        }}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style).toMatchObject({
      padding: 16,
      width: 48,
      backgroundColor: '#F0F0F0',
      borderRadius: 12,
    });
  });

  it('should resolve full size token to 100%', () => {
    renderWithProvider(
      <StyledPressable testID='pressable' lx={{ width: 'full' }} />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.width).toBe('100%');
  });

  it('should merge static style prop with resolved tokens', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={{ padding: 's16' }}
        style={{ opacity: 0.5 }}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.padding).toBe(16);
    expect(pressable.props.style.opacity).toBe(0.5);
  });

  it('should merge style prop with resolved tokens', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={{ backgroundColor: 'surface' }}
        style={{ opacity: 0.8 }}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.backgroundColor).toBe('#F0F0F0');
    expect(pressable.props.style.opacity).toBe(0.8);
  });

  it('should support function-based style prop', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={{ backgroundColor: 'surface' }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
        })}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.backgroundColor).toBe('#F0F0F0');
    expect(pressable.props.style.opacity).toBe(1);
  });

  it('should support function-based lx prop', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={({ pressed }) => ({
          backgroundColor: pressed ? 'accent' : 'surface',
        })}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.backgroundColor).toBe('#F0F0F0');
  });

  it('should support both function-based lx and style props', () => {
    renderWithProvider(
      <StyledPressable
        testID='pressable'
        lx={({ pressed }) => ({
          backgroundColor: pressed ? 'accent' : 'surface',
        })}
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
        })}
      />,
    );

    const pressable = screen.getByTestId('pressable');
    expect(pressable.props.style.backgroundColor).toBe('#F0F0F0');
    expect(pressable.props.style.opacity).toBe(1);
  });

  it('should forward ref', () => {
    const ref = createRef<View>();
    renderWithProvider(<StyledPressable ref={ref} testID='pressable' />);
    expect(ref.current).toBeTruthy();
  });

  it('should handle onPress callback', () => {
    const onPress = jest.fn();
    renderWithProvider(
      <StyledPressable testID='pressable' onPress={onPress} />,
    );

    fireEvent.press(screen.getByTestId('pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  describe('performance (memo)', () => {
    it('should not re-render when props are unchanged', () => {
      const renderCount = jest.fn();
      const TrackedPressable = (props: PressableProps) => {
        renderCount();
        return <Pressable {...props} />;
      };
      const StyledTracked = createStyledPressable(TrackedPressable as any);

      const { rerender } = renderWithProvider(
        <StyledTracked testID='pressable' lx={{ padding: 's16' }} />,
      );

      expect(renderCount).toHaveBeenCalledTimes(1);

      rerender(
        <LumenStyleSheetProvider themes={testThemes}>
          <StyledTracked testID='pressable' lx={{ padding: 's16' }} />
        </LumenStyleSheetProvider>,
      );

      expect(renderCount).toHaveBeenCalledTimes(1);
    });

    it('should re-render when token props change', () => {
      const renderCount = jest.fn();
      const TrackedPressable = (props: PressableProps) => {
        renderCount();
        return <Pressable {...props} />;
      };
      const StyledTracked = createStyledPressable(TrackedPressable as any);

      const { rerender } = renderWithProvider(
        <StyledTracked testID='pressable' lx={{ padding: 's16' }} />,
      );

      expect(renderCount).toHaveBeenCalledTimes(1);

      rerender(
        <LumenStyleSheetProvider themes={testThemes}>
          <StyledTracked testID='pressable' lx={{ width: 's48' }} />
        </LumenStyleSheetProvider>,
      );

      expect(renderCount).toHaveBeenCalledTimes(2);
    });
  });
});
