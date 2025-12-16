import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { LumenStyleSheetProvider } from '../Provider/LumenStyleSheetProvider';
import { createStyledPressable } from './createStyledPressable';

const testThemes: any = {
  light: {
    spacings: { s16: 16 },
    sizes: { s48: 48, full: '100%' },
    colors: { bg: { surface: '#F0F0F0', accent: '#6B21A8' }, border: {} },
    borderRadius: { md: 12 },
    shadows: {},
    typographies: { sm: {} },
  },
  dark: {
    spacings: { s16: 16 },
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

// Helper to extract resolved style from Pressable
// The style prop is a function that returns [resolvedTokenStyles, userStyles]
const getResolvedStyle = (
  pressable: ReturnType<typeof screen.getByTestId>,
  state: { pressed: boolean } = { pressed: false },
) => {
  const styleProp = pressable.props.style;
  if (typeof styleProp === 'function') {
    return styleProp(state);
  }
  return styleProp;
};

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
    const resolvedStyle = getResolvedStyle(pressable);

    expect(resolvedStyle[0]).toMatchObject({
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
    const resolvedStyle = getResolvedStyle(pressable);

    expect(resolvedStyle[0].width).toBe('100%');
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
    const resolvedStyle = getResolvedStyle(pressable);

    expect(resolvedStyle[0].padding).toBe(16);
    expect(resolvedStyle[1]).toMatchObject({ opacity: 0.5 });
  });

  it('should support function-based style prop', () => {
    // Verify that function-based style props work without crashing
    // and that token styles are still resolved
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
    const resolvedStyle = getResolvedStyle(pressable);

    // Token styles should be resolved
    expect(resolvedStyle[0].backgroundColor).toBe('#F0F0F0');
    // User style function should be evaluated (default state is unpressed)
    expect(resolvedStyle[1]).toMatchObject({ opacity: 1 });
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

      // Re-render with same props
      rerender(
        <LumenStyleSheetProvider themes={testThemes}>
          <StyledTracked testID='pressable' lx={{ padding: 's16' }} />
        </LumenStyleSheetProvider>,
      );

      // memo should prevent re-render
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

      // Re-render with different props
      rerender(
        <LumenStyleSheetProvider themes={testThemes}>
          <StyledTracked testID='pressable' lx={{ width: 's48' }} />
        </LumenStyleSheetProvider>,
      );

      // Should re-render due to prop change
      expect(renderCount).toHaveBeenCalledTimes(2);
    });
  });
});
